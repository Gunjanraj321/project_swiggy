require("dotenv").config()
const express = require('express');
const sequelize = require('./services/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api',authRoutes);

async function initiate(){
    try{
        await sequelize.sync();
        app.listen(port, ()=>{
            console.log(`Server running on ${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

initiate()