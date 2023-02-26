import {useEffect, useState} from "react";
import NewProizvod from "../../components/proizvod/NewProizvod";
import Proizvod from "../../components/proizvod/ProizvodRow";
import Select from "react-dropdown-select"
import FirmaService from "../../api/service/FirmaService";
import CenovnikService from "../../api/service/CenovnikService";
import TokenUtil from "../../api/jwt/TokenUtil";
import {useNavigate} from "react-router";

const NewCenovnik = () => {

    const [warning, setWarning] = useState("")
    const [proizvods, setProizvods] = useState([])
    const [selectedValue, setSelectedValue] = useState()
    const [cenovnik, setCenovnik] = useState({
        vaziOd: "",
        vaziDo: "",
        firmaDTO: {},
        proizvodDTOS: []
    })

    const [options, setOptions] = useState([])
    const navigate = useNavigate()

    const token = TokenUtil.getToken()
    const role = TokenUtil.getRole(token)
    const firmaId = TokenUtil.decodeToken(token).firmaId

    const fetchFirmas = async () => {
        try {
            const response = await FirmaService.getFirmas()
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

    const addNewProizvod = (proizvod) => {
        setProizvods(prevState => {
            return [...prevState, proizvod]
        })
    }

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setCenovnik({...cenovnik, [name]: val})
    }

    const handleChange = selectedOption => {
        setSelectedValue(selectedOption)
    }

    const submit = (e) => {
        e.preventDefault()

        if(!cenovnik.vaziOd || !cenovnik.vaziDo || !cenovnik.firmaDTO || !cenovnik.proizvodDTOS) {
            setWarning("Sva polja moraju biti popunjena")
            return;
        }

        if(role === "ADMINISTRATOR"){
            FirmaService.getFirma(selectedValue[0].value).then( response =>
                setCenovnik({...cenovnik, firmaDTO: response.data, proizvodDTOS: proizvods})
            )
        } else {
            FirmaService.getFirma(firmaId).then( response =>
                setCenovnik({...cenovnik, firmaDTO: response.data, proizvodDTOS: proizvods})
            )
        }
        CenovnikService.saveCenovnik(cenovnik)

    }

    return(
        <div className="container-fluid" style={{marginTop: 50}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Kreiraj cenovnik</h3>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Vazi od </label>
                            <input type="date" value={cenovnik.vaziOd} onChange={handleFormInputChange("vaziOd")}
                                   placeholder="Vazi od" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Vazi do </label>
                            <input type="date" value={cenovnik.vaziDo} onChange={handleFormInputChange("vaziDo")}
                                   placeholder="Vazi do" className="form-control"/>
                        </div>
                        {role === "ADMINISTRATOR" ? <div className="form-group">
                            <label>Firma </label>
                            <Select valueField={selectedValue} options={options} onChange={handleChange}/>
                        </div> : ""}
                        <div className="form-group">
                            <h3 className="text-center">Dodaj proizvod </h3>
                            <NewProizvod addProizvod={addNewProizvod}/>
                            <table className="table" style={{marginTop: "20px"}}>
                                <tbody>
                                    {proizvods.map((proizvod, index) => <Proizvod proizvod={proizvod} key={index}/>)}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-dark">{warning}</p>
                        <input className="btn-lg btn-success" type="submit" value="Kreiraj"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewCenovnik
