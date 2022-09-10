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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Cart;
import com.bean.CompositeKey;
import com.service.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {

	@Autowired
	CartService cartService;
	
	@PostMapping(value="addToCart",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String addToCart(@RequestBody Cart cart) {
		return cartService.addToCart(cart);
	}
	
	@GetMapping(value = "getCart/{email}")
	public List<Cart> getCart(@PathVariable("email") String email) {
		return cartService.getFromCart(email);
	}
	@PatchMapping(value="alterQuantity",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String alterQuantity(@RequestBody Cart cart) {
		return cartService.alterQuantity(cart);
	}

	@PatchMapping(value="deleteFromCart",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String deleteFromCart(@RequestBody CompositeKey key) {
		return cartService.deleteFromCart(key);
	}
	
	@DeleteMapping(value="deleteAllFromCart/{email}")
	public String deleteAllFromCart (@PathVariable("email") String email ) {
		return cartService.deleteAllFromCart(email);
	}
	
	
	
}
