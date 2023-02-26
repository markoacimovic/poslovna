import {useEffect, useState} from "react";
import Select from "react-dropdown-select";
import NewProizvod from "../../components/proizvod/NewProizvod";
import Proizvod from "../../components/proizvod/ProizvodRow";
import FirmaService from "../../api/service/FirmaService";
import TokenUtil from "../../api/jwt/TokenUtil";
import NewStavka from "../../components/stavka/NewStavka";
import StavkaRow from "../../components/stavka/StavkaRow";

const NewFaktura = () => {
    const [faktura, setFaktura] = useState({
        mesto: "",
        datumIzdavanja: new Date(),
        datumPrometa: new Date(),
        pdv: 0,
        redniBrojRacuna: 0,
        iznosOsnovice: 0,
        ukupnoZaduzenje: 0,
        izdavalacRacuna: {},
        primalacRacuna: {},
        stavkas: []
    })
    const [firmas, setFirmas] = useState([])
    const [stavkas, setStavkas] = useState([])
    const [warning, setWarning] = useState("")

    const [izdavalac, setIzdavalac] = useState()
    const [primalac, setPrimalac] = useState()
    const [options, setOptions] = useState([])

    const token = TokenUtil.getToken()
    const role = TokenUtil.getRole(token)
    const firmaId = TokenUtil.decodeToken(token).firmaId

    const addNewStavka = (stavka) => {
        setStavkas(prevState => {
            return [...prevState, stavka]
        })
    }

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setFaktura({...faktura, [name]: val})
    }

    const handleChangeIzdavalac = selectedOption => {
        setIzdavalac(selectedOption)
    }

    const handleChangePrimalac = selectedOption => {
        setPrimalac(selectedOption)
    }

    const fetchFirmas = async () => {
        try {
            const response = await FirmaService.getFirmas()
            setFirmas(response.data)
            setOptions([])
            response.data.forEach( firma => {
                setOptions(prevState => [...prevState, {label: firma.naziv, value: firma.id}])
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchFirmas()
    },[])

    const submit = (e) => {
        e.preventDefault()

        if(role === "ADMINISTRATOR"){
            console.log(firmas.find((value) => value.id === izdavalac.value))
            console.log(firmas.find((value) => value.id === primalac.value))
        } else {
            console.log(firmas.find((value) => value.id === firmaId))
            console.log(firmas.find((value) => value.id === primalac.value))
        }

    }

    return (<div className="container-fluid" style={{marginTop: 50}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Kreiraj fakturu</h3>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Mesto </label>
                        <input type="date" value={faktura.mesto} onChange={handleFormInputChange("mesto")}
                               placeholder="Vazi od" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>PDV </label>
                        <input type="date" value={faktura.pdv} onChange={handleFormInputChange("pdv")}
                               placeholder="Vazi do" className="form-control"/>
                    </div>
                    {role === "ADMINISTRATOR" ? <div className="form-group">
                        <label>Izdavalac </label>
                        <Select valueField={izdavalac} options={options} onChange={handleChangeIzdavalac}/>
                    </div> : ""}
                    <div className="form-group">
                        <label>Primalac </label>
                        <Select valueField={primalac} options={options} onChange={handleChangePrimalac}/>
                    </div>
                    <div className="form-group">
                        <h3 className="text-center">Dodaj stavku </h3>
                        <NewStavka addStavka={addNewStavka} firmaId={firmaId}/>
                        <table className="table" style={{marginTop: "20px"}}>
                            <tbody>
                            {stavkas.map((stavka, index) => <StavkaRow stavka={stavka} key={index}/>)}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-dark">{warning}</p>
                    <input className="btn-lg btn-success" type="submit" value="Kreiraj"/>
                </form>
            </div>
        </div>
    </div>)
}

export default NewFaktura
