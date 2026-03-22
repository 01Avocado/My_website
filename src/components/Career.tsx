import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in E&TC</h4>
                <h5>Pimpri Chinchwad College Of Engineering</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursuing a Bachelor of Engineering in Electronics and Telecommunication with CGPA of 7.67.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Honors in Deep Learnig</h4>
                <h5>Pimpri Chinchwad College Of Engineering, Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Honors in Deep Learning.
              Maintaining a strong academic record (8.67 Honors CGPA) while
              developing innovative AI projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Asymmetrical Learning</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered core AI microservices using OpenAI, Gemini, Claude, and
              Deepgram. Co-developed the Wriddles App (Flutter/Firebase) and
              built scalable NLP/TTS pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
