const app = require("./app");
const config = require("./src/config/config");

const PORT = config.server.port || 5001;

app.listen(PORT, () => {
  console.log(`Server on Running ${config.server.baseUrl}`);
});
