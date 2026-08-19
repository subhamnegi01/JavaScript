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


function pickupOrder(){
    console.log("Reaching retaurant to pickup your order...")

    setTimeout(() => {
        console.log("Order picked up successfully")
    }, 3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way")

    setTimeout(() => {
        console.log("Order delivered successfully")
    }, 50000)
}