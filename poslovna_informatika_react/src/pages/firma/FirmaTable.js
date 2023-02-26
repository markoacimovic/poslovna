import {useEffect, useState} from "react";
import FirmaService from "../../api/service/FirmaService";
import FirmaTableRow from "../../components/firma/FirmaTableRow";

const FirmaTable = () => {

    const [firmas, setFirmas] = useState([])

    const onDelete = (firmaId) => {
        let index = firmas.findIndex(firma => firma.id === firmaId)
        setFirmas(prevState => {
            prevState.splice(index, 1)
            return [...prevState]
        })
    }

    const fetchFirmas = async () => {
        try {
            const response = await FirmaService.getFirmas()
            setFirmas(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchFirmas()
    }, [])

    return (<table className="table">
        <thead className="thead-light">
        <tr>
            <th itemScope="col">ID</th>
            <th itemScope="col">Naziv</th>
            <th itemScope="col">Adresa</th>
            <th itemScope="col">PIB</th>
            <th itemScope="col"></th>
            <th itemScope="col"></th>
            <th itemScope="col"></th>
        </tr>
        </thead>
        <tbody>
        {firmas.map((firma, index) => <FirmaTableRow firma={firma} onDelete={onDelete} key={index}/>)}
        </tbody>
    </table>)
}

export default FirmaTable
