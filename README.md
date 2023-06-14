# User-mngt System

## This is a User management sytem that show how to use CRUD operation. Using handlebars, Routes, MySQL and Express js etc. Please see the package.json file. It includes all the dependecies.

Note: Before you clone it. You need to have your XAMPP to your terminal in order to run the database.

Step 1: Create a database call it 'User-mngt'

Step 2: In SQL script paste this.
CREATE TABLE `user-mngt`.`user` (`Id` INT NOT NULL AUTO_INCREMENT , `First_name` VARCHAR(100) NOT NULL , `Last_name` INT(45) NOT NULL , `Email` VARCHAR(45) NOT NULL , `Phone` VARCHAR(45) NOT NULL , `Address` VARCHAR(45) NOT NULL , `Comments` TEXT NOT NULL , `Status` VARCHAR(10) NOT NULL DEFAULT 'active' , PRIMARY KEY (`Id`)) ENGINE = InnoDB;

Step 3: Run the apache and mysql on XAMPP app. So it will run smoothly.

## Here a overiview of the project.

<img width="960" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/551f17c5-50a9-4d36-96eb-a4ed0f318352">

#### Adding new user to the database

This when I add a new user name called Jack Star. See the photos below.

<img width="939" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/78eb28d3-1fab-449c-a094-2a87150ee0cb">

<img width="959" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/3b348a14-fa44-43bd-bdbd-03d4d062126c">

#### View the user

If you click the view button here you can see that the selected user will show on different pages. See the photo below.

<img width="956" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/31f36669-5bd8-495f-9c5d-8467d0f211cf">

#### Edit user 

<img width="947" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/4b36f744-dfd4-4eaa-bc25-e86d9f59d04b">

#### Deleting user 

<img width="958" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/281c0275-3ae1-44f5-ad16-82e63235d0ee">

<img width="959" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/cf5f199d-a473-4d64-af35-70ec123396fc">

#### Inside the database

<img width="662" alt="image" src="https://github.com/jpalero/User-mngt/assets/131837340/231dc3e4-6d46-4019-84f8-8d6840b1b451">




