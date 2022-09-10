package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.bean.CompositeKey;
import com.bean.WishList;
@Repository
public interface WishListDao extends JpaRepository<WishList, CompositeKey> {

	@Query("select w from WishList w where w.keys.email=:email")
	public List<WishList> getWishList(@Param("email") String email);
}
