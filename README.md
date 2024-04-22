## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Details about my React App
I imported React, useState and useEffect from react.
I also imported BrowserRouter, Routes, Route and Link from react-router-dom after installing using pnpm add react-router-dom
Then i imported ErrorBoundary from react-error-boundary, this was installed using pnpm add react-error-boundary. 
Error boundary is like a fallback within our app to display if there in an error within our code and serves as a fallback display for a better user experience.

My react app has two pages folder: Home and RepoDetails
The home page is where a user sees first when visiting my app.

### I created five components named; Home, RepoDetails, NavBar, Pagination, Repos.
Home components holds the NavBar components, the NavBar component which is a child of the Home components consists of the link to navigate to home and the RepoDetails page.

Fetching of data through the Github API
I made use of useEffect, then async promises to fetch my github api then converted it to a JSON format using json().

### The RepoDetails page holds the Repos and Pagination components. And it also contains the logic used in fetching my github API repositories and also rendering my Repos.
It also contains the paginate logic and function which is then passed through props to be used in my pagination component.
We have four react hooks in our RepoDetails component, this hooks are
1. repos and setRepos: this helps us in storing the repos to an array and the setRepos function helps in updating the values in the repos array.
2. loading and setLoading: this helps us display loading on the screen while we wait as our data is being fetched from the API.
(A conditional rendering is used to either display loading if the details is still being fetched or display the data which in this case the repos after being fetched.)
3. currentPage, setCurrentPage: we gave an initial value of 1 to currentPage and with each click of the paginate list of numbers the current page is updated with setCurrentPage to the new number of paginate being clicked.
4. reposPerPage: this takes in only one destructured useState array value unlike the rest which takes two index. I set my reposPerPage to 3 which makes it display only 3 repos each per pagination.

### Repos components accepts two props named repos and loading, repos provide the list of repos to be rendered and loading handles what to display on screen before the repos are fetched from the Github API.
Repos component maps through the list of repositories fetched from the API and display them, each repo is given a key prop, the key in instance was generated from github repo ID.
Each ID in a github repository holds a unique ID which is a very good option to use in generating key prop for my list of repos.

### The pagination component accepts three props named, reposPerPage, totalRepos, paginate.
reposPerPage is set to 3, totalRepos is calculated by our logic, paginate is a function
Pagination component recieves the logic used in navigating through the list of repos rendered, if we were to display all the information recieved from the async fetch we made, 
it might be overwhelming depedning on the number of repos or data being fetched. Pagination helps in dividing the total of data being fetched and displayed on the screen.
I set my number of repos to display to 3 per each pagination.
A react hook useState is used in this component to save my active page as 1 and then to set the active page to a number among the list of numbers on the pagination.
The pagination component has an onClick event handler which sets the number of the active page and also paginates the number, this enables us to click on any number displayed on our paginate and it takes us to the active page containing the fetched repos.

