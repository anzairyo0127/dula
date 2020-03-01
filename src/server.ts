import { createApp } from "./factory";

const port: number = 9000;
const app = createApp("dev");

app.listen(port, () => {
  console.log(`Listen port ${port}`);
});
