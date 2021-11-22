const students = [
  {
    name: 'Adriano',
    grade: 10
  },
  {
    name: 'Alice',
    grade: 10
  },
  {
    name: 'Sarah',
    grade: 10
  },
  {
    name: 'Maykon',
    grade: 5
  },
  {
    name: 'Luciana',
    grade: 3
  }
]

function getAprovedStudent(studentsList) {
  return studentsList.filter(student => student.grade >=7)
}

console.log('Alunos Aprovados:')
console.log(getAprovedStudent(students))

console.log('\n Lista de Alunos:')
console.log(students)