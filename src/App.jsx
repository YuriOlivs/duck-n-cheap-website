import { ProductsPage } from './pages/products/products.page'

function App() {
  const product = {
    name: "Headset Gamer Sem Fio Havit Fuxi H3, 7.1 surround, Driver 40mm, Bluetooth",
    store: "Kabum",
    price: "R$ 159,90",
    discount: "R$ 159,90",
    image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/389846",
    isFavorite: false,
  }

  return (
    <>
      <ProductsPage />
    </>
  )
}

export default App
