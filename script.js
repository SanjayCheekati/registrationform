document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission to server

  // Collect form data
  const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      fatherName: document.getElementById("fatherName").value,
      motherName: document.getElementById("motherName").value,
      dob: document.getElementById("dob").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      address: document.getElementById("address").value,
      qualification: document.getElementById("qualification").value,
  };

  // Save data to localStorage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to the thankyou page
  window.location.href = "thankyou.html";
});
