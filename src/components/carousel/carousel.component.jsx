import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ProductCard } from "../card/card.component";

export function Carousel({ products }) {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, [products]);

  return (
    <motion.div
      ref={carouselRef}
      className="flex flex-row gap-4 w-full justify-between scroll-smooth cursor-grab"
      drag="x"
      dragConstraints={{ left: -width, right: 0 }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </motion.div>
  );
}
