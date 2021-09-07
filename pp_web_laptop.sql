-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: pp_web_laptop
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

use sql6435264;

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `user_id` int NOT NULL,
  `laptop_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `laptop_id` (`laptop_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`laptop_id`) REFERENCES `laptops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (4,'Sản phẩm tốt',1,1,'2021-09-06 13:19:50','2021-09-06 13:19:50');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluations`
--

DROP TABLE IF EXISTS `evaluations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rate` int DEFAULT NULL,
  `user_id` int NOT NULL,
  `laptop_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `laptop_id` (`laptop_id`),
  CONSTRAINT `evaluations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `evaluations_ibfk_2` FOREIGN KEY (`laptop_id`) REFERENCES `laptops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluations`
--

LOCK TABLES `evaluations` WRITE;
/*!40000 ALTER TABLE `evaluations` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url_image` varchar(255) NOT NULL,
  `laptop_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `laptop_id` (`laptop_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`laptop_id`) REFERENCES `laptops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://phucanhcdn.com/media/product/43711_zenbook_ux425_grey_bh_ha1.jpg',1),(2,'https://phucanhcdn.com/media/product/44225_vivobook_m413_silver_ha1.jpg',2),(3,'https://phucanhcdn.com/media/product/43495_tuf_gaming_fx516_ha2.jpg',3),(4,'https://phucanhcdn.com/media/product/43971_swift_3_sf314_511_56g1_ha6.jpg',4),(5,'https://phucanhcdn.com/media/product/42810_nitro_series_an515_2020_ha1.jpg',5),(6,'https://phucanhcdn.com/media/product/42693_macbook_pro_13_m1_2020_grey_ha1.jpg',6),(7,'https://maytinhtrananh.vn/img/p/apple-macbook-air-13-mgn93sa-a-apple-m1-8gb-ram-256gb-ssd-13-3-inch-ips-mac-os-bac-new-p7386.png',7),(8,'https://phucanhcdn.com/media/product/43820_yoga_slim_9_14_ha2.jpg',8),(9,'https://phucanhcdn.com/media/product/44436_modern_14_b11_grey_ha1.jpg',9),(10,'https://phucanhcdn.com/media/product/44238_dell_gaming_g5_5500_silver_ha4.jpg',10);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laptops`
--

DROP TABLE IF EXISTS `laptops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `laptops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL,
  `screen` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `os` varchar(255) NOT NULL,
  `storage` varchar(255) NOT NULL,
  `graphic_card` varchar(255) NOT NULL,
  `description` text,
  `pin` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `sale` float DEFAULT NULL,
  `material` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laptops`
--

LOCK TABLES `laptops` WRITE;
/*!40000 ALTER TABLE `laptops` DISABLE KEYS */;
INSERT INTO `laptops` VALUES (1,'Laptop Asus Zenbook UX425EA-KI429T','Core i5 1135G7 2.4GHz-8MB','8Gb','14.0Inch Full HD','Grey','Windows 10 Home','512GB M.2 NVMe™ PCIe® 3.0 SSD','Intel® Iris® Xe Graphics','Zenbook UX425EA-KI429T là laptop hiện đại tuyệt vời với một cấu hình mạnh mẽ, thiết kế mỏng nhẹ chắc chắn, bàn phím hoàn hảo và bàn di chuột hữu dụng, cũng như thời lượng pin ngoài mức mong đợi.','	4 cell',23790000,NULL,'Plastic','Asus',100),(2,'Laptop Asus Vivobook M413IA-EK481T','Ryzen 7 4700U 2.0Ghz-8Mb','8Gb (8GB DDR4 on board)','14.0Inch Full HD','Silver','Windows 10 Home','1TB M.2 NVMe™ PCIe® 3.0  SSD','AMD Radeon R3 graphics','Không chỉ là chiếc laptop học tập - văn phòng với thiết kế mỏng nhẹ, cá tính, Asus Vivobook M413IA-EK481T còn mang trên mình sức mạnh tuyệt vời của AMD Ryzen 5, cho bạn hoàn thành công việc một cách nhanh chóng hơn bao giờ hết.','3 cell',19990000,NULL,'Plastic','Asus',50),(3,'Laptop Asus TUF Gaming FX516PE-HN005TCore i7 11370H 3.3Ghz-12Mb','Core i7 11370H 3.3Ghz-12Mb','8Gb','15.6\"FHD (1920 x 1080) 144Hz IPS LED-backlit; Anti-Glare','Grey','Windows 10 Home','512GB M.2 NVMe™ PCIe® 3.0 SSD','Nvidia RTX 3050 TI 4GB DDR6','TUF Gaming FX516PE-HN005T hoàn toàn mới cho trải nghiệm chơi game mạnh mẽ trong khung máy siêu mỏng. CPU lên đến Gen Intel® Core™ i7-11370H thế hệ thứ 11 và GPU GeForce RTX™ 3050 Ti cho trải nghiệm mượt mà trên màn hình 144Hz siêu nhanh.','4 cell',28490000,NULL,'Aluminum','Asus',0),(4,'Laptop Acer Swift 3 SF314 511 56G1 NX.ABLSV.002','Core i5 1135G7 2.4 Ghz up to 4.2Ghz-8Mb','16Gb','14.0Inch Full HD','Silver','Windows 10 Home','512GB PCIe NVMe SSD (nâng cấp tối đa 1TB SSD)','Intel Iris Xe Graphics','Laptop Acer Swift 3 là sản phẩm mang kế đầy tính thời trang nổi bật, với ngoại hình mỏng nhẹ tinh tế, Swift 3 còn được tích hợp những công nghệ mới nhất sẵn sàng đáp ứng tốt yêu cầu về một Laptop học tập - văn phòng. ','4 cell',20190000,NULL,'Aluminum','Acer',10),(5,'Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002','Core i5 11300H 3.1Ghz Up to 4.4Ghz-8Mb','8Gb','15.6Inch Full HD','Black','Windows 10 Home','512GB PCIe NVMe SSD cắm sẵn','Nvidia GeForce GTX 1650 4GB GDDR6 DDR5','Acer Nitro 5 dòng sản phẩm laptop gaming tầm trung đến từ Acer luôn được đông đảo các game thủ yêu thích và lựa chọn bởi giá thành tốt, hiệu năng ấn tượng, ngoại hình hầm hố bắt mắt đậm chất game thủ.','4 cell',20990000,NULL,'Plastic','Acer',20),(6,'Laptop Apple Macbook Pro M1 8GPU/16Gb/256Gb Silver - Z11D000E','Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine','16GB','13-inch Retina display with True Tone','Sliver','Mac OS X','256GB SSD','8-core GPU','Apple Macbook Pro Z11D000E5 sở hữu thiết kế sang trọng từ kim loại nguyên khối được kế thừa từ các thế hệ trước nhưng bên trong là một cấu hình cực kỳ đáng gờm.','Built-in 58.2-watt-hour lithium-polymer battery 61W USB-C Power Adapter',36490000,NULL,'Aluminum','Macbook',5),(7,'Laptop Apple Macbook Pro M1 8GPU/16Gb/256Gb Silver - Z11D000E5','Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine','16GB','13-inch Retina display with True Tone','Grey','Mac OS X','256GB SSD','8-core GPU','Apple Macbook Pro Z11D000E5 sở hữu thiết kế sang trọng từ kim loại nguyên khối được kế thừa từ các thế hệ trước nhưng bên trong là một cấu hình cực kỳ đáng gờm.','Built-in 58.2-watt-hour lithium-polymer battery 61W USB-C Power Adapter',36490000,NULL,'Silver','Macbook',2),(8,'Laptop Lenovo Yoga Slim 9 14ITL5 82D1004JVN','Core i7 1165G7 2.8Ghz Up to 4.7Ghz-12Mb','16Gb','14\" UHD - 4K IPS 500nits Glossy, Touch','Shadow Black','Windows 10 Home','1Tb SSD','14\" UHD - 4K IPS 500nits Glossy, Touch','Laptop Lenovo Yoga Slim 9 với thiết kế mỏng nhẹ tinh tế là một sản phẩm thuộc phân khúc laptop cao cấp đến từ thương hiệu Lenovo. Sản phẩm không đơn thuần là một phương tiện mạnh mẽ hỗ trợ đắc lực cho công việc, mà còn như một phụ kiện thời trang làm nổi bật lên phong cách chuyên nghiệp của người dùng','4 cell - Integrated 63.5Wh',49190000,NULL,'Aluminum','Lenovo',1),(9,'Laptop MSI Modern 14 B10MW-646VN','Core i5 10210U 2.1Ghz-6MB','8Gb','14.0Inch Full HD','Grey','Windows 10 Home','512GB SSD','Intel® UHD Graphics','Laptop MSI với cấu hình cao, thiết kế mỏng nhẹ, sang trọng, phù hợp với dân văn phòng','3 cell',16790000,NULL,'Plastic','MSI',20),(10,'Laptop Dell Gaming G5 5505 70252801','Ryzen 5 4600H 3.0Ghz Up to 4.0Ghz-8Mb','8Gb','15.6Inch Full HD','Silver','Windows 10 Home','512Gb SSD','AMD Radeon RX 5600M 6GB','Tận hưởng những giây phút giải trí đỉnh cao với laptop gaming đến từ thương hiệu Dell, G5 5505 còn đáp ứng đầy đủ yêu cầu của một laptop đồ họa kỹ thuật.','4 cell',25490000,NULL,'Silver','Dell',10);
/*!40000 ALTER TABLE `laptops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `laptop_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `laptop_id` (`laptop_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`laptop_id`) REFERENCES `laptops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,1,1);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `status` int DEFAULT '0',
  `address` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,0,'295 Nguyen Trai','Adrien Nguyen',337479966,'2021-09-06 14:51:28','2021-09-06 14:51:28');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone` bigint NOT NULL,
  `gender` int DEFAULT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  `role` int DEFAULT '0',
  `status` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'phuonga1k51@gmail.com','$2b$10$W12EyaZLsHUFMgKpaC25lObKRxKZ5VRz9MNhoDYhMv7FEfWOa1kWG','Adrien Nguyen','295 Nguyen Trai',337479966,NULL,NULL,0,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-06 22:13:49
