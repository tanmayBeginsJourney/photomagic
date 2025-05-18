import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

const carouselItemsData = [
  {
    imageUrl: 'https://picsum.photos/seed/coloringbookpage/1200/600',
    promptText: 'Coloring Books: Your Photos, Your Story.',
    styleName: 'Coloring Book Fun'
  },
  {
    imageUrl: 'https://picsum.photos/seed/superherocomic/1200/600',
    promptText: 'Comic Strips: Adventures Made Real.',
    styleName: 'Dynamic Comic Action'
  },
  {
    imageUrl: 'https://picsum.photos/seed/birthdaycard/1200/600',
    promptText: 'Invitation Cards: Moments Uniquely Shared.',
    styleName: 'Personalized Birthday Joy'
  },
  {
    imageUrl: 'https://picsum.photos/seed/watercolorpainting/1200/600',
    promptText: 'Ghibli Style: Everyday Magic, Reimagined.',
    styleName: 'Elegant Watercolor Art'
  },
  {
    imageUrl: 'https://picsum.photos/seed/childrenstorybook/1200/600',
    promptText: 'Mandala Art: Find Your Center, Beautifully.',
    styleName: 'Charming Storybook Illustrations'
  },
  {
    imageUrl: 'https://picsum.photos/seed/fantasyportrait/1200/600',
    promptText: 'Old Photos: Memories Reborn in Color.',
    styleName: 'Immersive Fantasy Portraits'
  }
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [imageClass, setImageClass] = useState('carousel-image active-slide');
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      // Set initial image to zoom
      setImageClass('carousel-image active-slide');
      // Ensure text is visible on first load
      setTextVisible(true);
    }

    const timer = setTimeout(() => {
      setTextVisible(false); // Start fading out text
      setImageClass('carousel-image'); // Reset image zoom

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItemsData.length);
        // After index changes and new image/text is potentially loaded:
        setImageClass('carousel-image active-slide'); // Start zoom for new image
        setTextVisible(true); // Fade in new text
      }, 800); // Duration of text fade-out (match CSS transition)
    }, 10000 - 800); // Total display time minus fade-out time

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = carouselItemsData[currentIndex];

  return (
    <section className="image-carousel-section">
      <div className="carousel-image-container">
        {/* Keying the image helps ensure CSS transitions replay on src change */}
        <img key={currentItem.imageUrl} src={currentItem.imageUrl} alt={currentItem.styleName} className={imageClass} />
        <div className={`image-overlay-text ${textVisible ? 'visible' : ''}`}>
          <p>{currentItem.promptText}</p>
        </div>
      </div>
      {/* Add navigation dots/arrows later if needed for skeletal draft */}
    </section>
  );
}

export default ImageCarousel; 