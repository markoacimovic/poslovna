package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import rs.uns.poslovna_informatika.model.Firma;
import rs.uns.poslovna_informatika.web.dto.FirmaDTO;

@Mapper(componentModel = "spring")
public interface FirmaMapper {

    FirmaDTO toDto(Firma firma);

    Firma toEntity(FirmaDTO firmaDTO);
}
