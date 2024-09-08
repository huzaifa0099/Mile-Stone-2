document.addEventListener('DOMContentLoaded', () => {
    const experienceContainer = document.getElementById('experience-container');
    const skillsContainer = document.getElementById('skills-container');
    const educationContainer = document.getElementById('education-container');
    const resumeContent = document.getElementById('resume-content');
    const resumeOutput = document.getElementById('resume-output');
    
    let experienceCount = 0;
    let skillCount = 0;
    let educationCount = 0;

    document.getElementById('add-experience').addEventListener('click', () => {
        experienceCount++;
        const newExperience = document.createElement('div');
        newExperience.innerHTML = `
            <h3>Experience ${experienceCount}</h3>
            <label for="experience-title-${experienceCount}">Job Title:</label>
            <input type="text" id="experience-title-${experienceCount}" name="experience-title-${experienceCount}">
            <label for="experience-company-${experienceCount}">Company:</label>
            <input type="text" id="experience-company-${experienceCount}" name="experience-company-${experienceCount}">
            <label for="experience-dates-${experienceCount}">Dates:</label>
            <input type="text" id="experience-dates-${experienceCount}" name="experience-dates-${experienceCount}">
            <label for="experience-description-${experienceCount}">Description:</label>
            <textarea id="experience-description-${experienceCount}" name="experience-description-${experienceCount}"></textarea>
        `;
        experienceContainer.appendChild(newExperience);
    });

    document.getElementById('add-skill').addEventListener('click', () => {
        skillCount++;
        const newSkill = document.createElement('div');
        newSkill.innerHTML = `
            <label for="skill-${skillCount}">Skill ${skillCount}:</label>
            <input type="text" id="skill-${skillCount}" name="skill-${skillCount}">
        `;
        skillsContainer.appendChild(newSkill);
    });

    document.getElementById('add-education').addEventListener('click', () => {
        educationCount++;
        const newEducation = document.createElement('div');
        newEducation.innerHTML = `
            <h3>Education ${educationCount}</h3>
            <label for="education-degree-${educationCount}">Degree:</label>
            <input type="text" id="education-degree-${educationCount}" name="education-degree-${educationCount}">
            <label for="education-school-${educationCount}">School:</label>
            <input type="text" id="education-school-${educationCount}" name="education-school-${educationCount}">
            <label for="education-dates-${educationCount}">Dates:</label>
            <input type="text" id="education-dates-${educationCount}" name="education-dates-${educationCount}">
        `;
        educationContainer.appendChild(newEducation);
    });

    document.getElementById('resume-form').addEventListener('submit', (event) => {
        event.preventDefault();

        resumeContent.innerHTML = `
            <h1>${document.getElementById('name').value}</h1>
            <p>${document.getElementById('title').value}</p>
            <p>Email: ${document.getElementById('email').value}</p>
            <p>Phone: ${document.getElementById('phone').value}</p>
        `;

        const experienceElements = Array.from(experienceContainer.children);
        if (experienceElements.length > 0) {
            resumeContent.innerHTML += '<h2>Experience</h2>';
            experienceElements.forEach(experience => {
                resumeContent.innerHTML += `
                    <div>
                        <h3>${experience.querySelector('input[name^="experience-title"]').value} at ${experience.querySelector('input[name^="experience-company"]').value}</h3>
                        <p>${experience.querySelector('input[name^="experience-dates"]').value}</p>
                        <p>${experience.querySelector('textarea').value}</p>
                    </div>
                `;
            });
        }

        const skillElements = Array.from(skillsContainer.children);
        if (skillElements.length > 0) {
            resumeContent.innerHTML += '<h2>Skills</h2>';
            skillElements.forEach(skill => {
                resumeContent.innerHTML += `
                    <p>${skill.querySelector('input').value}</p>
                `;
            });
        }

        const educationElements = Array.from(educationContainer.children);
        if (educationElements.length > 0) {
            resumeContent.innerHTML += '<h2>Education</h2>';
            educationElements.forEach(education => {
                resumeContent.innerHTML += `
                    <div>
                        <h3>${education.querySelector('input[name^="education-degree"]').value} from ${education.querySelector('input[name^="education-school"]').value}</h3>
                        <p>${education.querySelector('input[name^="education-dates"]').value}</p>
                    </div>
                `;
            });
        }

        document.getElementById('resume-form').classList.add('hidden');
        resumeOutput.classList.remove('hidden');
    });
});
