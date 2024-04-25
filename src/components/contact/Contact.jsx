//========== Contact Section Component ==========

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { isValidName, isValidEmail, isValidMessage } from "../../utils/formValidation";
import
  {
    sendMainEmail,
    sendConfirmationEmail,
  } from "../../services/emailService";
import "./contact.scss";

const variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () =>
{
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const clearMessages = () =>
  {
    setTimeout(() =>
    {
      setError(false);
      setErrorMessage('');
      setSuccess(false);
    }, 5000);
  };

  const sendEmail = async (e) =>
  {
    e.preventDefault();
    const { first_name, last_name, email, message } = formRef.current;

    if (!isValidName(first_name.value) || !isValidName(last_name.value))
    {
      setError(true);
      setErrorMessage('Names must contain only characters.');
      clearMessages();
      return;
    }

    if (!isValidEmail(email.value))
    {
      setError(true);
      setErrorMessage('Please enter a valid email address.');
      clearMessages();
      return;
    }

    if (!isValidMessage(message.value))
    {
      setError(true);
      setErrorMessage('Message cannot be empty.');
      clearMessages();
      return;
    }

    try
    {
      const mainEmailResponse = await sendMainEmail(formRef.current);
      console.log("Main Email Sent", mainEmailResponse.text);
      setSuccess(true);

      const confirmationEmailResponse = await sendConfirmationEmail(formRef.current);
      console.log("Confirmation Email Sent", confirmationEmailResponse.text);

      formRef.current.reset();
    } catch (error)
    {
      console.error("Email Sending Error", error);
      setError(true);
      setErrorMessage('Failed to send email.');
    } finally
    {
      clearMessages();
    }
  };


  return (
    <motion.div
      ref={ref}
      className="contact"
      id="connect"
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
    >
      <motion.div className="textContainer">
        <motion.h1 variants={variants}>
          <span className="contactSpan">Let’s</span> work together
        </motion.h1>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          }}
        >
          <div className="name-row">
            <input
              type="text"
              required
              placeholder="First Name"
              name="first_name"
              autoComplete="given-name"
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              name="last_name"
              autoComplete="family-name"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Your Email"
            name="email"
            autoComplete="email"
          />
          <textarea rows="8" placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
          {error && <div className="alert alert-danger">{errorMessage}</div>}
          {success && <div className="alert alert-success">Success</div>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
