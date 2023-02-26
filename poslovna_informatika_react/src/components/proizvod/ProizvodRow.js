const ProizvodRow = ({proizvod}) => {

    return(<tr itemScope="row">
        <td>{proizvod.naziv}</td>
        <td>{proizvod.opis}</td>
        <td>{proizvod.cena}</td>
    </tr>)
}

export default ProizvodRow
