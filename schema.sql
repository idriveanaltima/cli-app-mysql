DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES 
("diapers", "baby", 100.00, 0),
("bottles", "baby", 20.00, 5),
("tvs", "electronic", 700.00, 2),
("computer bag", "accessories", 12.00, 6),
("sofa", "furniture", 1500.00, 1),
("table", "furniture", 200.00, 10),
("lawn mower", "outdoor", 600.00, 15),
("leaf blower", "outdoor", 179.00, 3),
("blueberries", "plants", 21.95, 200),
("roses", "plants", 50.20, 10);

select * from products;
