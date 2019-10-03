package com.english.lawd.util.function;

import org.modelmapper.ModelMapper;

public class ModelMapperUtil {
    private static final ModelMapper modelMapper = new ModelMapper();

    public static <T> T map(Object source, Class<T> destinationType) {
        return source == null ? null : modelMapper.map(source, destinationType);
    }
}
