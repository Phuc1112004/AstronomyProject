create table planets(
id int primary key,
name varchar(50) not null unique,
location varchar(50) not null,
perimeter varchar(50) not null,
period varchar(50) not null,
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


insert into planets(id,name,location,perimeter,period,orbital_velocity,satellite_number,planetary_characteristics,atmosphere_structure)
values(1,'Earth','third planet from the sun','6,283 AU','365,25696 ngày','29.7827 km/s',1,'Diameter:
  - at the equator 12756.28 km.
  - at the pole 12713.56 km.
  - average 12742.02 km.
Glass Circumference:
  - at the equator 40075 km.
  - across the two poles 40008 km.
Area 510,100,000 km²
Volume 1083.2073 × 109 km³.
Mass 5973.6 × 1024 kg.
Self-rotating cycle 23.934 hours.
Rotational speed at the equator is 1674.38 km/h.
Reflectance coefficient 0.367
Surface temperature:
  - average 287 CZK','nitrogen (N2), Oxygen(O2), Argon (Ar), Carbon dioxide (CO2), Water vapor (H2O)');


select * from planets

