import React from 'react';
import Image from 'next/image';

const data = [
  { id: 1, src: '/partner1.png', alt: 'Partner 1' },
  { id: 2, src: '/partner2.png', alt: 'Partner 2' },
   { id: 3, src: '/partner3.png', alt: 'Partner 3' },
   { id: 4, src: '/partner4.png', alt: 'Partner 4' },
   { id: 5, src: '/partner5.png', alt: 'Partner 5' },
   { id: 7, src: '/partner7.png', alt: 'Partner 7' },
   { id: 8, src: '/partner8.png', alt: 'Partner 8' },
   { id: 9, src: '/partner9.png', alt: 'Partner 9' },
   { id: 10, src: '/partner10.png', alt: 'Partner 10' },
   { id: 12, src: '/wstf-logo.svg', alt: 'Partner 12' },
   { id: 13, src: '/partner13.png', alt: 'Partner 13' },
   { id: 14, src: '/partner14.png', alt: 'Partner 14' }
];

const Partners = () => {
   return (
     <div className="partners-container">
       <h2 className="partners-heading">Our Partners</h2>
       <div className="partners-grid">
         {data.map((partner) => (
           <div key={partner.id} className="partner-card">
             <Image
               src={partner.src}
               alt={partner.alt}
               width={130} // Fixed size for the image width
               height={130} // Fixed size for the image height
               objectFit="contain" // Contain the logo within the image dimensions
             />
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Partners;