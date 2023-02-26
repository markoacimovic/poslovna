package rs.uns.poslovna_informatika.service;

import rs.uns.poslovna_informatika.model.Authority;

import java.util.List;

public interface IAuthorityService {

    List<Authority> getAuthorities();

    Authority getAuthorityByName(String name);
}
