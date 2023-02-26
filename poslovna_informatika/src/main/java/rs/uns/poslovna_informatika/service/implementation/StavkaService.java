package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Stavka;
import rs.uns.poslovna_informatika.repository.StavkaRepository;
import rs.uns.poslovna_informatika.service.IStavkaService;
import rs.uns.poslovna_informatika.util.mapper.StavkaMapper;
import rs.uns.poslovna_informatika.web.dto.StavkaDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StavkaService implements IStavkaService {

    private final StavkaRepository stavkaRepository;
    private final StavkaMapper stavkaMapper;

    @Override
    public StavkaDTO findOne(Long stavkaId) {
        Stavka stavka = stavkaRepository.findById(stavkaId).orElse(null);
        return stavkaMapper.toDto(stavka);
    }

    @Override
    public List<StavkaDTO> findAll() {
        List<Stavka> stavkas = stavkaRepository.findAll();
        return stavkas.stream().map(stavkaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<StavkaDTO> findStavkasForFaktura(Long fakturaId) {
        List<Stavka> stavkas = stavkaRepository.findStavkasByFaktura_Id(fakturaId);
        return stavkas.stream().map(stavkaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public StavkaDTO save(StavkaDTO stavkaDTO) {
        Stavka stavka = stavkaRepository.save(stavkaMapper.toEntity(stavkaDTO));
        return stavkaMapper.toDto(stavka);
    }

    @Override
    public void delete(Long stavkaId) {
        stavkaRepository.deleteById(stavkaId);
    }
}
