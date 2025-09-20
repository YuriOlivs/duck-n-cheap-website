import { RegisterPage } from './pages/register/register.page'
import { ProductCard } from './components/card/card.component'

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
      <ProductCard product={product} />
    </>
  )
}

export default App
