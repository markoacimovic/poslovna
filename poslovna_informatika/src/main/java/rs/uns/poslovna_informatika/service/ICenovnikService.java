package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.web.dto.CenovnikDTO;

import java.util.List;

public interface ICenovnikService {

    CenovnikDTO findOne(Long cenovnikId);

    CenovnikDTO findCenovnikForFirma(Long firmaId);

    List<CenovnikDTO> findCenovniksForFirma(Long firmaId);

    List<CenovnikDTO> findAll();

    CenovnikDTO save(CenovnikDTO cenovnikDTO);

    void delete(Long cenovnikId);
}
