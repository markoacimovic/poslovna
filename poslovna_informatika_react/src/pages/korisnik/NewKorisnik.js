import {useEffect, useState} from "react";
import Select from "react-dropdown-select";
import FirmaService from "../../api/service/FirmaService";
import KorisnikService from "../../api/service/KorisnikService";
import {useNavigate} from "react-router";

const NewKorisnik = () => {

    const [korisnik,setKorisnik] = useState({
        ime: "",
        prezime: "",
        jmbg: "",
        korisnickoIme: "",
        lozinka: "",
        firmaDTO: ""
    })
    const [options, setOptions] = useState([])
    const [selectedValue, setSelectedValue] = useState()
    const [warning, setWarning] = useState("")
    const navigate = useNavigate()

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

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setKorisnik({...korisnik, [name]: val})
    }

    const handleChange = selectedOption => {
        setSelectedValue(selectedOption)
    }

    const submit = (e) => {
        e.preventDefault()

        if(!korisnik.ime || !korisnik.korisnickoIme || !korisnik.prezime || !korisnik.jmbg || !korisnik.lozinka){
            setWarning("Sva polja su obavezna")
            return
        }
        if(korisnik.jmbg.length !== 13){
            setWarning("JMBG mora da sadrzi 13 brojeva")
            return;
        }

        FirmaService.getFirma(selectedValue[0].value).then( response =>
            setKorisnik({...korisnik, firmaDTO: response.data})
        )

        KorisnikService.saveUser(korisnik).then(() => {
            navigate("/firmas")
        })
    }

    return(
        <div className="container-fluid" style={{marginTop: 50}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Kreiraj korisnika</h3>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Ime </label>
                            <input type="text" value={korisnik.ime} onChange={handleFormInputChange("ime")}
                                   placeholder="Ime" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Prezime </label>
                            <input type="text" value={korisnik.prezime} onChange={handleFormInputChange("prezime")}
                                   placeholder="Prezime" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>JMBG </label>
                            <input type="text" value={korisnik.jmbg} onChange={handleFormInputChange("jmbg")}
                                   placeholder="JMBG" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Korisnicko ime </label>
                            <input type="text" value={korisnik.korisnickoIme} onChange={handleFormInputChange("korisnickoIme")}
                                   placeholder="Korisnicko ime" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Lozinka </label>
                            <input type="password" value={korisnik.lozinka} onChange={handleFormInputChange("lozinka")}
                                   placeholder="Lozinka" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Firma </label>
                            <Select valueField={selectedValue} options={options} onChange={handleChange}/>
                        </div>
                        <p className="text-dark">{warning}</p>
                        <input className="btn-lg btn-success" type="submit" value="Kreiraj"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewKorisnik
