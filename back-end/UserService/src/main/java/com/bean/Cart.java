package com.bean;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class Cart {

	@EmbeddedId
	private CompositeKey keys;
	 private String productName;
	 private float productPrice;
	 private String imageUrl ;
	 private int quantity;
	 private String categories;
	 
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(CompositeKey keys, String productName, float productPrice, String imageUrl, int quantity,
			String categories) {
		super();
		this.keys = keys;
		this.productName = productName;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.quantity = quantity;
		this.categories = categories;
	}
	public CompositeKey getKeys() {
		return keys;
	}
	public void setKeys(CompositeKey keys) {
		this.keys = keys;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public float getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	@Override
	public String toString() {
		return "Cart [keys=" + keys + ", productName=" + productName + ", productPrice=" + productPrice + ", imageUrl="
				+ imageUrl + ", quantity=" + quantity + ", categories=" + categories + "]";
	}
	 
}