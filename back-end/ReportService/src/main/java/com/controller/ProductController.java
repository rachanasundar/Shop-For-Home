package com.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.bean.Cart;
import com.bean.Product;
//import com.bean.User;
import com.service.ProductService;

@RestController
@RequestMapping("/stock")
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService productService;
	
	
		
	@GetMapping(value="getAllStock")
	public List<Product> getAllStock() {
	
	return productService.getAllStock();
	}
	

}
	