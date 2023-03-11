import React, { useState, useEffect } from "react";
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";
import categoryApi from "../../../api/CategoryService";
import Skeleton from "react-loading-skeleton";
import productApi from "../../../api/ProductService";

let page = 1;
let page_size = 200;

function HomeSuggest() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingProduct, setLoadingProduct] = useState(true);
    const [products, setProducts] = useState([]);
    const [defaultCate, setDefaultCate] = useState(true);
    const [more, setMore] = useState(12);

    const getCategories = async (params) => {
        const response = await categoryApi.getListsCategory(params);
        setCategories(response.data);
    };

    const [tabNum, setTabNum] = useState("");

    function changeTab(tabNumber) {
        let title = categories.map((item) => {
            item.tab = item.id === tabNumber;
            setTabNum(tabNumber);
            return item;
        });
        setCategories(title);
    }

    const getProducts = async () => {
        const response = await productApi.getListsProductsByPage(
            page,
            page_size,
        );
        setProducts(response.data);
        setLoadingProduct(false);
        // setLoading(false);
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const [deal, setDeal] = useState(false);
    const getSuggestTitle = () => {
        return (
            <>
                <div className="suggestion__title">
                    <div className="inner">
                        <div className="group d-flex">
                            <div className="icon">
                                <i className="ripple"></i>
                            </div>
                            <div className="title">Gợi ý hôm nay</div>
                        </div>
                    </div>
                    {/* <h2>Gợi ý hôm nay</h2> */}

                    <div className="suggestion__title-list">
                        {defaultCate
                            ? categories.slice(0, 8).map((item, i) => (
                                <div
                                    key={i}
                                    className={`tab ${item.id == categories[0].id
                                        ? "active"
                                        : ""
                                        }`}
                                    onClick={() => {
                                        changeTab(item.id);
                                        setDefaultCate(false);
                                        setMore(18);
                                    }}
                                >
                                    <Images alt="test" src={item.c_avatar} />
                                    <div className="tab-text fs-13">
                                        {item.c_name}
                                    </div>
                                </div>
                            ))
                            : categories.slice(0, 8).map((item, i) => (
                                <div
                                    key={i}
                                    className={`tab ${item.tab ? "active" : ""
                                        }`}
                                    onClick={() => { changeTab(item.id); setMore(18) }}
                                >
                                    <Images alt="test" src={item.c_avatar} />
                                    <div className="tab-text fs-13">
                                        {item.c_name}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="suggestion__product">
                    <div className="content">
                        <div className="dashboard-product--item">
                            { defaultCate ? (
                                <>
                                    {products.slice(0, more).map((item2, i) => {
                                        {
                                            return (
                                                <Link
                                                    key={i}
                                                    to={`/${item2.pro_slug}-${item2.id}`}
                                                    className="product-item"
                                                >
                                                    <div
                                                        className={`product-item--style ${!deal
                                                            ? "not-style"
                                                            : ""
                                                            }`}
                                                    >
                                                        <div className="thumbnail">
                                                            <div className="thumbnail--product-img">
                                                                <Images
                                                                    src={
                                                                        item2.pro_avatar
                                                                    }
                                                                    alt="333"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="infor">
                                                            {!deal && (
                                                                <>
                                                                    <div className="name">
                                                                        <h3 className="fs-10">
                                                                            {
                                                                                item2.pro_name
                                                                            }
                                                                        </h3>
                                                                    </div>
                                                                    <div
                                                                        className={`price-discount ${item2.prodiscount_value !==
                                                                            0
                                                                            ? "has-discount"
                                                                            : ""
                                                                            }`}
                                                                    >
                                                                        <div className="price-discount__price">
                                                                            {item2.pro_price.toLocaleString()}{" "}
                                                                            ₫
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                            {deal && (
                                                                <>
                                                                    <div className="deal">
                                                                        <div
                                                                            className={`price-discount ${item2.prodiscount_value !==
                                                                                0
                                                                                ? "has-discount"
                                                                                : ""
                                                                                }`}
                                                                        >
                                                                            <div className="price-discount__price">
                                                                                {item2.pro_price.toLocaleString()}{" "}
                                                                                ₫
                                                                            </div>
                                                                            <div className="price-discount__discount">
                                                                                {item2.pro_discount_value
                                                                                    ? item2.pro_discount_value +
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
                                            );
                                        }
                                    })}
                                </>
                            ) : (
                                <>
                                    {products.filter((item) => item.pro_category_id.toString().match(tabNum)).slice(0, more).map((item2, i) =>
                                    (
                                        <Link
                                            key={i}
                                            to={`/${item2.pro_slug}-${item2.id}`}
                                            className="product-item"
                                        >
                                            <div
                                                className={`product-item--style ${!deal
                                                    ? "not-style"
                                                    : ""
                                                    }`}
                                                >
                                                    <div className="thumbnail">
                                                        <div className="thumbnail--product-img">
                                                            <Images
                                                                src={
                                                                    item2.pro_avatar
                                                                }
                                                                alt="333"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="infor">
                                                        {!deal && (
                                                            <>
                                                                <div className="name">
                                                                    <h3 className="fs-10">
                                                                        {
                                                                            item2.pro_name
                                                                        }
                                                                    </h3>
                                                                </div>
                                                                <div
                                                                    className={`price-discount ${item2.prodiscount_value !==
                                                                        0
                                                                            ? "has-discount"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    <div className="price-discount__price">
                                                                        {item2.pro_price.toLocaleString()}{" "}
                                                                        ₫
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                        {deal && (
                                                            <>
                                                                <div className="deal">
                                                                    <div
                                                                        className={`price-discount ${item2.prodiscount_value !==
                                                                            0
                                                                            ? "has-discount"
                                                                            : ""
                                                                            }`}
                                                                    >
                                                                        <div className="price-discount__price">
                                                                            {item2.pro_price.toLocaleString()}{" "}
                                                                            ₫
                                                                        </div>
                                                                        <div className="price-discount__discount">
                                                                            {item2.pro_discount_value
                                                                                ? item2.pro_discount_value +
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
                                    ))}
                                    </>)}
                        </div>
                    </div>
                    {more < 24 &&
                        <button className="view-more" onClick={() => setMore(more + 6)}>
                            Xem thêm
                        </button>
                    }

                </div>
            </>
        );
    };
    return (
        <div className="cm-width">
            <div className={`suggestion`}>
                {loadingProduct === false ? (
                    getSuggestTitle()
                ) : (
                    <>
                        <div
                            className="body-loading-cate"
                            style={{ display: "flex" }}
                        >
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "auto",
                                    marginRight: "20px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={100}
                                    width={1270}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                        </div>
                        <div
                            className="body-loading-cate"
                            style={{ display: "flex" }}
                        >
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    width: "auto",
                                    marginRight: "6.5px",
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={70}
                                    width={153}
                                    style={{ display: "inline-block" }}
                                />
                            </div>
                        </div>
                        <div
                            className="body-loading-cate"
                            style={{ display: "flex" }}
                        >
                            <div
                                className="body-slide--list"
                                style={{
                                    display: "flex",
                                    marginTop: '10px',
                                }}
                            >
                                <Skeleton
                                    count={1}
                                    height={500}
                                    width={1270}
                                />
                            </div>
                        </div>
                    </>
                    
                    
                )}
            </div>
        </div>
    );
}
export default HomeSuggest;
