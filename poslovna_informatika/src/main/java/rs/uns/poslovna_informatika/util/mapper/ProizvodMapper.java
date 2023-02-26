package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import rs.uns.poslovna_informatika.model.Proizvod;
import rs.uns.poslovna_informatika.web.dto.ProizvodDTO;

@Mapper(componentModel = "spring")
public interface ProizvodMapper {

    ProizvodDTO toDto(Proizvod proizvod);

    Proizvod toEntity(ProizvodDTO proizvodDTO);
}
