import AxiosClient from "../client/AxiosClient";

const saveUser = async (korisnik) => {
    return await AxiosClient.post("/users", korisnik)
}
export const KorisnikService = {
    saveUser
}

export default KorisnikService
