package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
@Id
	private int productId ;
	 private String productName;
	 private float productPrice;
	 private String imageUrl ;
	private int stock;
	private String categories;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int productId, String productName, float productPrice, String imageUrl, int stock,
			String categories) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.stock = stock;
		this.categories = categories;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
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
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", imageUrl=" + imageUrl + ", stock=" + stock + ", categories=" + categories + "]";
	}
}
	
	