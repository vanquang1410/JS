import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { isWideScreen } from '../../helpers/screen';
import { Provider, useDispatch, useSelector } from "react-redux";
import {
	decrementQuantity,
	incrementQuantity,
	removeItem,
	removeAll,
} from "../../store/cartSlice";
import { store } from "../../store/store";
import authApi from "../../api/AuthService";
import cartApi from "../../api/CartService";
import { useTheme } from "../utils/useTheme";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopCart() {
	const cart = useSelector((state) => state.cartReduce.listCart);
	let price_total = 0;
	const dispatch = useDispatch();
	const [isShow, setIsShow] = useState(false);
	const [alert, setAlert] = useState(false);
	const [alertMob, setAlertMob] = useState(false);
	const [notiMob, setNotiMob] = useState(false);
	const [notiMobF, setNotiMobF] = useState(false);
	const [userLogin, setUserLogin] = useState(null);
	const navigate = useNavigate();

	function getTotal() {
		cart.map((item) => {
			price_total += item.quantity * item.pro_price;
		});
		console.log("Total = ", price_total);
		return price_total.toLocaleString();
	}

	const fetchUserLogin = async () => {
		const user = await authApi.getProfile();
		if (user.status === 200) {
			setUserLogin(user.data);
		}
		console.log('---------------- user: ', user);
	}

	useEffect(() => {
		fetchUserLogin().then(r => {});
	}, []);

	const Order = async () => {
		let order = {};
		let transactions = [];
		console.log("------------- cart: ", cart);
		let total = 0;
		cart.forEach((item, index) => {
			transactions.push({
				id: item.id,
				name: item.pro_name,
				quantity: item.quantity,
				discount_type: "money",
				discount_value: 0,
				price: item.pro_price,
				total_price: item.pro_price,
			});

			total += item.pro_price * item.quantity;
		});

		const getUser = await authApi.getProfile();
		console.log('----------- getUser: ', getUser);
		if (getUser.status === 200) {
			order.name = getUser.data?.name;
			order.phone = getUser.data?.phone;
			order.address = getUser.data?.address;
		}

		order.products = transactions;
		order.note = "abc";
		order.total_price = total;
		console.log("order -----------: ", order);

		const createCart = await cartApi.createTransaction(order);
		console.log('------------------ createCart: ', createCart);
		if (createCart.status === 200) {
			// setIsShow(true);
			// setNotiMob(true);
			// dispatch(removeAll());
			if (createCart.data.link) {
				window.location.replace(createCart.data.link);
				// console.log('------------ createCart.data.link: ', createCart.data.link);
				// window.open(createCart.data.link, '_blank');
			}
		} else {
			setAlert(true);
			setNotiMobF(true);
		}
		if (createCart.status === 500 && createCart.message === "error") {
			console.log("Error create!!!");
		}
	};

	// const navigate = useNavigate();

	const handleClose = () => {
		setIsShow(false);
	};

	const theme = useTheme();

	return (
        <Provider store={store}>
			{isWideScreen() && (
				<div className={`sc-container ${theme}`}>
					<div className="main-title">
						<h4>Giỏ hàng</h4>
					</div>
					<div className="content">
						<div className="left-content">
							<div className="left-content-header">
								<label>
									<span>Sản phẩm</span>
								</label>
								<span>₫ơn giá</span>
								<span>Số lượng</span>
								<span>Thành tiền</span>
								<span>
									<img
										className="delete-icon"
										onClick={() =>
											dispatch(removeAll())
										}
										src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
										alt="deleted"
									/>
								</span>
							</div>
							<div className="left-content-container">
								<div className="list-cart">
									{cart ? (
										cart.map((item, index) => (
											<>
												<div
													className="product-item"
													key={index}
												>
													<div className="row">
														<div className="col1">
															<div className="product-detail">
																<Link
																	to={`/${item.pro_slug}-${item.id}`}
																>
																	<img
																		alt="sda"
																		src={
																			item.pro_avatar
																		}
																		width="80"
																		height="80"
																	/>
																</Link>
																<div className="product-content">
																	<Link
																		to={`/${item.pro_slug}-${item.id}`}
																		className="product-name"
																	>
																		{
																			item.pro_name
																		}
																	</Link>
																</div>
															</div>
														</div>
														<div className="col2">
															<span>
																{item.pro_price.toLocaleString()}{" "}
																₫
															</span>
														</div>
														<div className="col3">
															<div className="count">
																<div className="group-input">
																	<button
																		disabled={`${
																			item.quantity <
																			2
																				? "{true}"
																				: ""
																		}`}
																		className={`${
																			item.quantity <
																			2
																				? "disable"
																				: "enable"
																		}`}
																		onClick={() =>
																			dispatch(
																				decrementQuantity(
																					item
																				)
																			)
																		}
																	>
																		<img
																			alt="/"
																			src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
																			width="20"
																			height="20"
																		/>
																	</button>
																	<input
																		type="text"
																		value={
																			item.quantity
																		}
																		className="input"
																		readOnly
																	></input>
																	<button
																		className="enable"
																		onClick={() =>
																			dispatch(
																				incrementQuantity(
																					item
																				)
																			)
																		}
																	>
																		<img
																			alt="/"
																			src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
																			width="20"
																			height="20"
																		/>
																	</button>
																</div>
															</div>
														</div>
														<div className="col4">
															<span>
																{(
																	item.pro_price *
																	item.quantity
																).toLocaleString()}{" "}
																₫
															</span>
														</div>
														<div className="col5">
															<span>
																<img
																	src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
																	alt="deleted"
																	onClick={() =>
																		dispatch(
																			removeItem(
																				item
																			)
																		)
																	}
																/>
															</span>
														</div>
													</div>
												</div>
											</>
										))
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
						<div className="right-content">
							<div className="right-inner">
								<div className="delivery">
									<div className="delivery-container">
										<div className="header">
											<h3>Giao tới</h3>
											<Link
												to="/cart"
												className="link"
											>
												Thay ₫ổi
											</Link>
										</div>
										<div className="info">
											<p>{userLogin?.name}</p>
											<i />
											{/*<p>491515</p>*/}
										</div>
										<div className="address">
											{userLogin?.address}
										</div>
									</div>
								</div>
								<div className="calculate-price">
									<ul>
										<li>
											<div className="price-text">
												Tạm tính
											</div>
											<div className="price-value">
												0 ₫
											</div>
										</li>
										<li>
											<div className="price-text">
												Giảm giá
											</div>
											<div className="price-value">
												0 ₫
											</div>
										</li>
									</ul>
									<div className="price-total">
										<span>Tổng tiền</span>
										<div className="price-content">
											<span>{getTotal() + " ₫"}</span>
											<span className="price-note">
												(₫ã bao gồm VAT nếu có)
											</span>
										</div>
									</div>
								</div>
								<button className="btn-buy" onClick={Order}>
									Mua hàng
								</button>
								{isShow ? (
									<div className="alert-cart">
										<div className="alert-cart-container">
											<div className="alert-cart-content">
												<div>
													<img
														width="20"
														height="20"
														alt="sc"
														src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3KoNpySX6KZDN0GJtebbCnuYtu2FIClZGA&usqp=CAU"
													/>
													<h4>
														₫ặt hàng thành công
													</h4>
												</div>
												<button
													className="button-close1"
													onClick={handleClose}
												>
													₫óng
												</button>
											</div>
										</div>
									</div>
								) : (
									<>
										{alert ? (
											<div className="alert-cart">
												<div className="alert-cart-container">
													<div className="alert-cart-content">
														<img
															width="20"
															height="20"
															alt="sc"
															src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png"
														/>
														<h4>
															₫ặt hàng thất
															bại
														</h4>
														<button
															className="button-close2"
															onClick={() => {
																setIsShow(
																	false
																);
																setAlert(
																	false
																);
															}}
														>
															₫óng
														</button>
													</div>
												</div>
											</div>
										) : (
											<></>
										)}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{!isWideScreen() && (
				<>
					<div className="m_sc-header">
						<div className="m_sc-inner-top">
							<div className="left-header">
								<img
									onClick={() => navigate(-1)}
									alt="."
									src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"
								/>
								<FontAwesomeIcon
									onClick={() => navigate("/")}
									icon={faHome}
									style={{
										color: "white",
										width: 20,
										height: 20,
										marginLeft: 5,
									}}
								/>
							</div>
							<div className="title-header">
								Giỏ hàng ({cart.length})
							</div>
						</div>
					</div>
					<div className="sc_mobile-container">
						{ cart.length !== 0 &&
							<div className="address-mobile">
								<div className="left">
									<div className="info">
										<p>{userLogin?.name}</p>
										<i />
										<p className="phone">{userLogin?.phone}</p>
									</div>
									<div className="address">
										{userLogin?.address}
									</div>
								</div>
							</div>
						}
						<div className="cart-container">
							<div className="cart-list">
								{ cart && cart.map((item, index) =>
									<>
										<div className="cart-item-content" key={index}>
											<Link
												to={`/${item.pro_slug}-${item.id}`}
											>
												<img
													alt="sda"
													src={
														item.pro_avatar
													}
													width="80"
													height="80"
												/>
											</Link>
											<div className="product-content">
												<Link
													to={`/${item.pro_slug}-${item.id}`}
													className="product-name"
												>
													{
														item.pro_name
													}
												</Link>
												<div className="product-price">
													<span>{item.pro_price.toLocaleString()} ₫</span>
												</div>
												<div className="product-quantity">
													<span className="qty-decrease" onClick={() => item.quantity === 1 ? setAlertMob(true) : dispatch(decrementQuantity(item))}>
														<img alt='d' src='https://frontend.tikicdn.com/_mobile-next/static/img/icons/cartV2/decrease.svg'/>
													</span>
													<span className="qty-input">{item.quantity}</span>
													<span className="qty-increase" onClick={() => dispatch(incrementQuantity(item))}>
														<img alt='d' src='https://frontend.tikicdn.com/_mobile-next/static/img/icons/cartV2/increase.svg'/>
													</span>
												</div>
											</div>
										</div>
										{ alertMob === true &&
											<div className="alert-shopcart-mob">
												<div className="alert-container">
													<div className="alert-content">
														<div className="alert-content-message">
															Bạn muốn xóa sản phẩm này?
														</div>
													</div>
													<div className="alert-control">
														<div className="control-left" onClick={() => setAlertMob(false)}>
															Không
														</div>
														<div className="control-right" onClick={() => { dispatch(removeItem(item)); setAlertMob(false) }}>
															Xóa
														</div>
													</div>
												</div>
											</div>
										}
									</>
								)}
								{ cart.length === 0 &&
									<>
										<div className="emptycart">
											<img alt='empty' src='https://salt.tikicdn.com/ts/upload/00/54/86/76f242bcae9ba53612498da014b7c3b9.png'/>
											<p>Bạn chua có sản phẩm nào trong giỏ hàng</p>
											<Link to='/' className="continue-shopping">Tiếp tục mua sắm</Link>
										</div>
									</>
								}
							</div>
						</div>
						{ cart.length !== 0 &&
							<div className="button-pay">
								<div className="left">
									<div className="left-title">
										Tổng tiền
									</div>
									<div className="left-total">
										{getTotal() + " ₫"}
									</div>
								</div>
								<div className="right">
									<div className="right-button" onClick={Order}>
										Mua hàng ({cart.length})
									</div>
								</div>
							</div>
						}
						{ notiMob === true &&
							<div className="alert-shopcart-mob">
								<div className="alert-container">
									<div className="alert-content">
										<div className="alert-content-message">
											Đặt hàng thành công!
										</div>
									</div>
									<div className="alert-control">
										<div className="control-left" onClick={() => setNotiMob(false)}>
											Đóng
										</div>
									</div>
								</div>
							</div>
						}
						{ notiMobF === true &&
							<div className="alert-shopcart-mob">
								<div className="alert-container">
									<div className="alert-content">
										<div className="alert-content-message">
											Đặt hàng thất bại!
										</div>
									</div>
									<div className="alert-control">
										<div className="control-left" onClick={() => setNotiMobF(false)}>
											Đóng
										</div>
									</div>
								</div>
							</div>
						}
					</div>
				</>
			)}
        </Provider>
    );
}

export default ShopCart;
