package com.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

//import com.bean.Cart;
import com.bean.CompositeKeyForOrders;
import com.bean.Orders;

public interface OrdersDao extends JpaRepository<Orders, CompositeKeyForOrders> {

}
