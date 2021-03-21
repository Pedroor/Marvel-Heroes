import md5 from "md5";
import { PRIVATE_KEY, PUBLIC_KEY } from "../constants";
import { showMessage } from "react-native-flash-message";

export function getMd5Hash() {
  const timestamp = Date.now().toString();
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

  return { timestamp, hash };
}

export function ErrorMessage() {
  showMessage({
    message: "Oops, something went wrong!",
    description: "How about getting in touch with us?",
    type: "danger",
    icon: "auto",
    floating: true,
    duration: 4000,
    position: "top",
  });
}
