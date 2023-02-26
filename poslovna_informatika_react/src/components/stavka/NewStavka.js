import {useEffect, useState} from "react";
import Select from "react-dropdown-select";
import ProizvodService from "../../api/service/ProizvodService";

const NewStavka = ({addStavka, firmaId}) => {
    const [stavka, setStavka] = useState({
        kolicina: 0,
        pdv: 0,
        proizvodDTO: {},
        firmaDTO: {}
    })
    const [options, setOptions] = useState([])
    const [proizvods, setProizvods] = useState([])

    const [warning, setWarning] = useState("")

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setStavka({...stavka, [name]: val})
    }

    const [proizvod, setProizvod] = useState()

    const handleChange = selectedOption => {
        setProizvod(selectedOption)
    }

    const fetchProizvods = async () => {
        try {
            const response = await ProizvodService.getProizvodsForCenovnik(firmaId)
            setOptions([])
            setProizvods(response.data)
            response.data.forEach( proizvod => {
                setOptions(prevState => [...prevState, {label: proizvod.naziv, value: proizvod.id}])
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchProizvods()
    },[])

    const submit = (e) => {
        e.preventDefault()
        if(!stavka.kolicina || !stavka.pdv) {
            setWarning("Sva polja su obavezna")
            return
        }
        console.log(proizvods.find(value => value.id === proizvod.value))
        setStavka(prevState => ({...prevState, proizvodDTO: proizvods.find(value => value.id === proizvod.value)}))

        addStavka(stavka)
        setStavka({
            kolicina: 0,
            pdv: 0,
            proizvodDTO: {},
            firmaDTO: {}
        })
    }

    return(<div>
        <div className="form-group">
            <label>Kolicina </label>
            <input type="number" value={stavka.kolicina} onChange={handleFormInputChange("kolicina")}
                   placeholder="Kolicina" className="form-control"/>
        </div>
        <div className="form-group">
            <label>PDV </label>
            <input type="number" value={stavka.pdv} onChange={handleFormInputChange("pdv")}
                   placeholder="PDV" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Proizvod </label>
            <Select valueField={proizvod} options={options} onChange={handleChange}/>
        </div>
        <p className="text-danger">{warning}</p>
        <button className="btn btn-primary" onClick={submit}>Dodaj stavku</button>
    </div>)
}

export default NewStavka
