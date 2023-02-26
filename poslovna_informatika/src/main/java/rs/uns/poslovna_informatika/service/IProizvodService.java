package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.web.dto.ProizvodDTO;

import java.util.List;

public interface IProizvodService {

    ProizvodDTO findOne(Long proizvodId);

    List<ProizvodDTO> findAll();

    List<ProizvodDTO> findProizvodsForCenovnik(Long firmaId);

    ProizvodDTO save(ProizvodDTO proizvodDTO);

    void delete(Long proizvodId);
}
