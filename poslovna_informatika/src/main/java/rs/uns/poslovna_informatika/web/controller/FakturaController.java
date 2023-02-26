package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.IFakturaService;
import rs.uns.poslovna_informatika.web.dto.FakturaDTO;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/fakturas")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class FakturaController {

    private final IFakturaService iFakturaService;


    @GetMapping(value = "/izdavalac/{izdavalacId}")
    public ResponseEntity<List<FakturaDTO>> getFakturasForIzdavalac(@PathVariable Long izdavalacId) {
        return new ResponseEntity<>(iFakturaService.findFakturasByIzdavalac(izdavalacId), HttpStatus.OK);
    }

    @GetMapping(value = "/primalac/{primalacId}")
    public ResponseEntity<List<FakturaDTO>> getFakturasForPrimalac(@PathVariable Long primalacId) {
        return new ResponseEntity<>(iFakturaService.findFakturasByPrimalac(primalacId), HttpStatus.OK);
    }

    @GetMapping(value = "/kif")
    public ResponseEntity<List<FakturaDTO>> getFakturasBetweenDates(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        return new ResponseEntity<>(iFakturaService.findFakturasBetweenDates(startDate, endDate), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<FakturaDTO> save(@RequestBody FakturaDTO fakturaDTO) {
        return new ResponseEntity<>(iFakturaService.save(fakturaDTO), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{fakturaId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long fakturaId) {
        iFakturaService.delete(fakturaId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
