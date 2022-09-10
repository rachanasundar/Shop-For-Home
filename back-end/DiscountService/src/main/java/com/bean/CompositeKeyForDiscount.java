package com.bean;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CompositeKeyForDiscount  implements Serializable {
	private String email;
	private String coupon;
	public CompositeKeyForDiscount() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CompositeKeyForDiscount(String email, String coupon) {
		super();
		this.email = email;
		this.coupon = coupon;
	}
	@Override
	public String toString() {
		return "CompositeKeyForDiscount [email=" + email + ", coupon=" + coupon + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCoupon() {
		return coupon;
	}
	public void setCoupon(String coupon) {
		this.coupon = coupon;
	}
	

}
