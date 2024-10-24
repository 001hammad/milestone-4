interface ResumeData {
    name: string;
    email: string;
    phone: string;
    address: string;
    degree: string;
    institute: string;
    skills: string;
    experience: string;
    picture: string;
  }
  
  const form: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
  const resumeContainer: HTMLElement = document.getElementById('resume-container') as HTMLElement;
  const profilePic: HTMLInputElement = document.getElementById('picture') as HTMLInputElement;
  
  
  const ResumeForm: ResumeData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    degree: '',
    institute: '',
    skills: '',
    experience: '',
    picture: '',
  };
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    ResumeForm.name = formData.get('name') as string;
    ResumeForm.email = formData.get('email') as string;
    ResumeForm.phone = formData.get('phone') as string;
    ResumeForm.address = formData.get('address') as string;
    ResumeForm.degree = formData.get('degree') as string;
    ResumeForm.institute = formData.get('institute') as string;
    ResumeForm.skills = formData.get('skills') as string;
    ResumeForm.experience = formData.get('experience') as string;
    ResumeForm.picture = profilePic.files?.[0] ? URL.createObjectURL(profilePic.files[0]) : '';
  
  
    generateResume();
  });
  
  function generateResume() {
    const ResumeHTML = `
      <h1 class='your-resume'>Your Editable Resume</h1>
      <img src="${ResumeForm.picture}" alt="Profile Picture" width="100" height="100" class='photo'>
      <h2>Personal Information</h2>
      <p class='out'>Name: <span contenteditable="true">${ResumeForm.name}</span></p>
      <p class='out'>Email:  <span contenteditable="true">${ResumeForm.email}</span></p>
      <p class='out'>Phone:  <span contenteditable="true">${ResumeForm.phone}</span></p>
      <p class='out'>Address:  <span contenteditable="true">${ResumeForm.address}</span></p><hr>
      <h2>Education</h2>
      <p class='out'>Degree:  <span contenteditable="true">${ResumeForm.degree}</span></p>
      <p class='out'>Institute:  <span contenteditable="true">${ResumeForm.institute}</span></p><hr>
      <h2>Skills</h2>
      <p class='out'> <span contenteditable="true">${ResumeForm.skills}</span></p>
      <p class='out'> <span contenteditable="true">${ResumeForm.skills}</span></p>
      <p class='out'> <span contenteditable="true">${ResumeForm.skills}</span></p><hr>
      <h2>Work Experience</h2>
      <p class='out'> <span contenteditable="true">${ResumeForm.experience}</span></p>
    `;
    resumeContainer.innerHTML = ResumeHTML;
  }
  