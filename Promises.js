//---------------using Callbacks---------------------
function placeOrderCallback(callback) {
  console.log("Order placed.");
  setTimeout(() => {
    callback("Order confirmed.");
  }, 1000);
}

function prepareFoodCallback(callback) {
  console.log("Preparing food...");
  setTimeout(() => {
    callback("Food is ready.");
  }, 2000);
}

function deliverFoodCallback(callback) {
  console.log("Waiting for delivery...");
  setTimeout(() => {
    callback("Food delivered.");
  }, 1500);
}
//----------------------Callback Hell (Nested Callbacks)----------------
placeOrderCallback((orderStatus) => {
  console.log(orderStatus);

  prepareFoodCallback((foodStatus) => {
    console.log(foodStatus);

    deliverFoodCallback((deliveryStatus) => {
      console.log(deliveryStatus);
      console.log("Enjoy your meal!");
    });
  });
});

//---------------------------using Promises-------------------------
function placeOrder() {
  return new Promise((resolve) => {
    console.log("Order placed.");
    setTimeout(() => {
      resolve("Order confirmed.");
    }, 1000);
  });
}

function prepareFood() {
  return new Promise((resolve) => {
    console.log("Preparing food...");
    setTimeout(() => {
      resolve("Food is ready.");
    }, 2000);
  });
}

function deliverFood() {
  return new Promise((resolve) => {
    console.log("Waiting for delivery...");
    setTimeout(() => {
      resolve("Food delivered.");
    }, 1500);
  });
}
// -------------Using Promise Chaining and handlers---------------------
placeOrder()
  .then((orderStatus) => {
    console.log(orderStatus);
    return prepareFood();
  })
  .then((foodStatus) => {
    console.log(foodStatus);
    return deliverFood();
  })
  .then((deliveryStatus) => {
    console.log(deliveryStatus);
    console.log("Enjoy your meal!");
  })
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("visit us again"));

//---------------------Using Async/Await--------------------------------
async function orderProcess() {
  try {
    const orderStatus = await placeOrder();
    console.log(orderStatus);

    const foodStatus = await prepareFood();
    console.log(foodStatus);

    const deliveryStatus = await deliverFood();
    console.log(deliveryStatus);

    console.log("Enjoy your meal!");
    console.log("visit us again");

  } catch (error) {
    console.error("Error:", error);
    console.log("visit us again");

  }
}

orderProcess();
orderProcess();// to see parallel execution
