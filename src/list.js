import client from "./client.js";

async function init() {
  await client.lpush("list:0", 1);
  await client.lpush("list:0", 2);
  await client.lpush("list:0", 3);
  await client.lpush("list:0", 4);
  await client.lpush("list:0", 5);
  await client.lpush("list:0", 6);

  /**
   * @lrenge -> fro reading list from redis
   * @indexing -> by adding `(key, 0, -1)`  it will give the full list
   * @indexNumber -> by adding index number like this (key, 3, 6) it will give those values whose index are between 3 to 6
   */
  // const result = await client.lrange("list:0", 0, 1);
  console.log(result);
}

init();
