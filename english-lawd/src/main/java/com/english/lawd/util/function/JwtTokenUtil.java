package com.english.lawd.util.function;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenUtil {
    public static final long JWT_TOKEN_VALIDITY = 7 * 24 * 60 * 60 * 1000;

//    @Value("${jwt.secret}")
    private static String secret;

    @Value("${jwt.secret}")
    public void setSecret(String value) {
        secret = value;
    }


    public static <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Get all information from token
     * @param token
     * @return
     */
    private static Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    /**
     * Generate token for user
     * @param userId
     * @return
     */
    public static String generateToken(String userId) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    //validate token
    public static Boolean validateToken(String token, String userId) {
        String claimUserId = getClaimFromToken(token, Claims::getSubject);
        Date claimExpiration = getClaimFromToken(token, Claims::getExpiration);
        return (claimUserId.equals(userId) && !claimExpiration.before(new Date()));
    }
}
