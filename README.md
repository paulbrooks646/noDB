Movie Rating App


Application Concept and wireframe

Application Concept

This is a movie rating app, I will be using an initial array or objects that I have created. It will be full CRUD so it will have a GET, Post, Put and Delete section. I will GET the information from my array and display it on the app. I will be able to POST a new movie to the array. I will be able to PUT a new rating on any of the movies in the array. I will be able to delete movies from the array if they are particularly terrible. You will also be able to only display movies of a certain rating.

Functionality

I want a <Header> at the top of the page to display the name of my app. When my app is opened there will be a list a movie objects with an Id, Name and Rating. You will be able to add new movies, update the rating on movies or delete movies from the list.
I want a <Footer> at the bottom of my app.

Endpoints

Get: Fetch current array of movie objects.
Post: Add a new movie to the array.
Put: Change the rating on a movie.
Delete: Delete a movie from the array.

Component Architecture

App.js: Stateful. Will hold the array of movies.
Header: Functional. Will display header at the top of the page.
Filter: Stateful. Will map through the array and only display ones that have a specific rating.
Edit: Stateful. Will contain the functions to create, edit, and delete.
Footer: Functional. Will display the footer.



