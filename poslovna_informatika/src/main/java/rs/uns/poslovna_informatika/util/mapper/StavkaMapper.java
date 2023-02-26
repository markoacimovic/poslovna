package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import rs.uns.poslovna_informatika.model.Stavka;
import rs.uns.poslovna_informatika.web.dto.StavkaDTO;

@Mapper(componentModel = "spring", uses = {ProizvodMapper.class, FirmaMapper.class})
public interface StavkaMapper {

    @Mapping(target = "proizvodDTO", source = "proizvod")
    @Mapping(target = "firmaDTO", source = "firma")
    StavkaDTO toDto(Stavka stavka);

    @Mapping(target = "proizvod", source = "proizvodDTO")
    @Mapping(target = "firma", source = "firmaDTO")
    Stavka toEntity(StavkaDTO stavkaDTO);
}
