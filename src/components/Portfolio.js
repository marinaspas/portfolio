import React from "react";

function Portfolio() {
  return (
    <div className="container">
      <h2 className="heading">Portfolio</h2>
      <div className="wrapper">
        <div className="portfolio">
          <img
            src="./images/weatherapp-screenshot.jpg"
            alt="The Weather App Screenshot"
          />
          <div className="project-info">
            <h3>The Weather App</h3>
            <p>Personal Project</p>
            <p>
              Technologies used: React JS, HTML, CSS3, JS and the OpenWeatherMap
              API
            </p>
            <p>
              <em> * the API has a limit of 10 requests per day</em>
            </p>
            <ul className="proj-links-list">
              <li>
                <a
                  href="https://wowza-weatherapp.netlify.app/"
                  className="link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/marinaspas/react-weatherapp"
                  className="link-btn source"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="portfolio">
          <img
            src="./images/cocktail-db-portfolio.jpg"
            alt="The Cocktails DB Screenshot"
          />
          <div className="project-info">
            <h3>The Cocktails Database</h3>
            <p>Personal Project</p>
            <p>
              Technologies used: React JS, HTML, CSS3, JS and the TheCocktailDB
              API
            </p>
            <ul className="proj-links-list">
              <li>
                <a
                  href="https://the-cocktails-db.netlify.app/"
                  className="link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/marinaspas/cocktails"
                  className="link-btn source"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="portfolio">
          <img
            src="./images/travl-blog-portfolio.jpg"
            alt="Travel Blog Screenshot"
          />
          <div className="project-info">
            <h3>The Travel Blog</h3>
            <p>Personal Project</p>
            <p>Technologies used: React JS, HTML, CSS3 and Hooks</p>
            <ul className="proj-links-list">
              <li>
                <a
                  href="https://trvl-blog.netlify.app/"
                  className="link-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/marinaspas/Travel"
                  className="link-btn source"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
