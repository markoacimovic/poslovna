package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Proizvod;
import rs.uns.poslovna_informatika.repository.ProizvodRepository;
import rs.uns.poslovna_informatika.service.IProizvodService;
import rs.uns.poslovna_informatika.util.mapper.ProizvodMapper;
import rs.uns.poslovna_informatika.web.dto.ProizvodDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProizvodService implements IProizvodService {

    private final ProizvodRepository proizvodRepository;
    private final ProizvodMapper proizvodMapper;

    @Override
    public ProizvodDTO findOne(Long proizvodId) {
        Proizvod proizvod = proizvodRepository.findById(proizvodId).orElse(null);
        return proizvodMapper.toDto(proizvod);
    }

    @Override
    public List<ProizvodDTO> findAll() {
        List<Proizvod> proizvods = proizvodRepository.findAll();
        return proizvods.stream().map(proizvodMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<ProizvodDTO> findProizvodsForCenovnik(Long firmaId) {
        List<Proizvod> proizvods = proizvodRepository.findProizvodsByCenovnik_Firma_Id(firmaId);
        return proizvods.stream().map(proizvodMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public ProizvodDTO save(ProizvodDTO proizvodDTO) {
        Proizvod proizvod = proizvodRepository.save(proizvodMapper.toEntity(proizvodDTO));
        return proizvodMapper.toDto(proizvod);
    }

    @Override
    public void delete(Long proizvodId) {
        proizvodRepository.deleteById(proizvodId);
    }
}
