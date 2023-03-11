import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Images from '../../../../components/Image/Images';
import { currencyFormat, priceDiscount } from '../../../../helpers/function';
import Pagination from "../../../../components/common/Pagination";
import Skeleton from "react-loading-skeleton";

let PageSize = 12;

function Products({ products, id, show, sortAsc, sortDesc, productsAsc, productsDesc, loadingProduct }) {

    const [currentPage, setCurrentPage] = useState(1);

    function currentTableData() {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }

    function currentTableData1() {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return productsAsc.slice(firstPageIndex, lastPageIndex);
    }

    function currentTableData2() {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return productsDesc.slice(firstPageIndex, lastPageIndex);
    }

    useEffect(() => {
        currentTableData();
        currentTableData1();
        currentTableData2();
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        currentTableData();
        currentTableData1();
        currentTableData2();
    }, [id])

    return (
        <div className="product-container">
            <div className="suggestion__product">
                { loadingProduct === true ? 
                (
                    <div style={{display: 'flex', marginTop: 10 }}>
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                        <Skeleton style={{marginRight: 10}} width={160} height={200} />
                    </div>
                ) : (
                <>
                    <div className="content">
                        {show === true &&
                        currentTableData().map((item, index) => (
                            <div className="dashboard-product--item" key={index}>
                                <Link
                                    to={`/${item.pro_slug}-${item.id}`}
                                    className="product-item"
                                >
                                    <div
                                        className={`product-item--style ${item.pro_sale === 0 ? "not-style" : ""
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
                                                    <h3 className="fs-10">
                                                        {item.pro_name}
                                                    </h3>
                                                </div>
                                                <div className="fullrate">
                                                    {(item.pro_review_star / item.pro_review_total) ? (item.pro_review_star / item.pro_review_total).toFixed(0) : 0} <span style={{color: 'yellow', fontSize: 14}}>&#9733;</span>
                                                    {/* | Đã bán {item.pro_review_total} */}
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
                                            </>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        {sortAsc === true &&
                            currentTableData1().map((item, index) => (
                                <div className="dashboard-product--item" key={index}>
                                    <Link
                                        to={`/${item.pro_slug}-${item.id}`}
                                        className="product-item"
                                    >
                                        <div
                                            className={`product-item--style ${item.pro_sale === 0 ? "not-style" : ""
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
                                                        <h3 className="fs-10">
                                                            {item.pro_name}
                                                        </h3>
                                                    </div>
                                                    <div className="fullrate">
                                                        {(item.pro_review_star / item.pro_review_total) ? (item.pro_review_star / item.pro_review_total).toFixed(0) : 0} <span>&#9733;</span> 
                                                        | Đã bán {item.pro_review_total}
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
                                                </>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        {sortDesc === true &&
                            currentTableData2().map((item, index) => (
                                <div className="dashboard-product--item" key={index}>
                                    <Link
                                        to={`/${item.pro_slug}-${item.id}`}
                                        className="product-item"
                                    >
                                        <div
                                            className={`product-item--style ${item.pro_sale === 0 ? "not-style" : ""
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
                                                        <h3 className="fs-10">
                                                            {item.pro_name}
                                                        </h3>
                                                    </div>
                                                    <div className="fullrate">
                                                        {(item.pro_review_star / item.pro_review_total) ? (item.pro_review_star / item.pro_review_total).toFixed(0) : 0} <span style={{color: 'yellow', fontSize: 14}}>&#9733;</span>
                                                        | Đã bán {item.pro_review_total}
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
                                                </>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </>
                )}
            </div>
        </div>
    );
}
export default Products;
