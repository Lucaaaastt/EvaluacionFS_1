import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import '../style/App.css'

function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <section id="catalogo">
          <h2>Catálogo</h2>
          <p>Sección pendiente de migrar.</p>
        </section>
        <section id="sobre-nosotros">
          <h2>Sobre nosotros</h2>
          <p>Sección pendiente de migrar.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
