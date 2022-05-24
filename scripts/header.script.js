class Header {
  constructor( context ) {
    this.header = context

    this.load()
  }
  // [-]
  load() {
    this.menu = document.querySelector('header > img.menu')
    this.nav = document.querySelector('header > nav')

    this.menu.onclick = () => this.handleHeader()
  }
  handleHeader() {
    this.header.classList.toggle('active')
  }
  // [+]
  debug() {
    console.log(`[+] header: ${ this.header }`)
    console.log(`[+] menu: ${ this.menu }`)
    console.log(`[+] nav: ${ this.nav }`)
  }
}

export default Header
