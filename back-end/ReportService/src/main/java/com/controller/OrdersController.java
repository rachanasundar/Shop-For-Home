package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Orders;
import com.bean.Product;
import com.service.OrdersService;

@RestController
@RequestMapping("/sales")
@CrossOrigin
public class OrdersController {
	@Autowired
	OrdersService ordersService;
	
	
	@GetMapping(value="getTodaysSale")
	public List<Orders> getTodaysSale() {
	return ordersService.getTodaysSale()  ;
	}
	@GetMapping(value="getMonthlySale")
	public List<Orders>   getMonthlySale() {
	return ordersService.getMonthlySale() ;
	}
	@GetMapping(value="getAllSale")
	public List<Orders>  getAllSale() {
	return ordersService.getAllSales()  ;
	}

}
