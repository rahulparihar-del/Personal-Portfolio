import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  type FormFields = 'name' | 'email' | 'message';

  const [formData, setFormData] = useState<Record<FormFields, string>>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form field values dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: "992abc0a-f9ba-4031-b128-31651e3c60d2" }),
      });

      // Reset form fields after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {['name', 'email', 'message'].map((field) => (
        <div key={field} className="space-y-2">
          <label htmlFor={field} className="block text-sm font-medium text-gray-700">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          {field === 'message' ? (
            <textarea
              id={field}
              name={field}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          ) : (
            <input
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field as FormFields]}
              name={field}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className={`flex items-center justify-center w-full px-6 py-3 rounded-md text-white ${
          isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#327380] hover:bg-[#327380]'
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        disabled={isSubmitting}
      >
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? 'Submitting...' : 'Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;
