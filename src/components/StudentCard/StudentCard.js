import React from 'react';
import './StudentCard.css';
const StudentCard = ({ student }) => {
    const { email, company, firstName, lastName, pic, grades, id, skill } = student;

    // converted the grades to numbers
    const numericGrades = grades.map((grade) => Number(grade));
    // add up all the grades
    // INIT  total = zero
    let total = 0
    // for each grade, add grade to total
    for (const grade of numericGrades) {
        total += grade
    }
    // divide total by number of grades and assign
    const average = total / numericGrades.length;

    console.log(`<StudentCard /> rendered name=${firstName}`);
    return (
        <div className="StudentCard" key={id}>
            <div className="StudentCard__Avatar">
                <img src={pic} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="StudentCard__info">
                <h1>
                    {firstName} {lastName}
                </h1>
                <ul>
                    <li>Email: {email}</li>
                    <li>Company: {company}</li>
                    <li>Skill: {skill}</li>
                    <li>Average: {Number(average.toFixed(2))}%</li>
                </ul>
            </div>
        </div>
    );
}

export default StudentCard
