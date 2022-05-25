// [*] estilos
import './styles/normalize.style.css'
import './styles/index.style.scss'
//
import './styles/main.styles.scss'
import './styles/client_testimonials.style.scss'

// [*] iconos
import './icons/icomoon/style.css'

// [+]
import Header from './scripts/header.script'
import Intro from './scripts/intro.script'
import Services from './scripts/services.script'

//
const __header = document.querySelector('header')
const header = new Header(__header)

const __intro = document.querySelector('main > section.intro')
const intro = new Intro(__intro)

const __services = document.querySelector('main > section.services')
const services = new Services(__services)

// [*] eventos
// ? onresize
window.onresize = () => {
  const size = window.innerWidth

  intro.resize( size )
  services.resize( size )
}
