const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const mysql = require('mysql2')

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)
//'mysql://R7ARSbmFAFmaRdA.root:X6lYNugOMZ7BWEJh@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/mydb?ssl={"rejectUnauthorized":true}'

app.get('/',(req,res) => {
    console.log('Hello word')
})

app.get('/attractions',(req,res) => {
    connection.query(
        'SELECT * FROM attractions',
        function(err,result,fields){
            console.log(result)
            res.send(result)
        }
    )
})

app.listen(process.env.PORT || 3000)
