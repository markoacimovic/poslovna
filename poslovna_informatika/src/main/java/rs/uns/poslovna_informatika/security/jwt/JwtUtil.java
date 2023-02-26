package rs.uns.poslovna_informatika.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import rs.uns.poslovna_informatika.model.Korisnik;

import java.util.Date;

@Component
public class JwtUtil {

    private static final String JWT_SECRET = "TopSecret";

    private static final Long JWT_EXPIRATION_MS = 3600000L;

    private Algorithm SIGNATURE_ALGORITHM = Algorithm.HMAC512(JWT_SECRET);

    private final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    public String generateToken(Korisnik korisnik) {
        return JWT.create()
                .withSubject(korisnik.getKorisnickoIme())
                .withIssuer("poslovna")
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS))
                .withClaim("firmaId", korisnik.getFirma().getId())
                .withClaim("authority", korisnik.getAuthorities().stream().findFirst().get().getName())
                .sign(SIGNATURE_ALGORITHM);
    }

    public String getUsername(String token) {
        return JWT.decode(token).getSubject();
    }

    public boolean validate(String token) {
        try {
            JWTVerifier jwtVerifier = JWT.require(SIGNATURE_ALGORITHM).withIssuer("poslovna").build();
            jwtVerifier.verify(token);
            return true;
        } catch (JWTVerificationException jwtVerificationException){
            logger.error(jwtVerificationException.getMessage());
            return false;
        }
    }
}
