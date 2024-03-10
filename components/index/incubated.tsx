import React from 'react';
import Image from 'next/image';

const data = [
  { id: 1, src: '/avex.jpg', alt: 'Partner 1', link: 'https://avex.id/defy' },
  { id: 2, src: '/partner18.jpg', alt: 'Partner 2', link: 'https://twitter.com/0xSimpX' },
  { id: 3, src: '/partner17.jpg', alt: 'Partner 3', link: 'https://mintair.xyz/' },
  { id: 4, src: '/partner19.jpg', alt: 'Partner 4', link: 'https://twitter.com/BruhmaHq' },
  { id: 5, src: '/porfo.jpg', alt: 'Partner 5', link: 'https://porfo.app/' },
];

const Incubated = () => {
  return (
    <div className="partners-container py-40">
      <h2 className="partners-heading ">Incubated Under BlockChain Club SRM</h2>
      <div className="partners-grid mt-16">
        {data.map((partner) => (
          <div key={partner.id} className="partner-card">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <Image 
              className='rounded-full'
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={150}
                objectFit="contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incubated;
