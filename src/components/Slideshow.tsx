import '../ComingSoon.css'
import waiting1920 from '../assets/waiting1920.jpg'
import paw from '../assets/paw.jpg'

function Slideshow() {
  const images: string[] = [waiting1920, paw];

  return (
    <div>
      {images.map((src, index) => (
        <div
          key={src}
          className="slide"
          style={{
            backgroundImage: `url(${src})`,
            animationDelay: `${index * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Slideshow
