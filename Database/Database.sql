-- Pastikan sudah berada di database
CREATE DATABASE IF NOT EXISTS web_pembelajaran CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE web_pembelajaran;

-- DROP TABLE jika ada sebelumnya
DROP TABLE IF EXISTS `progress`;
DROP TABLE IF EXISTS `materi`;
DROP TABLE IF EXISTS `users`;

-- Tabel Users
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('murid','guru') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabel Materi
CREATE TABLE `materi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(150) NOT NULL,
  `isi` text NOT NULL,
  `dibuat_oleh` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dibuat_oleh` (`dibuat_oleh`),
  CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`dibuat_oleh`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabel Progress
CREATE TABLE `progress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `materi_id` int DEFAULT NULL,
  `status` enum('belum','sedang','selesai') DEFAULT 'belum',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `materi_id` (`materi_id`),
  CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `progress_ibfk_2` FOREIGN KEY (`materi_id`) REFERENCES `materi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data Dummy Users
INSERT INTO `users` VALUES
(1,'christianbahari616@gmail.com','$2b$10$/rsUrt.UiN2CifmIwRmFQO/Iyq/cj7.tvaDKmDQFjAOIlc/JifZyu','murid','2025-06-08 17:52:54','Christian Bahari'),
(2,'Ericsantoso@gmail.com','$2b$10$5UILZ1xZB8ROYF0oA/QYU.Fy18U9iZNHceFOWt0MF3N4y3URMucA6','guru','2025-06-08 17:54:25','Keane');
