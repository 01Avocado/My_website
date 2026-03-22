import React from "react";
import "./styles/PersonalInterests.css";

interface Interest {
  id: number;
  name: string;
  description: string;
  image: string;
}

const interests: Interest[] = [
  {
    id: 1,
    name: "Speed Cubing",
    description: "Holds a personal best solve of 15.63 seconds in 3x3 rubik's cube.",
    image: "/interests/cube.jpeg",
  },
  {
    id: 2,
    name: "Basketball",
    description: "Played 3+ years of competitive basketball.",
    image: "/interests/basketball.jpeg",
  },
  {
    id: 3,
    name: "Cricket",
    description: "Former Vice Captian of my District Cricket Team.",
    image: "/interests/cricket.jpeg",
  },
  {
    id: 4,
    name: "Gaming",
    description: "Immersive storytelling and competitive gameplay in digital worlds.",
    image: "/interests/gaming.jpeg",
  },
  {
    id: 5,
    name: "Reading",
    description: "I enjoy reading books in my free time.",
    image: "/interests/reading.jpeg",
  },
  {
    id: 6,
    name: "Content Creation",
    description: "Creating engaging content for various platforms.",
    image: "/interests/editing.jpeg",
  },
];

const updatedInterests: Interest[] = [
  ...interests,
  {
    id: 7,
    name: "Biking",
    description: "Exploring the outdoors on two wheels.",
    image: "/interests/biking.jpeg",
  },
  {
    id: 8,
    name: "Running",
    description: "Have 5+ medals for running 5k and 10k races.",
    image: "/interests/running.jpeg",
  },
];


const PersonalInterests: React.FC = () => {
  return (
    <section className="personal-interests" id="interests">
      <h2 className="section-title">Hobbies</h2>
      <div className="interests-grid-wrapper">
        <div className="interests-grid-main">
          {/* Staggered 3-column grid with 9 items */}
          <div className="interest-item col-1">
            <InterestCard interest={updatedInterests[0]} />
          </div>
          <div className="interest-item col-2 elevated">
            <InterestCard interest={updatedInterests[1]} />
          </div>
          <div className="interest-item col-3">
            <InterestCard interest={updatedInterests[2]} />
          </div>

          <div className="interest-item col-1">
            <InterestCard interest={updatedInterests[3]} />
          </div>
          <div className="interest-item col-2 elevated portrait-area">
            <div className="interest-card portrait-card">
              <div
                className="card-bg"
                style={{ backgroundImage: `url(/interests/portrait.jpg)` }}
              ></div>
              <div className="card-overlay"></div>
              <div className="card-label">Profile</div>
            </div>
          </div>
          <div className="interest-item col-3">
            <InterestCard interest={updatedInterests[4]} />
          </div>

          <div className="interest-item col-1">
            <InterestCard interest={updatedInterests[5]} />
          </div>
          <div className="interest-item col-2 elevated">
            <InterestCard interest={updatedInterests[6]} />
          </div>
          <div className="interest-item col-3">
            <InterestCard interest={updatedInterests[7]} />
          </div>
        </div>
      </div>
    </section>
  );
};


const InterestCard: React.FC<{ interest: Interest }> = ({ interest }) => {
  return (
    <div className="interest-card">
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${interest.image})` }}
      ></div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <p>{interest.description}</p>
      </div>
      <div className="card-label">
        <span>{interest.name}</span>
      </div>

    </div>
  );
};

export default PersonalInterests;
