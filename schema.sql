-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: flight
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `flights`
--

DROP TABLE IF EXISTS `flights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flights` (
  `flight_id` varchar(10) NOT NULL,
  `airline` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `departure_gate` varchar(10) DEFAULT NULL,
  `arrival_gate` varchar(10) DEFAULT NULL,
  `scheduled_departure` datetime DEFAULT NULL,
  `scheduled_arrival` datetime DEFAULT NULL,
  `actual_departure` datetime DEFAULT NULL,
  `actual_arrival` datetime DEFAULT NULL,
  PRIMARY KEY (`flight_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flights`
--

LOCK TABLES `flights` WRITE;
/*!40000 ALTER TABLE `flights` DISABLE KEYS */;
INSERT INTO `flights` VALUES ('6E 2341','Indigo','On Time','A14','B7','2024-07-26 14:00:00','2024-07-26 18:00:00','2024-07-26 10:00:00',NULL),('6E 2342','Indigo','Delayed','C3','D4','2024-07-26 16:00:00','2024-07-26 20:00:00','2024-07-26 19:30:00',NULL),('6E 2343','Indigo','Cancelled','E2','F1','2024-07-26 12:00:00','2024-07-26 16:00:00',NULL,NULL),('6E 2344','Indigo','Delayed','B3','C3','2024-07-27 10:00:00','2024-07-27 14:00:00',NULL,NULL),('6E 2345','Indigo','Delayed','D5','E3','2024-07-27 15:00:00','2024-07-27 19:00:00',NULL,NULL),('6E 2346','Indigo','On Time','A3','B5','2024-07-28 08:00:00','2024-07-28 12:00:00',NULL,NULL),('6E 2347','Indigo','On Time','C1','D2','2024-07-28 11:00:00','2024-07-28 15:00:00',NULL,NULL),('6E 2348','Indigo','Cancelled','E5','F6','2024-07-28 13:00:00','2024-07-28 17:00:00',NULL,NULL),('6E 2349','Indigo','Delayed','B3','C4','2024-07-28 14:00:00','2024-07-28 18:00:00',NULL,NULL),('6E 2350','Indigo','On Time','A1','B2','2024-07-29 09:00:00','2024-07-29 13:00:00',NULL,NULL),('6E 2351','Indigo','Delayed','C5','D3','2024-07-29 11:00:00','2024-07-29 15:00:00',NULL,NULL),('6E 2352','Indigo','Cancelled','E1','F2','2024-07-29 16:00:00','2024-07-29 20:00:00',NULL,NULL),('6E 2353','Indigo','On Time','A4','B6','2024-07-30 07:00:00','2024-07-30 11:00:00',NULL,NULL),('6E 2354','Indigo','Delayed','D6','E4','2024-07-30 09:00:00','2024-07-30 13:00:00',NULL,NULL),('6E 2355','Indigo','Cancelled','C2','D1','2024-07-30 12:00:00','2024-07-30 16:00:00',NULL,NULL),('6E 2356','Indigo','On Time','B4','C6','2024-07-30 14:00:00','2024-07-30 18:00:00',NULL,NULL),('6E 2357','Indigo','Delayed','E3','F4','2024-07-30 16:00:00','2024-07-30 20:00:00',NULL,NULL),('6E 2358','Indigo','Cancelled','A6','B1','2024-07-31 08:00:00','2024-07-31 12:00:00',NULL,NULL),('6E 2359','Indigo','On Time','C5','D4','2024-07-31 10:00:00','2024-07-31 14:00:00',NULL,NULL),('6E 2360','Indigo','Delayed','B2','C1','2024-07-31 12:00:00','2024-07-31 16:00:00',NULL,NULL),('6E 2361','Indigo','On Time','A7','B8','2024-07-31 14:00:00','2024-07-31 18:00:00',NULL,NULL),('6E 2362','Indigo','Delayed','C8','D9','2024-07-31 16:00:00','2024-07-31 20:00:00',NULL,NULL);
/*!40000 ALTER TABLE `flights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` int NOT NULL,
  `flight_id` varchar(10) DEFAULT NULL,
  `message` text,
  `timestamp` datetime DEFAULT NULL,
  `method` varchar(10) DEFAULT NULL,
  `recipient` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`notification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,'6E 2341','Your flight 6E 2341 is On Time. Departure gate: A14. Arrival gate: B7.','2024-07-26 13:00:00','SMS','+919971263439'),(2,'6E 2342','Your flight 6E 2342 is Delayed. Departure gate: C3. Arrival gate: D4. New departure time: 2024-07-26T19:30.','2024-07-26 15:30:00','Email','surbhigurjar1512@gmail.com'),(3,'6E 2343','Your flight 6E 2343 has been cancelled.','2024-07-26 11:00:00','App','user_app_id_12345'),(4,'6E 2344','Your flight 6E 2344 is Delayed. Departure gate: B3. Arrival gate: C3.','2024-07-27 09:00:00','SMS','+918949052394'),(5,'6E 2345','Your flight 6E 2345 is delayed. New departure time: 2024-07-27 16:00:00Z. Departure gate: D5.','2024-07-27 14:30:00','Email','user2@example.com'),(6,'6E 2346','Your flight 6E 2346 is on time. Departure gate: A3.','2024-07-28 07:00:00','App','user_app_id_12346'),(7,'6E 2347','Your flight 6E 2347 is on time. Departure gate: C1.','2024-07-28 10:00:00','SMS','+1234567892'),(8,'6E 2348','Your flight 6E 2348 has been cancelled.','2024-07-28 12:00:00','Email','user3@example.com'),(9,'6E 2349','Your flight 6E 2349 is delayed. New departure time: 2024-07-28 15:00:00Z. Departure gate: B3.','2024-07-28 13:30:00','App','user_app_id_12347'),(10,'6E 2350','Your flight 6E 2350 is on time. Departure gate: A1.','2024-07-29 08:00:00','SMS','+1234567893'),(11,'6E 2351','Your flight 6E 2351 is delayed. New departure time: 2024-07-29 12:00:00Z. Departure gate: C5.','2024-07-29 10:30:00','Email','user4@example.com'),(12,'6E 2352','Your flight 6E 2352 has been cancelled.','2024-07-29 15:00:00','App','user_app_id_12348'),(13,'6E 2353','Your flight 6E 2353 is on time. Departure gate: A4.','2024-07-30 06:00:00','SMS','+1234567894'),(14,'6E 2354','Your flight 6E 2354 is delayed. New departure time: 2024-07-30 11:00:00Z. Departure gate: D6.','2024-07-30 09:30:00','Email','user5@example.com'),(15,'6E 2355','Your flight 6E 2355 has been cancelled.','2024-07-30 11:00:00','App','user_app_id_12349'),(16,'6E 2356','Your flight 6E 2356 is on time. Departure gate: B4.','2024-07-30 13:00:00','SMS','+1234567895'),(17,'6E 2357','Your flight 6E 2357 is delayed. New departure time: 2024-07-30 17:00:00Z. Departure gate: E3.','2024-07-30 15:30:00','Email','user6@example.com'),(18,'6E 2358','Your flight 6E 2358 has been cancelled.','2024-07-31 07:00:00','App','user_app_id_12350'),(19,'6E 2359','Your flight 6E 2359 is on time. Departure gate: C5.','2024-07-31 09:00:00','SMS','+1234567896'),(20,'6E 2360','Your flight 6E 2360 is delayed. New departure time: 2024-07-31 13:00:00Z. Departure gate: B2.','2024-07-31 11:30:00','Email','user7@example.com'),(21,'6E 2361','Your flight 6E 2361 is on time. Departure gate: A7.','2024-07-31 13:00:00','App','user_app_id_12351');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-30 21:28:13
