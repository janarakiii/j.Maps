const students = [
   { name: 'Нурик', grade: 95 },
   { name: 'Дека', grade :49 },
   { name: '83', grade: 83 },
];
const updatedStudents = students.map(student =>{
   return {
       ...student,
       grade: student.grade + 5
   };
});
console.log(updatedStudents); 
