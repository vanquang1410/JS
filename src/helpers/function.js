export const  currencyFormat = (num) => {
	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
}

export const priceDiscount = (price, discount) => {
	if (discount === 0) return price;
	return  ((100 - discount) * price) / 100;
}

export const getDataLocalStorageByKey = function (sessionName) {
    let value = JSON.parse(localStorage.getItem(sessionName))
    // let value = JSON.parse(window.localStorage.getItem(sessionName))
    if (value) {
        return value;
        // let expirationDate = new Date(Value.expirationDate)
        // if (expirationDate > new Date()) {
        //     return Value
        // } else {
        //     window.localStorage.removeItem(sessionName)
        // }
    }
    return null;
}

export const remoteDataLocalStorageByKey = function (sessionName) {
    return localStorage.removeItem(sessionName);
}
