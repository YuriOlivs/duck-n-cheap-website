import { useEffect, useState } from "react";
import { Container } from "../../components/container/container.component";
import { Input } from "../../components/input/input.component";
import { products } from "../../../.temp/data";
import { Carousel } from "../../components/carousel/carousel.component";

export function ProductsPage() {
  const [productsList, setProductsList] = useState(products);
  const [savedProducts, setSavedProducts] = useState(
    products.filter((p) => p.isFavorite)
  );

  const toggleFavorite = (productId) => {
    const updatedProducts = productsList.map((p) =>
      p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
    );
    setProductsList(updatedProducts);

    setSavedProducts((prevSaved) => {
      const isAlreadySaved = prevSaved.some((p) => p.id === productId);

      if (isAlreadySaved) {
        return prevSaved.filter((p) => p.id !== productId);
      } else {
        const newProduct = updatedProducts.find((p) => p.id === productId);
        return [...prevSaved, newProduct];
      }
    });
  };

  return (
    <Container className="flex flex-col justify-start h-screen gap-6 overflow-x-hidden">
      <div className="flex h-1/10 w-full bg-[#8FBE9E] items-center justify-center">
        <Input
          type="text"
          placeholder="Pesquisar"
          className="self-center w-1/4 bg-white"
        />
      </div>
      <div className="flex flex-col h-9/10 w-full bg-white gap-10">
        <div className="flex flex-col w-full px-20 gap-10">
          <h1 className="text-3xl font-bold text-left text-black">
            Produtos em Promoção
          </h1>
          <Carousel products={productsList} onToggleFavorite={toggleFavorite} />
        </div>

        <div className="flex flex-col w-full px-20 gap-10">
          <h1 className="text-3xl font-bold text-left text-black">
            Produtos Salvos
          </h1>
          <Carousel
            products={savedProducts}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </Container>
  );
}
