package rs.uns.poslovna_informatika.web.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class CenovnikDTO {

    private Long id;

    private LocalDate vaziOd;

    private LocalDate vaziDo;

    private FirmaDTO firmaDTO;

    private List<ProizvodDTO> proizvodDTOS = new ArrayList<>();
}
