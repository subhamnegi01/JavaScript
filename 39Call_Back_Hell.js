callback = ()=>{
    preparingOrder()
}

function placeOrder(callback) {
    console.log("Talking with Dominos's")

    setTimeout(() => {
        console.log("Order placed successfully")
        callback()
    }, 2000)
}

function preparingOrder(callback) {
    console.log("Preparing your order...")

    setTimeout(() => {
        console.log("Pizza Preparation is Done.")
        callback()
    }, 5000)
}


function pickupOrder(callback) {
    console.log("Reaching retaurant to pickup your order...")

    setTimeout(() => {
        console.log("Order picked up successfully")
        callback()
    }, 3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way")

    setTimeout(() => {
        console.log("Order delivered successfully")
    }, 50000)
}



placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
                
            })
        })
    })
})
