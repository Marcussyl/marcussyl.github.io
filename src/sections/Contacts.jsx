import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useReducer } from "react";

export const Contacts = () => {
  const [emailSendState, setEmailSendState] = useState();

  const initialState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Validation: check all fields are filled
    if (!state.name || !state.subject || !state.email || !state.message) {
      setEmailSendState("INCOMPLETE");
      setTimeout(() => setEmailSendState(undefined), 5000);
      return;
    }

    emailjs
      .sendForm("service_j34e6op", "template_qdwmjme", form.current, {
        publicKey: "Ppd8kmEE1F2BBcDZv",
      })
      .then(
        () => {
          dispatch({ type: "RESET" });
          setEmailSendState("SUCCESS");
          setTimeout(() => setEmailSendState(undefined), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailSendState("ERROR");
          setTimeout(() => setEmailSendState(undefined), 5000);
        },
      );
  };

  return (
    <motion.div
      className="relative flex flex-col items-center pt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className={`border-main-purple mx-auto flex max-w-[500px] flex-col items-center rounded-lg border-2 border-dashed px-7 pt-5 pb-5`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #261a42 0%, #1e0e3b 20%, #140534 50%, #1e0e3d 80%, #281c44 90%, #281c44 100%)",
        }}
      >
        <div className="inner translate-z-[75px] transform-3d">
          <h2 className="gradient-text text-center text-2xl font-bold">
            Get in touch
          </h2>
          <br />
          <form onSubmit={sendEmail} ref={form}>
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
              <input
                name="name"
                type="text"
                placeholder="Chan Tai Man"
                className="focus:outline-none"
                value={state.name}
                onChange={(e) =>
                  dispatch({
                    type: "FIELD",
                    field: "name",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <label htmlFor="subject">Subject</label>
            <div className="input-wrapper">
              <input
                name="subject"
                type="text"
                placeholder="Enter your subject here"
                className="focus:outline-none"
                value={state.subject}
                onChange={(e) =>
                  dispatch({
                    type: "FIELD",
                    field: "subject",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                name="email"
                type="email"
                placeholder="1234@example.com"
                className="focus:outline-none"
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: "FIELD",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <label htmlFor="msg">Message</label>
            <div className="input-wrapper">
              <textarea
                name="message"
                rows="4"
                cols="50"
                placeholder="Write your message here"
                className="focus:outline-none"
                value={state.message}
                onChange={(e) =>
                  dispatch({
                    type: "FIELD",
                    field: "message",
                    value: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <br />
            <motion.button
              className="mx-auto block w-full"
              type="submit"
              value={"Send"}
              whileTap={{ backgroundColor: "#5f3aa6" }}
              style={{ borderRadius: "10px" }}
            >
              <div className="inner border-main-purple text-grayish-white flex !cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-dashed p-2">
                {"Send Message"}
                <img src="/assets/send-white.svg" alt="right arrow icon" />
              </div>
            </motion.button>
            {/* Show email send state message */}
            {emailSendState === "SUCCESS" && (
              <div className="mt-2 text-center text-xs text-green-400">
                Thanks for your message! I’ll respond to you soon.
              </div>
            )}
            {emailSendState === "ERROR" && (
              <div className="mt-2 text-center text-xs text-red-400">
                Failed to send message. Please try again later.
              </div>
            )}
            {emailSendState === "INCOMPLETE" && (
              <div className="mt-2 text-center text-xs text-yellow-400">
                Please fill in all fields before sending your message.
              </div>
            )}
          </form>
          <div className="social-medias-container">
            <a
              href="mailto:szeyulam.jobs@gmail.com"
              target="_blank"
              className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
            >
              <img src="/assets/social-media/email.png" alt="email icon" />
            </a>
            <a href="https://github.com/Marcussyl" target="_blank">
              <img src="/assets/social-media/github.png" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-sze-3538ba229/"
              target="_blank"
            >
              <img
                src="/assets/social-media/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
