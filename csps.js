"use strict";

const eventEmitter = require("./lib/events");

require("./apps/driver");
require("./apps/vendor");

setInterval(() => {
  eventEmitter.emit("packageReady");
}, 10000);
