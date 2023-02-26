package rs.uns.poslovna_informatika.web.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
public class FakturaDTO {

    private Long id;

    private String mesto;

    private LocalDate datumIzdavanja;

    private LocalDate datumPrometa;

    private Integer pdv;

    private Integer redniBrojRacuna;

    private Double iznosOsnovice;

    private Double ukupnoZaduzenje;

    private FirmaDTO izdavalacRacuna;

    private FirmaDTO primalacRacuna;

    private List<StavkaDTO> stavkas;
}
