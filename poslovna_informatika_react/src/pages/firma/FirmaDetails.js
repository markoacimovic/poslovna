import {useParams} from "react-router";
import {useEffect, useState} from "react";
import FirmaService from "../../api/service/FirmaService";
import CenovnikService from "../../api/service/CenovnikService";
import CenovnikRow from "../../components/cenovnik/CenovnikRow";

const FirmaDetails = () => {

    const [firma, setFirma] = useState({})
    const [cenovniks, setCenovniks] = useState([])
    const {firmaId} = useParams()

    const fetchFirma = async () => {
        try {
            const response = await FirmaService.getFirma(firmaId)
            setFirma(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    const fetchCenovniks = async () => {
        try {
            const response = await CenovnikService.getCenovniksForFirma(firmaId)
            setCenovniks(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchFirma()
        fetchCenovniks()
    }, [])

    return(<div className="container-fluid" style={{marginTop: 50}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">{firma.naziv}</h3>
                <p>PIB: {firma.pib}</p>
                <p>Adresa: {firma.adresa}</p>
            </div>
            <div className="col-md-12">
                <h4 className="text-center">Cenovnici</h4>
                <table className="table" style={{marginTop: "20px"}}>
                    <tbody>
                    {cenovniks.map((cenovnik, index) => <CenovnikRow cenovnik={cenovnik} key={index}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    </div>)
}

export default FirmaDetails
