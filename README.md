# hiring-backend-assessment

Created a REST API and database that would handle a step of listing a car. This consists of collecting and storing information (License Plate, Registration #, Registration State, Registration Expiration, Name on Registration, VIN #, Car Value, Current Mileage, Vehicle Description, Vehicle Color). The API can also decode the VIN # to get the Car year, Car Make, Car Model and supports CRUD functionality. 

Languages:
- Node.js
- Express
- JavaScript 
- SQL

Assumptions made:
- That I would have access to the frontend site. When creating the API, I also created the frontend to make sure everything worked smoothly. I have now removed the frontend for the assessment. So, to connect the backend and frontend, you would simply type the directory of the frontend file into the file src/index.js

To bring up the server:
- Open up the SQL code in src/Car_details.sql. Must change up the (host, user, password, database) in src/connectingDatabase.js to the parameters set on the database you are using. Pull up table. Type npm start in terminal.   

Other Notes:
- All files can be found in master branch.
- I wrote the code using JavaScript, I would be able write the code in TypeScript if needed. 
- It took me a longer time than expected to complete the assessment, I also had multiple assignments and papers due this week. My apologize if this caused any inconvenience. 
- The API works from the files I have added and changing package.json
- Everything works perfectly and would take minor changes to change where the inputs for post, get, delete and patch come from. Please feel free to contact me if there's any questions about the code.



