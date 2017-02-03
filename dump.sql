-- MySQL dump 10.13  Distrib 5.5.49, for Win32 (AMD64)
--
-- Host: localhost    Database: artists_db
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'images/searchpic1.jpg','blah blah','New York','rich@rich.com','1234','Rock','Lots',1,'02/14/2017'),(2,'http://www.mens-hairstyle.com/wp-content/uploads/2016/12/Top-Guys-Dark-Hair-2016.jpg','Mike','Los Angeles','Helenavolskaja@gmail.com','password','Pop',NULL,1,NULL),(3,NULL,'testy test',NULL,'test@test.com','test',NULL,NULL,1,NULL),(4,NULL,'Cookie Monster',NULL,'cookie@cookie.com','cookie',NULL,NULL,1,'02/07/2017'),(5,NULL,'Cookie Monsta',NULL,'cookiemonsta@cookie.com','monsta',NULL,NULL,1,NULL),(6,NULL,'blahhhhh',NULL,'blah@blah.com','blah',NULL,NULL,1,NULL),(7,'http://soulsinaction.com/wp-content/uploads/2015/08/Lafa-Taylor.jpg','Photo pho','LA','photo@photo.com','photo','Rock','Lots and Lots',1,NULL),(9,'','Fritz Carlton',NULL,'fritzc@fc.com','1234','House',NULL,1,NULL),(10,'','Shlump',NULL,'shlump@shlump.com','1234','Bass',NULL,1,NULL),(11,'','Boostive',NULL,'boost@boost.com','1234','Rock',NULL,1,NULL),(12,'','Troy Boi',NULL,'troy@troy.com','1234','Bass',NULL,1,NULL),(13,'','Alina Baraz',NULL,'alina@alina.com','1234','Bass/Vocalist',NULL,1,NULL),(14,'','Jhene-Aiko',NULL,'ja@ja.com','1234','R&B',NULL,1,NULL);
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-02 18:10:23
