CREATE database allusers;
USE database allusers;

CREATE TABLE Teachers ( 
`teacherID` INT NOT NULL AUTO_INCREMENT ,
`teacherLastname` VARCHAR(50) NOT NULL ,
`teacherFirstName` VARCHAR(50) NOT NULL ,
`teacherMiddleName` VARCHAR(50) NOT NULL ,
PRIMARY KEY (`teacherID`)) ENGINE = InnoDB;

CREATE TABLE Subjects ( 
`subjectID` INT NOT NULL AUTO_INCREMENT ,
`subjectTitle` VARCHAR(50) NOT NULL ,
`subjectNo` VARCHAR(50) NOT NULL ,
`transcriptLoad` INT NOT NULL ,
`payingLoad` INT NOT NULL ,
`teachingLoad` INT NOT NULL ,
PRIMARY KEY (`subjectID`)) ENGINE = InnoDB;

CREATE TABLE Students ( 
`studentID` INT NOT NULL AUTO_INCREMENT ,
`studentLastname` VARCHAR(50) NOT NULL ,
`studentFirstName` VARCHAR(50) NOT NULL ,
`studentMiddleName` VARCHAR(50) NOT NULL ,
PRIMARY KEY (`studentID`)) ENGINE = InnoDB;
