import { customFetch, handleResponse } from "./utils.js";

class MainApi {
  constructor({ baseUrl }) {
    // constructor body
    this._baseUrl = baseUrl;
  }

  register = ({ email, password, username }) => {
    console.log(email, password, username);
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    }).then(handleResponse);
  };

  login = ({ email, password }) => {
    console.log("in api",email, password);
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(handleResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        } else {
          return; // we need to do this to avoid ESLint errors
        }
      });
  };

  getContent = (token) => {
   // console.log("token line 43", token);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .then((data) => data);
  };

  // Loading User Information from the Server
  getUserInfo = (token) => {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Loading Cards from the Server
  getUserArticles = (token) => {
    return customFetch(`${this._baseUrl}/articles`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Adding a New Card
  addArticle = ({ name, link }, token) => {
    return customFetch(`${this._baseUrl}/articles`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    });
  };

  // Deleting a Card
  deleteArticle = (articleId, token) => {
    return customFetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  };

  // Adding  Likes
  saveArticle = (token, data, keyword) => {
    //console.log("in save",data);
    return customFetch(`${this._baseUrl}/articles`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        keyword,
        title: data.title,
        text: data.description,
        date: data.publishedAt ,
        source: data.source.name,
        link: data.url,
        image: data.urlToImage,
       
      }),
    });
  };

  // Removing Likes
  dislikeCard = (cardId, token) => {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  };

  changeLikeCardStatus = (cardId, isLiked, token) => {
    console.log("API ", cardId, isLiked);
    return customFetch(`${this._baseUrl}/cards/${cardId}/likes/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: `${isLiked ? "PUT" : "DELETE"}`,
    });
  };
}

const api = new MainApi({
  //baseUrl: "https://api.explorer-news.students.nomoreparties.sbs",
  baseUrl: "http://localhost:3000",
});

export default api;
