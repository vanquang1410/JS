import React from 'react';

function ProductDescribe({products}) {

    // const [hide, setHide] = useState(true);
    // const showMore = () => {
    //     setHide(!hide);
    // }

    return (
        <div className="describe-container">
            <div className="des-left">
                <div className="left-group">
                    <h2>Mô Tả Sản Phẩm</h2>
                    <div className="group-content">
                        <p>{products?.pro_description}</p>
                        
                        {/* <button onClick={showMore}>{ hide === true ? 'Xem thêm' : 'Thu gọn'}</button>     */}
                    </div>
                </div>
            </div>
            <div className="des-right"></div>
        </div>
    )
}

export default ProductDescribe;