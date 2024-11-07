
const resumeApp = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

resumeApp.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const phone = (document.getElementById('phone') as HTMLInputElement).value
  const education = (document.getElementById('education') as HTMLInputElement).value
  const experience = (document.getElementById('experience') as HTMLInputElement).value

  const skills = (document.getElementById('skills') as HTMLInputElement).value

  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;


  const profilePictureFile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : " ";
  const resumeHtmlElement = `
        <h2> <strong> Resume </strong> </h2>
        ${profilePictureURL ? `<img src=${profilePictureURL} alt="profile picture" class="profile1Picture">` : " "}
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Education:</h3>
        <p>${education}</p>
        
        <h3>Experience:</h3>
        <p>${experience}</p>
        
        <h3>Skills:</h3>
        <p>${skills}</p>
      `;


  if (resumeDisplay) {
    resumeDisplay.innerHTML = resumeHtmlElement;
  } else {
    console.error('here is some resume element is missing please check.');
  }
});

// resume has been completed
