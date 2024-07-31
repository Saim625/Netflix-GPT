

export const checkValidData = (email, password) =>{

    const isValidEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/.test(password);

    let emailMessage = '';
    let passwordMessage = '';

  if (!isValidEmail) {
    emailMessage = "Invalid Email";
  }

  if (!isValidPassword) {
    passwordMessage = "Invalid Password";
  }

  return { emailMessage, passwordMessage };
}