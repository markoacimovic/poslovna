package rs.uns.poslovna_informatika.service.implementation;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Cenovnik;
import rs.uns.poslovna_informatika.repository.CenovnikRepository;
import rs.uns.poslovna_informatika.repository.ProizvodRepository;
import rs.uns.poslovna_informatika.service.ICenovnikService;
import rs.uns.poslovna_informatika.util.mapper.CenovnikMapper;
import rs.uns.poslovna_informatika.web.dto.CenovnikDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CenovnikService implements ICenovnikService {

    private final CenovnikRepository cenovnikRepository;
    private final ProizvodRepository proizvodRepository;
    private final CenovnikMapper cenovnikMapper;

    @Override
    public CenovnikDTO findOne(Long cenovnikId) {
        Cenovnik cenovnik = cenovnikRepository.findById(cenovnikId).orElse(null);
        return cenovnikMapper.toDto(cenovnik);
    }

    @Override
    public CenovnikDTO findCenovnikForFirma(Long firmaId) {
        Cenovnik cenovnik = cenovnikRepository.findCenovnikByFirma_IdOrderByVaziOdDesc(firmaId);
        return cenovnikMapper.toDto(cenovnik);
    }

    @Override
    public List<CenovnikDTO> findCenovniksForFirma(Long firmaId) {
        List<Cenovnik> cenovniks = cenovnikRepository.findCenovniksByFirma_Id(firmaId);
        return cenovniks.stream().map(cenovnikMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<CenovnikDTO> findAll() {
        List<Cenovnik> cenovniks = cenovnikRepository.findAll();
        return cenovniks.stream().map(cenovnikMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public CenovnikDTO save(CenovnikDTO cenovnikDTO) {
        Cenovnik cenovnik = cenovnikRepository.save(cenovnikMapper.toEntity(cenovnikDTO));
        cenovnik.getProizvods().stream().forEach(proizvod -> {
            proizvod.setCenovnik(cenovnik);
        });
        Cenovnik cenovnik1 = cenovnikRepository.save(cenovnik);
        return cenovnikMapper.toDto(cenovnik1);
    }

    @Override
    public void delete(Long cenovnikId) {
        cenovnikRepository.deleteById(cenovnikId);
    }
}
