import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BookingPage = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    // Retrieve selected item from localStorage
    useEffect(() => {
        const storedItem = localStorage.getItem('selectedItem') || 'No item selected';
        setSelectedItem(storedItem);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const namePattern = /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/;
        const addressPattern = /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/;

        // Validate Name
        if (!namePattern.test(name)) {
            alert('Name must contain only alphabets or alphanumeric characters (no purely numeric input).');
            return;
        }

        // Validate Address
        if (!addressPattern.test(address)) {
            alert('Address must contain only alphabets or alphanumeric characters (no purely numeric input).');
            return;
        }

        // Save booking details to localStorage
        localStorage.setItem('customerName', name);
        localStorage.setItem('deliveryAddress', address);

        // Redirect to payment page
        window.location.href = '/payment';
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-green-600 text-white p-4 text-center">
                <nav>
                    <ul className="flex justify-center space-x-6">
                        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                        <li><Link to="/services" className="text-white hover:text-gray-300">Find Services</Link></li>
                        <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Main */}
            <main className="py-8">
                <section className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Complete Your Booking</h2>
                    <p className="mb-6">Selected Item: <span className="font-semibold">{selectedItem}</span></p>
                    <form id="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="name" className="block text-left font-medium">Username:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="address" className="block text-left font-medium">Delivery Address:</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Proceed to Payment
                        </button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 Service Finder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BookingPage;
