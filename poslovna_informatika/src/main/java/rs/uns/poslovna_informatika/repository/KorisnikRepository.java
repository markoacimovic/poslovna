package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Korisnik;

import java.util.Optional;

public interface KorisnikRepository extends JpaRepository<Korisnik, Long> {

    Optional<Korisnik> findByKorisnickoIme(String korisnickoIme);
}
