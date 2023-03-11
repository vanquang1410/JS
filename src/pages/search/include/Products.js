import React, {useState, useMemo, useEffect} from "react";
import {Link} from 'react-router-dom';
import Images from '../../../components/Image/Images';
import {currencyFormat, priceDiscount} from '../../../helpers/function';
import Pagination from "../../../components/common/Pagination";

let Page_Size = 12
function Products({products, searchInput}) {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchProducts, setSearchProducts] = useState([]);

    const getSearchProducts = () => {
        setSearchProducts(products.filter(item => item.pro_name.toLowerCase().match(searchInput.toLowerCase())));
        return searchProducts;
    }

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * Page_Size;
        const lastPageIndex = firstPageIndex + Page_Size;
        return searchProducts.slice(firstPageIndex, lastPageIndex);
    };

    console.log(searchProducts)
    useEffect(() => {
        setCurrentPage(1);
        getSearchProducts();
        currentTableData();
    }, [searchInput]);

    console.log(searchProducts)
    return (
        <div className="product-container">
            <div className="suggestion__product">
                <div className="content">
                    {currentTableData().map((item, index) => (
                        <div className="dashboard-product--item" key={index}>
                            <Link
                                to={`/${item.pro_slug}-${item.id}`}
                                className="product-item"
                            >
                                <div
                                    className={`product-item--style ${
                                        item.pro_sale === 0 ? "not-style" : ""
                                    }`}
                                >
                                    <div className="thumbnail">
                                        <div className="thumbnail--icon-badge">
                                            <Images
                                                src={
                                                    item.pro_avatar ||
                                                    "/images/product-detault.png"
                                                }
                                                alt="333"
                                            />
                                        </div>
                                        <div className="thumbnail--product-img">
                                            <Images
                                                src={
                                                    item.pro_avatar ||
                                                    "/images/product-detault.png"
                                                }
                                                alt="111"
                                            />
                                        </div>
                                    </div>
                                    <div className="infor">
                                        <>
                                            <div className="badge-service"></div>
                                            <div className="name">
                                                <p>Ad</p>
                                                <h3 className="fs-10">
                                                    {item.pro_name}
                                                </h3>
                                            </div>
                                            <div
                                                className={`price-discount has-discount`}
                                            >
                                                <div className="price-discount__price">
                                                    {item.pro_sale > 0
                                                        ? currencyFormat(
                                                              priceDiscount(
                                                                  item.pro_price,
                                                                  item.pro_sale
                                                              )
                                                          )
                                                        : currencyFormat(
                                                              item.pro_price
                                                          )}
                                                </div>
                                                {item.pro_sale > 0 && (
                                                    <div className="price-discount__discount">
                                                        {item.pro_sale}%
                                                    </div>
                                                )}
                                            </div>

                                            <div className="badge-under-price"></div>
                                            <div className="badge-benefit"></div>
                                            <div className="badge-add-info"></div>
                                        </>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        // <ProductSummary
                        //     disCount={disCount}
                        //     setDistCount={setDistCount}
                        //     deal={false}
                        //     price={undefined} sold={undefined}
                        // />
                    ))}
                </div>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={searchProducts.length}
                    pageSize={Page_Size}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}
export default Products;
