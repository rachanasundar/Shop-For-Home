package com.bean;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Discount {
	@EmbeddedId
	private CompositeKeyForDiscount key;
	private float discount;
	
	public Discount() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Discount(CompositeKeyForDiscount key, float discount) {
		super();
		this.key = key;
		this.discount = discount;
	}

	@Override
	public String toString() {
		return "Discount [key=" + key + ", discount=" + discount + "]";
	}

	public CompositeKeyForDiscount getKey() {
		return key;
	}

	public void setKey(CompositeKeyForDiscount key) {
		this.key = key;
	}

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}
	
	
	

}
