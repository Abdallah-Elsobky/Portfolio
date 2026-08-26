import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Fade from "react-reveal/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

const toastOptions = {
  style: {
    borderRadius: "12px",
    background: "#121722",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    fontFamily: "sans-serif",
  },
};

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonElementRef = useRef(null);
  const sectionRef = useRef(null);

  // Safe handler that supports ALL languages (Arabic, English, German, French, Spanish, emojis, etc.)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields", { id: "contact-validation" });
      return;
    }

    // Basic email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", { id: "contact-email" });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await mail({ name, email, message });
      if (res && (res.status === 200 || res.text === "OK")) {
        toast.success("Message sent successfully! I will reply soon 🚀", {
          id: "contact-success",
        });
        emptyForm();
      } else {
        toast.error("Could not send message. Please email me directly!", {
          id: "contact-error",
        });
      }
    } catch (err) {
      console.error("Mail send error:", err);
      toast.error("Error sending message. Please contact me via direct email.", {
        id: "contact-error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Button submission animation with GSAP
  useEffect(() => {
    const btn = buttonElementRef.current;
    if (!btn) return;

    const handleBtnClick = () => {
      if (!btn.classList.contains("active")) {
        btn.classList.add("active");

        gsap.to(btn, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(btn, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  btn.removeAttribute("style");
                  gsap.fromTo(
                    btn,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        btn.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(btn, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": "#7F52FF",
              "--right-wing-background": "#7F52FF",
              duration: 0.11,
            },
            {
              "--left-wing-background": "#6335F8",
              "--right-wing-background": "#6335F8",
              duration: 0.14,
            },
            {
              "--left-body-background": "#7F52FF",
              "--right-body-background": "#7F52FF",
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    };

    btn.addEventListener("click", handleBtnClick);
    return () => btn.removeEventListener("click", handleBtnClick);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 },
      "<"
    );

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="w-full relative select-none bg-transparent pt-8 pb-16 overflow-visible"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>

      <div className="section-container flex flex-col justify-center relative z-10">
        <div className="flex flex-col items-center text-center contact-wrapper mb-10">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal font-semibold text-xs sm:text-sm">
            LET&apos;S CONNECT
          </p>
          <h1 className="text-5xl sm:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Contact Me
          </h1>
          <h2 className="text-[1.15rem] sm:text-[1.4rem] font-normal text-gray-light-2 mt-3 max-w-xl staggered-reveal">
            Have a mobile project or looking for an Android Developer? Let&apos;s build something great together.
          </h2>

          {/* Quick contact direct badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 staggered-reveal">
            <a
              href="mailto:its.abdallah.elsobky@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111622]/90 border border-white/10 text-xs font-mono text-gray-light-2 hover:text-white hover:border-[#3DDC84]/60 hover:bg-[#182030] transition-all link"
            >
              <span>✉️</span>
              <span>its.abdallah.elsobky@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111622]/90 border border-white/10 text-xs font-mono text-[#00E676]">
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span>Available Worldwide (Remote / Relocation)</span>
            </div>
          </div>
        </div>

        {/* Form Card Container */}
        <div className="mx-auto w-full max-w-2xl bg-[#0c1017]/90 border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md staggered-reveal">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Fade bottom distance={"2rem"}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="block w-full h-14 px-4 text-base sm:text-lg font-mono outline-none border border-white/15 focus:border-[#3DDC84] bg-[#121722]/80 rounded-xl transition-all duration-200 text-white placeholder-transparent peer"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute top-0 left-0 h-14 flex items-center pl-4 text-sm sm:text-base font-mono text-gray-light-3 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-[#3DDC84] peer-valid:text-xs peer-valid:-translate-y-4"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block w-full h-14 px-4 text-base sm:text-lg font-mono outline-none border border-white/15 focus:border-[#3DDC84] bg-[#121722]/80 rounded-xl transition-all duration-200 text-white placeholder-transparent peer"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 h-14 flex items-center pl-4 text-sm sm:text-base font-mono text-gray-light-3 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-[#3DDC84] peer-valid:text-xs peer-valid:-translate-y-4"
                >
                  Your Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  className="block w-full min-h-[9rem] max-h-[16rem] py-3.5 px-4 text-base sm:text-lg font-mono outline-none border border-white/15 focus:border-[#3DDC84] bg-[#121722]/80 rounded-xl transition-all duration-200 text-white placeholder-transparent peer"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute top-0 left-0 h-14 flex items-center pl-4 text-sm sm:text-base font-mono text-gray-light-3 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-[#3DDC84] peer-valid:text-xs peer-valid:-translate-y-4"
                >
                  Your Message
                </label>
              </div>
            </Fade>

            <div className="pt-2 flex justify-center link">
              <button
                ref={buttonElementRef}
                className={styles.button}
                disabled={
                  isSubmitting ||
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.message.trim()
                }
                type="submit"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message ->"}</span>
                <span className={styles.success}>
                  <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5" />
                  </svg>
                  Message Sent
                </span>
                <svg className={styles.trails} viewBox="0 0 33 64">
                  <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60" />
                  <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60" />
                </svg>
                <div className={styles.plane}>
                  <div className={styles.left} />
                  <div className={styles.right} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: none;
        }

        input:hover,
        textarea:hover {
          border-color: rgba(61, 220, 132, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Contact;
