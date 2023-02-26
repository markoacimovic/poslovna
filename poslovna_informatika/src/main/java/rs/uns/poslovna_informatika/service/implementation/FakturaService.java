package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Faktura;
import rs.uns.poslovna_informatika.repository.FakturaRepository;
import rs.uns.poslovna_informatika.service.IFakturaService;
import rs.uns.poslovna_informatika.util.mapper.FakturaMapper;
import rs.uns.poslovna_informatika.web.dto.FakturaDTO;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FakturaService implements IFakturaService {

    private final FakturaRepository fakturaRepository;
    private final FakturaMapper fakturaMapper;

    @Override
    public FakturaDTO findOne(Long fakturaId) {
        Faktura faktura = fakturaRepository.findById(fakturaId).orElse(null);
        return fakturaMapper.toDto(faktura);
    }

    @Override
    public List<FakturaDTO> findAll() {
        List<Faktura> fakturas = fakturaRepository.findAll();
        return fakturas.stream().map(fakturaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<FakturaDTO> findFakturasByIzdavalac(Long izdavalacId) {
        List<Faktura> fakturas = fakturaRepository.findFakturasByIzdavalacRacuna_Id(izdavalacId);
        return fakturas.stream().map(fakturaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<FakturaDTO> findFakturasByPrimalac(Long primalacId) {
        List<Faktura> fakturas = fakturaRepository.findFakturasByPrimalacRacuna_Id(primalacId);
        return fakturas.stream().map(fakturaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public List<FakturaDTO> findFakturasBetweenDates(LocalDate startDate, LocalDate endDate) {
        List<Faktura> fakturas = fakturaRepository.findFakturasByDatumIzdavanjaBetween(startDate, endDate);
        return fakturas.stream().map(fakturaMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public FakturaDTO save(FakturaDTO fakturaDTO) {
        Faktura faktura = fakturaRepository.save(fakturaMapper.toEntity(fakturaDTO));
        return fakturaMapper.toDto(faktura);
    }

    @Override
    public void delete(Long fakturaId) {
        fakturaRepository.deleteById(fakturaId);
    }
}
