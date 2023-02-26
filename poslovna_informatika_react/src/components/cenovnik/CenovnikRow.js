import {useState} from "react";
import CenovnikService from "../../api/service/CenovnikService";

const CenovnikRow = ({cenovnik}) => {

    const [pdv, setPdv] = useState("")
    const [updatedCenovnik, setUpdatedCenovnik] = useState(cenovnik)
    const [proizvods, setProizvods] = useState(cenovnik.proizvodDTOS)
    const newCenovnik = async () => {
        const newProizvods = proizvods.map(value => ({...value, cena: value.cena+(value.cena*pdv/100), id: null}))
        setUpdatedCenovnik({...cenovnik, id: null, proizvodDTOS: newProizvods, vaziOd: new Date().toISOString()})
        CenovnikService.saveCenovnik(updatedCenovnik)
    }

    return(<tr itemScope="row">
        <td>{cenovnik.vaziOd}</td>
        <td>{cenovnik.vaziDo}</td>
        <td>{cenovnik.proizvodDTOS.map( (value, index) => <p key={index}>{value.naziv} ({value.cena} RSD)</p>)}</td>
        <td>
            <input type="number" style={{width: 150}} className="form-control" value={pdv} onChange={event => setPdv(event.target.value)}/>
            <button className="btn btn-primary" onClick={newCenovnik}>Kreiraj</button>
        </td>
    </tr>)
}

export default CenovnikRow
