import '../styles/intro.style.scss'

import background_mobile from '../images/mobile/image-header.jpg'
import background_desktop from '../images/desktop/image-header.jpg'

class Intro {
  is_mobile

  constructor( context ) {
    this.intro = context

    this.load()
    this.resize(window.innerWidth)
  }
  // [-]
  load() {
    this.background = document.querySelector('main > section.intro > img.background')
  }
  // [+]
  resize(size) {
    if(size < 768 && (this.is_mobile == undefined || !this.is_mobile)) {
      this.is_mobile = true
      this.background.src = background_mobile
    }else if(size >= 768 && (this.is_mobile == undefined || this.is_mobile)) {
      this.is_mobile = false
      this.background.src = background_desktop
    }
  }

  debug() {
    console.log(`[+] intro: ${ this.intro }`)
    console.log(`[+] background: ${ this.background }`)
  }
}

export default Intro
