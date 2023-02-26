package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Faktura;

import java.time.LocalDate;
import java.util.List;

public interface FakturaRepository extends JpaRepository<Faktura, Long> {

    List<Faktura> findFakturasByIzdavalacRacuna_Id(Long izdavalacId);

    List<Faktura> findFakturasByPrimalacRacuna_Id(Long primalacId);

    List<Faktura> findFakturasByDatumIzdavanjaBetween(LocalDate startDate, LocalDate endDate);
}
