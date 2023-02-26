import {useState} from "react";
import AuthService from "../../api/service/AuthService";
import {useNavigate} from "react-router";

const Login = () => {

    const [loginDTO, setLoginDTO] = useState({
        korisnickoIme: "",
        lozinka: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleFormInputChange = (name) => (e) => {
        const val = e.target.value
        setLoginDTO({...loginDTO, [name]: val})
    }
    const submit = (e) => {
        e.preventDefault()

        if (!loginDTO.korisnickoIme || !loginDTO.lozinka) {
            setError("Korisnicko ime i lozinka su obavezni ")
            return
        }

        AuthService.login(loginDTO).then((response) => {
                    navigate("/")
            }
        ).catch(() => {
            setError("Prijava nije uspela")
            return
        })
    }

    return(
        <div className="container-fluid" style={{marginTop: 50}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Login</h3>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Korisnicko ime </label>
                            <input type="text" value={loginDTO.korisnickoIme} onChange={handleFormInputChange("korisnickoIme")}
                                   placeholder="Korisnicko ime" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Lozinka </label>
                            <input type="password" value={loginDTO.lozinka} onChange={handleFormInputChange("lozinka")}
                                   placeholder="Lozinka" className="form-control"/>
                        </div>
                        <p className="text-danger">{error}</p>
                        <input className="btn-lg btn-success" type="submit" value={"Log in"}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
