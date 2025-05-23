import { getByKeyFromRedis } from "..";

async function getString() {
  const result = await getByKeyFromRedis("msg:1");
  if (result === null) {
    return "No value found";
  } else {
    console.log("Value found:", result);
  }
  return result;
}

getString();
