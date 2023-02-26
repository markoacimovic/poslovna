package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Stavka;

import java.util.List;

public interface StavkaRepository extends JpaRepository<Stavka, Long> {

    List<Stavka> findStavkasByFaktura_Id(Long fakturaId);
}
