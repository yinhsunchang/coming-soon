import '../ComingSoon.css'

function Slideshow() {
  const images: string[] = [
    '/coming-soon/waiting1920.jpg',
    '/coming-soon/paw.jpg',
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
