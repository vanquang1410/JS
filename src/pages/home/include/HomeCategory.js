import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// import required modules
import categoryApi from '../../../api/CategoryService';

function HomeCategory() {
    const [categoriesHome, SetCategoriesHome] = useState([]);
    const [loadingCategoryHome, SetLoadingCategoryHome] = useState(true);

    useEffect(() => {
        getCategoriesHome();
    }, [])

    const getCategoriesHome = async (params) => {
        params = {
            status: 1,
            hot: 1
        };

        const response = await categoryApi.getListsCategory(params);
        SetCategoriesHome(response.data);
        SetLoadingCategoryHome(false);
    }

    return (
        <div className="category">
            {loadingCategoryHome === true ? (
                <div className="category-item" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Skeleton style={{ marginRight: "10px" }} count={1} height={20} width={100} />
                    <Skeleton style={{ marginRight: "10px" }} count={1} height={20} width={100} />
                    <Skeleton style={{ marginRight: "10px" }} count={1} height={20} width={100} />
                    <Skeleton style={{ marginRight: "10px" }} count={1} height={20} width={100} />
                    <Skeleton style={{ marginRight: "10px" }} count={1} height={20} width={100} />
                </div>
            ) : (
                categoriesHome.length > 0 && categoriesHome.map((item, index) =>
                (
                    <Link to={'/category/' + (item.c_slug) + '-' + item.id} className="category-item" key={index}>
                        <span>{item.c_name}</span>
                    </Link>
                )
                )
            )}
        </div>
    )
}
export default HomeCategory;
