import React from 'react';
import Image from 'next/image';

const data = [
  { id: 1, src: '/partners1.png', alt: 'Partner 1', name: 'Mintair' },
  { id: 2, src: '/partners2.png', alt: 'Partner 2', name: 'Avalanche' },
  { id: 3, src: '/partners3.png', alt: 'Partner 3', name: 'Frame' },
  { id: 4, src: '/partners4.png', alt: 'Partner 4', name: 'Shardeum' },
];

export default function Partners() {
  return (
    <>
      <div id="partners" className="bg-cover bg-slate-950 min-h-screen flex flex-col relative">
        <div className="text-center w-full mt-4 md:mb-14 md:mt-0 md:py-0 md:text-7xl">
          <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact'] text-5xl">
            Partners
          </span>
        </div>
        <div className="text-center pt-8">
          <h2 className="text-4xl text-white font-bold">Our Trusted Partners</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 px-4 md:px-0">
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
