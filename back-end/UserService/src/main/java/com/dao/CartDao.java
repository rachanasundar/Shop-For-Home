package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bean.Cart;
import com.bean.CompositeKey;



public interface CartDao extends JpaRepository<Cart,CompositeKey > {
	@Query("select c from Cart c where c.keys.email=:email")
	public List<Cart> getCart(@Param("email") String email);
	@Transactional
	@Modifying
	@Query("Delete from Cart c where c.keys.email=:email")
	public void deleteAllCart(@Param("email") String email);

}
