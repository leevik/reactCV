import { useState } from "react";

export const EditExperience = ({ job, index, onExperienceEdit }) => {
    const [formCompany, setFormCompany] = useState(job.company);
    const [formTitle, setFormTitle] = useState(job.title);
    const [formLength, setFormLength] = useState(job.length);
    const [formResponsibilities, setFormResponsibilities] = useState(job.responsibilities);

    const handleTitleChange = (e) => setFormTitle(e.target.value);
    const handleCompanyChange = (e) => setFormCompany(e.target.value);
    const handleLengthChange = (e) => setFormLength(e.target.value);
    const handleResponsibilitiesChange = (e) => setFormResponsibilities(e.target.value);

    const handleSave = (e) => {
        e.preventDefault();
        const editedExperience = {
            ...job,
            company: formCompany,
            title: formTitle,
            length: formLength,
            responsibilities: formResponsibilities
        };
        onExperienceEdit(editedExperience, index);
    };

    return (
        <form onSubmit={handleSave}>
            <input placeholder="Company name" value={formCompany} onChange={handleCompanyChange} />
            <input placeholder="Job title" value={formTitle} onChange={handleTitleChange} />
            <input placeholder="Length" value={formLength} onChange={handleLengthChange} />
            <input placeholder="Responsibilities" value={formResponsibilities} onChange={handleResponsibilitiesChange} />
            <button type="submit">Save</button>
        </form>
    );
};
