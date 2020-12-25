export default function Validator(name, value) {
  let newError = null;
  if (name === "name" && !value.trim()) {
    newError = "name cann't be empty";
  }
  if (name === "email" && !value.trim()) {
    newError = "email cann't be empty";
  }

  if (name === "gender" && (value === "" || value === "Choose Your Gender")) {
    newError = "you must select your gender";
  }

  if (
    name === "ageGroup" &&
    (value === "" || value === "Select Your Age Group")
  ) {
    newError = "you must select your age group";
  }

  if (name === "password" && !value.trim()) {
    newError = "password cann't be empty";
  }

  return newError;
}
