
export const isEmpty = (str) => str.length >= 3;

export const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
} 


export const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`${res.statusText}`);

export const customFetch = (url, headers) => fetch(url, headers).then(handleResponse);
  


