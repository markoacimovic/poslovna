package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.web.dto.FakturaDTO;

import java.time.LocalDate;
import java.util.List;

public interface IFakturaService {

    FakturaDTO findOne(Long fakturaId);

    List<FakturaDTO> findAll();

    List<FakturaDTO> findFakturasByIzdavalac(Long izdavalacId);

    List<FakturaDTO> findFakturasByPrimalac(Long primalacId);

    List<FakturaDTO> findFakturasBetweenDates(LocalDate startDate, LocalDate endDate);

    FakturaDTO save(FakturaDTO fakturaDTO);

    void delete(Long fakturaId);
}
