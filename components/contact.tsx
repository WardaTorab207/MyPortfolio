"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { siteConfig } from "@/lib/site-config";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Magnetic from "./magnetic";
import { HiCheckCircle } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [success, setSuccess] = React.useState(false);
  const whatsappMessage = encodeURIComponent(
    "Hi Warda, I visited your portfolio and want to discuss an opportunity."
  );
  const whatsappUrl = `https://wa.me/923042725287?text=${whatsappMessage}`;

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-6xl sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="mb-7 -mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        or through this form. You can also reach me on{" "}
        <a className="underline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <form
          className="interactive-card flex flex-col rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-5 sm:p-6"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              setSuccess(false);
              toast.error(error);
              return;
            }
            setSuccess(true);
            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 min-h-[48px] rounded-lg border border-[var(--cream)]/15 bg-[var(--bg)] px-4 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="my-3 min-h-[12rem] rounded-lg border border-[var(--cream)]/15 bg-[var(--bg)] p-4 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
          {success ? (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--accent)]">
              <HiCheckCircle /> Message delivered successfully.
            </motion.p>
          ) : null}
        </form>
        <aside className="rounded-2xl border border-[var(--cream)]/15 bg-[var(--surface)] p-5 text-left sm:p-6">
          <h3 className="font-display text-xl text-[var(--text-primary)]">Contact Me</h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Tap to contact me on WhatsApp for quick communication.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-medium text-white transition hover:opacity-90"
          >
            <IoLogoWhatsapp className="text-lg" /> WhatsApp
          </a>
          <div className="mt-5 flex gap-3">
            <Magnetic><a data-cursor="interactive" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="social-pill"><BsLinkedin /></a></Magnetic>
            <Magnetic><a data-cursor="interactive" href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="social-pill"><BsGithub /></a></Magnetic>
            <Magnetic><a data-cursor="interactive" href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" className="social-pill"><FaTwitter /></a></Magnetic>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
