const express = require('express')
require('dotenv').config()

const cors = require('cors')

require('./functions/database.js');

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routerUser'))
app.use('/result', require('./routes/routerResult'))
app.use('/payment', require('./routes/routerpayment'))


app.listen(process.env.PORT, ()=> console.log('Server Up') )