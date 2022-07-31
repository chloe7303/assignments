function practice_5(students, student_objects) {
  students.forEach(student => {
    student_objects.forEach(student_object => {
      if (student.student_id === student_object.student_id) {
        if (student.objects) student.objects = [...student.objects, student_object.object]
        else student.objects = [student_object.object]
      }
    })
  });
  return students;
}

const students = [
  { student_id: 1, name: 'Arthur' },
  { student_id: 2, name: 'Peter' },
  { student_id: 3, name: 'Molly' },
]

const student_objects = [
  { student_id: 1, object: 'pen' },
  { student_id: 2, object: 'pen' },
  { student_id: 3, object: 'book' },
  { student_id: 1, object: 'book' },
  { student_id: 3, object: 'phone' },
]
console.log('practice advanced 5');
console.log(practice_5(students, student_objects));
