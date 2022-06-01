const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students WHERE ID = $1";

const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

const checkEmailExists = "SELECT * FROM students WHERE email = $1";

module.exports = {
    getStudents, 
    getStudentById, 
    addStudent, 
    checkEmailExists
};