package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.model.Korisnik;
import rs.uns.poslovna_informatika.web.dto.KorisnikDTO;

import java.util.List;

public interface IKorisnikService {

    List<KorisnikDTO> findAll();

    Korisnik findKorisnikByKorisnickoIme(String korisnickoIme);

    KorisnikDTO save(KorisnikDTO korisnikDTO);
}
