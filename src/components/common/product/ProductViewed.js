import React, { useEffect, useState } from "react";
import Images from "../../Image/Images";
import { Link } from "react-router-dom";
import productApi from "../../../api/ProductService";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import Skeleton from "react-loading-skeleton";

const settingsSlide = {
    slidesPerView: 6,
    navigation: true,
    modules: [Navigation],
    className: "deal-hot-swiper",
};

function ProductViewed({ deal, disCount }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async (params) => {
        const response = await productApi.getListsProducts(params);
        setProducts(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {loading === true ? (
                <div className="dashboard-product--item">
                    <div className="thumbnail" style={{ marginLeft: "80px", marginRight: "30px" }}>
                        <Skeleton height={200} width={180} />
                        <Skeleton height={30} width={180} style={{ marginTop: "15px" }} />
                    </div>
                    <div className="thumbnail" style={{ marginRight: "30px" }}>
                        <Skeleton height={200} width={180} />
                        <Skeleton height={30} width={180} style={{ marginTop: "15px" }} />
                    </div>
                    <div className="thumbnail" style={{ marginRight: "30px" }}>
                        <Skeleton height={200} width={180} />
                        <Skeleton height={30} width={180} style={{ marginTop: "15px" }} />
                    </div>
                    <div className="thumbnail" style={{ marginRight: "30px" }}>
                        <Skeleton height={200} width={180} />
                        <Skeleton height={30} width={180} style={{ marginTop: "15px" }} />
                    </div>
                    <div className="thumbnail" style={{ marginRight: "30px" }}>
                        <Skeleton height={200} width={180} />
                        <Skeleton height={30} width={180} style={{ marginTop: "15px" }} />
                    </div>
                </div>
            ) : (
                <Swiper {...settingsSlide}>
                    {products.slice(1, 20).map((item, index) =>
                    (
                        <SwiperSlide key={index}>
                            <div className="dashboard-product--item">
                                <Link
                                    to={`/${item.pro_slug}-${item.id}`}
                                    className="product-item"
                                >
                                    <div
                                        className={`product-item--style ${!deal ? "not-style" : ""
                                            }`}
                                    >
                                        <div className="thumbnail">
                                            <div className="thumbnail--product-img">
                                                <Images
                                                    src={item.pro_avatar}
                                                    alt="333"
                                                />
                                            </div>
                                        </div>
                                        <div className="infor">
                                            {!deal && (
                                                <>
                                                    <div className="name">
                                                        <h3 className="fs-10">
                                                            {item.pro_name}
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className={`price-discount ${item.pro_discount_value !==
                                                                0
                                                                ? "has-discount"
                                                                : ""
                                                            }`}
                                                    >
                                                        <div className="price-discount__price">
                                                            {item.pro_price}{" "}
                                                            ₫
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                            {deal && (
                                                <>
                                                    <div className="deal">
                                                        <div
                                                            className={`price-discount ${item.prod_iscount_value !==
                                                                    0
                                                                    ? "has-discount"
                                                                    : ""
                                                                }`}
                                                        >
                                                            <div className="price-discount__price">
                                                                {
                                                                    item.pro_price.toLocaleString()
                                                                }{" "}
                                                                ₫
                                                            </div>
                                                            <div className={`${item.pro_discount_value !== 0 ? 'price-discount__discount' : ''}`}>
                                                                {item.pro_discount_value
                                                                    ? item.pro_discount_value +
                                                                    "%"
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>)}
        </>
    );
}
export default ProductViewed;

// import ProductSummary from "./ProductSumary";
// import React, {useState, } from "react";

// function ProductViewed() {
//     const [disCount,setDistCount]=useState(true);

//     const arr_10 = Array.from(Array(1).keys());

//     return (
//         <div className="viewed">
//             <h2>Sản Phẩm Đã Xem</h2>
//             <div className="suggestion__product">
//                 <div className="content">
//                     { arr_10.map(() =>
//                         (
//                             <ProductSummary
//                                 disCount={disCount}
//                                 setDistCount={setDistCount}
//                                 deal={false}
//                                 price={undefined} sold={undefined}
//                             />
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductViewed;

