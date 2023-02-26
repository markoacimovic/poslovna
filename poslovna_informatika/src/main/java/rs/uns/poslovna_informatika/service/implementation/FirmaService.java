package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Firma;
import rs.uns.poslovna_informatika.repository.FirmaRepository;
import rs.uns.poslovna_informatika.service.IFirmaService;
import rs.uns.poslovna_informatika.util.mapper.FirmaMapper;
import rs.uns.poslovna_informatika.web.dto.FirmaDTO;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FirmaService implements IFirmaService {

    private final FirmaRepository firmaRepository;
    private final FirmaMapper firmaMapper;

    @Override
    public FirmaDTO findOne(Long firmaId) {
        Firma firma = firmaRepository.findById(firmaId).orElse(null);
        return firmaMapper.toDto(firma);
    }

    @Override
    public List<FirmaDTO> findAll() {
        List<Firma> firmas = firmaRepository.findAll();
        return firmas.stream().map(firmaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public FirmaDTO save(FirmaDTO firmaDTO) {
        Firma firma = firmaRepository.save(firmaMapper.toEntity(firmaDTO));
        return firmaMapper.toDto(firma);
    }

    @Override
    public void delete(Long firmaId) {
        firmaRepository.deleteById(firmaId);
    }
}
