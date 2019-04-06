import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'
import img from './fapiao.jpg'

let root = document.getElementById('root')

new Header()
new Content()
new Footer()

const image = new Image()
image.src = img

root.append(image)