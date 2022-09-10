package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.CompositeKeyForDiscount;
import com.bean.Discount;
import com.dao.DiscountDao;

@Service
public class DiscountService {
	
	@Autowired
	DiscountDao discountDao;
	public String storeCoupon(Discount discount) {
		if(discountDao.existsById(discount.getKey())) {
			return "User "+discount.getKey().getEmail()+" already have a discount coupon. Please Update It" ;
		}else {
			discountDao.save(discount);
			return "New Discount Coupon alloted for User "+discount.getKey().getEmail();
		}
		
	}
	
	public List<Discount> getAllCoupons(){
		return discountDao.findAll();
		
	}
	public float verifyCoupons(CompositeKeyForDiscount key){
		if(discountDao.existsById(key)) {
			Discount d = discountDao.getById(key);
			return d.getDiscount();
		}else {
			return 0;
		}
		
		
	}
	
	public List<String> getStoredCoupons(){
		return discountDao.getStoredCoupon();
	}
	
	public String updateCoupon(Discount discount) {
		if(!discountDao.existsById(discount.getKey())) {
			return "Invaild Detials";
		}else {
			Discount d = discountDao.getById(discount.getKey());
			d.setDiscount(discount.getDiscount());
			discountDao.saveAndFlush(d);
			return "Coupon Discount updated to User "+discount.getKey().getEmail();
		}
		
	}
		
	public String removeCoupon(CompositeKeyForDiscount key) {
		if(discountDao.existsById(key)) {
			discountDao.deleteById(key);
			return "Coupon deleted successfully for user "+key.getEmail();
		}else {
			return "Failed to delete. Invaild Detials";
		}
	}


}
