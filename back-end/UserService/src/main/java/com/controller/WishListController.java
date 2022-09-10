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

import com.bean.Cart;
import com.bean.CompositeKey;
import com.bean.WishList;
import com.service.WishListService;

@RestController
@RequestMapping("/wishList")
@CrossOrigin
public class WishListController {
	
	@Autowired
	WishListService wishListService;
	
	@PostMapping(value="addToWishList",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String addToWishList(@RequestBody WishList wishList) {
		return wishListService.addToWishList(wishList);
	}
	
	@GetMapping(value = "getWishList/{email}")
	public List<WishList> getCart(@PathVariable("email") String email) {
		return wishListService.getAllFromWishlist(email);
	}
	@PatchMapping(value="deleteFromWishList",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String deleteFromWishList (@RequestBody CompositeKey key) {
		return wishListService.deleteFromWishList(key);
	}

}
