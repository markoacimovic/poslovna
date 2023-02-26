const StavkaRow = ({stavka}) => {
    return(<tr itemScope="row">
        <td>{stavka.proizvodDTO.naziv}</td>
        <td>{stavka.kolicina}</td>
        <td>{stavka.pdv}</td>
        <td>{stavka.proizvodDTO.cena}</td>
    </tr>)
}

export default StavkaRow
