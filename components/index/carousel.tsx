import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import Modal from "./eventModal";


export default function CarouselSection(props: any) {
  const cards = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => {
      let image = document.getElementById('event-modal-img')
      let heading = document.getElementById('event-modal-name')
      let date = document.getElementById('event-modal-date')
      let content = document.getElementById('event-modal-content')
       
      if (heading && date && content && image) {
        document.querySelector('body')?.classList.add('overflow-hidden')
        heading.innerHTML = element.heading //props.heading;
        date.innerHTML = element.date //props.date;
        image.setAttribute('src',element.img) 
        content.innerHTML = element.desc //props.content;
        document.getElementById('event-modal-container')?.classList.remove('hidden');
      }
      
      setGoToSlide(index)
    } };
  });

  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number | null>(0);

  useEffect(() => {
    // setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const Carousel: any = dynamic(() => import("react-spring-3d-carousel"), {
    loading: () => <div>loading...</div>,
    ssr: false,
  });

  return (
    <div className="h-64 md:h-[500px]">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        showNavigation={true}
        // offsetRadius={100}
        offset={3}
        animationConfig={config.gentle}
      />
    </div>
  );
}
