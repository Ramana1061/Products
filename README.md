# CRUD Application with Angular and Spring Boot

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend (Spring Boot)](#backend-spring-boot)
  - [Frontend (Angular)](#frontend-angular)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Features](#frontend-features)
- [Troubleshooting](#troubleshooting)

## Introduction
This is a simple CRUD (Create, Read, Update, Delete) application developed using Angular for the frontend and Spring Boot for the backend. The application allows users to perform CRUD operations on a set of items.

## Prerequisites
- Java JDK 17
- Node.js and npm
- Angular CLI
- Eclipse IDE with J2EE edition

## Setup Instructions
- Make sure that an Noje js is installed in system
- Take pull request from the git repository in vscode
- Need to setup an angular cli in vscode using angualr commands 
- creating an angualar project named as crud_angular
- Take pull request from the git repository into eclipse
- Make sure that all connections along with api links are correct
- Run the angualr and springboot applications and perform the application

### Backend (Spring Boot)
  - git clone https://github.com/Ramana1061/Products.git
  - cd Products/Crud_Ops
  - use the above git repository link to clone the repository into our eclipse
  - after getting the clone repository make sure that all configurations correct
  - Make sure a server like apache tomcat server is connected.
  - Run the application in eclipse.
### Frontend-angular
  - Navigate to the frontend directory:
    cd ../crud_angular
  - Install dependencies:
    npm install
  - Update API URL:
    Open the crud_angular/src/app/services/product.service.ts file and update the apiUrl to point to your backend:
    apiUrl: 'http://localhost:9000/api'
  - Serve the Angular application:
    ng serve
## Running-the-application
  - Backend:
    Ensure your Spring Boot application is running. By default, it will be available at http://localhost:9000.
  - Frontend:
    Open a browser and navigate to http://localhost:4200. You should see the Angular application running.
## Api-endpoints
  - Here are some common API endpoints provided by the Spring Boot backend:
    - GET /api/items - Retrieve all items
    - POST /api/items - Create a new item
    - PUT /api/items/{id} - Update an existing item
    - DELETE /api/items/{id} - Delete an item by ID
## Frontend-features
  - The Angular application provides a user-friendly interface to interact with the backend API:
    - List View: Display all items.
    - Create Item: Add a new item.
    - Edit Item: Update an existing item.
    - Delete Item: Remove an item.
## Troubleshooting
  - Common Issues:
    - Ensure that both backend and frontend are running.
    - Check console logs for any errors and resolve accordingly.
    - Verify the database connection details in application.properties.
  - Database Issues:
    - Ensure that your database server is running and accessible.
    - Verify that the database credentials in application.properties are correct.
  - Make sure to replace main with the name of your branch if you are using a different branch.
