const Pool = require('pg').Pool;

const Pool = new Pool({
    user: "postgres", 
    host: "localhost", 
    database: "students", 
    password: "Movenpick123", 
    port: 5432
} 
);
export default Pool