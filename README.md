## Website
[client website](https://www.explorer-news.students.nomoreparties.sbs/)

## Api
[api](https://api.explorer-news.students.nomoreparties.sbs/)


External IP -- 34.145.108.163


# Summary:
### Performance Criteria

- [] <!--30.27--> The project functionality is fully implemented according to the current stage's requirements:
    - The preloader is visible and spinning during request execution.
    - All project links and buttons are functioning.
    - All forms are validated on the client side.
    - When clicking on the "Sign up" button in the "Sign up" popup window, a request is sent to the `/signup` route, provided that all input fields have been filled in correctly. If the request is successful, a message is displayed.
    - When clicking on the "Sign in" button, provided that all input fields have been filled in correctly, a request is sent to the `/signin` route. If the request is successful, the popup is closed.
    - Both header states function correctly. If the user is not logged in, the header should have the "Sign in" button; and if the user is logged in, there should be no "Sign in" button. The "Saved articles" link, along with a log out button, should appear in its place.
    - Once the search form has been submitted successfully, a block with results appears. If nothing was found, the message "Nothing found" appears.
    - 3 cards are displayed in the results block. Clicking on the "Show more" button will render the next 3 cards.
    - If the user closes the tab and then returns to the site, data is taken from local storage upon mounting the `App` component.
**if I reload the page the search results don't show again**
    - After the user has been authorized, the "Save" icon becomes active in the card block.
    - When clicking the "Save" icon in the card block, a request is made to the `/articles` route of the Practicum API.
    - When clicking on the active "Save" icon in the card block, a request to delete the card is made. After a successful request, the card is removed from the "Saved articles" page.
    - The "Saved articles" page displays the following: username, number of articles saved, and the keywords by which articles were found.
    - Card blocks in the "Saved articles" page contain the following: the keyword by which the card was found and the trash can icon for deleting the article.
- [x] <!--2.16--> No errors occur when building or running the project.
- [x] <!--2.16--> The global state variable `currentUser` has been created.
- [x] <!--2.16--> Local storage: the interaction with the JWT token, the results of the search request, and the state variable are set up in the right order.
- Registration and authorization:
    - [x] <!--2.16--> The `/saved-news` route is protected using the `ProtectedRoute` HOC component.
    - [] <!--2.16--> When trying to access the `/saved-news` route, unauthorized users are redirected to `/signin` with an open authorization popup window.
**nothign is opened in that case**
    - [x] <!--2.16--> When an unauthorized user clicks on the icon to save an article, the registration popup window opens.
    - [x] <!--2.16--> After successful authorization, the popup window is closed. A link to "Saved articles" and a logout button with the username appear in the header.
    - [x] <!--2.16--> The `/` route is not protected.
    - [x] <!--2.16--> After a successful `onSignOut()` handler call, the user is redirected to `/`.
    - [x] <!--2.16--> The `useHistory()` hook is used correctly.
    - [x] <!--2.16--> The components `<Switch />`, `<Route />`, and `<Redirect />` are used correctly.
- Components:
    - [x] <!--2.16--> Hooks are not used inside conditional statements or loops.
    - [x] <!--2.16--> For class components, effects are described inside the component lifecycle methods.
    - [x] <!--2.16--> Hooks are called in a component's main function.
    - [x] <!--2.16--> The `Main`, `NavBar`, and `SavedNewsHeader` components are subscribed to the `CurrentUserContext` context.
    - [x] <!--2.16--> The context is embedded in the `App` component via `CurrentUserContext.Provider`.
    - [x] <!--2.16--> The `currentUser` state variable is created in the `App` root component. This variable is used as a value of the context provider.
    - [x] <!--2.16--> The necessary handlers are defined inside the `App` root component: `onRegister()`, `onLogin()`, and `onSignOut()`. These handlers are passed to the appropriate components: `Register.js`, `Login.js`, and `NavBar.js`.
    - [x] <!--2.16--> The popup components only contain the submit event handlers. Other handlers, such as `handleUpdateUser()`, are described inside the `App` component.
- [x] <!--2.16--> Asynchronous API requests:
	- Requests can be made through the Fetch API or by using XMLHttpRequest.
	- Third-party libraries (such as axios or jQuery) are not used.
	- API requests are contained in separate files: `MainApi.js` and `NewsApi.js`.
	- The chain for processing promises ends with a `catch()` block.
	- The first `then()` handler returns `res.json`.
- [x] <!--2.16--> Naming:
	- Function and variable names use camelCase.
	- Only nouns are used as variable names.
	- Plural nouns are used for `NodeList`.
	- Classes are named using nouns that begin with a capital letter.
	- The `const` keyword is used for variables that won't be changed directly.
	- Class names correspond with their content.
	- Names must not include inappropriate or unclear abbreviations.
- [x] <!--2.16--> No third-party JavaScript libraries are used.
- [x] <!--2.16--> The date parameters of requests to News API must be calculated automatically (7 days prior to the current date). We recommend converting the `from` parameter to a timestamp and vice versa.

### Best Practices

- [x] <!--1.88--> The initial state of state variables contain the correct data type.
- [x] <!--1.88--> The API request for information about the user and for the array of cards is made once during mounting.
- [x] <!--1.88--> API requests are described inside the `App` component.
- [] <!--1.88--> Arrow functions are not passed as handler functions.
- [x] <!--1.88--> API error handling:
    - [] <!--1.88--> The user receives a message in case of an error.
    - [x] <!--1.88--> Form fields are blocked while requests are being sent.
- [x] <!--1.88--> Non-variable values (hard-coded constants) are named in all capital letters and stored in a separate configuration file.

### Recommendations

- [x] <!--1.67--> Semantically correct blocks are used for components.
- [x] <!--1.67--> No `<div>` or other unnecessary HTML tags are used for components that consist of single-level blocks.
- [x] <!--1.67--> The code is clean and easy to understand:
    - The purpose of each listener callback is clear from its name.
    - There are no "magic numbers," i.e. all numeric values are assigned to variables.
    - Сonstants are described in the same scope in which the function is declared. Inside the function, the values of the constants are taken from the closure.

## Number of points: 64

## Additional comments:
- 
