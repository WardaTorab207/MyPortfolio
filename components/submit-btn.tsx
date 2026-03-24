import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      data-cursor="interactive"
      className="group flex h-[3rem] w-[9rem] items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[var(--on-accent)] outline-none transition-all focus:scale-105 hover:scale-105 active:scale-100 disabled:scale-100 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
