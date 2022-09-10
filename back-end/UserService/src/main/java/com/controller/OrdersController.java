package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Orders;
import com.service.OrdersService;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrdersController {
	@Autowired
	OrdersService ordersService;
	
	@GetMapping(value = "getAllOrder/{email}")
	public List<Orders> getOrders(@PathVariable("email") String email){
		return ordersService.getAllOrder(email);
	}
	
	@PostMapping(value = "placeOrder",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String placeOrder(@RequestBody List<Orders> orders) {
		return ordersService.placeOrder(orders);
	}

}
