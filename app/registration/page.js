"use client";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe outside of a component’s render
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const RegForm = ({ handleInputChange }) => {
  return (
    <div>
      {/* Child's Name */}
      <div className="mb-4">
        <label
          htmlFor="childName2"
          className="block text-gray-700 font-semibold mb-2"
        >
          2nd Child's Name
        </label>
        <input
          type="text"
          id="childName2"
          name="childName2"
          placeholder="Peter Henry"
          required
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
        />
      </div>
      {/* Child's NRIC/FIN */}
      <div className="mb-4">
        <label
          htmlFor="childId2"
          className="block text-gray-700 font-semibold mb-2"
        >
          2nd Child's NRIC/FIN
        </label>
        <input
          type="text"
          id="childId2"
          name="childId2"
          placeholder="T1345678B"
          required
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
        />
      </div>
      {/* Date of Birth */}
      <div className="mb-4">
        <label
          htmlFor="dob2"
          className="block text-gray-700 font-semibold mb-2"
        >
          2nd Child's Date of Birth
        </label>
        <input
          type="date"
          id="dob2"
          name="dob2"
          required
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
        />
      </div>
      {/* Gender */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          2nd Child's Gender
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="gender2"
              value="male"
              required
              onChange={handleInputChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="gender2"
              value="female"
              required
              onChange={handleInputChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
      {/* Test Fee */}
      <div className="mb-4">
        <label
          htmlFor="fees2"
          className="block text-gray-700 font-semibold mb-2"
        >
          Test Fee
        </label>
        <select
          name="fees2"
          id="fees2"
          required
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
        >
          <option></option>
          <option value="price_1PmcmrGFAC6OsC0oAi7GhipK">
            $35 e-cert only
          </option>
          <option value="price_1PmZATGFAC6OsC0o1u3D0Fep">
            $40 e-cert and printed certificate
          </option>
        </select>
      </div>
    </div>
  );
};

export default function CheckoutPage() {
  const [hideForm, setHideForm] = useState(true);
  const [isPreview, setIsPreview] = useState(false);
  const [feeLabel, setFeeLabel] = useState([
    "$35 e-cert only",
    "$40 e-cert and printed certificate",
  ]);
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    childName: "",
    childId: "",
    dob: "",
    gender: "",
    fees: "",
    childName2: "",
    childId2: "",
    dob2: "",
    gender2: "",
    fees2: "",
  });

  const handleHideForm = () => {
    setHideForm(!hideForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setIsPreview(true);
  };

  const handleCancelPreview = () => {
    setIsPreview(false);
  };

  const handleSubmit = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Something went wrong!");
      }

      const session = await response.json();
      if (!session.id) {
        throw new Error("Session id not found");
      }

      // Redirect to stripe checkout
      stripe.redirectToCheckout({ sessionId: session.id });
    } catch (err) {
      console.error("Error creating Stripe session:", err.message);
      alert(`Payment initiation failed: ${err.message}`);
    }
  };

  if (isPreview) {
    // Preview the form data
    return (
      <div className="preview-modal flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-xl text-black font-semibold mb-4">
            Confirm Your Details
          </h2>
          <p className="text-black">Parent's Name: {formData.parentName}</p>
          <p className="text-black">Phone Number: {formData.phoneNumber}</p>
          <p className="text-black">Child's Name: {formData.childName}</p>
          <p className="text-black">Child's NRIC/FIN: {formData.childId}</p>
          <p className="text-black">Date of Birth: {formData.dob}</p>
          <p className="text-black">Gender: {formData.gender}</p>
          <p className="text-black">
            Test Fee:
            {formData.fees == "price_1OcTo1GFAC6OsC0oltPQEfyn"
              ? feeLabel[0]
              : feeLabel[1]}
          </p>
          {!hideForm && (
            <>
              <p className="text-black">
                2nd Child's Name: {formData.childName2}
              </p>
              <p className="text-black">
                2nd Child's NRIC/FIN: {formData.childId2}
              </p>
              <p className="text-black">
                2nd Child's Date of Birth: {formData.dob2}
              </p>
              <p className="text-black">
                2nd Child's Gender: {formData.gender2}
              </p>
              <p className="text-black">
                2nd Child's Test Fee:{" "}
                {formData.fees2 == "price_1PmcmrGFAC6OsC0oAi7GhipK"
                  ? feeLabel[0]
                  : feeLabel[1]}
              </p>
            </>
          )}
          <div className="mt-6">
            <button
              onClick={handleCancelPreview}
              className="px-4 py-2 bg-gray-500 text-white rounded-md mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Swimsafer Registration</h1>
        <p className="mt-4 text-lg">
          Register your child for the Swimsafer Assessment today!
        </p>
      </div>
      <div className=" bg-gray-100 min-h-screen">
        <form
          onSubmit={handlePreview}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
        >
          {/* Parent's Name */}
          <div className="mb-4">
            <label
              htmlFor="parentName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Parent's Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              placeholder="Thierry Henry"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="91234567"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          {/* Child's Name */}
          <div className="mb-4">
            <label
              htmlFor="childName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              placeholder="Maria Henry"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          {/* Child's NRIC/FIN */}
          <div className="mb-4">
            <label
              htmlFor="childId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Child's NRIC/FIN
            </label>
            <input
              type="text"
              id="childId"
              name="childId"
              placeholder="T1345678B"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          {/* Test Fee */}
          <div className="mb-4">
            <label
              htmlFor="fees"
              className="block text-gray-700 font-semibold mb-2"
            >
              Test Fee
            </label>
            <select
              name="fees"
              id="fees"
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            >
              <option></option>
              <option value="price_1OcTo1GFAC6OsC0oltPQEfyn">
                $35 e-cert only
              </option>
              {/* <option value="price_1PmZATGFAC6OsC0o1u3D0Fep">
                $40 e-cert and printed certificate
              </option> */}
            </select>
          </div>
          {/* Add-on Button */}
          {/* <div className="mb-4">
            <input
              type="button"
              className="px-4 py-2 bg-gray-400 text-black font-semibold border border-blue-200 rounded-md"
              value={hideForm ? "Add Child +" : "Remove Child -"}
              onClick={handleHideForm}
            />
          </div> */}
          {/* 2nd Child */}
          {!hideForm && <RegForm handleInputChange={handleInputChange} />}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
