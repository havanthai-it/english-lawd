package com.english.lawd.util.model;

import java.util.List;

import lombok.Data;

@Data
public class BaseList<T> {
	int total;
	List<T> list;
}
