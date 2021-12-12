DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Table for department information
CREATE TABLE department (
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
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
		ON UPDATE CASCADE,
        ON DELETE CASCADE,
    PRIMARY KEY(role_id)
);

-- Table for employees information
CREATE TABLE employee(
	employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
	FOREIGN KEY (role_id) REFERENCES roles(role_id), 
		ON UPDATE CASCADE,
        ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(employee_id), 
		ON UPDATE CASCADE, 
        ON DELETE CASCADE,
    PRIMARY KEY (employee_id)
);



SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee;