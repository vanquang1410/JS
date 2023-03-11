import React, { useState, useEffect } from 'react'


const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const Images = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const [imageRef, setImageRef] = useState();
  
    useEffect(() => {
      let observer;
      let didCancel = false;
      if (imageRef && imageSrc === placeHolder) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                  setImageSrc(src);
                }
              })
            }
          )
          observer.observe(imageRef);
        } else {
            console.log("not working")
        }
      }
      return () => {
        didCancel = true;
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      }
    })
    return <img ref={(element) => setImageRef(element)} src={imageSrc} alt={alt} />

  }
  export default Images