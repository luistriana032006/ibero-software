USE iberosoftware;
CREATE TABLE employees(
id int Primary key auto_increment,
nombre varchar(100) not null,
edad int not null,
pais varchar(100),
cargo varchar(100),
anios int not null,
sueldo decimal(10,2),
correo varchar(100),
telefono varchar(20),
created_at timestamp default current_timestamp
);