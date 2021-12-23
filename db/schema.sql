DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Table for department information
CREATE TABLE departments (
	id_departments INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id_departments)
);


-- Table for roles information
CREATE TABLE roles (
	id_roles INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    department_id INT NOT NULL,
     PRIMARY KEY(id_roles),
     CONSTRAINT fk_departments FOREIGN KEY (department_id)
      REFERENCES departments(id_departments) ON DELETE CASCADE
);

-- Table for employees information
CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT, 
    PRIMARY KEY (id),
	 CONSTRAINT fk_roles FOREIGN KEY (role_id) 
        REFERENCES roles(id_roles) ON DELETE CASCADE,
     CONSTRAINT fk_employees FOREIGN KEY (manager_id)
        REFERENCES employees(id) ON DELETE SET NULL
    
);


SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee;