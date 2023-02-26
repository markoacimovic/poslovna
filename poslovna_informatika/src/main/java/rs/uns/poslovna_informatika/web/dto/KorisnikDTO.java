package rs.uns.poslovna_informatika.web.dto;

import lombok.Data;

@Data
public class KorisnikDTO {

    private Long id;

    private String ime;

    private String prezime;

    private String jmbg;

    private String korisnickoIme;

    private String lozinka;

    private FirmaDTO firmaDTO;
}
