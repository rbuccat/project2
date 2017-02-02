CREATE DATABASE IF NOT EXISTS artists_db;
USE artists_db;

# If the table already exists, remove it before trying to create the table again

CREATE TABLE artists (
id int NOT NULL AUTO_INCREMENT,
photo varchar(255) NOT NULL,
artist_name varchar(255) NOT NULL,
location varchar(255) NOT NULL,
email varchar(50) NOT NULL,
artist_password varchar(20) NOT NULL,
genre varchar(200) NOT NULL,
available BOOL DEFAULT true,
PRIMARY KEY (id)
);
