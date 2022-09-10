package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bean.Cart;
import com.bean.CompositeKeyForOrders;
import com.bean.Orders;

public interface OrdersDao extends JpaRepository<Orders, CompositeKeyForOrders> {
	@Query("select o from Orders o where o.keys.email=:email")
	public List<Orders> getOrders(@Param("email") String email);
}
