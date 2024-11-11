import client from "./client.js";

async function init() {
  //await client.expire("msg:4", 10);
  //await client.set("msg:4", "Was machst du da?");
  const result = await client.get("msg:4");
  console.log(result);
}

init();
