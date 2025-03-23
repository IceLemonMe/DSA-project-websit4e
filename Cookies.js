function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
        document.cookie.split(';').forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            location.reload();
        })
}

function priceForOneItem(value, value2) {
    Price = value*value2
    console.log(priceForOneItem)
    return Price;
}

function totalCost() {
    var cookies = document.cookie;
    var cookieArray = cookies.split('; ');
    let totalCost = 0;

    cookieArray.forEach(cookie => {
        var [key, value] = cookie.split('=');

        var numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            totalCost += numericValue;
        }
    });

    return totalCost;
}

var totalCookieValue = totalCost();
console.log('Total sum of cookie values:', totalCookieValue);
