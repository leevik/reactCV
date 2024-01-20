import personData from '../person.json';
import { useState } from 'react';




export const Education = () => {
    const persondata = personData.education
    const [education, setEducation] = useState(persondata);
    const [checkTruth, setCheckTruth] = useState(false)

    const [formSchool, setFormSchool] = useState(personData.school);
    const [formTitle, setFormTitle] = useState(personData.title);
    const [formGraduation, setFormGraduation] = useState(personData.graduation);
  

   console.log(checkTruth, "checktruth")

   function handleTitleChange(e) {
    setFormTitle(e.target.value)
  }
  function handleSchoolChange(e) {
    setFormSchool(e.target.value)
  }
  function handleGraduationChange(e) {
    setFormGraduation(e.target.value)
  }
    return (
        <>
        <h1>{education.school}</h1>
        <h3>{education.title}</h3>
        <h3>{education.graduation}</h3>
        {checkTruth && 
        <form onSubmit={e => {
            e.preventDefault();
            setEducation({
                ...education,
                school: formSchool,
                title: formTitle,
                graduation: formGraduation,
              })}}
        >
        <input
        placeholder="School name"
        value={formSchool}
        onChange={handleSchoolChange}
        />
        <input
        placeholder="Degree title"
        value={formTitle}
        onChange={handleTitleChange}
      />
      <input
        placeholder="Graduation year"
        value={formGraduation}
        onChange={handleGraduationChange}
      />
      <button type="submit" disabled={!checkTruth}>
        Save
      </button>
        </form>
        }
        <button onClick={() => {setCheckTruth(!checkTruth)}}>Edit</button>
        </>
    )
}