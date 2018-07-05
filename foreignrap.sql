-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2018 at 02:15 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foreignrap`
--

-- --------------------------------------------------------

--
-- Table structure for table `france`
--

CREATE TABLE `france` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `france`
--

INSERT INTO `france` (`id`, `name`, `url`, `username`) VALUES
(1, 'SCH - Millions', 'nXW-hK2xXuI', 'HarveyDonTV'),
(2, 'Sofiane - Arafricain', 'VUq11wA1oDM', 'HarveyDonTV'),
(3, 'SCH - A7', 'httfJoffl9E', 'HarveyDonTV'),
(4, 'Lacrim - Oh bah oui ft. Booba', 'UMNtZBTXbmQ', 'HarveyDonTV'),
(5, 'SCH - PoupÃ©e Russe', 'DCXfaSR8Ka8', 'HarveyDonTV'),
(6, 'Niska - Commando', 'lohlxgsz8fU', 'HarveyDonTV'),
(7, 'PNL - DA', '9PODnRarD78', 'HarveyDonTV'),
(8, 'Siboy - Mobali ft. Benash, Damso', 'OBQGV-OuSgQ', 'Ljupce');

-- --------------------------------------------------------

--
-- Table structure for table `italy`
--

CREATE TABLE `italy` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `italy`
--

INSERT INTO `italy` (`id`, `name`, `url`, `username`) VALUES
(1, 'Capo Plaza - Giovane Fuoriclasse', '4eTlrAUNxuY', 'HarveyDonTV'),
(2, 'Sfera Ebbasta - Tran Tran', 'tU_KbOs8w2o', 'HarveyDonTV'),
(3, 'GHALI - Ninna Nanna', 's1xbQVNGSPQ', 'HarveyDonTV'),
(4, 'GHALI - Cara Italia', 'z3UCQj8EFGk', 'HarveyDonTV'),
(5, 'Vegas Jones - Malibu', '5LrlmnBCvHw', 'HarveyDonTV'),
(6, 'Emis Killa - Serio ft. Capo Plaza', 'G4F_3hyUOP0', 'HarveyDonTV');

-- --------------------------------------------------------

--
-- Table structure for table `netherlands`
--

CREATE TABLE `netherlands` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `netherlands`
--

INSERT INTO `netherlands` (`id`, `name`, `url`, `username`) VALUES
(1, 'Boef - SOFIANE', 'FQVYaX2rBAo', 'HarveyDonTV'),
(2, 'Ronnie Flex - Blijf Bij Mij ft. Maan', '5EbIIR-XpTs', 'HarveyDonTV'),
(3, 'Boef - ANTWOORD', '95WiP66QeHc', 'HarveyDonTV'),
(4, 'Dopebwoy - Afstand', 'yxOjGKIw-cI', 'Ljupce11');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`, `url`) VALUES
(1, 'SCH - A7', 'https://youtu.be/BnE9nGHjifY'),
(2, 'asdasd', 'https://youtu.be/BnE9nGHjifY'),
(3, 'harveyDon - ASD', 'BnE9nGHjifY');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `france`
--
ALTER TABLE `france`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `italy`
--
ALTER TABLE `italy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `netherlands`
--
ALTER TABLE `netherlands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `france`
--
ALTER TABLE `france`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `italy`
--
ALTER TABLE `italy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `netherlands`
--
ALTER TABLE `netherlands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
