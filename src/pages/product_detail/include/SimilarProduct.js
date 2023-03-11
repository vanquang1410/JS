import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import ProductViewed from "../../../components/common/product/ProductViewed";
import { isWideScreen } from "../../../helpers/screen";

function SimilarProduct() {

    return (
        <div className="product-slide">
            {isWideScreen() && (
                <>
                    <h2>Sản Phẩm Tương Tự</h2>
                    <div className="slide-container">
                        <ProductViewed deal={true} />
                    </div>
                </>
            )}
            {!isWideScreen() && (
                <>
                    <h2>Sản Phẩm Tương Tự</h2>
                    <div className="slide-container">
                        <ProductViewed
                            deal={true}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
export default SimilarProduct;
