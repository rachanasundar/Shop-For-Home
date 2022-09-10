package com.bean;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CompositeKey 	implements Serializable {
		private String email;
		private int productId;
		public CompositeKey() {
			super();
			// TODO Auto-generated constructor stub
		}
		public CompositeKey(String email, int productId) {
			super();
			this.email = email;
			this.productId = productId;
		}
		@Override
		public String toString() {
			return "CompositeKey [email=" + email + ", productId=" + productId + "]";
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
