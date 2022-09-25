-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: equizdb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `faculty_info`
--

DROP TABLE IF EXISTS `faculty_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_info` (
  `facultyid` bigint NOT NULL,
  `dateofbirth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `mobile_no` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`facultyid`),
  UNIQUE KEY `UK_tl8pdlb9cr6v4v5h1pqqw8018` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_info`
--

LOCK TABLES `faculty_info` WRITE;
/*!40000 ALTER TABLE `faculty_info` DISABLE KEYS */;
INSERT INTO `faculty_info` VALUES (1,'1977-10-29','janhvideo8899@gmail.com','Janhvi','Female','Deo','Anil',9881129320,'Pass@123','JanhviDeo');
/*!40000 ALTER TABLE `faculty_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (8);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_bank`
--

DROP TABLE IF EXISTS `question_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_bank` (
  `question_id` int NOT NULL,
  `correct_answer` tinyblob,
  `facultyid` bigint DEFAULT NULL,
  `marks` int DEFAULT NULL,
  `option1` tinyblob,
  `option2` tinyblob,
  `option3` tinyblob,
  `option4` tinyblob,
  `question_text` tinyblob,
  `quizid` int DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_bank`
--

LOCK TABLES `question_bank` WRITE;
/*!40000 ALTER TABLE `question_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_schedule`
--

DROP TABLE IF EXISTS `quiz_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_schedule` (
  `quizid` int NOT NULL,
  `duration` int DEFAULT NULL,
  `facultyid` bigint DEFAULT NULL,
  `quiz_desc` varchar(255) DEFAULT NULL,
  `quiz_name` varchar(255) DEFAULT NULL,
  `schedule_date` varchar(255) DEFAULT NULL,
  `schedule_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`quizid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_schedule`
--

LOCK TABLES `quiz_schedule` WRITE;
/*!40000 ALTER TABLE `quiz_schedule` DISABLE KEYS */;
INSERT INTO `quiz_schedule` VALUES (2,2,1,'quiz contains pointers arithmetic concepts.and pointers declarations\n','Pointers','2022-09-24','15:00');
/*!40000 ALTER TABLE `quiz_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info` (
  `prnno` bigint NOT NULL,
  `dateofbirth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `mobile_no` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`prnno`),
  UNIQUE KEY `UK_gx6s2s2ndparwgk6f215dnjuk` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info`
--

LOCK TABLES `student_info` WRITE;
/*!40000 ALTER TABLE `student_info` DISABLE KEYS */;
INSERT INTO `student_info` VALUES (220345920079,'1996-11-06','pratikbaravkar95@gmail.com','Pratik','Male','Baravkar','Ramchandra',8806056123,'xyz@123','PratikBaravkar');
/*!40000 ALTER TABLE `student_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_result`
--

DROP TABLE IF EXISTS `student_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_result` (
  `result_id` int NOT NULL,
  `marks` int DEFAULT NULL,
  `prn_no` bigint DEFAULT NULL,
  `quiz_name` varchar(255) DEFAULT NULL,
  `quiz_id` int DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `total_marks` int DEFAULT NULL,
  PRIMARY KEY (`result_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_result`
--

LOCK TABLES `student_result` WRITE;
/*!40000 ALTER TABLE `student_result` DISABLE KEYS */;
INSERT INTO `student_result` VALUES (7,0,220345920079,'Pointers',2,'Pratik Ramchandra Baravkar',5);
/*!40000 ALTER TABLE `student_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `text_question`
--

DROP TABLE IF EXISTS `text_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `text_question` (
  `question_id` int NOT NULL,
  `correct_answer` text,
  `facultyid` bigint DEFAULT NULL,
  `marks` int DEFAULT NULL,
  `option1` text,
  `option2` text,
  `option3` text,
  `option4` text,
  `question_text` text,
  `quizid` int DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `text_question`
--

LOCK TABLES `text_question` WRITE;
/*!40000 ALTER TABLE `text_question` DISABLE KEYS */;
INSERT INTO `text_question` VALUES (3,'Representation of NULL pointer',1,2,'Representation of NULL pointer','Representation of void pointer','Error','None of the above','1.What is (void*)0?',2),(4,'char *p = (char*)malloc(100);',1,3,'char p = *malloc(100);','char *p = (char) malloc(100);','char *p = (char*)malloc(100);','char *p = (char *)(malloc*)(100);','2.Can you combine the following two statements into one?\nchar *p;\np = (char*) malloc(100);',2);
/*!40000 ALTER TABLE `text_question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-25 12:58:21
