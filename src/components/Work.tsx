import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Wriddles: AI-Powered Learning Platform",
    category: "AI & Mobile Application",
    tools: "Flutter, Firebase, GCP, Python, Gemini API",
    description:
      "Co-developed and deployed an AI-powered personalized learning platform on Google Play and Apple App Store, featuring explore–exploit recommendation algorithms, automated content classification, and LLM-driven workflows.",
    image: "/images/Wriddles.jpeg",
  },
  {
    title: "Employee Onboarding & Competency Platform",
    category: "Full-Stack Web Application",
    tools: "React, TypeScript, FastAPI, PostgreSQL, SQLAlchemy, Google OAuth, JWT, TailwindCSS",
    description:
      "Engineered 20+ REST APIs, a PostgreSQL schema with 15+ relational tables, Google OAuth/JWT authentication, role-based workflows, and document-based quiz import.",
    image: "/images/employee_onboarding.jpg",
  },
  {
    title: "Multimodal Transformer: Chromatin Accessibility",
    category: "Deep Learning Research (BMC Informatics)",
    tools: "PyTorch, Multimodal Transformers, Genomic Data, ROC-AUC (0.890), Ablation Studies",
    description:
      "Modality-aware multimodal transformer integrating DNA sequence, histone-modification, and transcription-factor signals. Achieved 0.802 Pearson correlation and 0.890 ROC-AUC with systematic ablation studies.",
    image: "/images/chromatin_transformer.jpg",
  },
  {
    title: "Smart Water Quality & Disease Outbreak Forecasting",
    category: "IoT & Predictive ML (IEEE PuneCon 2025)",
    tools: "Python, ESP32, Random Forest, LSTM, Scikit-learn",
    description:
      "Published in IEEE Xplore. Smart IoT-based water quality monitoring and outbreak forecasting with real-time sensor integration and predictive machine learning models.",
    image: "/images/Water_Quality.jpeg",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
