# TechTubeGuide

## Overview

TechTubeGuide is a dynamic web application built using Java Spring Boot for the backend and React for the frontend. This project demonstrates the integration of complex OOP concepts with modern web development technologies to create an API for managing Courses, Users, and Reviews.

## Technologies Used

### Backend

- **Java Spring Boot (Maven Project)**: Backend framework to create RESTful APIs.

- **MongoDB Compass**: NoSQL database for efficient data storage and retrieval.

- **Jakarta**: Library for field validation to ensure data integrity.

- **Postman**: Tool for API testing and development.

- **Lombok**: Java library to reduce boilerplate code.


### Frontend

- **React**: JavaScript library for building user interfaces.

## Project Aim

The main goal of this project is to develop an API that provides backend support for various web applications, such as a Course Suggestion WebApp. The API handles functionalities related to Courses, Users, and Reviews.

## Key Features

- **Courses API**: Manage course data including creation, retrieval, update, and deletion.

- **Users API**: Handle user registration, authentication, and profile management.

- **Reviews API**: Allow users to submit and manage reviews for courses.


## Object-Oriented Concepts Implemented

### Constructor

A constructor in Java is a special type of method invoked when an object is created. It initializes the object's state. Constructors have the same name as the class and do not have any return type, not even `void`.

### Method Overloading

Method overloading allows a class to have multiple methods with the same name but different parameters. These methods must differ in the number or type of their parameters.

### Super

The `super` keyword in Java is used to refer to the immediate parent class's constructor, methods, or instance variables. It is used to call the constructor or method of the immediate superclass.

### This

The `this` keyword in Java represents the current instance of a class. It is used to access class-level variables, call the current class constructor, and differentiate between instance variables and parameters with the same name.

### Inheritance

Inheritance enables a new class (derived or child class) to inherit properties and behaviors from an existing class (base or parent class). The derived class can access the methods and fields of the parent class and can also have its own additional methods and fields.

### Abstract Classes / Interface

#### Abstract Classes

An abstract class in Java is a class that cannot be instantiated on its own. It may contain both regular methods and abstract methods. Abstract methods are declared without a body and must be implemented by any non-abstract subclass.

#### Interface

An interface in Java is similar to an abstract class but can only contain method signatures and constants. It is a blueprint of a class and helps achieve abstraction and multiple inheritances.

### Package

A package in Java is a way to organize related classes and interfaces. It helps prevent naming conflicts and provides a structured mechanism to manage classes. Packages are directories that contain classes and interfaces.

### Exception Handling

Exception handling in Java is a mechanism to handle runtime errors. When an error occurs, Java creates an object (exception) that encapsulates information about the error and throws it.

## Demonstration

### Watch the demonstration video of TechTubeGuide:

https://github.com/PDhvanik/TechTubeGuide/assets/113344894/b0101275-cde9-43df-9bc4-ff239b1d890e

### Project screenshot:

![Screenshot 1](https://github.com/PDhvanik/TechTubeGuide/assets/113344894/f72ffede-1c81-4b29-8e75-43c32bcfeca7)

![Screenshot 2](https://github.com/PDhvanik/TechTubeGuide/assets/113344894/8eaa14d3-83a7-40e8-8f72-08613b015c4a)

![Screenshot 3](https://github.com/PDhvanik/TechTubeGuide/assets/113344894/2a1652fd-ea6e-411f-ac68-b7d66aaa19fa)


## Getting Started

### Prerequisites

- **Java Development Kit (JDK)**

- **Maven**

- **Node.js and npm**

- **MongoDB**


### Installation

1. **Clone the repository and start frontend server:**
   ```bash
   git clone https://github.com/PDhvanik/TechTubeGuide.git
   cd TechTubeGuide
   npm install
   npm start
   ```

2. **Install dependencies and build the project:**
   ```bash
   cd BackEnd Java
   mvn clean install
   ```

3. ***Run the Spring Boot application:***
   ```bash
   mvn spring-boot:run
   ```

### Usage

- Access the frontend application at `http://localhost:3000`.

- The backend API can be accessed at `http://localhost:8080`.

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Acknowledgements

A special thanks to my friend, [Neel Patel](https://www.linkedin.com/in/neel-patel-001673268/) , for their exceptional contribution to the frontend design of this project. Their creativity played a crucial role in delivering a polished, responsive user experience.
