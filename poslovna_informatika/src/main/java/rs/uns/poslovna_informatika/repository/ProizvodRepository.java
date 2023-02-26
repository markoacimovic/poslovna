package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Proizvod;

import java.util.List;

public interface ProizvodRepository extends JpaRepository<Proizvod, Long> {

    List<Proizvod> findProizvodsByCenovnik_Firma_Id(Long firmaId);
}
