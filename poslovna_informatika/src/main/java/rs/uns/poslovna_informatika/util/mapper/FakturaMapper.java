package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import rs.uns.poslovna_informatika.model.Faktura;
import rs.uns.poslovna_informatika.web.dto.FakturaDTO;

@Mapper(componentModel = "spring", uses = {FirmaMapper.class, StavkaMapper.class})
public interface FakturaMapper {

    FakturaDTO toDto(Faktura faktura);

    Faktura toEntity(FakturaDTO fakturaDTO);
}
