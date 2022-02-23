
export const isEmpty = (str) => str.length >= 3;

export const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
} 
  