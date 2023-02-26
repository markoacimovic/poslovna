package rs.uns.poslovna_informatika.web.dto;

import lombok.*;

@Data
public class ProizvodDTO {

    private Long id;

    private String naziv;

    private String opis;

    private Double cena;

    private CenovnikDTO cenovnikDTO;
}
