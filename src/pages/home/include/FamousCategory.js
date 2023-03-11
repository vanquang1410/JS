import React, { useEffect, useState } from 'react';
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";
import categoryApi from '../../../api/CategoryService';
import Skeleton from "react-loading-skeleton";

function FamousCategory({ check }) {

	const [categories, SetCategories] = useState([]);
	const [loadingCategory, SetLoadingCategory] = useState(true);

	const getCategories = async (params) => {
		params = {
			status: 2,
			hot: 1
		};

		const response = await categoryApi.getListsCategory(params);
		console.log('-------------- getCategoriesHome@response: ', response);
		SetCategories(response.data);
		SetLoadingCategory(false);
	}

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<div className="cm-width">
			<div className="home-category">
				{!check && <div className="header">Danh mục nổi bật</div>}
				<div className="body">
					<div className="body-slide">
						{loadingCategory === false ? (
							<div className="body-slide--list">
								{categories.length > 0 && categories.map((category, index) => {
									return (
										<Link to={`category/` + (category.c_slug) + '-' + category.id} key={index.toString()} className="item">
											<Images src={category.c_avatar} alt={`category ${index}`} />
											<h3>{category.c_name}</h3>
										</Link>
									)
								})}
							</div>
						) : (
							<div className="body-loading-cate" style={{ padding: "10px 15px", display: "flex" }}>
								<div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
									<Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
									<Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
								</div>
								<div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
									<Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
									<Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
								</div>
								<div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
									<Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
									<Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
								</div>
								<div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
									<Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
									<Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default FamousCategory;
