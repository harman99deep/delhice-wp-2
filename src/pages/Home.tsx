/**
 * Home page component for Delhice By Sanya Singh bakery website
 * Features hero section, about, order form and footer sections
 */

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Heart,
  ShoppingCart,
  Award,
  Users,
  Cake,
  Instagram,
  ExternalLink
} from 'lucide-react'
import { Link } from 'react-router'

export default function Home() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      const rect = orderSection.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 80; // 80px offset to scroll to text tip
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FDF6FB 0%, #FDE8EF 70%, #F9E9F0 100%)' }}>
      {/* Navigation */}
      <nav className="bg-[#D4FFFA]/90 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-pink-40">
                <img
                  src="resourcelib/delhicelogo1.png"
                  alt="Delhice logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#B86B6B]">
                  <Link to="/">Delhice</Link>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#B86B6B] font-bold">Home</button>
              <Link to="/menu" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Menu</Link>
              <button onClick={scrollToOrder} className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Order</button>
              <Link to="/contact" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Contact</Link>
            </div>
            <Button className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-6" onClick={scrollToOrder}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF6FA 0%, #FDE8EF 70%, #F9E9F0 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full opacity-10 translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-[#B86B6B] hover:bg-red-100 border-red-100 text-sm px-4 py-2">
                  ✨ Freshly Baked with Love
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#B86B6B]">
                  Delhice
                  <br />
                  <span className="lg:text-5xl text-red-300">By Sanya Singh</span>
                </h1>
                <p className="text-xl text-[#B86B6B] leading-relaxed">
                  Handcrafted artisanal cakes, cupcakes, and delightful treats made with premium ingredients. 
                  Every bite tells a story of passion, tradition, and sweetness.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-8 py-6 text-lg" onClick={scrollToOrder}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Place Your Order
                </Button>
                <Link to="/menu">
                  <Button size="lg" variant="outline" className="border-red-400 text-[#B86B6B] hover:bg-red-50 rounded-full px-8 py-6 text-lg">
                    <Heart className="h-5 w-5 mr-2" />
                    View Menu
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-[#B86B6B] font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#B86B6B]" />
                  <span className="text-sm text-[#B86B6B] font-medium">1000+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="resourcelib/hampers.png" 
                  alt="Delhice bakery specialties" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-pink-100">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-[#B86B6B]" />
                  <div>
                    <p className="text-sm font-bold text-[#B86B6B]">Artisan Quality</p>
                    <p className="text-xs text-[#B86B6B]">Handcrafted Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4" style={{ background: '#FFF6FA' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#B86B6B] mb-4">Our Sweet Story</h2>
            <p className="text-xl text-[#B86B6B] max-w-3xl mx-auto">
              Welcome to Delhice By Sanya Singh - where every creation is a masterpiece of flavor, artistry, and love.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#B86B6B]">Crafted with Passion, Served with Joy</h3>
                <p className="text-sm font-medium text-[#B86B6B]">
                  At Delhice, we believe that every celebration deserves something special. From our signature bento cakes 
                  to decadent frosted cakes, each creation is handcrafted with the finest ingredients and boundless creativity.
                </p>
                <p className="text-sm font-medium text-[#B86B6B]">
                  Our specialty lies in creating personalized treats that not only taste divine but also tell your unique story. 
                  Every cake, cupcake, and pastry is made fresh and baked with love.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-[#F9E7EF] p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#B86B6B]">48h</div>
                  <div className="text-sm font-medium text-[#B86B6B]">Fresh Baking</div>
                </div>
                <div className="text-center bg-[#F9E7EF] p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#B86B6B]">100%</div>
                  <div className="text-sm font-medium text-[#B86B6B]">Custom Made</div>
                </div>
                <div className="text-center bg-[#F9E7EF] p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#B86B6B]">15+</div>
                  <div className="text-sm font-medium text-[#B86B6B]">Unique Flavors</div>
                </div>
                <div className="text-center bg-[#F9E7EF] p-4 rounded-xl">
                  <div className="text-3xl font-bold text-[#B86B6B]">1000+</div>
                  <div className="text-sm font-medium text-[#B86B6B]">Happy Customers</div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/menu">
                  <Button className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-8 py-3">
                    <Heart className="h-4 w-4 mr-2" />
                    Explore Our Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="resourcelib/bento-cake-combo.png" 
                alt="Sanya Singh creating beautiful cakes" 
                className="w-full h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#B86B6B] text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6" />
                  <span className="font-bold text-lg">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #FFF6FA 100%, #FDE8EF 50%, #F9E9F0 100%)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#B86B6B] mb-4">Place Your Order</h2>
            <p className="text-xl text-[#B86B6B] max-w-2xl mx-auto">
              Fill out the form below to place your custom order. We'll get back to you within 24 hours!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#F9E7EF]/50 border-pink-200">
              <CardHeader>
                <CardTitle className="text-2xl text-[#B86B6B] text-center">Order Form</CardTitle>
                <CardDescription className="text-center text-[#B86B6B]">
                  Complete the details below for your custom order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-[#F9E7EF] p-6 rounded-lg">
                    <h4 className="font-medium text-[#B86B6B] mb-3">What We Need From You:</h4>
                    <ul className="text-sm text-[#B86B6B] space-y-2">
                      <li>• <strong>Contact Details:</strong> Name, phone number, delivery address</li>
                      <li>• <strong>Order Specifics:</strong> Type of cake/item, flavor, size, quantity</li>
                      <li>• <strong>Delivery Date:</strong> When do you need your order</li>
                      <li>• <strong>Special Requests:</strong> Custom messages, decorations, dietary requirements</li>
                    </ul>
                  </div>

                  <div className="bg-pink-100 p-4 rounded-lg">
                    <h4 className="font-medium text-[#B86B6B] mb-2">Important Notes:</h4>
                    <ul className="text-sm text-[#B86B6B] space-y-1">
                      <li>• All orders require 48 hours advance notice</li>
                      <li>• Customization charges may apply</li>
                      <li>• Delivery charges calculated separately</li>
                      <li>• We'll contact you to confirm order details and pricing</li>
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-[#B86B6B] hover:bg-red-200 text-white py-6 text-lg rounded-xl"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfBfDYm_JGDL5P69Az3_7MhHzfpBo-zqW-nTlfGSjASFtqr1Q/viewform', '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Submit Order Form
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-[#B86B6B] mb-2">Want to see our full menu first?</p>
                    <Link to="/menu">
                      <Button variant="outline" className="border-[#B86B6B] text-[#B86B6B] hover:bg-red-50">
                        Browse Our Menu
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <Link to="/#order" onClick={scrollToOrder} className="block text-[#B86B6B] hover:text-white transition-colors">Custom Orders</Link>
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
