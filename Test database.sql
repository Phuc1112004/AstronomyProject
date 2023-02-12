create table planets(
id int primary key,
name varchar(50) not null unique,
location varchar(50) not null,
perimeter decimal not null,
period decimal not null,
orbital_velocity varchar(50) not null,
satellite_number int not null,
planetary_characteristics text not null,
atmosphere_structure varchar(255) not null,
);

create table nebula(
id int primary key,
name varchar(50) not null, 
structure varchar(50) not null,
forming text not null,
type_of_nebula varchar(20),
);

create table contact(
id int primary key,
name varchar(50) not null,
email varchar(50) not null,
comment text not null,
);