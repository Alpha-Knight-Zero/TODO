CREATE DATABASE "PERN-TODO"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
	CREATE TABLE todolist (
	id SERIAL PRIMARY KEY,
	description VARCHAR(288) NOT NULL,
	timerecorded TIMESTAMPTZ DEFAULT Now()
);
