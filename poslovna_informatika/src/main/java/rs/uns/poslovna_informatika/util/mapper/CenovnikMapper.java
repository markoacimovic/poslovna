package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import rs.uns.poslovna_informatika.model.Cenovnik;
import rs.uns.poslovna_informatika.web.dto.CenovnikDTO;

@Mapper(componentModel = "spring", uses = {FirmaMapper.class, ProizvodMapper.class})
public interface CenovnikMapper {

    @Mapping(target = "firmaDTO", source = "firma")
    @Mapping(target = "proizvodDTOS", source = "proizvods")
    CenovnikDTO toDto(Cenovnik cenovnik);

    @Mapping(target = "firma", source = "firmaDTO")
    @Mapping(target = "proizvods", source = "proizvodDTOS")
    Cenovnik toEntity(CenovnikDTO cenovnikDTO);
}
