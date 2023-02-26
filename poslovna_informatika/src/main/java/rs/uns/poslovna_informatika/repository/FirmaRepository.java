package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Firma;

public interface FirmaRepository extends JpaRepository<Firma, Long> {
}
