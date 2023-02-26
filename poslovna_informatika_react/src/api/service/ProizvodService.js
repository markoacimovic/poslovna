import AxiosClient from "../client/AxiosClient";

const getOne = async (proizvodId) => {
    return await AxiosClient.get(`proizvods/${proizvodId}`)
}

const getProizvodsForCenovnik = async (cenovnikId) => {
    return await AxiosClient.get(`proizvods/cenovnik/${cenovnikId}`)
}

const updateProizvod = async (proizvodId, proizvod) => {
    return await AxiosClient.put(`proizvods/${proizvodId}`, proizvod)
}

const deleteProizvod = async (proizvodId) => {
    return await AxiosClient.delete(`proizvods/${proizvodId}`)
}

export const ProizvodService = {
    getOne,
    getProizvodsForCenovnik,
    updateProizvod,
    deleteProizvod
}

export default ProizvodService
