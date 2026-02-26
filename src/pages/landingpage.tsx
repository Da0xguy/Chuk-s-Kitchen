import Welcome from "../assets/Welcome.png";
import Banner from "../assets/image4.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LandingPage() {
    const categories = [
    { title: "Jollof Delights", image: "src/assets/image 9.png" },
    { title: "Swallow & Soups", image: "src/assets/image 7.png" },
    { title: "Grills & BBQ", image: "src/assets/Property 1=Variant10.png" },
    { title: "Sweet Treats", image: "src/assets/Property 1=Variant4.png" },
    { title: "Jollof Delights", image: "src/assets/Property 1=Default.png" },
    { title: "Jollof Delights", image: "src/assets/image 3.png" },
  ];

  return (
    <>
      <Navbar />
      {/* ================= HERO FULLSCREEN ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={Welcome}
          alt="Nigerian food"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-2xl">
            <h1 className="font-heading text-white text-4xl md:text-6xl font-semibold leading-tight">
              The Heart of Nigerian Home Cooking
            </h1>

            <p className="text-gray-200 mt-6 text-base md:text-lg">
              Handcrafted with passion, delivered with care.
            </p>
          <div className="py-5">
            <a href="/explore" className="mt-8 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 py-3 rounded-md text-white font-medium shadow-lg hover:scale-105">
              Discover what's new
            </a>
          </div>

            {/* Search Bar */}
            <div className="mt-10">
              <input
                type="text"
                placeholder="What are you craving for today?"
                className="w-full max-w-xl bg-white rounded-xl shadow-2xl py-4 px-6 outline-none text-gray-700 text-sm md:text-base"
              />
            </div>
          </div>

        </div>
      </section>
       {/* POPULAR CATEGORIES */}
      <section className="bg-[#F5F5F5] pt-24 pb-20">

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-center font-heading text-xl md:text-2xl font-semibold mb-12">
            Popular Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-fadeIn"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 text-center font-medium text-gray-700">
                  {category.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CHEF'S SPECIALS ================= */}
<section className="bg-[#F4F4F4] py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    <h2 className="text-center font-heading text-2xl md:text-3xl font-semibold mb-14">
      Chef's Specials
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        {
          title: "Spicy Tilapia Pepper Soup",
          price: "₦3,500",
          image: "src/assets/Property 1=Variant7.png",
          desc: "A comforting and spicy soup with tender tilapia, a true Nigerian delicacy."
        },
        {
          title: "Jollof Rice & Fried Chicken",
          price: "₦2,500",
          image: "src/assets/Property 1=Default.png",
          desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
        },
        {
          title: "Jollof Rice & Fried Chicken",
          price: "₦3,500",
          image: "src/assets/image 10.png",
          desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
        },
        {
          title: "Jollof Rice & Smoked Chicken",
          price: "₦3,500",
          image: "src/assets/image 9.png",
          desc: "Our signature Jollof rice, cooked to perfection, served with smoked chicken."
        },
        {
          title: "Jollof Rice & Fried Fish",
          price: "₦2,500",
          image: "src/assets/image 3.png",
          desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
        },
        {
          title: "Egusi Soup & Pounded Yam",
          price: "₦3,500",
          image: "src/assets/image 8.png",
          desc: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-6 flex flex-col justify-between h-[210px]">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-orange-500 font-semibold">
                {item.price}
              </span>

              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </section>
    {/* ================= PROMO SECTION ================= */}
    <section className="relative h-[400px] w-full overflow-hidden">

    <img
        src={Banner}
        alt="Menu additions"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-xl text-white">

        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Introducing Our New Menu Additions!
        </h2>

        <p className="text-gray-200 mb-6">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md transition">
            Discover what's new
        </button>

        </div>
    </div>
    </section>
      <Footer />
    </>

  );
}