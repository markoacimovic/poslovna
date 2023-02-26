import AxiosClient from "../client/AxiosClient";
import TokenUtil from "../jwt/TokenUtil";

const login = async (loginDTO) => {
    TokenUtil.removeToken()
    try {
        const response = await AxiosClient.post("/auth/login", loginDTO)

        const decodedToken = response.data.jwt ? TokenUtil.decodeToken(response.data.jwt) : ""
        if (decodedToken) {
           TokenUtil.setToken(response.data.jwt)
        }
    } catch (e) {
        console.error(e)
    }
}

const logout = () => {
    TokenUtil.removeToken()
    window.location.assign("/login")
}
export const AuthService = {
    login,
    logout
}

export default AuthService
