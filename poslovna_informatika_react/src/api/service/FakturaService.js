import AxiosClient from "../client/AxiosClient";

const getFakturasForIzdavalac = async (izdavalacId) => {
    return await AxiosClient.get(`fakturas/izdavalac/${izdavalacId}`)
}

const getFakturasForPrimalac = async (primalacId) => {
    return await AxiosClient.get(`fakturas/primalac/${primalacId}`)
}

const getFakturasBetweenDates = async (startDate, endDate) => {
    return await AxiosClient.get(`fakturas/kif?startDate=${startDate}&endDate=${endDate}`)
}

const saveFaktura = async (faktura) => {
    return await AxiosClient.post("fakturas", faktura)
}

const deleteFaktura = async (fakturaId) => {
    return await AxiosClient.delete(`fakturas/${fakturaId}`)
}

export const FakturaService = {
    deleteFaktura, getFakturasBetweenDates, getFakturasForIzdavalac, getFakturasForPrimalac, saveFaktura
}

export default FakturaService
