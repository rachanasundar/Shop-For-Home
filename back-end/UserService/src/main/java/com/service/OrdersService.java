package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Cart;
import com.bean.Orders;
import com.bean.Product;
import com.dao.OrdersDao;

@Service
public class OrdersService {
	@Autowired
	OrdersDao ordersDao;
	@Autowired
	ProductService productService;

	public String placeOrder(List<Orders> orders) {
		List<Product> listOfProduct=new ArrayList<Product>();
		for(Orders o:orders) {
		ordersDao.save(o);
		listOfProduct.add(new Product(o.getKeys().getProductId(), o.getQuantity()));
		}
		productService.alterProductStock(listOfProduct);
		return "Bill Generated Successfully....";
		
	}
	
	public List<Orders> getAllOrder(String email) {
		return ordersDao.getOrders(email);

	}
	
}
