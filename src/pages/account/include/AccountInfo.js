import React, { useState, useEffect } from "react";
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import UpdatePin from "./UpdatePin";
import { isWideScreen } from "../../../helpers/screen";
import AccountSetting from "./mobile/AccountSetting";
import Skeleton from "react-loading-skeleton";
import {BASE_URL, useTheme} from '../../../components/utils/useTheme';
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/AuthService";

function AccountInfo() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	const navigate = useNavigate();
	const [user, setUser] = useState([]);
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [phoneInput, setPhoneInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [password_old, setPassword_old] = useState("");
    const [password_new, setPassword_new] = useState("");
    const [password_confirm, setPassword_confirm] = useState("");
	const [loading, setLoading] = useState(true);
	const [noti, setNoti] = useState(false);
	const [noti1, setNoti1] = useState(false);
	const [alert, setAlert] = useState(false);
	const [alert1, setAlert1] = useState(false);
	const [count, setCount] = useState(1);

	const [phoneUpdate, showPhoneUpdate] = useState(false);
	const [emailUpdate, showEmailUpdate] = useState(false);
	const [passwordUpdate, showPasswordUpdate] = useState(false);

	async function getUser() {
		const response = await authApi.getProfile();
		if (response.status === 200) {
			setName(response.data.name);
			setAddress(response.data.address);
			setPhone(response.data.phone);
			setEmail(response.data.email);
			setPhoneInput(response.data.phone);
			setEmailInput(response.data.email);
			setLoading(false);
		} else {
			navigate('/');
			window.location.reload();
		}
		
	}

	useEffect(() => {
		getUser();
	}, [count]);

	async function updateInfo(e) {
		e.preventDefault();
		setAlert(false);
		setNoti1(false);
		try {
			let item = { name: name, address: address };
			const response = await authApi.updateInfo(item);
			if (response.status === 200) {
				setCount(count + 1);
				setNoti1(true);
			}
		} catch {
			setAlert1(true);
		}
		
	}

	async function updatePhone(e) {
		e.preventDefault();
        try {
            let item = { phone: phoneInput };
            const response = await authApi.updatePhone(item);
			if (response.status === 200) {
				setCount(count + 1);
				setNoti(true);
			}
        } catch {
            setAlert(true);
        }
    }

	async function updateEmail(e) {
		e.preventDefault();
        try {
            let item = { email: emailInput };
            const response = await authApi.updateEmail(item);
			if (response.status === 200) {
				setCount(count + 1);
				setNoti(true);
			}
        } catch {
            setAlert(true);
        }
    }

	const [showPass, setShowPass] = useState(false);

    function ShowPassword() {
        setShowPass(!showPass);
    }

	async function updatePassword() {
        try {
            let item = {password_old: password_old, password_new: password_new, password_confirm: password_confirm}
            fetch(`${BASE_URL}/user/update-password`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
                body: JSON.stringify(item),
            }).then((result) => {
                result.json().then(() => {
                    setCount(count + 1);
                    setNoti(true);
                })
            })
        } catch {
            setAlert(true);
        }
        
    }

	const theme = useTheme();
	return (
		<>
			{isWideScreen() && loading === true ? (
				<>
					<div className="container">
						<div className="page-container">
							<div className="category-title">
								<Skeleton
									count={1}
									width={180}
									height={30}
									style={{ marginLeft: "-15px", marginTop: "20px" }}
								/>
							</div>
							<Skeleton
								height={300}
								width={180}
								style={{ marginTop: "10px" }}
							/>
							<div className="right-container">
								<div className="heading-title">
									<Skeleton
										count={1}
										width={300}
										height={40}
										style={{ marginLeft: "20px" }}
									/>
								</div>
								<div className="info-page">
									<Skeleton
										width={1040}
										height={500}
										style={{ marginLeft: "20px" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className={`container ${theme}`}>
						<div className="page-container">
							<div className="category-title">
								<Link to="/">Trang chủ</Link>
								<img
									alt="/"
									src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo="
								></img>
								<h4>Thông tin tài khoản</h4>
							</div>
							<SideNavBar />

							<div className="right-container">
								<div className="heading-title">Thông tin tài khoản</div>
								<div className="info-page">
									<div className="info-container">
										<div className="info-left">
											<span className="info-title">Thông tin cá nhân</span>
											<div className="info-form">
												<form onSubmit={updateInfo}>
													<div className="form-info">
														<div className="form-avatar">
															<div className="avatar-view">
																<img
																	src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg"
																	alt="avatar"
																/>
																<div className="avatar-edit">
																	<img
																		src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
																		alt="edit"
																	/>
																</div>
															</div>
														</div>
														<div className="form-name">
															<div className="form-control">
																<label>Họ & Tên</label>
																<div className="input-label">
																	<input
																		className="input"
																		type="text"
																		name="fullName"
																		maxLength="128"
																		placeholder="Thêm họ tên"
																		defaultValue={name}
																		onChange={(e) => setName(e.target.value)}
																	/>
																</div>
															</div>
															<div className="form-control">
																<label className="input-label">Địa chỉ</label>
																<input
																	className="input"
																	type="text"
																	name="userName"
																	maxLength="128"
																	placeholder="Nhập địa chỉ"
																	defaultValue={address}
																	onChange={(e) => setAddress(e.target.value)}
																/>
															</div>
														</div>
													</div>
													<div className="form-control">
														<label className="input-label1">Ngày sinh</label>
														<div className="form-select">
															<select name="day">
																<option value="0">Ngày</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
																<option value="13">13</option>
																<option value="14">14</option>
																<option value="15">15</option>
																<option value="16">16</option>
																<option value="17">17</option>
																<option value="18">18</option>
																<option value="19">19</option>
																<option value="20">20</option>
																<option value="21">21</option>
																<option value="22">22</option>
																<option value="23">23</option>
																<option value="24">24</option>
																<option value="25">25</option>
																<option value="26">26</option>
																<option value="27">27</option>
																<option value="28">28</option>
																<option value="29">29</option>
																<option value="30">30</option>
																<option value="31">31</option>
															</select>
															<select name="month">
																<option value="0">Tháng</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
																<option value="8">8</option>
																<option value="9">9</option>
																<option value="10">10</option>
																<option value="11">11</option>
																<option value="12">12</option>
															</select>
															<select name="year">
																<option value="0">Năm</option>
																<option value="1990">1990</option>
																<option value="1991">1991</option>
																<option value="1992">1992</option>
																<option value="1993">1993</option>
																<option value="1994">1994</option>
																<option value="1995">1995</option>\
																<option value="1996">1996</option>
																<option value="1997">1997</option>
																<option value="1998">1998</option>
																<option value="1999">1999</option>
																<option value="2000">2000</option>
																<option value="2001">2001</option>
																<option value="2002">2002</option>
																<option value="2003">2003</option>
																<option value="2004">2004</option>
																<option value="2005">2005</option>
																<option value="2006">2006</option>
																<option value="2007">2007</option>
																<option value="2008">2008</option>
																<option value="2009">2009</option>
																<option value="2010">2010</option>
																<option value="2011">2011</option>
																<option value="2012">2012</option>
																<option value="2013">2013</option>
																<option value="2014">2014</option>
																<option value="2015">2015</option>
																<option value="2016">2016</option>
																<option value="2017">2017</option>
																<option value="2018">2018</option>
																<option value="2019">2019</option>
																<option value="2020">2020</option>
																<option value="2021">2021</option>
																<option value="2022">2022</option>
															</select>
														</div>
													</div>
													<div className="form-control">
														<label className="input-label1">Giới tính</label>
														<label className="check-label">
															<input
																className="check-input"
																type="radio"
																name="gender"
																defaultValue="male"
															/>
															<span className="span-input">Nam</span>
														</label>
														<label className="check-label">
															<input
																className="check-input"
																type="radio"
																name="gender"
																defaultValue="female"
															/>
															<span className="span-input">Nữ</span>
														</label>
														<label className="check-label">
															<input
																className="check-input"
																type="radio"
																name="gender"
																defaultValue="other"
															/>
															<span className="span-input">Khác</span>
														</label>
													</div>
													<div className="form-control">
														<label className="input-label1">Quốc tịch</label>
														<div className="input-region">
															<input
																className="input-with-icon-right"
																name="nationality"
																maxLength="128"
																placeholder="Chọn quốc tịch"
																readOnly=""
																defaultValue="Việt Nam"
															></input>
															<svg
																className="icon-right"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z"
																	fill="#808089"
																></path>
															</svg>
														</div>
													</div>
													<div className="form-control" style={{ flexDirection: 'column'}}>
														<label className="input-label1">&nbsp;</label>
														<button type="submit" onClick={updateInfo}>
															Lưu thay đổi
														</button>
														{ noti1 === true && <p style={{ color: 'green', fontSize: 14, textAlign: 'center' }}>Thay đổi thành công!</p>}
														{ alert1 === true && <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>Thay đổi thất bại!</p>}
													</div>
												</form>
											</div>
										</div>
										<div className="info-vertical" />
										<div className="info-right">
											<span className="info-title">Số điện thoại và Email</span>
											<div className="list-container">
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Số điện thoại</span>
															<span>{phone}</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<button onClick={() => { showPhoneUpdate(true); setAlert(false); setNoti(false)}}>Cập nhật</button>
														{ phoneUpdate === true && 
															<>
																<div className="info-popup">
																	<div className="up-phone-container">
																		<button className="button-close" onClick={() => showPhoneUpdate(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
																		<span><p>Cập Nhật Số Điện Thoại</p></span>
																		<form className="form-phonenum" onSubmit={updatePhone}>
																			<div className="form-pn-control">
																				<label className="input-pn-label">
																					Số điện thoại
																				</label>
																				<div className="input-pn-box">
																					<img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png' alt="ds" width="24" height="24"/>
																					<input maxLength="10" placeholder="Nhập số điện thoại" type="search"
																						value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)}
																					/>
																				</div>
																				<button type="submit" onClick={updatePhone}>Lưu thay đổi</button>
																				{ noti === true && <p style={{ color: 'green', fontSize: 14, textAlign: 'center' }}>Thay đổi thành công!</p>}
																				{ alert === true && <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>Thay đổi thất bại!</p>}
																			</div>
																		</form>
																	</div>
																</div>
															</>
														}
													</div>
												</div>
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Địa chỉ email</span>
															<span>{email}</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<button onClick={() => { showEmailUpdate(true); setAlert(false); setNoti(false) }}>Cập nhật</button>
														{ emailUpdate === true &&
															<>
																<div className="info-popup">
																	<div className="up-phone-container">
																		<button className="button-close" onClick={() => showEmailUpdate(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
																		<span><p>Cập Nhật Email</p></span>
																		<form className="form-phonenum" onSubmit={updateEmail}>
																			<div className="form-pn-control">
																				<label className="input-pn-label">
																					Địa chỉ email
																				</label>
																				<div className="input-pn-box">
																					<img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png' alt="ds" width="24" height="24"/>
																					<input maxlength="50" placeholder="Nhập địa chỉ email" type="search"
																						value={email} onChange={(e) => setEmail(e.target.value)}
																					/>
																				</div>
																				<button type="submit" onClick={updateEmail}>Lưu thay đổi</button>
																				{ noti === true && <p style={{ color: 'green', fontSize: 14, textAlign: 'center' }}>Thay đổi thành công!</p>}
																				{ alert === true && <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>Thay đổi thất bại!</p>}
																			</div>
																		</form>
																	</div>
																</div>
															</>
														}
													</div>
												</div>
											</div>
											<span className="info-title">Bảo mật</span>
											<div className="list-container">
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Đổi mật khẩu</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<button onClick={() => { showPasswordUpdate(true); setAlert(false); setNoti(false) }}>Cập nhật</button>
														{ passwordUpdate === true &&
															<>
																<div className="info-popup">
																	<div className="up-phone-container">
																		<button className="button-close" onClick={() => showPasswordUpdate(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
																		<span><p>Đổi mật khẩu</p></span>
																		<form className="form-phonenum" onSubmit={updatePassword}>
																			<div className="form-pass-control">
																				<label className="input-pass-label">
																					Mật khẩu hiện tại
																				</label>
																				<div className="input-pass-box">
																					<input className="input-pass-box1" placeholder="Nhập mật khẩu hiện tại"
																						type={showPass ? "text" : "password"}
																						value={password_old} onChange={(e) => setPassword_old(e.target.value)}
																					/>
																					<img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
																				</div>

																			</div>
																			<div className="form-pass-control">
																				<label className="input-pass-label">
																					Mật khẩu mới
																				</label>
																				<div className="input-pass-box">
																					<input className="input-pass-box1" placeholder="Nhập mật khẩu mới"
																						type={showPass ? "text" : "password"}
																						value={password_new} onChange={(e) => setPassword_new(e.target.value)}
																					/>
																					<img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
																				</div>
																				<div className="hint-pass-new"> Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</div>

																			</div>
																			<div className="form-pass-control">
																				<label className="input-pass-label">
																					Nhập lại mật khẩu mới
																				</label>
																				<div className="input-pass-box">
																					<input className="input-pass-box1" placeholder="Nhập lại mật khẩu mới"
																						type={showPass ? "text" : "password"}
																						value={password_confirm} onChange={(e) => setPassword_confirm(e.target.value)}
																					/>
																					<img onClick={ShowPassword} className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
																				</div>
																			</div>
																			<button className="btn-pass" type="submit" onClick={updatePassword}>  Lưu thay đổi</button>
																			{ noti === true && <p style={{ color: 'green', fontSize: 14, textAlign: 'center' }}>Thay đổi thành công!</p>}
																			{ alert === true && <p style={{ color: 'red', fontSize: 14, textAlign: 'center' }}>Thay đổi thất bại!</p>}
																		</form>
																	</div>
																</div>
															</>
														}
													</div>
												</div>
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Thiết lập mã PIN</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<Popup modal trigger={<button>Cập nhật</button>}>
															<UpdatePin />
														</Popup>
													</div>
												</div>
											</div>
											<span className="info-title">Liên kết mạng xã hội</span>
											<div className="list-container">
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Facebook</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<button>Cập nhật</button>
													</div>
												</div>
												<div className="listitem">
													<div className="listitem-info">
														<img
															src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
															alt="sad"
															width="24"
															height="24"
														/>
														<div className="listitem-info-detail">
															<span>Google</span>
														</div>
													</div>
													<div className="listitem-status">
														<span />
														<button>Cập nhật</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}

			{!isWideScreen() && <AccountSetting />}
		</>
	);
}

export default AccountInfo;
