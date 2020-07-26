import React from 'react'
import minipic from '../components/assets/minipic.jpg'
import '../App.css'

const Home = () => {
  return (
    <div className="body">
      <div className="center">
        <div className="avatar">
          <img src={minipic} alt="backgroundimg" />
        </div>

        <div className="content">
          <h1 className="h1">Bahare Eskandari</h1>
          <h2 className="h2">Javascript developer</h2>
          <p className="p">Tech Geek | Travel Enthusias</p>
          <p className="pDescription">
            This page is something I was working on at the same time as I was doing my internship.
            Fetching API from MovieDB and YouTube and displaying it. Features like firebase Auth
            (gmail login), searching/filtering for movies, scroll pagination and commenting/editing
            user comments which are all saved to firebase database. A feature in which a user is
            able to LIKE movies and add to their favourites list with the help of React
            Context(Provider). Added an Express API server to the project.
          </p>
          <h3 className="h3">Contact</h3>
        </div>
        <div className="social">
          <a href="https://github.com/bahareeskandari">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/bahare-eskandari-50b033195">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://www.facebook.com/bahare.eskandari.9/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.dropbox.com/s/t1ccsznoc6jaxnz/Bahare%20CV%20update.pdf?dl=0">CV</a>
        </div>
      </div>
    </div>
  )
}
export default Home
