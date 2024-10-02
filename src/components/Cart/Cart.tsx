import React, { useState } from 'react';

const CartPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 5250;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  return (
    <section className=" bg-[#222]   flext items-center justify-center ">
      
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pt-[100px]">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full text-left">
            <thead className="bg-[#1b1b1b] text-white">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>
            <hr className='w-full' />
            <tbody>
              <tr className="bg-[#1b1b1b]">
                <td className="p-4">
                  <img
                    src="https://yourimageurl.com/lamborghini.jpg"
                    alt="Lamborghini Urus"
                    className="w-20 h-auto rounded"
                  />
                </td>
                <td className="p-4">
                  <p className="text-lg text-white font-semibold">Lamborghini Urus</p>
                  <p className="text-sm text-gray-400">Pick Up Location: Dubai</p>
                  <p className="text-sm text-gray-400">Drop Off Location: Dubai</p>
                  <p className="text-sm text-gray-400">Pick Up Date: September 21, 2024</p>
                  <p className="text-sm text-gray-400">Return Date: September 27, 2024</p>
                </td>
                <td className="p-4 text-white">${price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center bg-gray-700 text-white p-1 rounded"
                  />
                </td>
                <td className="p-4">${price * quantity}</td>
              </tr>
            </tbody>
          </table>

          {/* Coupon and Update Cart Section */}
          <div className="flex flex-wrap items-center justify-between mt-6 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="p-2 bg-[#1b1b1b] text-white rounded focus:outline-none focus:ring focus:ring-orange-500"
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-orange-600">
                Apply coupon
              </button>
            </div>
            <button className="bg-[#1b1b1b] text-white px-4 py-2 rounded hover:bg-gray-700">
              Update cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#1b1b1b] p-6 rounded-lg">
          <h2 className="text-lg text-white font-semibold mb-4">Cart totals</h2>
          <div className="space-y-4">
            <div className="flex text-white justify-between">
              <p>Subtotal:</p>
              <p>${price * quantity}</p>
            </div>
            <div className="flex text-white justify-between">
              <p>Total:</p>
              <p className="font-bold">${price * quantity}</p>
            </div>
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
