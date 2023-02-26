import AxiosClient from "../client/AxiosClient";

const getStavkasForFaktura = async (fakturaId) => {
    return await AxiosClient.get(`stavkas/faktura/${fakturaId}`)
}

export const StavkaService = {
    getStavkasForFaktura
}
export default StavkaService
