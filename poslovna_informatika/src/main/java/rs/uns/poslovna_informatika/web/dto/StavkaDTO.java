package rs.uns.poslovna_informatika.web.dto;

import lombok.*;

@Data
public class StavkaDTO {

    private Long id;

    private Integer kolicina;

    private Integer pdv;

    private ProizvodDTO proizvodDTO;

    private FirmaDTO firmaDTO;

    private FakturaDTO fakturaDTO;
}
