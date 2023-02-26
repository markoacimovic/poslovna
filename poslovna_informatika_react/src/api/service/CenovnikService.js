import AxiosClient from "../client/AxiosClient";

const getCenovnik = async (cenovnikId) => {
    return await AxiosClient.get(`cenovniks/${cenovnikId}`)
}

const getCenovnikForFirma = async (firmaId) => {
    return await AxiosClient.get(`cenovniks/firma/${firmaId}/cenovnik`)
}

const getCenovniksForFirma = async (firmaId) => {
    return await AxiosClient.get(`cenovniks/firma/${firmaId}`)
}

const saveCenovnik = async (cenovnik) => {
    return await AxiosClient.post("cenovniks", cenovnik)
}

const updateCenovnik = async (cenovnikId, cenovnik) => {
    return await AxiosClient.put(`cenovniks/${cenovnikId}`, cenovnik)
}

const deleteCenovnik = async (cenovnikId) => {
    return await AxiosClient.delete(`cenovniks/${cenovnikId}`)
}

export const CenovnikService = {
    getCenovnik, deleteCenovnik, saveCenovnik, getCenovnikForFirma, getCenovniksForFirma, updateCenovnik
}
export default CenovnikService
