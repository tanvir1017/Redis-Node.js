import { Redis } from "ioredis";

export const client = new Redis();

export const getByKeyFromRedis = async (key: string) => {
  const value = await client.get(key);
  return value;
};
