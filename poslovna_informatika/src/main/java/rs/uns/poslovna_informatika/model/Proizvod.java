package rs.uns.poslovna_informatika.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
public class Proizvod {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    private String naziv;

    private String opis;

    private Double cena;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "cenovnik_id")
    private Cenovnik cenovnik;

}
