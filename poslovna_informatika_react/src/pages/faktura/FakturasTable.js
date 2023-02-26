import {useState} from "react";
import FakturaService from "../../api/service/FakturaService";
import FakturaRow from "../../components/faktura/FakturaRow";
import generateTablePdf from "../../pdf/GenerateTablePdf";

const FakturasTable = () => {

    const [fakturas, setFakturas] = useState([])
    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    const fetchFakturas = async () => {
        try {
            const response = await FakturaService.getFakturasBetweenDates(from, to)
            setFakturas(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    const submit = (e) => {
        e.preventDefault()

        fetchFakturas()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <label>Od:</label>
                    <input type="date" className="form-control" onChange={event => setFrom(event.target.value)}/>
                </div>
                <div className="col-md-5">
                    <label>Do: </label>
                    <input type="date" className="form-control" onChange={event => setTo(event.target.value)}/>
                </div>
                <button className="btn btn-primary" onClick={submit}>Pretrazi</button>
                <button className="btn btn-info" onClick={() => generateTablePdf(fakturas)}>Preuzmi</button>
            </div>
            {fakturas.length > 0 ? <table className="table">
                <thead className="thead-light">
                <tr>
                    <th itemScope="col">ID</th>
                    <th itemScope="col">Mesto</th>
                    <th itemScope="col">Datum izdavanja</th>
                    <th itemScope="col">Datum prometa</th>
                    <th itemScope="col">PDV</th>
                    <th itemScope="col">Redni broj racuna</th>
                    <th itemScope="col">Iznos osnovice</th>
                    <th itemScope="col">Ukupno zaduzenje</th>
                    <th itemScope="col">Izdavalac</th>
                    <th itemScope="col">Primalac</th>
                    <th itemScope="col">Stavke</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {fakturas.map((value, index) => <FakturaRow faktura={value} key={index}/>)}
                </tbody>
            </table> : "Trenutno nema faktura"}
        </div>
    )
}

export default FakturasTable
