import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";

export default function CarouselSection(props: any) {
  const cards = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
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
