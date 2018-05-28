DROP TABLE IF EXISTS users, projects, files, roles, projectType CASCADE;
CREATE TABLE roles(
id SERIAL PRIMARY KEY,
type_role VARCHAR(150) NOT NULL

);
CREATE TABLE users(
id SERIAL PRIMARY KEY,
user_name VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
type_role INT NOT NULL,
position VARCHAR(400) ,
FOREIGN KEY (type_role) REFERENCES roles(id)

);


CREATE TABLE projectType(
id SERIAL PRIMARY KEY,
type_project VARCHAR(50) NOT NULL
);

CREATE TABLE projects(
id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
user_id INT NOT NULL REFERENCES users(id),
description VARCHAR(100) NOT NULL,
price VARCHAR(50) NOT NULL,
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
type_project INT NOT NULL,
FOREIGN KEY (type_project) REFERENCES projectType(id)

);

CREATE TABLE files(
id SERIAL PRIMARY KEY,
path VARCHAR(150) NOT NULL,
project_id INT NOT NULL,
FOREIGN KEY (project_id) REFERENCES projects(id)
);
INSERT INTO roles (type_role)VALUES
('cleint'),
('freelance');

INSERT INTO users (user_name,password,email,first_name,last_name,type_role,position)
VALUES
('emann', '123', 'e@lll.com', 'emanh','kaled','1','front end devloper'),
('ahmed', '123', 'e@lk.com', 'eman','kaled','1','react'),
('eman', '123', 'e@l.com', 'eman','kaled','1','back end');

INSERT INTO projectType (type_project)
VALUES
('hour'),('total');





  INSERT INTO projects(title,user_id,description,price,time,type_project)
  VALUES
    ('first','1', 'hiiiii ','10',now(),'1'),
    ('firstffff','1', 'hiiiii ','10',now(),'1'),
  ('first dd','2', 'halllo','10',now(),'1'),
   ('first dd','3', 'how','10',now(),'1')

 ;




