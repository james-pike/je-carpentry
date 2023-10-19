import image1 from './s1.jpg'
import image2 from './s1.jpg'
import image3 from './s1.jpg'
import image4 from './s1.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex