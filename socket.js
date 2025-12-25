import net from "net";

const orig = net.Socket.prototype.connect;

net.Socket.prototype.connect = function (...args) {
  const normalized = net._normalizeArgs(args);
  const options = normalized[0];
  const cb = normalized[1];

  console.log("options:", options);
  console.log("cb:", cb);

  return orig.apply(this, args);
};
