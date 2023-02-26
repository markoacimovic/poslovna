import jwtDecode from "jwt-decode";

const getToken = () => {
    try {
        return localStorage.getItem("token")
    }catch (e) {
        console.error(e)
        return ""
    }
}

const setToken = (token) => {
    localStorage.setItem("token", token)
}

const removeToken = () => {
    localStorage.removeItem("token")
}

const decodeToken = (token) => {
    try {
        return jwtDecode(token)
    } catch (e) {
        console.error(e)
        return ""
    }
}

const getRole = (token) => {
    const jwt = decodeToken(token)
    return jwt.authority
}

const isTokenExpired = () => {
    const token = getToken()
    const decodedToken = token ? decodeToken(token) : null

    return decodedToken.exp < Date.now
}

export const TokenUtil = {
    setToken,
    getToken,
    removeToken,
    isTokenExpired,
    decodeToken,
    getRole
}

export default TokenUtil

