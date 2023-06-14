# User-mngt System

##This is a User management sytem that show how to use CRUD operation. Using handlebars, Routes, MySQL and Express js etc. Please see the package.json file. It includes all the dependecies.

Note: Before you clone it. You need to have your XAMPP to your terminal in order to run the database.
Step 1: Create a database call it 'User-mngt'
Step 2: In SQL script paste this.
CREATE TABLE `user-mngt`.`user` (`Id` INT NOT NULL AUTO_INCREMENT , `First_name` VARCHAR(100) NOT NULL , `Last_name` INT(45) NOT NULL , `Email` VARCHAR(45) NOT NULL , `Phone` VARCHAR(45) NOT NULL , `Address` VARCHAR(45) NOT NULL , `Comments` TEXT NOT NULL , `Status` VARCHAR(10) NOT NULL DEFAULT 'active' , PRIMARY KEY (`Id`)) ENGINE = InnoDB;
Step 3: Run the apache and mysql on XAMPP app. So it will run smoothly.
