import { PORT_NUMBER } from "./dev-config.mjs";

const connections = new Set();
function registerConnection(connection) {
  connections.add(connection);
  connection.on("close", () => connections.delete(connection));

  connection.ping?.(1);
}

export const startServer = () =>
  Promise.all([import("http"), import("ws"), import("./router.mjs")]).then(
    ([{ createServer }, { WebSocketServer }, { default: requestListener }]) => {
      const server = createServer(requestListener).listen(
        PORT_NUMBER,
        "localhost",
        () => {
          console.log(`Server started on http://localhost:${PORT_NUMBER}`);
        }
      );
      const wsServer = new WebSocketServer({ server });

      server.on("connection", registerConnection);
      wsServer.on("connection", registerConnection);

      return () =>
        Promise.all([
          new Promise((done) => {
            for (const connection of connections) {
              connection.terminate?.();
              connection.destroy?.();
            }
            server.unref().close(done);
          }),
          new Promise((done) => wsServer.close(done)),
        ]);
    }
  );

export const refreshBrowser = () => {
  const OPEN = 1;
  for (const wsConnection of connections) {
    if (wsConnection.readyState === OPEN) {
      console.log("Sending socket to refresh browser");
      wsConnection.send("refresh");
    }
  }
  return true;
};
