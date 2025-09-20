import { useState } from "react";
import { Container } from "../../components/container/container.component";
import { HeartIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative w-[320px] p-2">
      <span className="absolute text-white bg-blue-900 px-5 py-1 rounded-md top-0 right-0 z-1">
        {product.store}
      </span>
      <Container className="relative flex flex-col w-[300px] rounded-2xl border border-gray-200 shadow-sm bg-white">

        <div className="flex jstify-center items-center p-3">
          <img 
          src={product.image} 
          alt="" 
          className="w-[300px] max-h-[220px] object-cover"
          />
        </div>

        <hr className="border-gray-200"/>

        <div className="flex flex-col gap-2 p-4">
          <h2 className="font-semibold text-sm leading-tight">
              {product.name}
          </h2>

          <span className="text-sm line-through text-gray-400">{product.price}</span>

          <div className="flex items-center justify-between">
              <span className="text-xl font-bold bg-[#FFCCAD] text-black p-2 rounded-xl w-fit">{product.discount}</span>

              <motion.button 
              whileTap={{ scale: 0.5 }}
              className="relative cursor-pointer" onClick={toggleFavorite}
              >
                <HeartIcon 
                size={32} 
                weight="fill" 
                className={`
                  absolute text-black transition-opacity duration-100 ease-in-out 
                  ${isFavorite ? 
                    'opacity-100 animate-pop' : 
                    'opacity-0'}
                  `}
                />

                <HeartIcon 
                size={32} 
                className="text-black"
                />
              </motion.button>
          </div>
        </div>
      </Container>
    </div>
  );
}
