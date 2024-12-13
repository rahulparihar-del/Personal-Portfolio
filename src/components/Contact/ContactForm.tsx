import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  interface FormDataObject {
    [key: string]: string;
  }

  interface ApiResponse {
    success: boolean;
    [key: string]: string | boolean;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "992abc0a-f9ba-4031-b128-31651e3c60d2");

    // Create an object from FormData
    const object: FormDataObject = Object.fromEntries(formData) as FormDataObject;
    const json = JSON.stringify(object);

    // Sending the form data to the server
    const res: ApiResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {['name', 'email', 'message'].map((field, index) => (
        <motion.div 
          key={field}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <label htmlFor={field} className="block text-sm font-medium text-gray-700">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          {field === 'message' ? (
            <textarea
              id={field}
              name="message" // Add the name attribute
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#327380] focus:ring-[#327380] bg-white p-3"
              required
            />
          ) : (
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field} // Add the name attribute
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#327380] focus:ring-[#327380] bg-white p-3"
              required
            />
          )}
        </motion.div>
      ))}
      <motion.button
        type="submit"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#327380] hover:bg-[#256c5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
