-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.8-MariaDB
-- PHP 版本： 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `crud`
--

-- --------------------------------------------------------

--
-- 資料表結構 `memberprofile`
--

CREATE TABLE `memberprofile` (
  `memberId` int(11) NOT NULL,
  `Name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員名稱',
  `Phone` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員電話',
  `Email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員信箱'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `memberprofile`
--

INSERT INTO `memberprofile` (`memberId`, `Name`, `Phone`, `Email`) VALUES
(221, 'User1331231', '0978055599', 'you257963148@gmail.com'),
(222, 'User1331231', '0978055599', 'you257963148@gmail.com'),
(223, 'User1', '0978055599', 'you257963148@gmail.com'),
(224, 'User1331231', '0978055599', 'love257963148@gmial.com');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `memberprofile`
--
ALTER TABLE `memberprofile`
  ADD PRIMARY KEY (`memberId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `memberprofile`
--
ALTER TABLE `memberprofile`
  MODIFY `memberId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
