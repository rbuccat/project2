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
  `soundcloud` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (7,'http://soulsinaction.com/wp-content/uploads/2015/08/Lafa-Taylor.jpg','Lafa Taylor','LA','photo@photo.com','photo','Hip Hop','Lots and Lots',1,'02/07/2017 - 02/13/2017','https://soundcloud.com/lafataylor'),(9,'https://photos.smugmug.com/GalleriesFolder/Events/Fritz-Carlton-at-Go-Deep-/i-MvFDp9C/0/XL/DSC_6908-XL.jpg','Fritz Carlton','LA','fritzc@fc.com','1234','House',NULL,0,'02/29/2017','https://soundcloud.com/fritzcarlton'),(10,'https://s3.amazonaws.com/bit-photos/large/6805710.jpeg','Shlump','LA','shlump@shlump.com','1234','Bass',NULL,1,NULL,'https://soundcloud.com/shlumpofficial'),(11,'http://asset-img.ourstage.com/photo_galleries/EB/WJ/EBWJHKCRDDTZ-520x520.jpg','Boostive','LA','boost@boost.com','1234','Rock',NULL,1,'02/16/2017','https://soundcloud.com/boostivemusic'),(12,'https://sc-events.s3.amazonaws.com/4232627/main.jpg','Troy Boi','LA','troy@troy.com','1234','Bass',NULL,0,NULL,'https://soundcloud.com/troyboi'),(13,'https://static1.squarespace.com/static/55c197f9e4b0a73bde199287/t/55d21086e4b0d60073fd24ca/1439830166297/Alina+Main+Photo.jpg?format=2500w','Alina Baraz','LA','alina@alina.com','1234','Bass/Vocalist',NULL,1,NULL,'https://soundcloud.com/alinabaraz'),(14,'http://www.billboard.com/files/media/jhene-aiko-650.jpg','Jhene-Aiko','LA','ja@ja.com','1234','R&B',NULL,1,NULL,'https://soundcloud.com/jhene-aiko-1'),(15,'/images/dannig.jpg','Danni G','LA','danni@gmail.com','sahar111','Electronic',NULL,1,NULL,'https://soundcloud.com/danni-g'),(73,'https://a2-images.myspacecdn.com/images03/25/92441737e34d4196a8095767643f513b/300x300.jpg','Talia Namini','LA','talia.namini@gmail.com','1234','R&B',NULL,1,NULL,'https://soundcloud.com/talia-namini');
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

-- Dump completed on 2017-02-03 22:38:36
