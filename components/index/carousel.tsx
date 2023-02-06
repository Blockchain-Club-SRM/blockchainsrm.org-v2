import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import Modal from "./eventModal";

export default function CarouselSection(props: any) {
  const cards = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => {
      
      let heading = document.getElementById('event-modal-name')
      let date = document.getElementById('event-modal-date')
      let content = document.getElementById('event-modal-content')
      if (heading && date && content) {
        document.querySelector('body')?.classList.add('overflow-hidden')
        heading.innerHTML = 'Event Name' //props.heading;
        date.innerHTML = 'Hello' //props.date;
        content.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laborum nam porro voluptatibus itaque quibusdam vero, odio laudantium aspernatur, distinctio, doloremque nemo eius provident sed soluta repellendus architecto vitae suscipit.' //props.content;
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
        offsetRadius={100}
        animationConfig={config.gentle}
      />
    </div>
  );
}
