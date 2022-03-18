const eventEmitter = require("../lib/events");
const { faker } = require("@faker-js/faker");
require("./driver");

eventEmitter.on("packageDeleiveredSuccessfully", packageDeleiveredSuccessfully);
eventEmitter.on("packageReady", packageReady);

function packageReady() {
  //   console.log("We have a package to be delivered");
  const order = {
    id: faker.datatype.uuid(),
    time: new Date().toISOString(),
    store: "Delivery Heroes",
    customer: `${faker.name.firstName()}`,
    address: `${faker.address.city()}`,
  };
  console.log(`EVENT: "pickup"
  time:${order.time},
  order details: {
    id: ${order.id},
    time: ${order.time},
    store: ${order.store},
    customer: ${order.customer},
    address: ${order.customer}
  }
  `);
  eventEmitter.emit("packageToBeDeleivered", order);
}

function packageDeleiveredSuccessfully(order) {
  console.log(`VENDOR: Thank you for delivering ${order.id}`);
  console.log(`EVENT: "delivered"
    time:${new Date().toISOString()},
    order details: {
      id: ${order.id},
      time: ${order.time},
      store: ${order.store},
      customer: ${order.customer},
      address: ${order.customer}
    }
    `);
}
