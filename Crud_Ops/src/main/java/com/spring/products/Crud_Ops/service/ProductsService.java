package com.spring.products.Crud_Ops.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.spring.products.Crud_Ops.entity.Products;
import com.spring.products.Crud_Ops.repository.ProductsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductsService {

	private final ProductsRepository productsRepo;
	@Autowired
	public ProductsService(ProductsRepository productsRepo) {
		this.productsRepo=productsRepo;
	}
	
	public Products createProduct(Products product) {
		return productsRepo.save(product);
	}
	public List<Products> getAllProducts(){
		return productsRepo.findAll();
	}
	public Products getProductById(Long id) {
		return productsRepo.findById(id).orElse(null);	
	}
	public Products updateProduct(Products product) {
		return productsRepo.save(product);
	}
	public void deleteProduct(Long id) {
		productsRepo.deleteById(id);
	}
}
