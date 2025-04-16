/*
 Navicat Premium Dump SQL

 Source Server         : 卡卡110
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : 110.40.137.44:3306
 Source Schema         : aiinfo

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 14/04/2025 13:04:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pushinfo_latest
-- ----------------------------
DROP TABLE IF EXISTS `pushinfo_latest`;
CREATE TABLE `pushinfo_latest`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `sourceId` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '渠道ID',
  `sourceName` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '渠道名',
  `newsInfoId` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'news_infos主键ID',
  `newsType` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '现在是2个推送信息，stock和news',
  `status` int NULL DEFAULT NULL,
  `createDateTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '最近需要推送的数据' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pushinfo_latest
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
