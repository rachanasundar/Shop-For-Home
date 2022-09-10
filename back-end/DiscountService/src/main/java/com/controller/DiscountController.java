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

import com.bean.CompositeKeyForDiscount;
import com.bean.Discount;
import com.service.DiscountService;

@RestController
@RequestMapping("/discount")
@CrossOrigin
public class DiscountController {
	
	@Autowired
	DiscountService discountService;
	
	@PostMapping(value="storeCoupon",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeCoupon(@RequestBody Discount discount) {
		return discountService.storeCoupon(discount);
	}
	
	@GetMapping(value = "getStoredCoupons")
	public List<String> getCoupons(){
		return discountService.getStoredCoupons();
	}
	
	@GetMapping(value = "getAllCoupons")
	public List<Discount> getAllCoupons(){
		return discountService.getAllCoupons();
	}
	@PostMapping(value = "verifyCoupon")
	public float verifyCoupons(@RequestBody CompositeKeyForDiscount key){
		return discountService.verifyCoupons( key);
	}
	
	@PatchMapping(value = "updatCoupon",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateCoupon(@RequestBody Discount discount) {
		return discountService.updateCoupon(discount);
	}
	
	
	@PatchMapping(value = "removeCoupon")
	public String removeCoupon(@RequestBody CompositeKeyForDiscount key) {
		return discountService.removeCoupon(key);
	}

}
