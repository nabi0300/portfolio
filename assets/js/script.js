document.addEventListener("DOMContentLoaded", function () {
  const textToType = "Hello, world! This is a Typed.js example.";

  const options = {
    strings: ["Web Developer","Graphic Designer","Freelancer","Student"],
    typeSpeed: 100,       
    backSpeed: 60,           
    loop: true,          
  };

  const typed = new Typed(".typing", options);
});


