document.addEventListener("DOMContentLoaded", function () {
  fetch('https://resume-as4h.onrender.com/resumeData')
    .then(response => response.json())
    .then(data => {
      // Update personal information
      document.getElementById('aboutMe').textContent = data.personalInfo.aboutMe;
      document.getElementById('phone').textContent = data.personalInfo.contactNo;
      document.getElementById('website').textContent = data.personalInfo.website;
      document.getElementById('location').textContent = data.personalInfo.location;
      
      // Update languages
      const languagesList = document.getElementById('languages');
      data.languages.forEach(language => {
        const listItem = document.createElement('li');
        listItem.textContent = language.language;
        languagesList.appendChild(listItem);
      });

      // Update personal info
      document.getElementById('age').textContent = "Age: " + data.leftInfo.age;
      document.getElementById('birthdate').textContent = "Birthdate: " + data.leftInfo.birthDate;
      document.getElementById('address').textContent = "Address: " + data.leftInfo.address;
      document.getElementById('email').textContent = "Email: " + data.leftInfo.email;
      document.getElementById('status').textContent = "Status: " + data.leftInfo.status;
      document.getElementById('religion').textContent = "Religion: " + data.leftInfo.religion;

      // Update education
      const educationList = document.getElementById('education');
      data.education.forEach(edu => {
        const listItem = document.createElement('li');
        listItem.textContent = `${edu.school} - ${edu.year}`;
        educationList.appendChild(listItem);
      });

      // Update work experience
      const workExperienceList = document.getElementById('workExperience');
      data.workExperience.forEach(exp => {
        const listItem = document.createElement('li');
        listItem.textContent = `${exp.companyName} - ${exp.details} (${exp.year})`;
        workExperienceList.appendChild(listItem);
      });

      // Update skills
      const skillsList = document.getElementById('skills');
      data.skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = `${skill.description} - ${skill.expertiseLevel}`;
        skillsList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
