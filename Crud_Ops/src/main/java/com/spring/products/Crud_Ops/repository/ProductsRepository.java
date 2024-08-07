package com.spring.products.Crud_Ops.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.products.Crud_Ops.entity.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long>{

}
