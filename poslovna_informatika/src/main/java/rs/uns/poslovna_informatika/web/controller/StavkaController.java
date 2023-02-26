package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.IStavkaService;
import rs.uns.poslovna_informatika.web.dto.StavkaDTO;

import java.util.List;

@RestController
@RequestMapping(value = "/stavkas")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class StavkaController {

    private final IStavkaService iStavkaService;

    @GetMapping(value = "/faktura/{fakturaId}")
    public ResponseEntity<List<StavkaDTO>> getStavkasForFaktura(@PathVariable Long fakturaId) {
        return new ResponseEntity<>(iStavkaService.findStavkasForFaktura(fakturaId), HttpStatus.OK);
    }
}
