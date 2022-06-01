const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students WHERE ID = $1";

const addStudent = "INSERT INTO students (name, age";
module.exports = {
    getStudents, 
    getStudentById, 
    addStudent
};