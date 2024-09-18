import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPhone = event.target['signup-email-phone'].value.trim();
    const password = event.target['signup-password'].value.trim();
    const confirmPassword = event.target['signup-confirm-password'].value.trim();
    const userType = event.target['user-type-signup'].value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(emailPhone)) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    // Password validation
    const passwordPattern = /^(?=(?:.*[a-zA-Z]){4,})(?=(?:.*\d){1,2})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password must be at least 6 characters long, with at least 4 letters, 1-2 numbers, and one special character.');
      return;
    }

    // Confirm password check
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Sign-Up successful for ' + userType);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 text-white py-5 text-center">
        <h1 className="text-3xl">QuickService - Sign Up</h1>
      </header>

      <main className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-gray-700 mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Email or Phone Number:
            <input type="text" name="signup-email-phone" className="w-full p-3 border border-gray-300 rounded mt-1" required />
          </label>
          <label className="block">
            Create Password:
            <input type="password" name="signup-password" className="w-full p-3 border border-gray-300 rounded mt-1" required />
          </label>
          <label className="block">
            Confirm Password:
            <input type="password" name="signup-confirm-password" className="w-full p-3 border border-gray-300 rounded mt-1" required />
          </label>
          <label className="block">
            I am a:
            <select name="user-type-signup" className="w-full p-3 border border-gray-300 rounded mt-1">
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>
          </label>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Sign Up</button>
        </form>

        {/* Navigation Link */}
        <div className="mt-4 text-center">
          <Link to="/payment" className="text-blue-500 hover:underline">
            Go to Payment Page
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-3 text-center">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
