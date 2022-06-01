const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        return res.status(200).json(results.rows);

    });

} 
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        return res.send(200).json(results.rows);
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    // Check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            return res.send("Email already exists. ");
        }
    })

    // add student to the db
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
        if (error) throw error;
        return res.status(201).send("Student Created Successfully!");
    })
  
}

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeStudent, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            return res.send("Student does not exist in the database");
        }
    })

    pool.query(queries.removeStudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student removed successfully.");
    })
}
module.exports = {
    getStudents,
    getStudentById, 
    addStudent, 
    removeStudent
}