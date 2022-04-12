import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './loaders/routes.js';
import path, { dirname } from 'path';

const app = express();
const __dirname = path.resolve();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', usersRoutes);
// Change __dirname+"/Form.html" to the directory of the form
app.get('/form', (req, res) => res.sendFile(__dirname + "/Form.html"));

app.listen(PORT, () => console.log(`Server running on port: http//localhost:${PORT}`));