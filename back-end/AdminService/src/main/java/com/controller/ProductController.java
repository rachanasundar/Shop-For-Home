package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Product;
import com.bean.User;
import com.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService productService;
	
	@PostMapping(value = "storeProductInfo",
			consumes = MediaType.APPLICATION_JSON_VALUE)
public String storeProduct(@RequestBody Product product) {
		return productService.storeProduct(product);
	}
		
	@GetMapping(value="getAllProduct")
	public List<Product> getAllProduct() {
	return productService.getAllProduct();
	}

	@PatchMapping(value = "updateProductName")
	public String updateProductName(@RequestBody Product product) {
		return productService.updateProductname(product);
	}
	@PatchMapping(value = "updateProductPrice")
	public String updateProductPrice(@RequestBody Product product) {
		return productService.updateProductPrice(product);
	
		
	}
	@PatchMapping(value = "updateProductImageUrl")
	public String updateProductImageUrl(@RequestBody Product product) {
		return productService.updateProductImageUrl(product);
		
		
	}
	@PatchMapping(value = "updateStock")
	public String updateStock(@RequestBody Product product) {
		return productService.updateStock(product);
		
		
	}
	@PatchMapping(value = "updateCategory")
	public String updateCategory(@RequestBody Product product) {
		return productService.updateCategory(product);
		
		
	}
	@DeleteMapping(value = "deleteProductById/{id}")
	public String deleteProductById(@PathVariable("id") int id) {
		return productService.deleteProduct(id);
	}
	
	@PostMapping(value="search")
	public List<Product> getResult(@RequestBody String text ){
	return productService.getResult(text);
		
	}
}