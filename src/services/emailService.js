//========== Email Services ==========

import emailjs from "emailjs-com";

const sendMainEmail = async (form) => {
  return await emailjs.sendForm(
    "service_id",
    "template_id",
    form,
    "personal_id"
  );
};

const sendConfirmationEmail = async (form) => {
  return await emailjs.sendForm(
    "service_id",
    "template_id",
    form,
    "personal_id"
  );
};

export { sendMainEmail, sendConfirmationEmail };
