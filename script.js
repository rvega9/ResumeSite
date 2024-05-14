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
      const languagesContainer = document.getElementById('languages');
data.languages.forEach((language, index) => {
    const listItem = languagesContainer.querySelector(`.l_p:nth-of-type(${index + 1})`);
    const spanItem = document.createElement('span');
    spanItem.textContent = language.language;
    listItem.insertBefore(spanItem, listItem.firstChild); // Insert language before the first span
    // Clone and insert the existing spans
    const existingSpans = listItem.querySelectorAll('.circle1, .circle2, .circle3, .circle4, .circle5');
    existingSpans.forEach(existingSpan => {
        const clonedSpan = existingSpan.cloneNode(true);
        listItem.insertBefore(clonedSpan, spanItem.nextSibling);
    });
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
              <h4>${edu.school}<h4>
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
                <h4>${work.companyName}</h4>
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
              <h4>${skill.description}</h4>
              <p>${skill.expertiseLevel}</p>
          `;
          skillsList.appendChild(skillssDiv);
      });

    })
    .catch(error => console.error('Error fetching data:', error));
});
