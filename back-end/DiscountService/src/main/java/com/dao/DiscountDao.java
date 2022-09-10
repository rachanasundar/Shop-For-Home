package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bean.CompositeKeyForDiscount;
import com.bean.Discount;



@Repository
public interface DiscountDao extends JpaRepository<Discount, CompositeKeyForDiscount> {
	@Query("select d from Discount d where d.key.email=:email")
	public List<Discount> getDiscount(@Param("email") String email);
	
	@Query("select d.key.coupon from Discount d")
	public List<String> getStoredCoupon();

}
