import axios from "axios";
import TokenUtil from "../jwt/TokenUtil";
import tokenUtil from "../jwt/TokenUtil";
import AuthService from "../service/AuthService";


const AxiosClient = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    }
)

AxiosClient.interceptors.request.use(
    function success(config) {
        config.headers["Access-Control-Allow-Origin"] = "*"
        config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"

        const token = TokenUtil.getToken()
        if (token) {
            if (tokenUtil.isTokenExpired()) {
                return false
            }
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    }, error => {
        Promise.reject(error)
    })

AxiosClient.interceptors.response.use(
    function success(response) {
        return response
    },
    async function failure(error) {
        const originalReq = error.config;

        const token = TokenUtil.getToken()
        if (token) {
            if (error.response && error.response.status === 403) {
                AuthService.logout()
                window.location.assign("/prijava")
            }
        }
        console.error(error)
    }
)

export default AxiosClient
