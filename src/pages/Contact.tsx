/**
 * Contact page component with contact information and location details
 * Features contact details, hours, and social media links
 */

import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Cake,
  Instagram,
  ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router'

export default function Contact() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FDF6FB 0%, #FDE8EF 70%, #F9E9F0 100%)' }}>
      {/* Navigation */}
      <nav className="bg-[#D4FFFA]/90 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-pink-40">
                <img
                  src="https://ugc.production.linktr.ee/Ah7Bu3bQGygqwhQ9YNSz_IMG_8534.PNG?io=true&size=avatar-v3_0"
                  alt="Delhice logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#B86B6B]">
                <Link to="/">Delhice</Link>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Home</Link>
              <Link to="/menu" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Menu</Link>
              <Link to="/#order" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Order</Link>
              <Link to="/contact" className="text-[#B86B6B] font-bold">Contact</Link>
            </div>
            <Button 
              className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-6"
              onClick={() => window.open('tel:+919717295102')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Back to Home Link */}
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-[#B86B6B] hover:text-red-200 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <section className="pb-16 px-4" style={{ background: 'linear-gradient(135deg, #FDF6FB 0%, #FDE8EF 70%, #F9E9F0 100%)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#B86B6B] mb-4">Get In Touch</h2>
            <p className="text-xl text-[#B86B6B] max-w-2xl mx-auto">
              Have questions or want to discuss your order? We're here to help make your celebration perfect!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#B86B6B]" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-[#B86B6B]">+91 9717295102</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#B86B6B]" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-[#B86B6B]">treats@delhice.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#B86B6B]" />
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <div className="text-[#B86B6B] space-y-1">
                      <p>Suncity Arcade, Sec-54, Gurugram, Haryana</p>
                      <p>Find us on Google:&nbsp;
                        <a href="https://maps.app.goo.gl/CdWDtiYD184sEiwJ9"
                          className="text-[#DB5E60] underline hover:text-pink-200 transition-colors">Maps</a> </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-[#B86B6B]" />
                  <div>
                    <h3 className="font-semibold text-lg">Order Hours</h3>
                    <div className="text-[#B86B6B] space-y-1">
                      <p>Monday - Sunday: 11:00 AM - 6:00 PM</p>
                      <p>Order 24h in advance</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="h-6 w-6 text-[#B86B6B]" />
                  <div>
                    <h3 className="font-semibold text-lg">Follow Us</h3>
                    <a 
                      href="https://www.instagram.com/delhicebysanyasingh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#B86B6B] hover:text-pink-200 transition-colors"
                    >
                      @delhicebysanyasingh
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-6"
                  onClick={() => window.open('tel:+919717295102')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#B86B6B] text-[#B86B6B] hover:bg-red-50 bg-transparent"
                  onClick={() => window.open('mailto:treats@delhice.com')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 space-y-6 border border-pink-100">
                <h3 className="text-2xl font-bold text-[#B86B6B]">Why Choose Delhice?</h3>
                <div className="space-y-4">
                  <div className="bg-[#F9E7EF] rounded-2xl p-4">
                    <h4 className="font-semibold text-[#B86B6B]">Fresh & Custom</h4>
                    <p className="text-sm text-[#B86B6B]">Every cake is made fresh to order</p>
                  </div>
                  <div className="bg-[#F9E7EF] rounded-2xl p-4">
                    <h4 className="font-semibold text-[#B86B6B]">Premium Quality</h4>
                    <p className="text-sm text-[#B86B6B]">Only the finest ingredients used</p>
                  </div>
                  <div className="bg-[#F9E7EF] rounded-2xl p-4">
                    <h4 className="font-semibold text-[#B86B6B]">Personal Touch</h4>
                    <p className="text-sm text-[#B86B6B]">Each creation tells your unique story</p>
                  </div>
                  <div className="bg-[#F9E7EF] rounded-2xl p-4">
                    <h4 className="font-semibold text-[#B86B6B]">Fresh Guaranteed</h4>
                    <p className="text-sm text-[#B86B6B]">Baked fresh just before delivery</p>
                  </div>
                  <div className="bg-[#F9E7EF] rounded-2xl p-4">
                    <h4 className="font-semibold text-[#B86B6B]">Custom Designs</h4>
                    <p className="text-sm text-[#B86B6B]">Personalized decorations and messages</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/menu">
                    <Button className="w-full bg-[#B86B6B] hover:bg-red-200 text-white">
                      View Our Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#BEEEE9] text-[#B86B6B] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#B86B6B] rounded-full flex items-center justify-center">
                  <Cake className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Delhice By Sanya Singh</span>
              </div>
              <p className="text-[#B86B6B]">
                Handcrafted with love, served with joy. Making your celebrations sweeter since day one.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-[#B86B6B] hover:text-white transition-colors">Home</Link>
                <Link to="/menu" className="block text-[#B86B6B] hover:text-white transition-colors">Menu</Link>
                <Link to="/#order" className="block text-[#B86B6B] hover:text-white transition-colors">Place Order</Link>
                <Link to="/contact" className="block text-[#B86B6B] hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Specialties</h4>
              <div className="space-y-2">
                <Link to="/menu#bento-cakes" className="block text-[#B86B6B] hover:text-white transition-colors">Bento Cakes</Link>
                <Link to="/menu#frosted-cakes" className="block text-[#B86B6B] hover:text-white transition-colors">Frosted Cakes</Link>
                <Link to="/menu#cupcakes" className="block text-[#B86B6B] hover:text-white transition-colors">Cupcakes</Link>
                <Link to="/#order" className="block text-[#B86B6B] hover:text-white transition-colors">Custom Orders</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect With Us</h4>
              <div className="space-y-3">
                <p className="text-[#B86B6B]">Follow us for daily updates and sweet treats!</p>
                <a 
                  href="https://www.instagram.com/delhicebysanyasingh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#B86B6B] hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Our Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-700 mt-8 pt-8 text-center">
            <p className="text-[#B86B6B]">© 2024 Delhice By Sanya Singh. All rights reserved. Made with ❤️ for sweet celebrations.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
