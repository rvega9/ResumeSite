// index.js

// Fetch data from server
fetch('/resumeData')
  .then(response => response.json())
  .then(data => {
    // Update personal information section
    document.querySelector('.name').innerHTML = `${data.personalInfo.firstName} ${data.personalInfo.lastName}`;
    document.querySelector('.d_p').innerHTML = data.personalInfo.jobTitle;
    document.querySelector('.about_p').innerHTML = data.personalInfo.aboutMe;
    document.querySelector('.p_h:nth-of-type(1)').innerHTML = `<i class="bx bx-phone-call"></i> ${data.personalInfo.contactNo}`;
    document.querySelector('.p_h:nth-of-type(2)').innerHTML = `<i class="bx bx-globe"></i> ${data.personalInfo.website}`;
    document.querySelector('.p_h:nth-of-type(3)').innerHTML = `<i class="bx bx-current-location"></i> ${data.personalInfo.location}`;

    // Additional personal information
    document.querySelector('.p_h:nth-of-type(4)').innerHTML = `Age: ${data.personalInfo.age}`;
    document.querySelector('.p_h:nth-of-type(5)').innerHTML = `Birth Date: ${data.personalInfo.birthDate}`;
    document.querySelector('.p_h:nth-of-type(6)').innerHTML = `Address: ${data.personalInfo.address}`;
    document.querySelector('.p_h:nth-of-type(7)').innerHTML = `Email: ${data.personalInfo.email}`;

    // Update languages section
    document.querySelectorAll('.l_p').forEach((element, index) => {
      element.innerHTML = `${data.languages[index].language}
                            <span class="circle1"></span>
                            <span class="circle2"></span>
                            <span class="circle3"></span>
                            <span class="circle4"></span>
                            <span class="circle5"></span>`;
    });

    // Update education section
    const educationContent = document.querySelector('.content-inner:nth-of-type(1)');
    educationContent.innerHTML = ''; // Clear existing content
    data.education.forEach(education => {
      const educationItem = document.createElement('div');
      educationItem.innerHTML = `<h4>${education.school}</h4>
                                 <p class="para">${education.year}</p><br/>`;
      educationContent.appendChild(educationItem);
    });

    // Update experience section
    const experienceContent = document.querySelector('.content-inner:nth-of-type(2)');
    experienceContent.innerHTML = ''; // Clear existing content
    data.workExperience.forEach(experience => {
      const experienceItem = document.createElement('div');
      experienceItem.innerHTML = `<h4>${experience.companyName}</h4>
                                   <p class="para">${experience.details}</p><br/>`;
      experienceContent.appendChild(experienceItem);
    });

    // Update skills section
    const skillsContent = document.querySelector('.content-inner:nth-of-type(3)');
    skillsContent.innerHTML = ''; // Clear existing content
    data.skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.innerHTML = `<div class="box">
                                <img src="${skill.image}"/>
                                <p>${skill.description}</p>
                              </div>`;
      skillsContent.appendChild(skillItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
