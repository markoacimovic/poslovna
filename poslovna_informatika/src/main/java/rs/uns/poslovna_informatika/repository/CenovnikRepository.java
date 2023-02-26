package rs.uns.poslovna_informatika.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.uns.poslovna_informatika.model.Cenovnik;

import java.util.List;

public interface CenovnikRepository extends JpaRepository<Cenovnik, Long> {

    Cenovnik findCenovnikByFirma_IdOrderByVaziOdDesc(Long firmaId);
    List<Cenovnik> findCenovniksByFirma_Id(Long firmaId);
}
