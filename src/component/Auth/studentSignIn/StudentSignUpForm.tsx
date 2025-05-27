import { useState } from 'react';
import StudentUnderGrade12Form from './StudentUnderGrade12Form';
import StudentGrade12PlusForm from './StudentGrade12PlusForm';

export default function StudentSignUpForm() {
  const [grade, setGrade] = useState<boolean>(true);

  return (
    <div>
      {grade == true && <StudentUnderGrade12Form setGrade={setGrade}/>}
      {grade == false && <StudentGrade12PlusForm setGrade={setGrade}/>}
    </div>
  );
}
