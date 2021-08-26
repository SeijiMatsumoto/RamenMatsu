DROP TABLE IF EXISTS Product CASCADE;

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  phone_number VARCHAR,
  email VARCHAR
);