import AxiosClient from "../client/AxiosClient";

const getFirmas = async () => {
    return await AxiosClient.get("firmas")
}

const getFirma = async (firmaId) => {
    return await AxiosClient.get(`firmas/${firmaId}`)
}

const saveFirma = async (firma) => {
    return await AxiosClient.post("firmas", firma)
}

const updateFirma = async (firmaId, firma) => {
    return await AxiosClient.put(`firmas/${firmaId}`, firma)
}

const deleteFirma = async (firmaId) => {
    return await AxiosClient.delete(`firmas/${firmaId}`)
}

export const FirmaService = {
    getFirmas, getFirma, saveFirma, updateFirma, deleteFirma
}

export default FirmaService
