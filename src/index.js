import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'
import img from './images/fapiao.jpg'
import indexCss from './index.scss'
import createImg from './img.js'

let root = document.getElementById('root')

new Header()
new Content()
new Footer()
createImg()

const image = new Image()
image.src = img
image.className = indexCss.img

root.append(image)