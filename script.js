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


      // Display education
      const educationContainer = document.getElementById('education');
      data.education.forEach(edu => {
          const eduDiv = document.createElement('div');
          eduDiv.classList.add('para'); // Add the "para" class
          eduDiv.innerHTML = `
              <h4>${edu.school}</h4>
              <p>${edu.year}</p>
          `;
          educationContainer.appendChild(eduDiv);
      });

      // Update work experience
      const workExperienceList = document.getElementById('workExperience');
      workExperienceList.textContent = ''; // Clear existing content
      data.workExperience.forEach((exp, index) => {
        if (index !== 0) {
          workExperienceList.textContent += '\n'; // Add new line between entries
        }
        workExperienceList.textContent += `${exp.companyName} - ${exp.details} (${exp.year})`;
      });

      // Update skills
      const skillsList = document.getElementById('skills');
      skillsList.textContent = ''; // Clear existing content
      data.skills.forEach((skill, index) => {
        if (index !== 0) {
          skillsList.textContent += '\n'; // Add new line between entries
        }
        skillsList.textContent += `${skill.description} - ${skill.expertiseLevel}`;
      });

    })
    .catch(error => console.error('Error fetching data:', error));
});
