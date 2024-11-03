function handleSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById("namaInput").value;
  const role = document.getElementById("roleInput").value;
  const availability = document.getElementById("availabilityInput").value;
  const age = document.getElementById("ageInput").value;
  const location = document.getElementById("locationInput").value;
  const experience = document.getElementById("experienceInput").value;
  const email = document.getElementById("emailInput").value;

  localStorage.setItem("nama", nama);
  localStorage.setItem("role", role);
  localStorage.setItem("availability", availability);
  localStorage.setItem("age", age);
  localStorage.setItem("location", location);
  localStorage.setItem("experience", experience);
  localStorage.setItem("email", email);

  window.location.href = "index.html";
}
