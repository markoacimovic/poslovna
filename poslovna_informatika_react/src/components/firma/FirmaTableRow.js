import FirmaService from "../../api/service/FirmaService";
import {useNavigate} from "react-router";

const FirmaTableRow = ({firma, onDelete}) => {

    const navigate = useNavigate()

    const deleteFirma = async () => {
        try {
            FirmaService.deleteFirma(firma.id).then(
                onDelete(firma.id)
            )
        } catch (e) {
            console.error(e)
        }
    }

    const editFirma = () => navigate(`/firmas/${firma.id}`)

    const details = () => navigate(`/firmas/details/${firma.id}`)
    return (<tr itemScope="row">
        <td>{firma.id}</td>
        <td>{firma.naziv}</td>
        <td>{firma.adresa}</td>
        <td>{firma.pib}</td>
        <td>
            <button className="btn btn-primary" onClick={details}>Detalji</button>
        </td>
        <td>
            <button className="btn btn-info" onClick={editFirma}>Izmeni</button>
        </td>
        <td>
            <button className="btn btn-danger" onClick={deleteFirma}>Obrisi</button>
        </td>
    </tr>)
}

export default FirmaTableRow
