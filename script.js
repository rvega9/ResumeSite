document.addEventListener("DOMContentLoaded", function () {
    
});

// Fetch data from server
fetch('https://resume-as4h.onrender.com/resumeData')
  .then(response => response.json())
  .then(data => {
    // Update personal information
    document.getElementById('name').innerHTML = `${data.personalInfo.firstName} ${data.personalInfo.lastName}`;
    document.getElementById('jobTitle').innerHTML = data.personalInfo.jobTitle;
    document.getElementById('aboutMe').innerHTML = data.personalInfo.aboutMe;
    
    // Update left section info
    document.getElementById('age').innerHTML = data.leftInfo.age;
    document.getElementById('birthdate').innerHTML = data.leftInfo.birthDate;
    document.getElementById('address').innerHTML = data.leftInfo.address;
    document.getElementById('email').innerHTML = data.leftInfo.email;
    document.getElementById('status').innerHTML = data.leftInfo.status;
    document.getElementById('religion').innerHTML = data.leftInfo.religion;

    // Update languages
    const languagesList = document.getElementById('languages');
    data.languages.forEach(language => {
      const listItem = document.createElement('li');
      listItem.textContent = language.language;
      languagesList.appendChild(listItem);
    });

    // Update skills
    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.textContent = `${skill.description} - ${skill.expertiseLevel}`;
      skillsList.appendChild(listItem);
    });

    // Update work experience
    const workExperienceList = document.getElementById('workExperience');
    data.workExperience.forEach(exp => {
      const listItem = document.createElement('li');
      listItem.textContent = `${exp.companyName} - ${exp.details} (${exp.year})`;
      workExperienceList.appendChild(listItem);
    });

    // Update education
    const educationList = document.getElementById('education');
    data.education.forEach(edu => {
      const listItem = document.createElement('li');
      listItem.textContent = `${edu.school} - ${edu.year}`;
      educationList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));