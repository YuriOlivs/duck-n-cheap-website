import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProductCard } from "../card/card.component";

export function Carousel({ products, onToggleFavorite }) {
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
      className="flex flex-row gap-4 w-full scroll-smooth cursor-grab"
      drag="x"
      dragConstraints={{ left: -width, right: 0 }}
    >
      <AnimatePresence>
        {products.map((product, index) => (
          <motion.div 
          key={product.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          >
            <ProductCard
              key={index}
              product={product}
              onToggleFavorite={onToggleFavorite}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
