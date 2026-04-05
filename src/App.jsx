import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"
import products from "./data/products"

function App(){

return(

<div>

<Navbar/>

<Hero/>

<div id="products" className="p-10 grid md:grid-cols-3 gap-8">

{products.map((p)=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>

)
}

export default App