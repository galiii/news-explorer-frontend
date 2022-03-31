# press --> [deployed app](https://www.explorer-news.students.nomoreparties.sbs/)

# press ---> [api](https://api.explorer-news.students.nomoreparties.sbs/)

External IP -- 34.145.108.163

<img src="./readme/readme.png" width="1100"  hight="400" alt="project">

### 🛠 &nbsp;Tech Stack

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![Npm](https://img.shields.io/badge/-Npm-05122A?style=flat&logo=npm)&nbsp;
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC)&nbsp;
![Figma](https://img.shields.io/badge/-Figma-05121A?style=flat&logo=figma)&nbsp;



## Markup and JSX
&nbsp;

### Create React App

using [Create React App](https://create-react-app.dev/) 

&nbsp;

#### NPM
```bash
npm start
```

&nbsp;
### File structure and components

* For React components: `components`
* For auxiliary functions and API requests: `utils`
* For images: `images`
* For third-party resources such as fonts: `vendor`


```bash
-- components/

---- App/
------ App.js
------ App.css
```

 ### Part  of components that in my this project:
* `App` — the root component of the application, created  by CRA
* `Main`, `SavedNews` — the components of the main page and the page with saved cards
* `Header` — the component that renders the site header on the page

&nbsp;
### Routes

<img src="./readme/2.png" width="900"  hight="200" alt="header">

* The `/` route  display the project's main page
* The `/saved-news` route display the `"Saved articles"` page
&nbsp;

` "react-router-dom": "^5.2.0",`
```bash
npm
npm i react-router-dom
```
&nbsp;
```jsx
import { Route, Switch, useHistory } from "react-router-dom"; 
 <Switch>
    <Route exact path="/">
        <Main/>
          </Route>
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/saved-news">
            <SavedNewsHeader savedArticles={savedArticles} />
            <SavedNewsList />
          </ProtectedRoute>
        </Switch>
```
how its work
```jsx
import { Link, useLocation } from "react-router-dom";
  <Link to="/" >{"Home"}</Link>
          {isLoggedIn && (
              <Link to="/saved-news">{"Saved articles"}</Link>
```
&nbsp;

### Adjustment CSS

* Elements are arranged using `flex` or `grid-layout`.

 for example 
```css
.card-list__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```
<img src="./readme/3.png" width="900"  hight="600" alt="cards">

* Responsive layout follows the dimensions specified in the `Figma` design. The layout doesn't break between breakpoints.
* Fonts are connected using `@font-face.`
```css
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("roboto-400-regular.woff2") format("woff2"),
    url("roboto-400-regular.woff") format("woff");
}
```
&nbsp;
##  React and JS Functionality

using API service to use — https://newsapi.org

request sent to `NewsAPI`:
```bash
GET https://newsapi.org/v2/everything?q=${keyWords}&apiKey=${API_KEY}&from=${from}$to=${to}&pageSize=${PAGE_SIZE}
```








