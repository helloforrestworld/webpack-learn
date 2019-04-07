import imgScss from './img.scss'
import img from './images/fapiao.jpg'

const CreateImg = () => {
  const image = new Image()
  image.src = img
  image.className = imgScss.img
  let root = document.getElementById('root')
  root.append(image)
}

export default CreateImg