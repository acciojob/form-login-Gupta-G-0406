function getFormvalue(event) {
  // prevent page reload
  if (event) event.preventDefault();

  // access form fields
  const form = document.forms["form1"];
  let firstName = form["fname"].value.trim();
  let lastName = form["lname"].value.trim();

  // combine names with a single space
  let fullName = firstName + " " + lastName;

  // show alert
  alert(fullName);
}
