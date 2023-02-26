package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.IFirmaService;
import rs.uns.poslovna_informatika.web.dto.FirmaDTO;

import java.util.List;

@RestController
@RequestMapping(value = "/firmas")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class FirmaController {

    private final IFirmaService iFirmaService;

    @GetMapping(value = "/{firmaId}")
    public ResponseEntity<FirmaDTO> getOne(@PathVariable Long firmaId) {
     return new ResponseEntity<>(iFirmaService.findOne(firmaId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<FirmaDTO>> getAll() {
        return new ResponseEntity<>(iFirmaService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<FirmaDTO> save(@RequestBody FirmaDTO firmaDTO) {
        return new ResponseEntity<>(iFirmaService.save(firmaDTO), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{firmaId}")
    public ResponseEntity<FirmaDTO> update(@RequestBody FirmaDTO firmaDTO, @PathVariable Long firmaId) {

        FirmaDTO firma = iFirmaService.findOne(firmaId);

        if(firma == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        firma.setPib(firmaDTO.getPib());
        firma.setAdresa(firmaDTO.getAdresa());
        firma.setNaziv(firmaDTO.getNaziv());

        return new ResponseEntity<>(iFirmaService.save(firma), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{firmaId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long firmaId) {
        iFirmaService.delete(firmaId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
