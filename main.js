// [*] estilos
import './styles/normalize.style.css'
import './styles/index.style.scss'
//
import './styles/main.styles.scss'

// [*] iconos
import './icons/icomoon/style.css'

// [+]
import Header from './scripts/header.script'
import Intro from './scripts/intro.script'

//
const __header = document.querySelector('header')
const header = new Header(__header)

const __intro = document.querySelector('main > section.intro')
const intro = new Intro(__intro)
intro.debug()

// [*] eventos
// ? onresize
window.onresize = () => {
  intro.resize( window.innerWidth )
}
