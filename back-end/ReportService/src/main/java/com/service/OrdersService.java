package com.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DateAndTime;
import com.bean.Orders;
import com.dao.OrdersDao;



@Service
public class OrdersService {
	@Autowired
	OrdersDao ordersDao;

public List<Orders> getTodaysSale() {
	//to store today's order
	List<Orders> todaysSale =new ArrayList<Orders>();
	
	List<Orders> listOfOrders=ordersDao.findAll();
	Iterator<Orders> ii=listOfOrders.iterator();
	while(ii.hasNext()) {
		Orders o = ii.next();
		if(o.getKeys().getDateAndTime().contains(DateAndTime.today())) {
			todaysSale.add(o);
		}
	}
	return todaysSale;
	
}
public List<Orders> getMonthlySale() {
	//to store today's order
		List<Orders> thisMonthsOrder =new ArrayList<Orders>();
		
		List<Orders> listOfOrders=ordersDao.findAll();
		Iterator<Orders> ii=listOfOrders.iterator();
		while(ii.hasNext()) {
			Orders o = ii.next();
			if(o.getKeys().getDateAndTime().contains(DateAndTime.thisMonth())) {
				thisMonthsOrder.add(o);
			}
		}
		return thisMonthsOrder ;
	
}
public List<Orders> getAllSales() {
	return ordersDao.findAll();
}
}
