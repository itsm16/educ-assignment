CREATE TABLE `schools_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` varchar(320) NOT NULL,
	`latitude` float NOT NULL,
	`longitude` float NOT NULL,
	CONSTRAINT `schools_table_id` PRIMARY KEY(`id`)
);
