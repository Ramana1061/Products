package com.spring.products.Crud_Ops.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.products.Crud_Ops.entity.Products;
import com.spring.products.Crud_Ops.service.ProductsService;

import lombok.RequiredArgsConstructor;

//@RestController
//@RequestMapping("/api")
//@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:4200")
//public class ProductsController {
//
//	@Autowired
//    private ProductsService productsService;
//
//    @PostMapping("/create")
//    public ResponseEntity<Products> createProduct(@RequestBody Products product) {
//        Products createdProduct = productsService.createProduct(product);
//        return ResponseEntity.ok(createdProduct);
//    }
//
//
//}

@RestController
@RequestMapping("/api")
public class ProductsController {

    @Autowired
    private ProductsService productService;

    @PostMapping("/create")
    public ResponseEntity<Products> createProduct(@RequestBody Products product) {
        Products createdProduct = productService.createProduct(product);
        return ResponseEntity.ok(createdProduct);
    }
    
    @GetMapping("/products")
    public List<Products> getAllProducts() {
		return productService.getAllProducts();
	}
    
    @GetMapping("/products/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable Long id){
		Products product = productService.getProductById(id);
    	if(product==null) {
    		return ResponseEntity.notFound().build();
    	}
    	return ResponseEntity.ok(product);
    }
    
    @PutMapping("/products/{id}")
    public ResponseEntity<Products> updateProduct(@PathVariable Long id,@RequestBody Products product){
    	Products existingProduct=productService.getProductById(id);
    	if(existingProduct==null) {
    		ResponseEntity.notFound().build();
    	}
    	existingProduct.setId(product.getId());
    	existingProduct.setName(product.getName());
    	existingProduct.setDescription(product.getDescription());
    	existingProduct.setPrice(product.getPrice());
    	existingProduct.setQuantity(product.getQuantity());
    	
    	Products updatedProduct = productService.updateProduct(existingProduct);
    	return ResponseEntity.ok(updatedProduct);
    }
    
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Products> deleteProduct(@PathVariable Long id){
    	Products existingProduct = productService.getProductById(id);
    	if(existingProduct==null) {
    		return ResponseEntity.notFound().build();
    	}
    	productService.deleteProduct(id);
    	return ResponseEntity.ok().build();
    }
}

