import React from 'react';
import Image from 'next/image';

const data = [
  { id: 1, src: '/partner1.png', alt: 'Partner 1' },
  { id: 2, src: '/partners2.png', alt: 'Partner 2' },
  { id: 3, src: '/partner9.png', alt: 'Partner 9' },
  { id: 4, src: '/partner4.png', alt: 'Partner 4' },
  { id: 5, src: '/partner5.png', alt: 'Partner 5' },
  { id: 7, src: '/partner7.png', alt: 'Partner 7' },
  { id: 8, src: '/partner8.png', alt: 'Partner 8' },
  { id: 9, src: '/partner15.png', alt: 'Partner 9' },
  { id: 10, src: '/partner10.png', alt: 'Partner 10' },
  { id: 12, src: '/wstf-logo.svg', alt: 'Partner 12' },
  { id: 13, src: '/partner13.png', alt: 'Partner 13' },
  { id: 14, src: '/partner14.png', alt: 'Partner 14' },
  { id: 15, src: '/partner3.jpg', alt: 'Partner 3' },
  { id: 16, src: '/partner16.jpg', alt: 'Partner 16' },
  // { id: 17, src: '/partner17.jpg', alt: 'Partner 17' },
  // { id: 18, src: '/partner18.jpg', alt: 'Partner 18' },
  // { id: 19, src: '/partner19.jpg', alt: 'Partner 19' }
];

const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-grid">
        {data.map((partner) => (
          <div key={partner.id} className={partner.id === 9 ? "partner-card-shardeum" : "partner-card"}>
            <Image 
              className={partner.id === 15 ? "scale-[1.7]" : partner.id === 9 ? "scale-[2.6]" : partner.id==16 ? "rounded-full" : ""}
              src={partner.src}
              alt={partner.alt}
              width={partner.id === 9 ? 400 : 100}
              height={partner.id === 9 ? 400 : 100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
