import emailjs from "@emailjs/browser";
import emailConfig from "./emailConfig";

const mail = ({ name, email, message }) =>
  emailjs.send(
    emailConfig.SERVICE_ID,
    emailConfig.TEMPLATE_ID,
    { 
      from_name: name, 
      from_email: email, 
      message : message
     },
    {
      publicKey: emailConfig.PUBLIC_KEY,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;
