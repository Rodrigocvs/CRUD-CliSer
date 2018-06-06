CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

create table customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    namee VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR (15)
);

SHOW TABLES;

describe customer;