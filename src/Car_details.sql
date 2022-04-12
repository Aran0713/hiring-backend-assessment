CREATE TABLE `datatest`.`car_details` (
  `LicensePlate` VARCHAR(45) NOT NULL,
  `Registration` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `RegistrationExpiration` DATE NULL,
  `Name` VARCHAR(45) NULL,
  `VIN` VARCHAR(45) NULL,
  `CarValue` VARCHAR(45) NULL,
  `CurrentMileage` VARCHAR(45) NULL,
  `VehicleDescription` TEXT(1000) NULL,
  `VehicleColor` VARCHAR(45) NULL,
  `CarYear` VARCHAR(45) NULL,
  `CarMake` VARCHAR(45) NULL,
  `CarModel` VARCHAR(45) NULL,
  PRIMARY KEY (`LicensePlate`));

SELECT * FROM datatest.car_details;