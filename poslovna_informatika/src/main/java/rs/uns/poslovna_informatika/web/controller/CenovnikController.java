package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.ICenovnikService;
import rs.uns.poslovna_informatika.web.dto.CenovnikDTO;

import java.util.List;

@RestController
@RequestMapping(value = "/cenovniks")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class CenovnikController {

    private final ICenovnikService iCenovnikService;

    @GetMapping(value = "/{cenovnikId}")
    public ResponseEntity<CenovnikDTO> getOne(@PathVariable Long cenovnikId) {
        return new ResponseEntity<>(iCenovnikService.findOne(cenovnikId), HttpStatus.OK);
    }

    @GetMapping(value = "/firma/{firmaId}")
    public ResponseEntity<List<CenovnikDTO>> getCenovniksForFirma(@PathVariable Long firmaId) {
        return new ResponseEntity<>(iCenovnikService.findCenovniksForFirma(firmaId), HttpStatus.OK);
    }

    @GetMapping(value = "/firma/{firmaId}/cenovnik")
    public ResponseEntity<CenovnikDTO> getCenovnikForFirma(@PathVariable Long firmaId) {
        return new ResponseEntity<>(iCenovnikService.findCenovnikForFirma(firmaId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CenovnikDTO> save(@RequestBody CenovnikDTO cenovnikDTO) {
        return new ResponseEntity<>(iCenovnikService.save(cenovnikDTO), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{cenovnikId}")
    public ResponseEntity<CenovnikDTO> update(@RequestBody CenovnikDTO cenovnikDTO, @PathVariable Long cenovnikId) {
        CenovnikDTO cenovnik = iCenovnikService.findOne(cenovnikId);

        if(cenovnik == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        cenovnik.setFirmaDTO(cenovnikDTO.getFirmaDTO());
        cenovnik.setVaziOd(cenovnikDTO.getVaziOd());
        cenovnik.setVaziDo(cenovnikDTO.getVaziDo());

        return new ResponseEntity<>(iCenovnikService.save(cenovnik), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{cenovnikId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long cenovnikId) {
        iCenovnikService.delete(cenovnikId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
