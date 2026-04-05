// const ProductCard = ({product}) => {

// const number = "919967908464"

// const message =
// `Hello, I want to buy this product: ${product.name}`

// const whatsapp =
// `https://wa.me/${number}?text=${encodeURIComponent(message)}`

// const instagram =
// "https://www.instagram.com/thentgiftore"

// return (

// <div className="bg-white shadow-lg rounded-xl p-4">

// <h2 className="text-xl font-bold mb-3">
// {product.name}
// </h2>

// <div className="grid grid-cols-3 gap-2">

// {product.images.map((img,i)=>(
// <img key={i} src={img} className="rounded"/>
// ))}

// </div>

// <p className="text-gray-600 mt-3">
// {product.description}
// </p>

// <div className="flex gap-3 mt-4">

// <a
// href={whatsapp}
// target="_blank"
// className="bg-green-500 text-white px-4 py-2 rounded"
// >
// WhatsApp
// </a>

// <a
// href={instagram}
// target="_blank"
// className="bg-pink-500 text-white px-4 py-2 rounded"
// >
// Instagram
// </a>

// </div>

// </div>

// )
// }

import { useState } from "react";

const ProductCard = ({ product }) => {

  const [showImage, setShowImage] = useState(false);

  const number = "919967908464";

  const message = `
Hello, I want to buy this product:

🛍 Product: ${product.name}
💰 Price: ₹${product.price}

📸 Image: ${product.images[0]}
`;

  const whatsapp =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  const instagram =
    "https://www.instagram.com/thentgiftore";

  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-4">

        <h2 className="text-xl font-bold mb-3">
          {product.name}
        </h2>
        <p className="text-pink-600 font-semibold text-lg mb-3">
        ₹{product.price}
        </p>

        {/* CLICKABLE IMAGE */}
        <div
          onClick={() => setShowImage(true)}
          className="overflow-hidden rounded group cursor-pointer"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <div className="flex gap-3 mt-4">

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            WhatsApp
          </a>

          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            Instagram
          </a>

        </div>

      </div>

      {/* IMAGE MODAL */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowImage(false)}
        >
          <img
            src={product.images[0]}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;


