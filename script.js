const dialog = document.getElementById("contact-me");
const contactlink = document.querySelector(".contact-link");
const contactform = dialog.querySelector(".contact-form");
const aboutLink = document.querySelector('.about-link');
const aboutPreview = document.querySelector('.about-preview');
const aboutdialog = document.getElementById("about-dialog")
const aboutfullscreen = document.querySelector(".about-fullscreen")
const closeabout = document.querySelector(".close-about")
const expertiselink = document.querySelector(".expertise-link")
const expertisedropdown = document.querySelector(".expertise-dropdown")
const expertiselist = document.querySelector(".expertise-list")

// When user clicks "Contact", show the popup form
contactlink.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.showModal();
  dialog.classList.add('opening');

  setTimeout(() => {
    dialog.classList.remove('opening')
  },200)
});

// Close dialog when clicking outside it
dialog.addEventListener("click", (event) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    dialog.classList.add('closing');

    setTimeout(() => {
      dialog.classList.remove('closing')
      dialog.close();
      contactform.reset();
    },200)
  }
});

// ✅ Form submit logic with redirect to Formspree's thank-you page
contactform.addEventListener("submit", async (e) => {
  e.preventDefault(); // Stop the default form behavior
   dialog.classList.add('closing');

  const formData = new FormData(contactform); // Gather form inputs

  try {
    const response = await fetch("https://formspree.io/f/xovdbqya", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      // ✅ Redirect to Formspree's default thank-you page
      window.location.href = "https://formspree.io/thanks";
    } else {
      const data = await response.json();
      alert("Error: " + (data.error || "Form submission failed."));
    }
  } catch (error) {
    alert("Network error: " + error.message);
  }

 

    setTimeout(() => {
      dialog.classList.remove('closing')
      dialog.close();
      contactform.reset();
    },200)
});




aboutLink.addEventListener('mouseenter', () => {
  aboutPreview.style.display = 'block';
  aboutLink.classList.add('hovering');
});

aboutLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!aboutPreview.matches(':hover')) {
      aboutPreview.style.display = 'none';
      aboutLink.classList.remove('hovering');
    }
  }, 100);
});

aboutPreview.addEventListener('mouseenter', () => {
  aboutPreview.style.display = 'block';
  aboutLink.classList.add('hovering');
});

aboutPreview.addEventListener('mouseleave', () => {
  aboutPreview.style.display = 'none';
  aboutLink.classList.remove('hovering');
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutdialog.showModal();
  aboutfullscreen.classList.add('opening');

  setTimeout(() => {
    aboutfullscreen.classList.remove('opening');
  }, 200);
})

aboutPreview.addEventListener("click", (e) =>{
  aboutdialog.showModal();
  aboutfullscreen.classList.add('opening');

  setTimeout(() => {
    aboutfullscreen.classList.remove('opening');
  }, 200);
})

closeabout.addEventListener("click", (e) => {
  e.preventDefault();
  closeabout.classList.add('click');
  aboutfullscreen.classList.add('closing');

  setTimeout(() => {
    aboutdialog.close(); 
    aboutfullscreen.classList.remove('closing');
    closeabout.classList.remove('click');
  }, 200); 
});


aboutdialog.addEventListener("click",(event) => {
  const aboutdialogDimensions = aboutdialog.getBoundingClientRect();
  if(
    event.clientX < aboutdialogDimensions.left ||
    event.clientX > aboutdialogDimensions.right ||
    event.clientY < aboutdialogDimensions.top ||
    event.clientY > aboutdialogDimensions.bottom
  ){
    aboutfullscreen.classList.add('closing');

  setTimeout(() => {
    aboutdialog.close(); 
    aboutfullscreen.classList.remove('closing');
    closeabout.classList.remove('click');
  }, 200); 
  }
})


// expertise dropdown
expertiselink.addEventListener("mouseenter",() => {
  expertisedropdown.style.display = 'flex';
  expertiselink.classList.add('hovering');
})

expertiselink.addEventListener("mouseleave", () => {
  setTimeout(() =>{
    if(!expertisedropdown.matches(':hover')){
      expertisedropdown.style.display = 'none';
      expertiselink.classList.remove('hovering');
    }
  },100);
})

expertisedropdown.addEventListener('mouseenter', () => {
  expertisedropdown.style.display = 'flex';
  expertiselink.classList.add('hovering');
});

expertisedropdown.addEventListener('mouseleave', () => {
  expertisedropdown.style.display = 'none';
  expertiselink.classList.remove('hovering');
});