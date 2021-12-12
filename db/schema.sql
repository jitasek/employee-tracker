DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Table for department information
CREATE TABLE departments (
	department_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(department_id)
);


-- Table for roles information
CREATE TABLE roles (
	role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    department_id INT,
     PRIMARY KEY(role_id),
     FOREIGN KEY (department_id) REFERENCES departments(department_id)
		-- ON UPDATE CASCADE,
        ON DELETE CASCADE
);

-- Table for employees information
CREATE TABLE employees(
	employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT, 
    PRIMARY KEY (employee_id),
	 FOREIGN KEY (role_id) REFERENCES roles(role_id)
		ON UPDATE CASCADE
        ON DELETE CASCADE,
     FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
		ON UPDATE CASCADE
        ON DELETE CASCADE
    
);


-- SELECT * FROM department;

-- SELECT * FROM roles;

-- SELECT * FROM employee;









