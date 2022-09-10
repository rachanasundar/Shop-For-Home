package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Cart;
import com.bean.CompositeKey;
import com.bean.Product;
import com.dao.CartDao;
import com.dao.ProductDao;

@Service
public class CartService {
	@Autowired
	CartDao cartDao;
	@Autowired
	ProductDao productDao;
	public String addToCart(Cart cart) {
		if (cartDao.existsById(cart.getKeys())) {
			return "Product already exists in the Cart";
		} else {
			cartDao.save(cart);
			return "Product added to cart";
		}

	}

	public List<Cart> getFromCart(String email) {
		return cartDao.getCart(email);

	}

	public String alterQuantity(Cart cart) {
		if (!cartDao.existsById(cart.getKeys())) {
			return "Product details does not exists in the Cart";
		} else {
			Cart c = cartDao.getById(cart.getKeys());
			Product p=productDao.getById(cart.getKeys().getProductId());
			c.setQuantity(cart.getQuantity());
			c.setProductPrice(p.getProductPrice()*cart.getQuantity());
			cartDao.saveAndFlush(c);
			return "Product quantity altered successfully in the Cart";
		}	

	}

	public String deleteFromCart(CompositeKey key) {
		if (!cartDao.existsById(key)) {
			return "Product details does not exists in the Cart";
		} else {
			cartDao.deleteById(key);
			return "Product Removed from the Cart";
		}

	}

	public String deleteAllFromCart(String email) {
		cartDao.deleteAllCart(email);
		 return "All Products in Cart deleted";
	}

}
