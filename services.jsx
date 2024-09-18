import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServicesPage = () => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [providers, setProviders] = useState([]);
    const [showGroceryItems, setShowGroceryItems] = useState(false);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setShowGroceryItems(e.target.value === 'groceries');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Simulate provider data
        const simulatedProviders = [
            { name: 'John Doe - Electrician', location: 'New York', type: 'Electrician' },
            { name: 'Jane Smith - Plumber', location: 'Los Angeles', type: 'Plumber' },
            { name: 'Fresh Farm - Groceries', location: 'Chicago', type: 'Groceries' }
        ];
        setProviders(simulatedProviders);
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-green-600 p-5 text-white">
                <nav className="flex justify-center space-x-4">
                    <Link to="/" className="text-white hover:bg-green-700 px-3 py-2 rounded">Home</Link>
                    <Link to="/services" className="text-white hover:bg-green-700 px-3 py-2 rounded">Find Services</Link>
                    <Link to="/about" className="text-white hover:bg-green-700 px-3 py-2 rounded">About Us</Link>
                    <Link to="/contact" className="text-white hover:bg-green-700 px-3 py-2 rounded">Contact</Link>
                </nav>
            </header>

            {/* Main Section */}
            <main className="py-10 px-5 text-center">
                {/* Search Section */}
                <section className="bg-white max-w-xl mx-auto p-10 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Search for Service Providers or Groceries</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-left font-semibold">Category:</label>
                            <select
                                id="category"
                                value={category}
                                onChange={handleCategoryChange}
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                            >
                                <option value="maid">Maid</option>
                                <option value="plumber">Plumber</option>
                                <option value="electrician">Electrician</option>
                                <option value="groceries">Shop Groceries</option>
                            </select>
                        </div>

                        {showGroceryItems && (
                            <div className="mb-4">
                                <label htmlFor="items" className="block text-left font-semibold">Select Grocery Item:</label>
                                <select id="grocery-items" className="mt-1 block w-full px-3 py-2 border rounded-md">
                                    <option value="vegetables">Vegetables</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="dairy">Dairy Products</option>
                                    <option value="grains">Grains and Pulses</option>
                                </select>
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="location" className="block text-left font-semibold">Enter Your Location:</label>
                            <input
                                type="text"
                                id="location"
                                placeholder="City or Zip Code"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                        >
                            Find Providers or Shop
                        </button>
                    </form>
                </section>

                {/* Results Section */}
                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">Available Providers or Items</h2>
                    <ul className="space-y-4">
                        {providers.map((provider, index) => (
                            <li key={index} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center">
                                <span>{provider.name} ({provider.location})</span>
                                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Contact</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-5 mt-10">
                <p>&copy; 2024 Service Finder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ServicesPage;
