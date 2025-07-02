import { useForm, ValidationError } from "@formspree/react";
import { FiGithub, FiLinkedin, FiFacebook, FiBriefcase } from "react-icons/fi";
import "../App.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mkgopaby"); // Replace with your ID

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Let’s Collaborate 💌
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
            <ValidationError field="message" prefix="Message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">Or connect via:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://https://github.com/Mr-S-26" className="social-icon">
              <FiGithub className="text-2xl" />
            </a>
            <a href="https://https://www.linkedin.com/in/michael-ryan-sia-a1a75028b/" className="social-icon">
              <FiLinkedin className="text-2xl" />
            </a>
            <a href="https://https://www.facebook.com/micosiaaa" className="social-icon">
              <FiFacebook className="text-2xl" />
            </a>
            <a href="https://https://www.upwork.com/freelancers/~019258bb7a132e427f" className="social-icon">
              <FiBriefcase className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}