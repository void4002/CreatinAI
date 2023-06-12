import React, { useState } from 'react';
import { db } from '../firebase';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollnumber: '',
    phonenumber: '',
    email: '',
    year: 1,
    branch: '',
    section: '',
    reasontojoin: '',
    domainofinterest: '',
    interestedposts: '',
    suggestions: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('forms').add(formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
    <Header/>
    <div className='container-fluid mx-auto p-20'>
    <form className="p-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rollnumber" className="block">Roll Number</label>
        <input
          type="text"
          id="rollnumber"
          name="rollnumber"
          value={formData.rollnumber}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block">Phone Number</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block">Year</label>
        <select
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="form-select mt-1 block w-full"
          required
        >
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="branch" className="block">Branch</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="section" className="block">Section</label>
        <input
          type="text"
          id="section"
          name="section"
          value={formData.section}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reasontojoin" className="block">Reason to Join</label>
        <textarea
          id="reasontojoin"
          name="reasontojoin"
          value={formData.reasontojoin}
          onChange={handleChange}
          className="form-textarea mt-1 block w-full"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="domainofinterest" className="block">Domain of Interest</label>
        <input
          type="text"
          id="domainofinterest"
          name="domainofinterest"
          value={formData.domainofinterest}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="interestedposts" className="block">Interested Posts</label>
        <input
          type="text"
          id="interestedposts"
          name="interestedposts"
          value={formData.interestedposts}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="suggestions" className="block">Suggestions</label>
        <textarea
          id="suggestions"
          name="suggestions"
          value={formData.suggestions}
          onChange={handleChange}
          className="form-textarea mt-1 block w-full"
          required
        ></textarea>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
    {formSubmitted ? (
      <div className="bg-green-200 text-green-800 p-4 mb-4">
        Form submitted successfully!
      </div>
    ) : null}
    </div>
    </div>
      <Footer/>
      </div>
  );
};

export default IntakeForm;
