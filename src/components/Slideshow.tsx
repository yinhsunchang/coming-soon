import '../ComingSoon.css'

function Slideshow() {
  const images: string[] = [
    '/waiting1920.jpg',
    '/paw.jpg',
  ];

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
