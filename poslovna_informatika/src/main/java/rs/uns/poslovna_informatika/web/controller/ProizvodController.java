package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.IProizvodService;
import rs.uns.poslovna_informatika.web.dto.ProizvodDTO;

import java.util.List;

@RestController
@RequestMapping(value = "/proizvods")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class ProizvodController {

    private final IProizvodService iProizvodService;

    @GetMapping(value = "/cenovnik/{firmaId}")
    public ResponseEntity<List<ProizvodDTO>> getProizvodsForCenovnik(@PathVariable Long firmaId) {
        return new ResponseEntity<>(iProizvodService.findProizvodsForCenovnik(firmaId), HttpStatus.OK);
    }

    @GetMapping(value = "/{proizvodId}")
    public ResponseEntity<ProizvodDTO> getOne(@PathVariable Long proizvodId) {
        return new ResponseEntity<>(iProizvodService.findOne(proizvodId), HttpStatus.OK);
    }

    @PutMapping(value = "/{proizvodId}")
    public ResponseEntity<ProizvodDTO> update(@PathVariable Long proizvodId, @RequestBody ProizvodDTO proizvodDTO) {
        ProizvodDTO proizvod = iProizvodService.findOne(proizvodId);

        if(proizvod == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        proizvod.setNaziv(proizvodDTO.getNaziv());
        proizvod.setOpis(proizvodDTO.getOpis());
        proizvod.setCenovnikDTO(proizvodDTO.getCenovnikDTO());

        return new ResponseEntity<>(iProizvodService.save(proizvod), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{proizvodId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long proizvodId) {
        iProizvodService.delete(proizvodId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
