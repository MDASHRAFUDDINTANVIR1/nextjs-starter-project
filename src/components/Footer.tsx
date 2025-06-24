export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">Question Ace</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted platform for academic success and knowledge sharing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/questions" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Questions Hub
                </a>
              </li>
              <li>
                <a href="/equations" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Equations
                </a>
              </li>
              <li>
                <a href="/premium" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Premium Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/help" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Question Ace. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
