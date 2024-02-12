import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import prizebg from "../../../public/assets/layer/prizebg.svg";

interface HorizontalScrollCarouselProps {
  items: {
    id: number;
    title: string;
  }[];
}

interface CardProps {
  card: {
    id: number;
    title: string;
  };
}

const HorizontalScrollCarousel = ({ items }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["25%", "-25%"]);

  return (
    <section ref={targetRef} className="relative overflow-hidden">
      <div className="sticky flex justify-center h-full">
        <motion.div style={{ x }} className="flex gap-4">
          {items.map((item: any) => {
            return <Card card={item} key={item.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-transparent" // Set background to transparent
    >
      <div
        style={{
          backgroundImage: `url(${prizebg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
        <p className="bg-transparent p-8 text-3xl font-black uppercase text-white">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
