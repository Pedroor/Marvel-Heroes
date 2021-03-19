import md5 from "md5";
import { PRIVATE_KEY, PUBLIC_KEY } from "../constants";

export function getMd5Hash() {
  const timestamp = Date.now().toString();
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

  return { timestamp, hash };
}
