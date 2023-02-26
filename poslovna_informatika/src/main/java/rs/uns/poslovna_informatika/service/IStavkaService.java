package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.web.dto.StavkaDTO;

import java.util.List;

public interface IStavkaService {

    StavkaDTO findOne(Long stavkaId);

    List<StavkaDTO> findAll();

    List<StavkaDTO> findStavkasForFaktura(Long fakturaId);

    StavkaDTO save(StavkaDTO stavkaDTO);

    void delete(Long stavkaId);
}
