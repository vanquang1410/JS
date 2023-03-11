import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, Lazy} from "swiper";
import Images from "../../../components/Image/Images";
import { isWideScreen } from "../../../helpers/screen";

const settingsSlide = {
    // slidesPerView:1,
    // spaceBetween:30,
    // centeredSlides:!isWideScreen()?true:false,
    // pagination:{
    //   clickable: true
    // },
    // autoplay:{
    //     delay: 10,
    //     disableOnInteraction: false,
    //   },
    // navigation:isWideScreen()?true:false,
    // modules:[Pagination, Navigation,Autoplay],
    // className:"advertise-swiper"
    slidesPerView:1,
    spaceBetween:0,
    loop:true,
    lazy:true,
    pagination:{
      clickable: true
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation:true,
    modules:[Pagination, Navigation,Autoplay,Lazy],
    className:"brand-swiper"

}
function HomeAdv() {
    // const arr_14 = Array.from(Array(14).keys());
    const [brand,setBrand] = useState([]);

    useEffect(() => {
        const data = [
            {
               src:isWideScreen()?"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg":"https://salt.tikicdn.com/ts/banner/b7/4f/a6/df57773698828022bf0c6c138ea224c0.png",
               title:'Ngon'
            },
            {
               src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
               title:'Ngon'
            },
            {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
            
          ]
    setBrand(data);
    },[])
    return(
        <div className="advertise">
            <div className={isWideScreen()?"advertise-list":"advertise-mobile"}>
                <div className="advertise-slide">
                            <Swiper {...settingsSlide}>
                                {
                                    brand.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="advertise-item">
                                                    <Link to="/">
                                                        <div className="position-relative">
                                                            <div className="advertise-img">
                                                                <Images src={item.src} alt={item.title}/>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                </div>
               {isWideScreen() && 
                    <div className="right">
                        <Images src="https://salt.tikicdn.com/ts/banner/fe/9e/a9/e42b3b531e92432bab99e933318ac0b7.png" alt="text-right"/>
                    </div>
               } 
                
            </div>
        </div>
    )
}
export default HomeAdv;