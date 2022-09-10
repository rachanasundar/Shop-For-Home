
drop database ShopForHome_group4;

create database ShopForHome_group4;
use ShopForHome_group4;



 create table user(
 email varchar(50) primary key,
 name varchar(50),
 password varchar(20)
 );
drop table user;


 create table admin(
 email varchar(50) primary key,
 name varchar(50),
 password varchar(20)
 );


drop table admin;


 create table Product(
 product_id int primary key,
 product_name varchar(100),
 product_price float,
 image_Url varchar(10000),
 stock int,
 categories varchar(150)
 );

drop table product;



 create table discount(
 email varchar(50) primary key,
 coupon varchar(20),
 discount int,
 foreign key (email) references user(email)
 );
 

 drop table discount;



create table wish_list(
email varchar(50),
product_id int,
product_name varchar(40),
product_price float,
image_Url varchar(10000),
categories varchar(150),
foreign key (product_id) references product(product_id),
foreign key (email) references user(email),
primary key(email,product_id)
);
drop table wish_list;



create table cart(
 email varchar(50),
product_id int,
product_name varchar(40),
product_price float,
image_Url varchar(10000),
quantity int,
categories varchar(150),
foreign key (product_id) references product(product_id),
foreign key (email) references user(email),
primary key(email,product_id)
);
drop table cart;

create table orders(
date_And_Time varchar(50),
email varchar(50),
product_id int,
product_name varchar(40),
product_price float,
image_Url varchar(10000),
quantity int,
categories varchar(150),
foreign key (product_id) references product(product_id),
foreign key (email) references user(email),
primary key(email,product_id,date_and_time)
);



 create table discount(
 email varchar(50),
 coupon varchar(20),
 discount float,
 foreign key (email) references user(email),
 primary key(email,coupon)
 );
 
 

insert into product
value(101, "Round Table", 11500, "https://i.ytimg.com/vi/IBJ0ks0Qjm0/maxresdefault.jpg",
15,"Furniture"); 
insert into product
value(102, "Chair", 5500, "https://www.royaloakindia.com/thumbimages/ROYIND-royaloak-finlay-visitor-chair-533x36870.webp",
18,"Furniture"); 
insert into product
value(103, "Sofa", 25500, "https://m.media-amazon.com/images/I/51gBttfD8AL._SL1100_.jpg",
13,"Furniture"); 
insert into product
value(104, "Dining Table", 32500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhLFEIGxS6g5qgo8aB--zfLVkC8MsUQpjcg&usqp=CAU",
20,"Furniture"); 
insert into product
value(105, "Printed Bottle", 865, "https://cpimg.tistatic.com/05793587/b/4/Printed-Copper-Bottle-With-4-Glass-Set.jpg",
16,"Bottles"); 
insert into product
value(106, "Vintage Carpet", 2550, "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/solid-pattern-polyester-machine-made-9-x-6-feet-carpet-solid-pattern-polyester-machine-made-9-x-6-fe-k3kfdn.jpg",
18,"Accessories"); 
insert into product
value(107, "Retro telephone", 2422, "https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/antique-golden-round-base-brass---wood-dummy-retro-telephone-by-exim-decor-antique-golden-round-base-7kr7lp.jpg",
10,"Electronics"); 
insert into product
value(108, "Double Bedding Set", 2158, "https://ii1.pepperfry.com/media/catalog/product/b/l/494x544/blue-180-tc-100--cotton-4-pieces-double-bedding-set-majestic-collection-by-bella-casa-blue-180-tc-10-vnktp9.jpg",
25,"Furniture"); 


insert into product
value(114, "Buddha Decor Piece", 1675, "https://images-eu.ssl-images-amazon.com/images/I/513oXSfBzvL._SX300_SY300_QL70_FMwebp_.jpg",
17, "Decor");
select * from user;
select * from admin;
select * from product;
select * from discount;
select * from wish_list;
select * from cart ;
select * from orders;


insert into orders
value("Mon 07 Feb 2022 22:34:35","rachana@gmail.com",101, "Round Table", 11500, "https://i.ytimg.com/vi/IBJ0ks0Qjm0/maxresdefault.jpg",
15, "Table");
insert into admin 
value("divyakalagurram123@gmail.com", "Divyakala", "12345");
insert into admin
value("sindhutallapally25@gmail.com", "Sindhu", "12345");
insert into admin
value("rachanarachu333@gmail.com", "Rachana", "12345");


