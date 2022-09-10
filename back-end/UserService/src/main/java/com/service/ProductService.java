package com.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Product;
import com.bean.User;
import com.dao.AdminDao;
import com.dao.ProductDao;

@Service
public class ProductService {
	@Autowired
	ProductDao productDao;

	@Autowired
	EmailSenderService emailSenderService;
	@Autowired
	AdminDao adminDao;

	public List<Product> getAllProduct() {
		
		return productDao.findAll();

	}
	
	public void alterProductStock(List<Product> listOfProduct) {
		List<Product> list = new ArrayList<Product>();
		
		for(Product product:listOfProduct) {
			Product p = productDao.getById(product.getProductId());
			p.setStock(p.getStock()-product.getStock());
			productDao.saveAndFlush(p);
			list.add(p);
		}getStocks(list);
		
		}

	
public List<Product> getResult(String text) {
		
		List<Product> listOfProduct = productDao.findAll();
		Iterator<Product> ii =listOfProduct.iterator();
		List<Product> result=new ArrayList<Product>();
		
		while(ii.hasNext()) {
			Product p=ii.next();
			if(p.getProductName().equalsIgnoreCase(text)) {
				result.add(p);
			}
			else if (p.getProductName().contains(text)) {
				result.add(p);
				
			}else if(p.getCategories().equalsIgnoreCase(text)) {
				result.add(p);
			}
			else if(p.getCategories().contains(text)){
				result.add(p);
				
			}
		}
		return result;
	}

private void getStocks(List<Product> product) {
	
	Iterator<Product> ii=product.iterator();
	List<String> listOfAdmin = adminDao.getAllEmail();
	while(ii.hasNext()) {
		Product p=ii.next();
	if (p.getStock() < 10) {
		String body = "Product Stock is reducing.....\n Product Id: " + p.getProductId() + "\nProduct Name: "
				+ p.getProductName() + "\nProduct Stock: " + p.getStock();

		for (String email : listOfAdmin) {
			System.out.println(p.getStock());
			emailSenderService.sendEmail(email, body, "Reducing Product Stock");
		}

	}
	}
}

	
}
