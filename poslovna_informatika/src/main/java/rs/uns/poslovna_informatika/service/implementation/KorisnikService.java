package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Authority;
import rs.uns.poslovna_informatika.model.Korisnik;
import rs.uns.poslovna_informatika.repository.AuthorityRepository;
import rs.uns.poslovna_informatika.repository.KorisnikRepository;
import rs.uns.poslovna_informatika.service.IKorisnikService;
import rs.uns.poslovna_informatika.util.mapper.KorisnikMapper;
import rs.uns.poslovna_informatika.web.dto.KorisnikDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class KorisnikService implements IKorisnikService, UserDetailsService {

    private final KorisnikRepository korisnikRepository;
    private final AuthorityRepository authorityRepository;
    private final KorisnikMapper korisnikMapper;

    @Override
    public List<KorisnikDTO> findAll() {
        List<Korisnik> korisniks = korisnikRepository.findAll();
        return korisniks.stream().map(korisnikMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public Korisnik findKorisnikByKorisnickoIme(String korisnickoIme) {
        Korisnik korisnik = korisnikRepository.findByKorisnickoIme(korisnickoIme).orElse(null);
        return korisnik;
    }

    @Override
    public KorisnikDTO save(KorisnikDTO korisnikDTO) {
        Korisnik korisnik = korisnikMapper.toEntity(korisnikDTO);
        Authority authority = authorityRepository.getAuthorityByName("KORISNIK");
        korisnik.getAuthorities().add(authority);
        KorisnikDTO korisnikDTO1 = korisnikMapper.toDto(korisnikRepository.save(korisnik));
        return korisnikDTO1;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Korisnik korisnik = korisnikRepository.findByKorisnickoIme(username)
                .orElseThrow(() -> new UsernameNotFoundException("Korisnik nije pronadjen"));
        return korisnik;
    }
}
