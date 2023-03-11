import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import categoryApi from '../../../api/CategoryService';
import Skeleton from 'react-loading-skeleton';

export default function SidebarFilter()  {
	const [categoriesSidebar, setCategories] = useState([]);
	const [loadingCategories, SetLoadingCategories] = useState(true);

	useEffect(() => {
		getCategoriesSidebar();
	},[])

	const getCategoriesSidebar = async (params) => {
		const response = await categoryApi.getListsCategory(params);
		setCategories(response.data);
		SetLoadingCategories(false);
	}

	return (
		<div className="sidebar">
			<div>
				<div className="sidebar-title">
					<h4>Danh mục sản phẩm</h4>
				</div>

				<div className="sidebar-list">
					{ loadingCategories === false ? (
						<ul>
							{ categoriesSidebar.map(( item, index) => (
								<li key={index}>
									<Link title={item.c_name} to={'/category/' + (item.c_slug) + '-' + item.id}> { item.c_name} </Link>
								</li>
							))}
						</ul>
					) : (
						<ul>
							<li>
								<Skeleton count={5} height={10} />
							</li>
						</ul>
					)}
				</div>

				{/* <div className="sidebar-service">
					<h4>Dịch vụ</h4>
					<label>
						<input type="checkbox"/>
						<img className="filter-icon" alt="/" src="https://salt.tikicdn.com/ts/upload/b3/21/cf/c6525bcd44b3bb1b793277cc98487799.png"/>
						<span>Giao siêu tốc 2h</span>
					</label>
				</div>

				<div className="sidebar-selladr">
					<h4>Nơi bán</h4>
					<label>
						<input type="checkbox"/>
						<p>Hà Nội</p>
					</label>
					<div className="more">
						<Link to="*">
							Xem thêm
							<img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
						</Link>
					</div>
				</div>

				<div className="sidebar-rate">
					<h4>Đánh giá</h4>
					<div className="star">
						<div className="star-on">
							&#9733;&#9733;&#9733;&#9733;&#9733;
						</div>
						<p>từ 5 sao</p>
					</div>
					<div className="star">
						<div className="star-on">
							&#9733;&#9733;&#9733;&#9733;
						</div>
						<div className="star-off">
							&#9733;
						</div>
						<p>từ 4 sao</p>
					</div>
					<div className="star">
						<div className="star-on">
							&#9733;&#9733;&#9733;
						</div>
						<div className="star-off">
							&#9733;&#9733;
						</div>
						<p>từ 3 sao</p>
					</div>
				</div>

				<div className="sidebar-price">
					<h4>Giá</h4>
					<div className="price-box"><span>Dưới 3.000.000</span></div>
					<div className="price-box"><span>3.000.000 -&gt; 17.000.000</span></div>
					<div className="price-box"><span>Trên 17.000.000</span></div>
					<div className="price-small-text">Chọn khoảng giá</div>
					<div className="input-group">
						<input placeholder="0" type="text"></input>
						<span>-</span>
						<input placeholder="0" type="text"></input>
					</div>
					<button>Áp dụng</button>
				</div>

				<div className="sidebar-brand">
					<h4>Thương hiệu</h4>
					<label>
						<input type="checkbox"/>
						<p>Samsung</p>
					</label>
					<div className="more">
						<Link to="*">
							Xem thêm
							<img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
						</Link>
					</div>
				</div>

				<div className="sidebar-color">
					<h4>Màu sắc</h4>
					<label>
						<input type="checkbox"/>
						<p>Đen</p>
					</label>
					<div className="more">
						<Link to="*">
							Xem thêm
							<img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
						</Link>
					</div>
				</div>

				<div className="sidebar-contributor">
					<h4>Nhà cung cấp</h4>
					<label>
						<input type="checkbox"/>
						<p>Tiki Trading</p>
					</label>
					<div className="more">
						<Link to="*">
							Xem thêm
							<img alt="/" src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text-thumbnail.png"/>
						</Link>
					</div>
				</div>

				<div className="sidebar-delivery">
					<h4>Giao hàng</h4>
					<label>
						<input type="checkbox"/>
						<p>Hàng Nội Địa</p>
					</label>
				</div> */}
			</div>
		</div>
	)
}
