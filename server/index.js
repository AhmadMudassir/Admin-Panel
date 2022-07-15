const express = require('express');
const colors = require('colors');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }) 
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const schema = require('./schema/schema')
const { graphqlHTTP } = require('express-graphql')

const app = express();

// Connect to DB
connectDB();
app.use(cors({origin:'*'}));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))
 