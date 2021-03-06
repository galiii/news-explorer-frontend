import { handleResponse } from "./utils.js";
import { API_KEY, /*NEWS_URL,*/ PROXY_URL, PAGE_SIZE } from "./constants.js";

var date = new Date();
var last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
var day = last.getDate();
var month = last.getMonth() + 1;
var year = last.getFullYear();

const from = `${day}/${month}/${year}`;
const to = date;

export const getArticles = (keyWords) => {
  return fetch(
    `${PROXY_URL}?q=${keyWords}&apiKey=${API_KEY}&from=${from}$to=${to}&pageSize=${PAGE_SIZE}`
  ).then(handleResponse);
};
