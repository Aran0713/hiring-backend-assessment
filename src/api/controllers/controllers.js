import connection from "../../connectingDatabase.js";
import express from "express";
import bodyParser from 'body-parser';
import nhtsa from 'nhtsa';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// Scans database for all the users
function scanDatabase() {
    var databaseUsers = []; // create empty array
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM datatest.car_details";
        connection.query(sql, function(err, results){
            databaseUsers.push(...results);
            resolve(databaseUsers)
        });
    })
}

// Reads the databse and prints it onto /Users
export const getUsers = (req,res) => {
   scanDatabase().then((databaseUsers) => {
       res.send(databaseUsers);
   });
}
// Reads the databse and prints the user specified in url
export const getUser = (req,res) => {
    scanDatabase().then((databaseUsers) => {
        var LicensePlate = req.params.id;
        const foundUser = databaseUsers.find((databaseUsers) => databaseUsers.LicensePlate == LicensePlate);

        res.send(foundUser);
    });
}

// Creates new user from the html form
export const formCreateUser = (req, res) =>{
    var user = {};
    user.LicensePlate = req.body.LicensePlate;
    user.Registration = req.body.Registration;
    user.State = req.body.State;
    user.RegistrationExpiration = req.body.RegistrationExpiration;
    user.Name = req.body.Name;
    user.VIN = req.body.VIN;
    user.CarValue = req.body.CarValue;
    user.CurrentMileage = req.body.CurrentMileage;
    user.VehicleDescription = req.body.VehicleDescription;
    user.VehicleColor = req.body.VehicleColor;
    user.CarYear = user.VIN;

    (async () => {
        var {data} = await nhtsa.decodeVin(user.VIN);
        data = [data];
        user.CarYear = data[0].Results[9].Value;
        user.CarMake = data[0].Results[6].Value;
        user.CarModel = data[0].Results[8].Value;

        var sql = "INSERT INTO datatest.car_details (LicensePlate, Registration, State, RegistrationExpiration, Name, VIN, CarValue, CurrentMileage, VehicleDescription, VehicleColor, CarYear, CarMake, CarModel) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sql, [user.LicensePlate, user.Registration, user.State, user.RegistrationExpiration, user.Name, user.VIN, user.CarValue, user.CurrentMileage, user.VehicleDescription, user.VehicleColor,user.CarYear, user.CarMake, user.CarModel], function(err,result){});
    })();

    res.send(`User with the License Plate ${user.LicensePlate} added to the database!`);
}
// Creates new user manually
export const createUser = (req,res) => {
    var user = req.body;

    (async () => {
        var {data} = await nhtsa.decodeVin(user.VIN);
        data = [data];
        user.CarYear = data[0].Results[9].Value;
        user.CarMake = data[0].Results[6].Value;
        user.CarModel = data[0].Results[8].Value;

        var sql = "INSERT INTO datatest.car_details (LicensePlate, Registration, State, RegistrationExpiration, Name, VIN, CarValue, CurrentMileage, VehicleDescription, VehicleColor, CarYear, CarMake, CarModel) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sql, [user.LicensePlate, user.Registration, user.State, user.RegistrationExpiration, user.Name, user.VIN, user.CarValue, user.CurrentMileage, user.VehicleDescription, user.VehicleColor,user.CarYear, user.CarMake, user.CarModel], function(err,result){});
    })();

    res.send(`User with the License Plate ${user.LicensePlate} added to the database!`);
}

// Deletes user specified from url
export const deleteUser = (req,res) => {
    var License = req.params.id;

    var sql = 'DELETE FROM datatest.car_details WHERE LicensePlate = ?';
    connection.query(sql, [License], function(err, result){});

    res.send(`User with the License Plate ${License} is deleted from database`);
}

// Updates user spcified from url
export const updateUser = (req,res) =>{
    var License = req.params.id;
    var updateData = req.body;

    if (updateData.Registration){
        var sql = `Update datatest.car_details SET Registration = ? WHERE LicensePlate = ?`;
        connection.query(sql, [updateData.Registration, License], function(err, result){});
    }
    if (updateData.State){
        var sql = `Update datatest.car_details SET State = ? WHERE LicensePlate = ?`;
        connection.query(sql, [updateData.State, License], function(err, result){});
    }
    if (updateData.RegistrationExpiration){
        var sql = `Update datatest.car_details SET RegistrationExpiration = ? WHERE LicensePlate = ?`;
        connection.query(sql, [updateData.RegistrationExpiration, License], function(err, result){});
    }
    if (updateData.Name){
      var sql = `Update datatest.car_details SET Name = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.Name, License], function(err, result){});
    }
    if (updateData.VIN){
      var sql = `Update datatest.car_details SET VIN = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.VIN, License], function(err, result){});
    }
    if (updateData.CarValue){
      var sql = `Update datatest.car_details SET CarValue = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.CarValue, License], function(err, result){});
    }
    if (updateData.CurrentMileage){
      var sql = `Update datatest.car_details SET CurrentMileage = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.CurrentMileage, License], function(err, result){});
    }
    if (updateData.VehicleDescription){
      var sql = `Update datatest.car_details SET VehicleDescription = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.VehicleDescription, License], function(err, result){});
    }
    if (updateData.VehicleColor){
      var sql = `Update datatest.car_details SET VehicleColor = ? WHERE LicensePlate = ?`;
      connection.query(sql, [updateData.VehicleColor, License], function(err, result){});
    }

    res.send(`User with the License Plate ${License} has been updated`);
}


