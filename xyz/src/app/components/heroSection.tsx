import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-6 bg-blue-500 text-white rounded-lg">
          <img src="NissanGT-R.png" alt="Logo" className="w-70 mb-10" />
          <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental</h2>
          <p className="mb-4">Find the best deals on car rentals near you.</p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">Learn More</button>
        </div>
        <div className="p-6 bg-blue-700 text-white rounded-lg">
          <img src="Rolls-Royce.png" alt="Logo" className="w-90 mb-10" />
          <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at low price</h2>
          <p className="mb-4">Simple, fast, and convenient car rentals.</p>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg">Learn More</button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
        <div className="space-x-4">
          <button className="text-blue-600 border-b-2 border-blue-600">Popular Cars</button>
          <button className="text-blue-600 font-semibold hover:underline">View All</button>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Filters</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition">
            <img
              src={ index === 0 ? `Koenigsegg.png` : 
                index === 1 ? `NissanGT-R.png` : 
                index === 2 ? `Rolls-Royce.png` : 
                index === 3 ? `NissanGTR.png` 
                : `Koenigsegg.png` }
              alt="Car"
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Rolls Royce</h3>
            <p className="text-gray-500 text-sm mb-2">Automatic | 4 seats</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$80/day</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Rent</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Show More</button>
      </div>
    </div>
  );
};

export default HeroSection;
