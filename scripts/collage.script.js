import '../styles/collage.style.scss'

import milkbottles_mobile from '../images/mobile/image-gallery-milkbottles.jpg'
import orange_mobile from '../images/mobile/image-gallery-orange.jpg'
import cone_mobile from '../images/mobile/image-gallery-cone.jpg'
import sugarcubes_mobile from '../images/mobile/image-gallery-sugar-cubes.jpg'

import milkbottles_desktop from '../images/desktop/image-gallery-milkbottles.jpg'
import orange_desktop from '../images/desktop/image-gallery-orange.jpg'
import cone_desktop from '../images/desktop/image-gallery-cone.jpg'
import sugarcubes_desktop from '../images/desktop/image-gallery-sugarcubes.jpg'

class Collage {
  is_mobile 

  constructor( context ) {
    this.collage = context
    this.load()
  }
  // [-]
  load() {
    this.img0_milkbottles = document.querySelector('main > section.collage > img:nth-child(1)')
    this.img1_orange = document.querySelector('main > section.collage > img:nth-child(2)')
    this.img2_cone = document.querySelector('main > section.collage > img:nth-child(3)')
    this.img3_sugarcubes = document.querySelector('main > section.collage > img:nth-child(4)')

    this.resize(window.innerWidth)
  }
  // [+]
  resize(size) {
    if(size < 768 && (this.is_mobile == undefined || !this.is_mobile)) {
      this.is_mobile = true
      this.img0_milkbottles.src = milkbottles_mobile
      this.img1_orange.src = orange_mobile
      this.img2_cone.src = cone_mobile
      this.img3_sugarcubes.src = sugarcubes_mobile
    }else if(size >= 768 && (this.is_mobile == undefined || this.is_mobile)) {
      this.is_mobile = false
      this.img0_milkbottles.src = milkbottles_desktop
      this.img1_orange.src = orange_desktop
      this.img2_cone.src = cone_desktop
      this.img3_sugarcubes.src = sugarcubes_desktop
    }
  }

  debug() {
    console.log(`[+] collage: ${ this.collage }`)
    console.log(`[+] image (milkbottles): ${ this.img0_milkbottles }`)
    console.log(`[+] image (orange): ${ this.img1_orange }`)
    console.log(`[+] image (cone): ${ this.img2_cone }`)
    console.log(`[+] image (sugarcubes): ${ this.img3_sugarcubes }`)
  }
}

export default Collage
