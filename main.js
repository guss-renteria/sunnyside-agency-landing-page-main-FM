// [*] estilos
import './styles/normalize.style.css'
import './styles/index.style.scss'
// ? header
import './styles/header.style.scss'

// [*] iconos
import './icons/icomoon/style.css'

// [+]
import Header from './scripts/header.script'

const __header = document.querySelector('header')
const header = new Header(__header)
header.debug()
