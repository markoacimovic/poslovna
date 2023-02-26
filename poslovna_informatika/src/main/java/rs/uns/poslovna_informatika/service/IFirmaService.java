package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.web.dto.FirmaDTO;

import java.util.List;

public interface IFirmaService {

    FirmaDTO findOne(Long firmaId);

    List<FirmaDTO> findAll();

    FirmaDTO save(FirmaDTO firmaDTO);

    void delete(Long firmaId);
}
