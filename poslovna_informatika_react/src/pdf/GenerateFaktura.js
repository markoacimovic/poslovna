import jsPDF from "jspdf";
import "jspdf-autotable";
const generateFaktura = (faktura) => {
    const doc = new jsPDF();

    doc.text("Id " + faktura.id.toString(),10 , 20)
    doc.text("Mesto " + faktura.mesto,10 , 30)
    doc.text("Datum izdavanja " + faktura.datumIzdavanja,10 , 40)
    doc.text("Datum prometa " + faktura.datumPrometa,10 , 50)
    doc.text("PDV " + faktura.pdv.toString(),10 , 60)
    doc.text("Broj racuna " + faktura.redniBrojRacuna.toString(),10 , 70)
    doc.text("Iznos osnovice " + faktura.iznosOsnovice.toString(),10 , 80)
    doc.text("Ukupno zaduzenje " + faktura.ukupnoZaduzenje.toString(),10 , 90)
    doc.text("Izdavalac racuna " + faktura.izdavalacRacuna.naziv,10 , 100)
    doc.text("Primalac racuna " + faktura.primalacRacuna.naziv,10 , 110)
    doc.text("Stavke", 100, 120)
    faktura.stavkas.forEach((value, index) => {
        doc.text(value.proizvodDTO.naziv + " " + value.kolicina.toString(), 10, 130 + index * 10)
    })


    const date = Date().split(" ");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text("Faktura", 100, 10);
    doc.save(`report_${dateStr}.pdf`);
};

export default generateFaktura;
