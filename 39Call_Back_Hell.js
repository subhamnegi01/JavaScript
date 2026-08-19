function placeOrder(order) {
    console.log("Talking with Dominos's")

    setTimeout(() => {
        console.log("Order placed successfully")
    }, 2000)
}

function preparingOrder(){
    console.log("Preparing your order...")

    setTimeout(() => {
        console.log("Pizza Preparation is Done.")
    }, 5000)
}


preparingOrder()