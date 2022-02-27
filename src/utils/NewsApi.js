/* 
GET https://newsapi.org/v2/everything?q=Apple&from=2022-02-25&sortBy=popularity&apiKey=API_KEY

curl https://newsapi.org/v2/everything -G \
    -d q=Apple \
    -d from=2022-02-25 \
    -d sortBy=popularity \
    -d apiKey=f62652aa082a406087f06f3d8f6cc36d */
    import { handleResponse } from "./utils.js";

var date = new Date();
var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
var day = last.getDate();
var month = last.getMonth() + 1;
var year = last.getFullYear();

const BASE_URL = "https://newsapi.org/v2/everything";
//https://nomoreparties.co/news/v2/everything
//https://newsapi.org/v2/everything
const API_KEY = "f62652aa082a406087f06f3d8f6cc36d";
const from = `${day}/${month}/${year}`
const to = date;
const pageSize = "10";

export const getArticles = (keyWords) => {
  return fetch(
    `${BASE_URL}?q=${keyWords}&apiKey=${API_KEY}&from=${from}$to=${to}&pageSize=${pageSize}`
  ).then(handleResponse );
};
