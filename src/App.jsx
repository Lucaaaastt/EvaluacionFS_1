import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import '../style/App.css'

function App() {
  const navItems = [
    { id: 'inicio', text: 'Inicio', href: '#inicio' },
    { id: 'catalogo', text: 'Catálogo', href: '#catalogo' },
    { id: 'nosotros', text: 'Sobre nosotros', href: '#sobre-nosotros' },
  ]

  const footerItems = [
    { id: 'inicio', text: 'Inicio', href: '#inicio' },
    { id: 'nosotros', text: 'Sobre nosotros', href: '#sobre-nosotros' },
    {
      id: 'github', text: 'GitHub',
      href: 'https://github.com/Lucaaaastt/EvaluacionFS_1',
      target: '_blank', rel: 'noopener noreferrer',
    },
  ]
  return (
    <>
      <Header items={navItems} />
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
      <Footer items={footerItems} />
    </>
  )
}

export default App
