'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="relative w-full my-20  min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 w-full h-[100vh] z-0 -translate-y-3">
        <Image
          src="/images/bg-3.png"
          alt="background-image3"
          width={3000}
          height={3000}
          priority
          className="object-cover translate-y-[45%] scale-200"
        />
      </div>
      <div className="container mx-auto relative z-10 px-4 md:px-6 py-12 mt-[12%]">
        <h2 className="text-3xl md:text-4xl font-bold text-center  text-[#01f2f2]">
          Enquire Now
        </h2>

        <div className="max-w-3xl mx-auto  rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3  border border-gray-400 rounded text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#01f2f2]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3  border border-gray-400 rounded text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#01f2f2]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3  border border-gray-400 rounded text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#01f2f2]"
                  required
                />
              </div>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#01f2f2] appearance-none ${
                    !formData.country && 'text-transparent'
                  }`}
                  required
                >
                  <option
                    value=""
                    className="text-black"
                    disabled
                    hidden
                  ></option>
                  <option value="MY" className="text-black">
                    Malaysia
                  </option>
                  <option value="VN" className="text-black">
                    Vietnam
                  </option>
                  <option value="TH" className="text-black">
                    Thailand
                  </option>
                  <option value="OT" className="text-black">
                    Others
                  </option>
                </select>
                {!formData.country && (
                  <div className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none text-blue-300">
                    Country of Residence
                  </div>
                )}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Enter your message here (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3  border border-gray-400 rounded text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#01f2f2]"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
