
export default function Footer() {
    return (
         <footer className="bg-[#4A2C1D] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
        <h3 className="font-heading text-xl mb-4 text-orange-400">
            Chuks Kitchen
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your table,
            with passion and care.
        </p>
        </div>

        {/* Quick Links */}
        <div>
        <h4 className="font-heading mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Explore</li>
            <li>My Orders</li>
            <li>Account</li>
            <li>Contact</li>
        </ul>
        </div>

        {/* Contact */}
        <div>
        <h4 className="font-heading mb-4">Contact Us</h4>
        <ul className="space-y-2 text-sm text-gray-300">
            <li>+234 912 345 6789</li>
            <li>123 Food Street, Lagos</li>
            <li>info@chukskitchen.com</li>
        </ul>
        </div>

        {/* Social */}
        <div>
        <h4 className="font-heading mb-4">Follow Us</h4>
        <ul className="space-y-2 text-sm text-gray-300">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
        </div>

    </div>

    <div className="mt-12 text-center text-sm text-gray-400">
        © 2025 Chuks Kitchen. All rights reserved.
    </div>
    </footer>
    );
}