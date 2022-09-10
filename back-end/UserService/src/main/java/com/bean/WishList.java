package com.bean;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class WishList {
	@EmbeddedId
	private CompositeKey keys;
	 private String productName;
	 private float productPrice;
	 private String imageUrl ;
	 private String categories;
	 
	public WishList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public WishList(CompositeKey keys, String productName, float productPrice, String imageUrl, String categories) {
		super();
		this.keys = keys;
		this.productName = productName;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
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
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	@Override
	public String toString() {
		return "WishList [keys=" + keys + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", imageUrl=" + imageUrl + ", categories=" + categories + "]";
	}
}
	 
	