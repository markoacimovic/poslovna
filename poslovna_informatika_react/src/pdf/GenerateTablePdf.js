import jsPDF from "jspdf";
import "jspdf-autotable";
const generateTablePdf = (fakturas) => {
    const doc = new jsPDF();

    const tableColumn = ["Id", "Mesto", "Datum izdavanja", "Datum prometa", "PDV", "Redni broj racuna", "Iznos osnovice", "Ukupno zaduzenje", "Izdavalac", "Primalac"];
    const tableRows = [];

    fakturas.forEach(faktura => {
        const fakturaData = [
            faktura.id,
            faktura.mesto,
            faktura.datumIzdavanja,
            faktura.datumPrometa,
            faktura.pdv,
            faktura.redniBrojRacuna,
            faktura.iznosOsnovice,
            faktura.ukupnoZaduzenje,
            faktura.izdavalacRacuna.naziv,
            faktura.primalacRacuna.naziv
        ];
        tableRows.push(fakturaData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text("Fakture", 14, 15);
    doc.save(`report_${dateStr}.pdf`);
};

export default generateTablePdf;
