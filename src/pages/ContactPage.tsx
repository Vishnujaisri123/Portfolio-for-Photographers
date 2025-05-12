import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Clear success message after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind? Get in touch and let's create something amazing together."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Information */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-6">
             Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether you're interested in booking a shoot, exploring
              partnership opportunities, or simply want more information, we’re
              here to assist you.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Our Studio</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Aaradhya visionary photography
                  <br />
                  East godavari district
                  <br />
                  Andhra pradesh ,india
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +91 8555085539
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  vishnuketa999@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Business Hours</h3>
            <div className="space-y-1 text-gray-600 dark:text-gray-400">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Send Us a Message
            </h2>

            {formStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-green-100 text-green-800 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-red-100 text-red-800 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="vishnu keta"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a subject</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Pricing Information">
                    Pricing Information
                  </option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
