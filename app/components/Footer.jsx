import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-10 px-5 md:px-20">
      <div className=" mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Demo</h3>
          <p className="text-sm">
            Your go-to online store for the best deals and latest trends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-between items-center mt-8 border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Demo. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Damo</span>
        </div>
      </div>
    </footer>
  );
}
