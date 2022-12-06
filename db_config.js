const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config();


const connectdb = async () => {
    try {
        const new_pg = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'node_post',
            password: 'postgres1234',
            port: '5432',
            // user: process.env.PGUSER,
            // host: process.env.PGHOST,
            // database: process.env.PGDB,
            // password: process.env.PGPASS,
            // port: process.env.PGPORT,
        });

        await new_pg.connect();
        
        // create post  (user, tweet/post, date and time)
        const create_user = (req, res) => {
            const {email,username,password} = req.body
            new_pg.query('INSERT INTO users(email,username,password) VALUES($1, $2, $3)', [email,username,password], 
            (error, results) => {
                if (error){
                    throw error;
                }
                res.status(201).send('User has been created')
            })
        }

    }
    catch (error){
        console.log(error)
    }
}


connectdb();