package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.CompositeKey;
import com.bean.WishList;
import com.dao.WishListDao;

@Service
public class WishListService {
	@Autowired
	WishListDao wishListDao;

	public String addToWishList(WishList wishList) {
		if(wishListDao.existsById(wishList.getKeys())) {
			return "Product exists in Wish List ";
		}else {
			wishListDao.save(wishList);
			return "Product Added to Wish List";
		}
		
	}
	
	public List<WishList> getAllFromWishlist(String email) {
		return wishListDao.getWishList(email);
	}
	
	public String deleteFromWishList(CompositeKey key) {
		if(!wishListDao.existsById(key)) {
			return "Product does not exists in Wish List ";
		}else {
			wishListDao.deleteById(key);
			return "Product Removed from the  Wish List";
		}
		
	}
}
