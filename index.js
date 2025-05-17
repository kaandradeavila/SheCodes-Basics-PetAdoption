function adoptionInfo() {
  alert("First, we need your personal information.");
  let name = userInfo();

  alert(
    "Next, we need information about the type of pet you're interested in adopting."
  );
  let type = petInfo();
  let size = petSize(type);
  displayConfirmation(name, type, size);
}

function userInfo() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  return name;
}


function petInfo() {
  let petType = prompt("Are you interested in dogs or cats?");
  petType = petType.toLowerCase().trim();
  petType = petType.replace("dogs", "dog");
  petType = petType.replace("cats", "cat");
  return petType;
}


function petSize(petType) {
  let petSize = prompt(
    `Are you looking for a big, medium, or small ${petType}?`
  );
  petSize = petSize.toLowerCase().trim();
  return petSize;
}


function displayConfirmation(name, type, size) {
  if (name.length === 0 || type.length === 0 || size.length === 0) {
    alert(
      "Sorry, the information entered is not valid. Please try again"
    );
    adoptionInfo();
  } else
    alert(
      `Thanks ${name} for giving a new opportunity to a wonderful ${size} ${type}! We will be contacting you with a list of candidates! Have a wonderful day!😎`
    );
}
      

function validateInput() {}

let adoptButton = document.querySelector("button");
adoptButton = adoptButton.addEventListener("click", adoptionInfo);