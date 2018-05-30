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
title VARCHAR(100) NOT NULL,
user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
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
('freelance'),
('admin');
INSERT INTO users (user_name,password,email,first_name,last_name,type_role,position) VALUES('emank','$2b$10$byxEkqFl2LdMcl01ccVQ5.ObC48tep0lBek7sWsQqdBvKjj4eFNMa','eman_h_2018@live.com','eman','khaled','3','admin');
  




INSERT INTO projectType (type_project)
VALUES
('hour'),('total');




