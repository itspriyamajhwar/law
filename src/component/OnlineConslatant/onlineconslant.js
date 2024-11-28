import React from "react";
import { useNavigate } from "react-router-dom";
import "./onlineconslant.css";

function OnlineConsultant() {
  const navigate = useNavigate();

  return (
    <section id="onlineconsultant" className="section">
      <h1>Online Legal Consultation</h1>
      <div className="container swiper">
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            {[
              {
                title: "Divorce & Matrimonial Issue",
                description:
                  "Divorce laws differ by location, requiring an understanding of local grounds for divorce, period requirements.",
                image: "https://th.bing.com/th/id/OIP.RhmqjoUAuQQtUU7bwj3plAHaEn?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
              {
                title: "Property Dispute",
                description:
                  "A property dispute involves a legal disagreement over the ownership, use, or division of property.",
                image: "https://newdirectionfamilylaw.com/wp-content/uploads/2020/11/Resolving-Property-Disputes-When-a-Marriage-Ends.jpg",
              },
              {
                title: "Employment & Salary Issue",
                description:
                  "An employee salary issue refers to disputes or concerns regarding unpaid wages, incorrect salary payments.",
                image: "https://tse4.mm.bing.net/th?id=OIP.qCWixUtkOJcKKSvc5gTYXgHaE7&pid=Api&P=0&h=180",
              },
              {
                title: " Debt Recovery NBFC/Bank",
                description:
                  " debt recovery content for NBFCs and banks should prioritize clarity, empathy, and compliance.",
                image: "https://th.bing.com/th/id/OIP.HZOkyJ2SgnAo1vWspu-jjQHaC9?w=311&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
              {
                title: "Criminal Matter",
                description:
                  "A criminal matter refers to an issue or case involving the violation of laws, where the state prosecutes an individual or entity for committing an illegal act.",
                image: "https://tse4.mm.bing.net/th?id=OIP.GXLeGqRmAPdso-nLx9KymQHaEO&pid=Api&P=0&h=180",
              },
              {
                title: "Family Dispute",
                description:
                  "A family dispute is a disagreement or conflict between family members, often involving emotional or legal issues.",
                image: "https://th.bing.com/th/id/OIP.zM7vtyB67SN0MMb4aLMbdAHaDg?w=292&h=166&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
            ].map((card, index) => (
              <li className="card-item swiper-slide" key={index}>
                <a href="/book-consultant" className="card-link">
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="card-image"
                  />
                  <p className="badge">{card.title}</p>
                  <h2 className="card-title">{card.description}</h2>
                  <button className="card-button material-symbols-rounded">
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      

      <div className="about-section">
        <div className="Mobdcontainer">
          <h2>STANDARD CHARGES</h2>
          <select className="dropdown">
              <option>Divorce & Matrimonial</option>
              <option>Property Dispute</option>
              <option>Family Dispute</option>
              <option>Employee Salary Issue</option>
              <option>Money Recovery</option>
              <option>Criminal Matter</option>
              <option>Court Marriage</option>
              <option>Other</option>
            </select>
          <section className="pricing-options">
          <p>
              A 30-minute consultation will be enough to identify the material
              facts, process, and documents to be collected in your case.
            </p>
          
            <div className="price-option">
              <input type="radio" name="consultation" id="option1" />
              <label htmlFor="option1">₹599 for 30 mins</label>
            </div>
            <div className="price-option">
              <input type="radio" name="consultation" id="option2" />
              <label htmlFor="option2">₹999 for 60 mins</label>
            </div>
          </section>

          <button
            className="book-btn"
            onClick={() => navigate("/book-consultant")}
          >
            BOOK CONSULTATION
          </button>
        
        </div>
      </div>
      <section>
        <div className="feacontainer">
          <h2>Other Featured Features</h2>
          <div className="feature">
            <div className="feature-box court-marriage">
              <h3>Court Marriage</h3>
              <p>
                Family law attorneys can help you understand the marriage
                requirements in your state and...
              </p>
              <a href="#contact"><button>Know More</button></a>
            </div>
            <div className="feature-box birth-certificate">
              <h3>Birth Certificate</h3>
              <p>
                Get a Birth Certificate online at a very affordable price and
                enjoy various government benefits.
              </p>
              <a href="#contact"><button>Know More</button></a>
            </div>
            <div className="feature-box succession-certificate">
              <h3>Succession Certificate</h3>
              <p>
                Succession certificates are important to establish the validity
                and legality of the legal...
              </p>
            <a href="#contact"><button>Know More</button></a>
            </div>
          </div>
          <a href="#services" className="view-all">
            View All Features
          </a>
        </div>
      </section>
    </section>
  );
}

export default OnlineConsultant;
