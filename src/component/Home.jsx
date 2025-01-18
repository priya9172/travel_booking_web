import React from 'react';
import { Link } from 'react-router-dom'; 
import { RiCompassDiscoverFill } from "react-icons/ri";

function Home() {
  return (
    <div style={{ position: 'relative', textAlign: 'center', fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` }}>
      {/* Background Image */}
      <img
        src="https://t4.ftcdn.net/jpg/03/05/77/55/240_F_305775533_zsJZnX0m5fyXs6G0nSlDJIUgaPUWmMmb.jpg"
        alt="Sample"
        className="img-fluid"
        style={{
          width: '100%',
          height: '620px',
          objectFit: 'cover',
          filter: 'brightness(70%)', // Darkens image for better text contrast
        }}
      />

      {/* Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Subtle background for text clarity
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          maxWidth: '90%', // Ensures content is responsive
          width: '100%', // To ensure it does not overflow on small screens
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            lineHeight: '1.3',
            fontWeight: '700',
            marginBottom: '1.5rem',
          }}
        >
          Explore the World, One Journey at a Time
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Welcome to <strong>Yoliday</strong>, your gateway to unforgettable adventures. Whether you're dreaming of sun-soaked beaches, 
          snow-capped mountains, or bustling city escapes, we’ve got you covered. Embark on a journey tailored to your dreams.
        </p>
        <Link to="/Destination" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: "10px",
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
          >
            <RiCompassDiscoverFill />
            Destination
          </button>
        </Link>
      </div>

      {/* Media Queries for Responsive Margins */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1rem;
            }

            .img-fluid {
              height: 400px;
            }

            button {
              padding: 0.7rem 1.2rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.6rem;
            }

            p {
              font-size: 0.9rem;
            }

            .img-fluid {
              height: 350px;
            }

            button {
              padding: 0.6rem 1rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
