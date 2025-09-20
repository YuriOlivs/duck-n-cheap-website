import { Container } from "../../components/container/container.component"; 
import { Input } from "../../components/input/input.component";
import { ProductCard } from "../../components/card/card.component";
import { products } from "../../../.temp/data";

export function ProductsPage() {
   return (
      <Container className="flex flex-col justify-start h-screen gap-6 overflow-hidden">
         <div className="flex h-1/10 w-full bg-[#8FBE9E] items-center justify-center">
            <Input 
            type="text" 
            placeholder="Pesquisar" 
            className="self-center w-1/4 bg-white"
            />
         </div>
         <div className="flex h-9/10 w-full bg-white">
            {
               products.map((product, index) => (
                  <ProductCard key={index} product={product} />
               ))
            }
         </div>
      </Container>
   )
}