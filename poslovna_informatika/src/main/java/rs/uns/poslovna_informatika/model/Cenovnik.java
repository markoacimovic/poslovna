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
public class Cenovnik {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    private LocalDate vaziOd;

    private LocalDate vaziDo;

    @OneToMany(mappedBy = "cenovnik", cascade = CascadeType.ALL)
    private Set<Proizvod> proizvods = new LinkedHashSet<>();

    @ManyToOne(cascade = {CascadeType.REFRESH})
    @JoinColumn(name = "firma_id")
    private Firma firma;

}
