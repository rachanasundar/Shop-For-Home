package com.bean;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CompositeKeyForOrders implements Serializable {
	private String dateAndTime;
	private String email;
	private int productId;
	public CompositeKeyForOrders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CompositeKeyForOrders(String dateAndTime, String email, int productId) {
		super();
		this.dateAndTime = dateAndTime;
		this.email = email;
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "CompositeKeyForOrders [dateAndTime=" + dateAndTime + ", email=" + email + ", productId=" + productId
				+ "]";
	}
	public String getDateAndTime() {
		return dateAndTime;
	}
	public void setDateAndTime(String dateAndTime) {
		this.dateAndTime = dateAndTime;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	
}
