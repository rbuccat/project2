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

  INSERT INTO `artists` VALUES (1,'images/searchpic1.jpg','blah blah','New York','rich@rich.com','1234','Rock','Lots',1,'02/14/2017'),(2,'http://www.mens-hairstyle.com/wp-content/uploads/2016/12/Top-Guys-Dark-Hair-2016.jpg','Mike','Los Angeles','Helenavolskaja@gmail.com','password','Pop',NULL,1,NULL),(3,NULL,'testy test',NULL,'test@test.com','test',NULL,NULL,1,NULL),(4,NULL,'Cookie Monster',NULL,'cookie@cookie.com','cookie',NULL,NULL,1,'02/07/2017'),(5,NULL,'Cookie Monsta',NULL,'cookiemonsta@cookie.com','monsta',NULL,NULL,1,NULL),(6,NULL,'blahhhhh',NULL,'blah@blah.com','blah',NULL,NULL,1,NULL),(7,'http://soulsinaction.com/wp-content/uploads/2015/08/Lafa-Taylor.jpg','Photo pho','LA','photo@photo.com','photo','Rock','Lots and Lots',1,NULL),(9,'','Fritz Carlton',NULL,'fritzc@fc.com','1234','House',NULL,1,NULL),(10,'','Shlump',NULL,'shlump@shlump.com','1234','Bass',NULL,1,NULL),(11,'','Boostive',NULL,'boost@boost.com','1234','Rock',NULL,1,NULL),(12,'','Troy Boi',NULL,'troy@troy.com','1234','Bass',NULL,1,NULL),(13,'','Alina Baraz',NULL,'alina@alina.com','1234','Bass/Vocalist',NULL,1,NULL),(14,'','Jhene-Aiko',NULL,'ja@ja.com','1234','R&B',NULL,1,NULL);