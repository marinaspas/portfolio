import React from "react";

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h2 className="main-hdr">
          Hey, I am <span>Marina</span>. A passionate front end web developer
          that enjoys building cool interactive websites using the latest web
          technologies.
        </h2>
      </section>
      <section className="about">
        <img
          src="./images/marina_avatar.jpg"
          alt="avatar of marina"
          className="avatar"
        />
        <div className="bio">
          <p>
            Working with both ad agencies and start-ups, I have experience
            working alongside talented people to create web apps and products
            for both businesses and consumers.
          </p>
          <p>
            My main expertise is front end web development. Especially working
            with HTML, CSS and JS. I build digital products that are responsive,
            simple and intuitive for end users.
          </p>
          <p>
            When I am not building stuff, you can find me reading, cooking,
            gaming, hanging out with my dog, and working out.
          </p>
          <p>
            If you want to work together you can{" "}
            <a href="mailto:msmarinaspas@gmail.com" className="links">
              email
            </a>{" "}
            me.
          </p>
          <p>Come find me:</p>
          <ul className="social-list">
            <li>
              <a
                href="https://www.linkedin.com/in/marinaspas"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marinaspas"
                target="_blank"
                rel="noreferrer"
                className="links"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
