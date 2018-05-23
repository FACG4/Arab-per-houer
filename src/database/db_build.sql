
DROP TABLE IF EXISTS users, projects, files, roles, projectType CASCADE;
CREATE TABLE roles(
  id SERIAL PRIMARY KEY,
  type_role VARCHAR(50) NOT NULL

);
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR(30) UNIQUE NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INTEGER REFERENCES roles(id)

);

CREATE TABLE projectType(
  id SERIAL PRIMARY KEY,
  type_project VARCHAR(50) NOT NULL
);

CREATE TABLE projects(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  price VARCHAR(50) NOT NULL,
  type_project INT NOT NULL,
  FOREIGN KEY (type_project) REFERENCES projectType(id)


);

CREATE TABLE  files(
  id SERIAL PRIMARY KEY,
  path VARCHAR(150) NOT NULL,
  project_id INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);


INSERT INTO users (user_name,password,email,first_name,last_name,role_id)
VALUES
  ('eman', '123', 'e@l.com', 'eman','kaled',0);
