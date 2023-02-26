import {Link} from "react-router-dom";
import TokenUtil from "../../api/jwt/TokenUtil";

const Header = () => {

    const token = TokenUtil.getToken()
    const role = TokenUtil.getRole(token)
    const firmaId = TokenUtil.decodeToken(token).firmaId
    const firmaUrl = `/firmas/details/${firmaId}`

    return (<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">Poslovna informatika</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {token ? <ul className="navbar-nav ml-auto">
                        {role === "ADMINISTRATOR" ? <>
                            <li>
                                <Link className="nav-link" to="/firmas">Firme</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/firmas/new">Kreiraj firmu</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/korisniks/new">Kreiraj korisnika</Link>
                            </li>
                        </> : ""}
                        {role === "KORISNIK" ? <li>
                            <Link className="nav-link" to={firmaUrl}>Firma</Link>
                        </li> : ""}
                        <li>
                            <Link className="nav-link" to="/cenovnik/new">Kreiraj cenovnik</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/faktura/new">Kreiraj fakturu</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/fakturas">Fakture</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/login" onClick={() => TokenUtil.removeToken()}>Odjava</Link>
                        </li>
                    </ul> :  <ul className="navbar-nav ml-auto">
                        <Link className="nav-link" to="/login">Prijava</Link>
                    </ul>}
                </div>
            </div>
        </nav>
    </header>)
}

export default Header
