"use client"
import { FormValues } from '@/types/formType';
import { useState, FormEvent } from 'react';



const RegistrationForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto mb-12 bg-white w-1/2 px-14 mt-6 py-4 flex flex-col space-y-4">
      <h1 className="text-4xl text-center">Registration Form  </h1>
      <div>
        <label htmlFor="Name">Enter your name : </label><input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-slate-800 h-9 px-4 w-full "
        />
      </div>
      <div>
        <label htmlFor="emila">Enter Your email  </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>
      <div>
        <label htmlFor="city">City Name </label>
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>

      <div>
        <label htmlFor="state">State Name</label>
        <input
          type="text"
          name="state"
          value={values.state}
          onChange={handleChange}
          placeholder="State"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>

      <div>
        <label htmlFor="country"> Country Name </label>
        <input
          type="text"
          name="country"
          value={values.country}
          onChange={handleChange}
          placeholder="Country"
          className="border border-slate-800 h-9 px-4 w-full"
        />
      </div>

      <button type="submit" className="bg-blue-800 h-10 text-white">Register</button>
    </form>
  );
};

export default RegistrationForm;
