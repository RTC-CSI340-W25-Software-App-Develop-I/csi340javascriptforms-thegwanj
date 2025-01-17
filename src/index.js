//  1. Capture Form Data
// Using querySelector to select the form from the DOM
const form = document.querySelector("form");

// Add an eventlistener that will trigger after form submission
form.addEventListener("submit", (e) => {
  // Prevent the default behavior of the form submission
  e.preventDefault();
  // Taking the form data (name, email, phone, reason, message) and storing it in an object
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };
  // Calling our renderConfirmation function and passing the data along to it
  renderConfirmation(data);
});

// 2. Render Form Data to the DOM
// Create function that takes in a formData parameter
const renderConfirmation = (formData) => {
  // Create a new heading element
  const newHeading = document.createElement("h1");
  // Give the new heading some text content
  newHeading.textContent = "Submission Confirmation";
  // Creating tags for each value in the form
  const name = document.createElement("p");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  const reason = document.createElement("p");
  const message = document.createElement("p");
  // Giving each tag their text content
  name.textContent = formData.name;
  email.textContent = formData.email;
  phone.textContent = formData.phone;
  reason.textContent = formData.reason;
  message.textContent = formData.message;
  // Appending created elements to the DOM to show the confirmation message
  const section = document.querySelector(".confirmation");
  // Clearing section in case we are doing this multiple times
  section.innerHTML = "";
  section.append(newHeading, name, email, phone, reason, message);
};
