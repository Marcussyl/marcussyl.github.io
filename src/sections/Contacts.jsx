import { motion, useSpring, useTransform, useMotionValue } from "motion/react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useReducer } from "react";

export const Contacts = () => {
  const [isAnyFocused, setIsAnyFocused] = useState(false);
  const focusCount = useRef(0);
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"],
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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

  const handleFocus = () => {
    focusCount.current += 1;
    setIsAnyFocused(true);
  };

  const handleBlur = () => {
    // Use setTimeout to wait for the next focused element (if tabbing between inputs)
    setTimeout(() => {
      focusCount.current -= 1;
      if (focusCount.current <= 0) {
        setIsAnyFocused(false);
        focusCount.current = 0; // Prevent negative values
      }
    }, 0);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center pt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${
          isAnyFocused ? "transform-none" : "transform-3d"
        } border-main-purple mx-auto flex max-w-[500px] flex-col items-center rounded-lg border-2 border-dashed px-7 pt-5 pb-5`}
        style={{
          rotateX: isAnyFocused ? 0 : rotateX,
          rotateY: isAnyFocused ? 0 : rotateY,
          background:
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
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                {/* <img
                  src="/software-engineer-portfolio/assets/send.svg"
                  alt="plane icon"
                /> */}
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
            <a href="https://github.com/Marcussyl" target="_blank">
              <img
                src="/software-engineer-portfolio/assets/social-media/github.png"
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-sze-3538ba229/"
              target="_blank"
            >
              <img
                src="/software-engineer-portfolio/assets/social-media/linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
