package com.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Product;
import com.bean.User;
import com.dao.ProductDao;

@Service
public class ProductService {
	@Autowired
	ProductDao productDao;
	@Autowired
	EmailSenderService emailSenderService;
	@Autowired
	AdminService adminService;

	public String storeProduct(Product product) {
		if (productDao.existsById(product.getProductId())) {
			return "Failed to store product. Product Id much be unique";
		} else {
			productDao.save(product);
			return "Product stored succesfully.....";
		}

	}

	public List<Product> getAllProduct() {
		return productDao.findAll();

	}

	public String updateProductname(Product product) {
		if (!productDao.existsById(product.getProductId())) {
			return "Product " + product.getProductId() + " details not present";
		} else {
			Product p = productDao.getById(product.getProductId());
			p.setProductName(product.getProductName());
			productDao.saveAndFlush(p);
			return "Product " + product.getProductId() + " name updated successfully";
		}

	}

	public String updateProductPrice(Product product) {
		if (!productDao.existsById(product.getProductId())) {
			return "Product " + product.getProductId() + " details not present";
		} else {
			Product p = productDao.getById(product.getProductId());
			p.setProductPrice(product.getProductPrice());
			productDao.saveAndFlush(p);
			return "Product " + product.getProductId() + " price updated successfully";
		}
	}

	public String updateProductImageUrl(Product product) {
		if (!productDao.existsById(product.getProductId())) {
			return "Product " + product.getProductId() + " details not present";
		} else {
			Product p = productDao.getById(product.getProductId());
			p.setImageUrl(product.getImageUrl());
			productDao.saveAndFlush(p);
			return "Product " + product.getProductId() + " image updated successfully";
		}

	}

	public String updateStock(Product product) {
		if (!productDao.existsById(product.getProductId())) {
			return "Product " + product.getProductId() + " details not present";
		} else {
			Product p = productDao.getById(product.getProductId());
			p.setStock(product.getStock());
			productDao.saveAndFlush(p);
			getStocks(p);
			return "Product " + product.getProductId() + " stock updated successfully";
		}

	}

	public String updateCategory(Product product) {
		if (!productDao.existsById(product.getProductId())) {
			return "Product " + product.getProductId() + " details not present";
		} else {
			Product p = productDao.getById(product.getProductId());
			p.setCategories(product.getCategories());
			productDao.saveAndFlush(p);
			return "Product " + product.getProductId() + " category updated successfully";
		}

	}

	public String deleteProduct(int id) {

		if (!productDao.existsById(id)) {
			return "Product " + id + " details not present";
		} else {
			productDao.deleteById(id);
			return "Product " + id + " deleted succesfully.....";
		}
	}

	private void getStocks(Product p) {

		List<String> listOfAdmin = adminService.getAllAdminEmail();

		if (p.getStock() < 10) {
			String body = "Product Stock is reducing.....\n Product Id: " + p.getProductId() + "\nProduct Name: "
					+ p.getProductName() + "\nProduct Stock: " + p.getStock();

			for (String email : listOfAdmin) {
				System.out.println(p.getStock());
				emailSenderService.sendEmail(email, body, "Product Stock");
			}

		}
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
}
