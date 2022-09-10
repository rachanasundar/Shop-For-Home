package com.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Product;
//import com.bean.User;
import com.dao.ProductDao;

@Service
public class ProductService {
	@Autowired
	ProductDao productDao;

	

	public List<Product> getAllStock() {
		return productDao.findAll();
	}
	
	
}
