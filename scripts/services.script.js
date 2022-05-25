import '../styles/services.style.scss'

import image1_mobile from '../images/mobile/image-transform.jpg'
import image2_mobile from '../images/mobile/image-stand-out.jpg'
import image_gdesign_mobile from '../images/mobile/image-graphic-design.jpg'
import image_photography_mobile from '../images/mobile/image-photography.jpg'

import image1_desktop from '../images/desktop/image-transform.jpg'
import image2_desktop from '../images/desktop/image-stand-out.jpg'
import image_gdesign_desktop from '../images/desktop/image-graphic-design.jpg'
import image_photography_desktop from '../images/desktop/image-photography.jpg'

class Services {
  is_mobile

  constructor( context ) {
    this.services = context
    this.load()
  }
  // [-]
  load() {
    this.parts = document.querySelectorAll('section.services > div.services-part')

    this.image1 = document.querySelector('section.services > div.services-part:nth-child(1) > img.image')
    this.image2 = document.querySelector('section.services > div.services-part:nth-child(2) > img.image')
    this.image_gdesign = document.querySelector('section.services > div.services-part:nth-child(3) > .image-service:nth-child(1) > img')
    this.image_photography = document.querySelector('section.services > div.services-part:nth-child(3) > .image-service:nth-child(2) > img')

    this.resize(window.innerWidth)
  }
  // [+]
  resize(size) {
    if(size < 768 && (this.is_mobile == undefined || !this.is_mobile)) {
      this.is_mobile = true
      this.image1.src = image1_mobile
      this.image2.src = image2_mobile
      this.image_gdesign.src = image_gdesign_mobile
      this.image_photography.src = image_photography_mobile
    }else if(size >= 768 && (this.is_mobile == undefined || this.is_mobile)) {
      this.is_mobile = false
      this.image1.src = image1_desktop
      this.image2.src = image2_desktop
      this.image_gdesign.src = image_gdesign_desktop
      this.image_photography.src = image_photography_desktop
    }
  }

  debug() {
    console.log(`[+] services: ${ this.services }`)
    console.log(`[+] parts: ${ this.parts }`)
    console.log(`[+] image1: ${ this.image1 }`)
    console.log(`[+] image2: ${ this.image2 }`)
    console.log(`[+] image_gdesign: ${ this.image_gdesign }`)
    console.log(`[+] image_photography: ${ this.image_photography }`)
  }
}

export default Services
