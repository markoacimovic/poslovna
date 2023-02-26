package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.service.IFirmaService;
import rs.uns.poslovna_informatika.service.IKorisnikService;
import rs.uns.poslovna_informatika.web.dto.KorisnikDTO;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class KorisnikController {

    private final IKorisnikService iKorisnikService;
    private final IFirmaService iFirmaService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping
    public ResponseEntity<List<KorisnikDTO>> getAll() {
        return new ResponseEntity<>(iKorisnikService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<KorisnikDTO> save(@RequestBody KorisnikDTO korisnikDTO) {
        korisnikDTO.setLozinka(passwordEncoder.encode(korisnikDTO.getLozinka()));
        return new ResponseEntity<>(iKorisnikService.save(korisnikDTO), HttpStatus.CREATED);
    }

    @PostMapping(value = "/new-data")
    public ResponseEntity<HttpStatus> createUsers() {

        KorisnikDTO korisnikDTO = new KorisnikDTO();
        korisnikDTO.setIme("Marko");
        korisnikDTO.setJmbg("0105001790028");
        korisnikDTO.setPrezime("Acimovic");
        korisnikDTO.setKorisnickoIme("acim");
        korisnikDTO.setLozinka(passwordEncoder.encode("password"));
        korisnikDTO.setFirmaDTO(iFirmaService.findAll().get(0));

        iKorisnikService.save(korisnikDTO);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
