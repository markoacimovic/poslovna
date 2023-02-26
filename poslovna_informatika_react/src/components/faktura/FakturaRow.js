import generateFaktura from "../../pdf/GenerateFaktura";

const FakturaRow = ({faktura}) => {

    return(<tr itemScope="row">
        <td>{faktura.id}</td>
        <td>{faktura.mesto}</td>
        <td>{faktura.datumIzdavanja}</td>
        <td>{faktura.datumPrometa}</td>
        <td>{faktura.pdv}</td>
        <td>{faktura.redniBrojRacuna}</td>
        <td>{faktura.iznosOsnovice}</td>
        <td>{faktura.ukupnoZaduzenje}</td>
        <td>{faktura.izdavalacRacuna.naziv}</td>
        <td>{faktura.primalacRacuna.naziv}</td>
        <td></td>
        <td>
            <button className="btn btn-info" onClick={()=>generateFaktura(faktura)}>Preuzmi</button>
        </td>
    </tr>)
}

export default FakturaRow
