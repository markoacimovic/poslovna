import {Route, Routes} from "react-router-dom"
import FirmaTable from "./pages/firma/FirmaTable";
import NewEditFirma from "./pages/firma/NewEditFirma";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NewCenovnik from "./pages/cenovnik/NewCenovnik";
import Login from "./pages/korisnik/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import FrontPage from "./pages/front_page/FrontPage";
import NewKorisnik from "./pages/korisnik/NewKorisnik";
import FirmaDetails from "./pages/firma/FirmaDetails";
import NewFaktura from "./pages/faktura/NewFaktura";
import FakturasTable from "./pages/faktura/FakturasTable";

function App() {
    return (<div>
        <Header/>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/firmas/new" element={
                <PrivateRoute roles={["ADMINISTRTOR"]}>
                    <NewEditFirma/>
                </PrivateRoute>
            }/>
            <Route path="/firmas/:firmaId" element={
                <PrivateRoute roles={["ADMINISTRATOR"]}>
                    <NewEditFirma/>
                </PrivateRoute>
            }/>
            <Route path="/cenovnik/new" element={
                <PrivateRoute roles={["ADMINISTRATOR, KORISNIK"]}>
                    <NewCenovnik/>
                </PrivateRoute>
            }/>
            <Route path="/firmas" element={
                <PrivateRoute roles={["ADMINISTRATOR, KORISNIK"]}>
                    <FirmaTable/>
                </PrivateRoute>
            }/>
            }/>
            <Route path="/korisniks/new" element={
                <PrivateRoute roles={["ADMINISTRATOR"]}>
                    <NewKorisnik/>
                </PrivateRoute>
            }/>
            <Route path="/firmas/details/:firmaId" element={
                <PrivateRoute roles={["ADMINISTRATOR, KORISNIK"]}>
                    <FirmaDetails/>
                </PrivateRoute>
            }/>
            <Route path="/faktura/new" element={
                <PrivateRoute roles={["ADMINISTRATOR, KORISNIK"]}>
                    <NewFaktura/>
                </PrivateRoute>
            }/>
            <Route path="/fakturas" element={
                <PrivateRoute roles={["ADMINISTRATOR, KORISNIK"]}>
                    <FakturasTable/>
                </PrivateRoute>
            }/>
        </Routes>
        <Footer/>
    </div>);
}

export default App;
