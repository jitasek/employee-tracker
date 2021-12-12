USE employees_db;

INSERT INTO departments(name)
VALUES ("Engineering"), ("Sales"), ("Finance"), ("Marketing"), ("Legal");


INSERT INTO roles ("title", "salary", "department_id")
VALUES ("Sales Person", 80000, 2),
("Lead Engineer", 150000, 1),
("Software Engineer", 130000, 1),
("Account Manager", 160000, 2),
("Accountant", 130000, 3),
("Legal Team Lead", 250000, 5),
("Lawyer", 150000, 5),
("Sales Lead", 150000, 2),
("Web Developer", 140000, 1),
("Head of Marketing", 180000, 4);

INSERT INTO employee ("first_name", "last_name", "role_id", "manager_id")
VALUES ("Henry", "Williams", 1, 8),
("Ashley", "Rodriguez", 2, NULL),
("Kevin", "Tupik", 3, 2),
("Mike", "Chan", 4, 8),
("Malia", "Brown", 5, NULL),
("Sarah", "Lourd", 6, NULL),
("Tom", "Allen", 7, 6),
("Wesley", "Smith", 8, NULL),
("Tom", "Allen", 9, 2),
("Tom", "Allen", 10, NULL);