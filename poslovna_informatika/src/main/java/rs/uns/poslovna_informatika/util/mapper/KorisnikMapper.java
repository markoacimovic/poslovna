package rs.uns.poslovna_informatika.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import rs.uns.poslovna_informatika.model.Korisnik;
import rs.uns.poslovna_informatika.web.dto.KorisnikDTO;

@Mapper(componentModel = "spring", uses = {FirmaMapper.class})
public interface KorisnikMapper {

    @Mapping(target = "firmaDTO", source = "firma")
    KorisnikDTO toDto(Korisnik korisnik);

    @Mapping(target = "firma", source = "firmaDTO")
    Korisnik toEntity(KorisnikDTO korisnikDTO);
}
