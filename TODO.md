# My to do list:

## Front-end summary

- Authentication:
  - [ ] Create a component for handling "forgot password";
  - [ ] Create a component for "Sign up"
  - [ ] Create a componenet for signing up with social network accounts
- App pages/components:
  - [ ] Create a Header with user name, gravatar and a search bar
  - [ ] Create a SearchBar page that renders by default previous search results
  - [ ] Create a main view component to render recipes according to categories
  - [ ] Create a "new recipes" component to render newly added recipes (cards with name, photo, rating, author and duration)
  - [ ] Create a Footer containing 5 icons: home, bookmarks, upload new recipe, notifications and profile

## Back-end summary

- Implemenent RESTFul API using Node.js, Express.js, Mongoose and MongoDB, in order to use Brazilian recipes and Portuguese language.

## Next immediate tasks:

- Implement the bookmarks page:

  - [NOK] Fix the helper function to add an item to local storage;

- Implement the home page:

  - [OK] Create cards to render categories sample meals
  - [NOK] Implement drag effect on cards and category buttons for large screens
  - [NOK] Create the "New Recipes" component

- Start adding framer-motion animations [in progress];

- Implement the footer

- Implement the details page:

  - [NOK] Fix bug of procedures (sometimes it is rendered an empty step);
  - [NOK] Implement saving to Details state and to localstorage the recipe progress;
  - [NOK] Implement plus/minus btns to increase/decrease servings and update ingredients on details page;
  - [NOK] Implement "add to shopping list" btn, that adds ingredients into a unique list or to a separate one.

- Implement the Search page:

  - Refactor the top nav bar of home page - use the TopNavigationBar componenet.
  - Implement pagination on search page;

- Implement reviews functionality;

- Fix type of context provider on AppProvider.tsx
