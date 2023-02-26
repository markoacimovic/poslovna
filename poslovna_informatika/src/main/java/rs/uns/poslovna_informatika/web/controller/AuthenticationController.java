package rs.uns.poslovna_informatika.web.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import rs.uns.poslovna_informatika.model.Korisnik;
import rs.uns.poslovna_informatika.security.jwt.JwtResponse;
import rs.uns.poslovna_informatika.security.jwt.JwtUtil;
import rs.uns.poslovna_informatika.web.dto.LoginDTO;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/auth")
@AllArgsConstructor
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getKorisnickoIme(), loginDTO.getLozinka())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        Korisnik korisnik = (Korisnik) authentication.getPrincipal();
        String jwt = jwtUtil.generateToken(korisnik);
        JwtResponse jwtResponse = new JwtResponse(jwt);

        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }
}
