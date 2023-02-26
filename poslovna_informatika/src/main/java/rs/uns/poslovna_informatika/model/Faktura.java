package rs.uns.poslovna_informatika.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Faktura {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    private String mesto;

    private LocalDate datumIzdavanja;

    private LocalDate datumPrometa;

    private Integer pdv;

    private Integer redniBrojRacuna;

    private Double iznosOsnovice;

    private Double ukupnoZaduzenje;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "izdavalac_racuna_id")
    private Firma izdavalacRacuna;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "primalac_racuna_id")
    private Firma primalacRacuna;

    @OneToMany(mappedBy = "faktura", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Stavka> stavkas = new LinkedHashSet<>();

}
