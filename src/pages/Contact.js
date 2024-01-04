import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { useLanguage } from "../utils/LanguageContext";
import Footer from "../components/common/Footer";
import "../style/style.css";
import { toast } from "react-toastify";
import axios from "axios";
const Contact = () => {
  window.scroll(0,0)
  const { changeLanguage, language, translate } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors,setErrors] = useState({})
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (/\s/.test(formData.email)) {
      newErrors.email = "Email should not contain spaces";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }


   

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleClick = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      await axios.post("https://mypunjabitv-server.onrender.com/api/contact/mail", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  return (
    <div>
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 contact-us">
              <form
               class="form contactForm p-3 p-xl-4"
               id="contactusForm"
               onSubmit={handleClick}>
                <h4 className="contact-title pb-3 text-start"> {translate('contactMessage')}</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                      name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required = {true}
                        placeholder="Your Name"
                      />
                        {errors.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      <label for="name">{translate('contactFormName')}</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                      name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required={true}
                      />
                          {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      <label for="email">{translate('contactFormEmail')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                      name="subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required={true}
                      />
                        {errors.subject && (
                          <span className="error">{errors.subject}</span>
                        )}
                      <label for="subject">{translate('contactFormSubject')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                      name="message"
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ height: "200px" }}
                      ></textarea>
                      <label for="message">{translate('contactFormMessage')}</label>
                    </div>
                  </div>
                  <div className="col-12 text-start">
                    <button className="button-contactForm" type="submit">
                     {translate('contactButtonText')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.180033914099!2d76.69176177610346!3d30.713338786568666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef99cc17fe25%3A0x6a593a19f7208f9b!2sAbacus%20Cloud!5e0!3m2!1sen!2sin!4v1704190153097!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "1px solid #ddd" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Map showing the location of Abacus Cloud"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
