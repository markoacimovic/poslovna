import {useState} from "react";

const NewProizvod = ({addProizvod}) => {

    const [proizvod, setProizvod] = useState({
        naziv: "",
        opis: "",
        cena: 0
    })
    const [warning, setWarning] = useState("")

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setProizvod({...proizvod, [name]: val})
    }

    const submit = (e) => {
        e.preventDefault()

        if(!proizvod.naziv || !proizvod.opis || !proizvod.cena){
            setWarning("Sva polja su obavezna.")
            return
        }

        addProizvod(proizvod)
        setProizvod({
            naziv: "",
            opis: "",
            cena: 1
        })
    }

    return(<div>
        <div className="form-group">
            <label>Naziv </label>
            <input type="text" value={proizvod.naziv} onChange={handleFormInputChange("naziv")}
                   placeholder="Naziv" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Opis </label>
            <input type="text" value={proizvod.opis} onChange={handleFormInputChange("opis")}
                   placeholder="Opis" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Cena </label>
            <input type="number" min="1" value={proizvod.cena} onChange={handleFormInputChange("cena")}
                   placeholder="Cena" className="form-control"/>
        </div>
        <p className="text-danger">{warning}</p>
        <button className="btn btn-primary" onClick={submit}>Dodaj proizvod</button>
    </div>)

}

export default NewProizvod
