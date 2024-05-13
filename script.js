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
              <p>${edu.school}</p>
              <p>${edu.year}</p>
          `;
          educationContainer.appendChild(eduDiv);
      });

      // Display work experience
        const workExperienceList = document.getElementById('workExperience');
        data.workExperience.forEach(work => {
            const workDiv = document.createElement('div');
            workDiv.classList.add('para'); // Add the "para" class
            workDiv.innerHTML = `
                <p>${work.companyName}</p>
                <p>${work.details} | ${work.year}</p>
            `;
            workExperienceList.appendChild(workDiv);
        });

      // Display education
      const skillsList = document.getElementById('skills');
      data.skills.forEach(skill => {
          const skillssDiv = document.createElement('div');
          skillssDiv.classList.add('para'); // Add the "para" class
          skillssDiv.innerHTML = `
              <p>${skill.description}</p>
              <p>${skill.expertiseLevel}</p>
          `;
          skillsList.appendChild(skillssDiv);
      });

    })
    .catch(error => console.error('Error fetching data:', error));
});
