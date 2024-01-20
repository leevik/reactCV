import personData from '../person.json';
import { EditExperience } from './EditExperience';
import { useState } from 'react';

export const Experience = () => {
    const [persondata, setPersonData] = useState(personData.experience)
    const [checkTruth, setCheckTruth] = useState(false);
    console.log(persondata, "1.console.log")
    const handleExperienceEdit = (editedExperience, index) => {
        const updatedPersonData = [...persondata]
        updatedPersonData[index] = editedExperience
        setPersonData(updatedPersonData)
        console.log(persondata, "2.console.log")
        
    };

    return (
        <>
        <h2>Job experience</h2>
        {persondata.map((job, index) => (
            <ul key={job.id} style={{listStyleType:"none"}}>
            <li >Company: {job.company}</li>
            <li>Title: {job.title}</li>
            <li>Length: {job.length}</li>
            <li>Responsibilities: {job.responsibilities}</li>
            <EditExperience job={job} index={index} onExperienceEdit={handleExperienceEdit}/>
            </ul>
        ))
        }
        <button onClick={() => {setCheckTruth(!checkTruth)}}>Edit</button>
        </>
    )
}