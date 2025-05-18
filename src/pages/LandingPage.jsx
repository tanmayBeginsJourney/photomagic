import React from 'react';
import { Link } from 'react-router-dom'; // For CTA button
import Header from '../components/Header';
import ImageCarousel from '../components/ImageCarousel'; // Import the carousel
import ContactSection from '../components/ContactSection'; // Import ContactSection
import './LandingPage.css';

// Placeholder for styles, or we can create a LandingPage.css later
// import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <ImageCarousel /> {/* Add the carousel here */}
      
      <main className="landing-page-main-content"> {/* Added a class for better targeting if needed */}
        <section className="cta-section">
          <h2 className="cta-headline">Wanna give it a twirl?</h2>
          <p className="cta-subheadline">
            Choose from over 5000 variations and reimagine your memories.
          </p>
          <Link to="/upload" className="cta-button-main">Get Started</Link>
        </section>

        {/* How it Works section will go here (Task 1.5) */}
        
      </main>
      {/* ContactSection is placed outside the main content padding for full-width background possibility */}
      <ContactSection /> 

      <footer id="footer" className="placeholder-section app-footer">
        <p>&copy; {new Date().getFullYear()} Photomagic. All rights reserved. (Footer Content - Task 1.6)</p>
      </footer>
    </div>
  );
}

export default LandingPage; 