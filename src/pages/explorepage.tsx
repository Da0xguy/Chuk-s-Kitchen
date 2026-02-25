import { FC, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface Product {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
  category: string;
}

const Explore: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Popular");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: string[] = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & Sides",
    "Beverages",
    "Desserts",
  ];

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      desc: "Our signature jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: "src/assets/image 9.png",
      category: "Jollof Rice & Entrees",
    },
    {
      id: 2,
      name: "Jollof Rice & Smoked Fish",
      desc: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "₦3,500",
      image: "src/assets/image 3.png",
      category: "Jollof Rice & Entrees",
    },
    {
      id: 5,
      name: "Eba & Egusi Soup (Goat Meat)",
      desc: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "₦3,700",
      image: "src/assets/image 8.png",
      category: "Swallow & Soups",
    },
    {
      id: 10,
      name: "Peppered Snail",
      desc: "Spicy and savory peppered snail, perfect as a starter.",
      price: "₦2,000",
      image: "src/assets/image 5.png",
      category: "Grills & Sides",
    },
  ];

  const filteredProducts =
    activeCategory === "Popular"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">

        {/* HERO */}
        <div
          className="h-[280px] bg-cover bg-center relative flex items-end p-8 text-white"
          style={{
            backgroundImage:
              "src/assets/image4.png",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold">Chuks Kitchen</h1>
            <p className="mt-2 text-sm">
              Nigerian Home Cooking · 4.8 (1.2k)
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex gap-6 p-8 max-w-6xl mx-auto flex-wrap">

          {/* SIDEBAR */}
          <div className="flex-1 min-w-[250px] bg-white p-5 rounded-lg h-fit">
            <h3 className="mb-4 font-semibold">Menu Categories</h3>
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-2 mb-2 rounded cursor-pointer ${
                  activeCategory === category
                    ? "bg-orange-200 font-semibold"
                    : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          {/* PRODUCTS */}
          <div className="flex-[3] min-w-[300px]">
            <h2 className="text-2xl font-semibold mb-6">
              {activeCategory}
            </h2>

            <div className="grid grid-row-auto-fill gap-5">
              {filteredProducts.map((product) => ( 
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-white rounded-lg shadow hover:scale-105 transition cursor-pointer overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h4 className="font-semibold mb-2">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {product.desc}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold">
                        {product.price}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="bg-orange-600 text-white w-8 h-8 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL */}
        {selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white w-[1000px] max-w-[95%] h-[650px] rounded-lg overflow-hidden flex relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 px-2 rounded text-sm z-10"
      >
        ✕
      </button>

      {/* LEFT IMAGE */}
      <div className="w-1/2 h-full">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 h-full flex flex-col">

        {/* SCROLLABLE SECTION */}
        <div className="p-6 overflow-y-auto flex-1">

          <h2 className="text-xl font-semibold">
            {selectedProduct.name}
          </h2>

          <p className="text-orange-600 font-bold mt-2 text-lg">
            {selectedProduct.price}
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            {selectedProduct.desc}
          </p>

          {/* BADGES */}
          <div className="flex gap-3 mt-4 text-xs text-gray-500">
            <span> 30min</span>
            <span> Vegetarian options available</span>
            <span> View Allergens</span>
          </div>

          {/* PROTEIN OPTIONS */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-sm">
              Choose Your Protein
            </h3>

            <div className="space-y-3">

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protein" defaultChecked className="accent-orange-600" />
                  <span>Fried Chicken</span>
                </div>
                <span className="text-xs text-gray-500">(Default)</span>
              </label>

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protein" className="accent-orange-600" />
                  <span>Grilled Fish</span>
                </div>
                <span className="text-sm text-gray-600">+₦500</span>
              </label>

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protein" className="accent-orange-600" />
                  <span>Beef</span>
                </div>
                <span className="text-sm text-gray-600">+₦700</span>
              </label>

            </div>
          </div>

          {/* EXTRA SIDES */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-sm">
              Extra Sides (Optional)
            </h3>

            <div className="space-y-3">

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="accent-orange-600" />
                  <span>Fried Plantain</span>
                </div>
                <span className="text-sm text-gray-600">+₦700</span>
              </label>

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="accent-orange-600" />
                  <span>Coleslaw</span>
                </div>
                <span className="text-sm text-gray-600">+₦500</span>
              </label>

              <label className="flex justify-between items-center border p-3 rounded cursor-pointer hover:border-orange-500">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="accent-orange-600" />
                  <span>Extra Pepper Sauce</span>
                </div>
                <span className="text-sm text-gray-600">+₦300</span>
              </label>

            </div>
          </div>

          {/* SPECIAL INSTRUCTIONS */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-sm">
              Special Instructions
            </h3>

            <textarea
              className="w-full border rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={4}
              placeholder="E.g. no onions, extra spicy..."
            />
          </div>

        </div>

        {/* STICKY ADD TO CART */}
        <div className="p-6 border-t">
          <button className="w-full bg-orange-600 text-white py-3 rounded font-semibold hover:bg-orange-700 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  </div>
)}      

      </div>

      <Footer />
    </>
  );
};

export default Explore;