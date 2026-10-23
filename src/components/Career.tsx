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
              Bachelor of Technology in Electronics and Telecommunication (GPA 7.66). Focused on deep learning research, signal processing, and systems engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Honors in Deep Learning</h4>
                <h5>Pimpri Chinchwad College Of Engineering, Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Honors in Deep Learning with 9.0 GPA. Focused on multimodal transformers, model evaluation, and computer vision research.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Development Intern</h4>
                <h5>Asymmetrical Learning</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered and deployed 8+ Python AI microservices integrating OpenAI, Gemini, Claude, Deepgram, and ElevenLabs. Co-developed Wriddles app with LLM-driven workflows and adaptive explore–exploit recommendations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate AI Software Engineer</h4>
                <h5>Sciverse Solutions</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Leading AI architecture for a SaaS assistant with layered tool & RAG orchestration, multi-round tool execution, RBAC, cost budgeting, and lightweight in-house guardrails using Ollama models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
