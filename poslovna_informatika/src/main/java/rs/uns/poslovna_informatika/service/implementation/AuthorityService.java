package rs.uns.poslovna_informatika.service.implementation;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import rs.uns.poslovna_informatika.model.Authority;
import rs.uns.poslovna_informatika.repository.AuthorityRepository;
import rs.uns.poslovna_informatika.service.IAuthorityService;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthorityService implements IAuthorityService {

    private final AuthorityRepository authorityRepository;

    @Override
    public List<Authority> getAuthorities() {
        return authorityRepository.findAll();
    }

    @Override
    public Authority getAuthorityByName(String name) {
        return authorityRepository.getAuthorityByName(name);
    }
}
