CREATE DATABASE IF NOT EXISTS artists_db;
USE artists_db;

CREATE TABLE `artists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) DEFAULT NULL,
  `artist_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `artist_password` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  `date` varchar(255) DEFAULT NULL,
  `soundcloud` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)

  



