package com.english.lawd.util.function;

import com.english.lawd.util.ErrorUtil;
import com.english.lawd.util.PropUtil;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;

public class UserUtil {

    private static final SecureRandom RAND = new SecureRandom();

    public static String generateSalt(final int length) {
        if (length < 1) {
            throw ErrorUtil.INTERNAL_SERVER_ERROR;
        }

        byte[] salt = new byte[length];
        RAND.nextBytes(salt);

        return Base64.getEncoder().encodeToString(salt);
    }

    public static String hashPassword(String password, String salt) {
        final int ITERATIONS = 65536;
        final int KEY_LENGTH = 512;
        final String ALGORITHM = "PBKDF2WithHmacSHA512";

        char[] chars = password.toCharArray();
        byte[] bytes = salt.getBytes();

        PBEKeySpec spec = new PBEKeySpec(chars, bytes, ITERATIONS, KEY_LENGTH);

        // CLEAR chars ARRAY
        Arrays.fill(chars, Character.MIN_VALUE);

        try {
            SecretKeyFactory fac = SecretKeyFactory.getInstance(ALGORITHM);
            byte[] securePassword = fac.generateSecret(spec).getEncoded();
            return Base64.getEncoder().encodeToString(securePassword);
        } catch (NoSuchAlgorithmException | InvalidKeySpecException ex) {
            throw ErrorUtil.INTERNAL_SERVER_ERROR;
        } finally {
            spec.clearPassword();
        }
    }
}
