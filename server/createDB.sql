CREATE TABLE todolist (
	id SERIAL PRIMARY KEY,
	description VARCHAR(288) NOT NULL,
	timerecorded TIMESTAMPTZ DEFAULT Now()
);
