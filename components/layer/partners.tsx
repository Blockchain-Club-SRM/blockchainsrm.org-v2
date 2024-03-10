import React from 'react';
import Image from 'next/image';

const data = [
  { id: 1, src: '/partners1.png', alt: 'Partner 1', name: 'Mintair' },
  { id: 2, src: '/partners2.png', alt: 'Partner 2', name: 'Avalanche' },
  { id: 3, src: '/partners3.png', alt: 'Partner 3', name: 'Powerloom' },
  { id: 4, src: '/partners4.png', alt: 'Partner 4', name: 'Shardeum' },
  { id: 5, src: '/partner1.png', alt: 'Partner 5', name: 'Polygon' },
  { id: 6, src: '/ethindia.png', alt: 'Partner 6', name: 'ETHIndia' },
  { id: 7, src: '/quillaudits.png', alt: 'Partner 7', name: 'QuillAudits' },
  { id: 8, src: '/partner18.jpg', alt: 'Partner 8', name: 'SimpX' },
  { id: 9, src: '/partner19.jpg', alt: 'Partner 9', name: 'Bruhma Labs' },
  { id: 10, src: '/porfo.jpg', alt: 'Partner 10', name: 'Porfo' },
  { id: 11, src: '/avex.jpg', alt: 'Partner 11', name: 'Avex' },
];

export default function Partners() {
  return (
    <>
      <div id="partners" className="bg-cover bg-slate-950 min-h-screen flex flex-col relative">
        <div className="text-center w-full mt-4 md:mb-7 md:mt-0 md:py-0 md:text-7xl">
          <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact'] text-5xl">
            Partners
          </span>
        </div>
       
        <div className="flex flex-wrap justify-center items-center 2xl:mt-28 px-4 md:px-0">
          {data.map((partner) => (
            <div key={partner.id} className="card m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <Image src={partner.src} alt={partner.alt} width={200} height={200} objectFit="contain" />
              <p className="text-white mt-2">{partner.name}</p> {/* Text color changed to white */}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: rgba(255, 255, 255, 0);
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
          margin: 1rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 1;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0);
        }

        @media (max-width: 768px) {
          .card {
            margin: 0.5rem;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}
