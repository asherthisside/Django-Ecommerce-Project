console.log("Hello, World!");

var updateBtns = document.getElementsByClassName('update-cart')
// console.log(updateBtns);
for(var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener("click", function() {
        var productId = this.dataset.product
        var action = this.dataset.action        
        console.log('Product ID', productId, 'Action: ' ,action);
        if (user === 'AnonymousUser') {
            console.log("User is not logged in");
        }

        else {
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action) {
    console.log('User is Authenticated, Sending data ...');

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'X-CSRFToken' : csrftoken
        },
        body: JSON.stringify({'productId' : productId, 'action' : action})
    })

    .then((response)=> {
        return response.json()
    })

    .then((data) => {
        console.log('Data: ', data);
        location.reload()
    })
}