import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Carousel = () => {
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            handleClick("next")
        }, 1500);

        return () => clearTimeout(timer);
    },[activeImage])
  const imagePathConfig = [
    'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2tzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2tzfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJvb2tzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1603284569248-821525309698?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJvb2tzfGVufDB8fDB8fHww',
  ];
    const handleClick = (param) => {
        if (param === "prev") {
           activeImage===0?setActiveImage(imagePathConfig.length-1):setActiveImage(activeImage-1)
        }
        else {
            activeImage===(imagePathConfig.length-1)?setActiveImage(0):setActiveImage(activeImage+1)
        }
    }
  return (
    <div>
      <div className="flex justify-center mt-20 h-[600px]">
        <img src={imagePathConfig[activeImage]} alt="carousel-image" />
      </div>
      <div className="flex justify-center gap-2 mt-10 hover:cursor-pointer ">
        <ChevronLeft
          onClick={() => {
            handleClick('prev');
          }}
          className="hover:scale-110"
        />
        <ChevronRight
          className="hover:scale-110"
          onClick={() => {
            handleClick('next');
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
