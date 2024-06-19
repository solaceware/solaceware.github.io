import React from 'react';
import { ReactTyped } from 'react-typed';
import './App.css';

const App: React.FC = () => {
  const blogPosts = [
    {
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.'
    },
    {
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.'
    }
  ];

  return (
    
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="logo">solaceware</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <h1 className="no-glitch">solaceware</h1>
        <section className="hero glass">
          <div className="hero-content">
            <div className="typing-wrapper">
              <ReactTyped
                strings={['Java', 'Lua', 'Rust', 'Go']}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </div>
            <button className="cta-btn">Get Started</button>
          </div>
        </section>

        <section className="blog glass">
          <h2>Blog</h2>
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 solaceware.</p>
      </footer>
    </div>
  );
};

export default App;
