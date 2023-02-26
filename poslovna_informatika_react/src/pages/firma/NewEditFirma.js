import FirmaService from "../../api/service/FirmaService";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

const NewEditFirma = () => {

    const [warning, setWarning] = useState("")
    const navigate = useNavigate()
    const {firmaId} = useParams()

    const [firma, setFirma] = useState({
        id: null,
        naziv: "",
        adresa: "",
        pib: ""
    })

    const saveFirma = async () => {
        try {
            await FirmaService.saveFirma(firma)
        } catch (e) {
            console.error(e)
        }
    }

    const fetchFirma = async () => {
        try {
            const response = await FirmaService.getFirma(firmaId)
            setFirma(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    const updateFirma = async () => {
        try {
           await FirmaService.updateFirma(firmaId, firma)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        if(firmaId)
            fetchFirma()
    }, [firmaId])

    const submit = (e) => {
        e.preventDefault()

        if(!firma.pib || !firma.adresa || !firma.naziv) {
            setWarning("Sva polja moraju biti popunjena")
            return;
        }

        firmaId ? updateFirma() : saveFirma()
        navigate("/")
    }

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setFirma({...firma, [name]: val})
    }

    return(
        <div className="container-fluid" style={{marginTop: 50}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Kreiraj firmu</h3>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Naziv </label>
                            <input type="text" value={firma.naziv} onChange={handleFormInputChange("naziv")}
                                   placeholder="Naziv" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Adresa </label>
                            <input type="text" value={firma.adresa} onChange={handleFormInputChange("adresa")}
                                   placeholder="Adresa" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>PIB </label>
                            <input type="text" value={firma.pib} onChange={handleFormInputChange("pib")}
                                   placeholder="PIB" className="form-control"/>
                        </div>
                        <p className="text-dark">{warning}</p>
                        <input className="btn-lg btn-success" type="submit" value={firmaId ? "Izmeni" : "Kreiraj"}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewEditFirma
