var resumeApp = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
resumeApp.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : " ";
    var resumeHtmlElement = "\n        <h2> <strong> Resume </strong> </h2>\n        ".concat(profilePictureURL ? "<img src=".concat(profilePictureURL, " alt=\"profile picture\" class=\"profile1Picture\">") : " ", "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n  \n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n  \n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n  \n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n      ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtmlElement;
    }
    else {
        console.error('here is some resume element is missing please check.');
    }
});
// resume has been completed
