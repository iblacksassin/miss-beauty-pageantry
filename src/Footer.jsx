import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-500 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <span className="text-gray-900 text-xl font-bold tracking-wide">Miss Beauty Pageant</span>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
                This contest's aim is for the Empowerment & Growth of women through professional networking, 
                mentorship opportunities, and personal confidence-building as core takeaways from their pageant experience.
                Most major international and national pageants require delegates to champion a specific philanthropic cause or 
                social initiative, using their reign to drive awareness and community impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Contestants</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Votes</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Twitter / X</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-[coral] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; Miss Beauty Pageant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
