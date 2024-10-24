var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('resume-container');
var profilePic = document.getElementById('picture');
var ResumeForm = {
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
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var formData = new FormData(form);
    ResumeForm.name = formData.get('name');
    ResumeForm.email = formData.get('email');
    ResumeForm.phone = formData.get('phone');
    ResumeForm.address = formData.get('address');
    ResumeForm.degree = formData.get('degree');
    ResumeForm.institute = formData.get('institute');
    ResumeForm.skills = formData.get('skills');
    ResumeForm.experience = formData.get('experience');
    ResumeForm.picture = ((_a = profilePic.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePic.files[0]) : '';
    generateResume();
});
function generateResume() {
    var ResumeHTML = "\n      <h1 class='your-resume'>Your Editable Resume</h1>\n      <img src=\"".concat(ResumeForm.picture, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\" class='photo'>\n      <h2>Personal Information</h2>\n      <p class='out'>Name: <span contenteditable=\"true\">").concat(ResumeForm.name, "</span></p>\n      <p class='out'>Email:  <span contenteditable=\"true\">").concat(ResumeForm.email, "</span></p>\n      <p class='out'>Phone:  <span contenteditable=\"true\">").concat(ResumeForm.phone, "</span></p>\n      <p class='out'>Address:  <span contenteditable=\"true\">").concat(ResumeForm.address, "</span></p><hr>\n      <h2>Education</h2>\n      <p class='out'>Degree:  <span contenteditable=\"true\">").concat(ResumeForm.degree, "</span></p>\n      <p class='out'>Institute:  <span contenteditable=\"true\">").concat(ResumeForm.institute, "</span></p><hr>\n      <h2>Skills</h2>\n      <p class='out'> <span contenteditable=\"true\">").concat(ResumeForm.skills, "</span></p>\n      <p class='out'> <span contenteditable=\"true\">").concat(ResumeForm.skills, "</span></p>\n      <p class='out'> <span contenteditable=\"true\">").concat(ResumeForm.skills, "</span></p><hr>\n      <h2>Work Experience</h2>\n      <p class='out'> <span contenteditable=\"true\">").concat(ResumeForm.experience, "</span></p>\n    ");
    resumeContainer.innerHTML = ResumeHTML;
}
