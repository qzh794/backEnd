/*
Navicat MySQL Data Transfer

Source Server         : back_system
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : back_system

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2023-10-28 22:01:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `file_size` varchar(255) DEFAULT NULL,
  `upload_person` varchar(255) DEFAULT NULL,
  `upload_time` varchar(255) DEFAULT NULL,
  `download_number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `account` int(255) DEFAULT NULL,
  `onlyId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for login_log
-- ----------------------------
DROP TABLE IF EXISTS `login_log`;
CREATE TABLE `login_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` int(12) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_title` varchar(255) DEFAULT NULL,
  `message_category` varchar(255) DEFAULT NULL,
  `message_publish_department` varchar(255) DEFAULT NULL,
  `message_publish_name` varchar(255) DEFAULT NULL,
  `message_receipt_object` varchar(255) DEFAULT NULL,
  `message_click_number` int(11) DEFAULT NULL,
  `message_content` varchar(255) DEFAULT NULL,
  `message_publish_time` varchar(255) DEFAULT NULL,
  `message_update_time` varchar(255) DEFAULT NULL,
  `message_level` varchar(255) DEFAULT NULL,
  `message_status` int(11) DEFAULT NULL,
  `message_delete_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for operation_log
-- ----------------------------
DROP TABLE IF EXISTS `operation_log`;
CREATE TABLE `operation_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_person` varchar(255) DEFAULT NULL,
  `operation_content` varchar(255) DEFAULT NULL,
  `operation_level` varchar(255) DEFAULT NULL,
  `operation_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for outproduct
-- ----------------------------
DROP TABLE IF EXISTS `outproduct`;
CREATE TABLE `outproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_out_id` int(11) DEFAULT NULL,
  `product_out_number` int(11) DEFAULT NULL,
  `product_out_price` int(11) DEFAULT NULL,
  `product_out_apply_person` varchar(255) DEFAULT NULL,
  `product_audit_time` varchar(255) DEFAULT NULL,
  `product_out_audit_person` varchar(255) DEFAULT NULL,
  `audit_memo` varchar(255) DEFAULT NULL,
  `product_apply_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(10) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_category` varchar(255) DEFAULT NULL,
  `product_unit` varchar(255) DEFAULT NULL,
  `product_in_warehouse_number` int(11) DEFAULT NULL,
  `product_single_price` int(11) DEFAULT NULL,
  `product_all_price` int(11) DEFAULT NULL,
  `product_status` varchar(255) DEFAULT NULL,
  `product_create_person` varchar(255) DEFAULT NULL,
  `product_create_time` varchar(255) DEFAULT NULL,
  `product_update_time` varchar(255) DEFAULT NULL,
  `in_memo` varchar(255) DEFAULT NULL,
  `product_out_id` int(11) DEFAULT NULL,
  `product_out_number` int(11) DEFAULT NULL,
  `product_out_price` int(11) DEFAULT NULL,
  `product_out_apply_person` varchar(255) DEFAULT NULL,
  `product_apply_time` varchar(255) DEFAULT NULL,
  `apply_memo` varchar(255) DEFAULT NULL,
  `product_out_status` varchar(255) DEFAULT NULL,
  `product_audit_time` varchar(255) DEFAULT NULL,
  `product_out_audit_person` varchar(255) DEFAULT NULL,
  `audit_memo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for setting
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `set_name` varchar(255) DEFAULT NULL,
  `set_value` varchar(255) DEFAULT NULL,
  `set_text` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` int(12) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `identity` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `read_list` varchar(255) DEFAULT NULL,
  `read_status` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
