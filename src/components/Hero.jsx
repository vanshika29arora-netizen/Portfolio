import "../App.css";

export default function Hero() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Vanshika Arora</span>
          </h1>
          <p>AI / ML Engineer | Data Scientist | Problem Mitigator</p>
          <button>
            <a
              href="https://www.linkedin.com/in/vanshika-arora-67a700247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: vanshikaarora
            </a>
          </button>
        </div>

        <div className="hero-img">
          <div className="img-box">
            <img src="/images/va_arora.png" alt="Vanii" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card highlight">
            <img src="/Portfolio/images/bb.jpg" alt="Fake News Detection" />
            <h3>Fake News Detection System</h3>
            <p>Built a machine learning model to automatically classify news articles
        as <strong>Fake</strong> or <strong>Real</strong> using NLP techniques.
        Focused on accurate text preprocessing, feature extraction, and model
        evaluation to ensure reliable predictions.</p>
            <a href="https://huggingface.co/spaces/Vanee45-hii/fake-news-detector" target="_blank" rel="noopener noreferrer" className="project-link" > App Link </a>
          </div>

          <div className="project-card highlight">
            <img src="/Portfolio/images/aa.jpg" alt="ECG Arrhythmia Detection" />
            <h3>ECG Arrhythmia Detection</h3>
            <p>Developed a deep learning system to detect cardiac arrhythmias from ECG
        signals. Combined convolutional and sequential models to capture both
        signal patterns and temporal dependencies for improved diagnosis support.</p>
            <a href="https://huggingface.co/spaces/Vanee45-hii/ecg-arrhythmia-detector" target="_blank" rel="noopener noreferrer" className="project-link" > App Link </a>
          </div>

          <div className="project-card highlight">
            <img src="/Portfolio//images/cc.jpg" alt="Decision Engine" />
            <h3>Multi-Language Translator</h3>
            <p>Built an AI-powered text translation system that converts English text into multiple languages using transformer-based NLP models. The application enables real-time translation with high accuracy, preserving contextual meaning.</p>
            <a href="https://huggingface.co/spaces/Vanee45-hii/language_translator" target="_blank" rel="noopener noreferrer" className="project-link" > App Link </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>Data Analysis & Visualization</span>
          <span>Machine Learning (Applied)</span>
          <span>Analytical Thinking</span>
          <span>Problem Decomposition and Logical Reasoning</span>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="hobbies">
        <h2>Interests & Hobbies</h2>
        <div className="hobby-grid">
          <div className="hobby-card">Artificial Intelligence</div>
          <div className="hobby-card">Building projects</div>
          <div className="hobby-card">Personal growth</div>
          <div className="hobby-card">Reading</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: vanshika29arora@gmail.com</p>
      </section>
    </div>
  );
}
