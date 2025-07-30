/**
 * Menu page component displaying all bakery items with categories
 * Features bento cakes, frosted cakes, cupcakes, cookies, tea cakes, and specials
 */

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ShoppingCart,
  ArrowLeft,
  Heart,
  Cake,
  Star,
  Phone,
  Instagram,
  ExternalLink
} from 'lucide-react'
import { Link, useNavigate } from 'react-router'

export default function Menu() {
  const navigate = useNavigate()
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToOrder = () => {
    // Navigate to home page and then scroll to order section
    navigate('/')
    setTimeout(() => {
      const orderSection = document.getElementById('order');
      if (orderSection) {
        const rect = orderSection.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const [activeTab, setActiveTab] = React.useState('bento-cakes');
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
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Home</Link>
              <Link to="/menu" className="text-[#B86B6B] font-bold">Menu</Link>
              <Link to="/" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Order</Link>
              <Link to="/contact" className="text-red-700 hover:text-[#B86B6B] transition-colors font-medium">Contact</Link>
            </div>
            <Button className="bg-[#B86B6B] hover:bg-red-200 text-white rounded-full px-6" onClick={scrollToOrder}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Back to Home Link */}
      <div className="pt-24 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-[#B86B6B] hover:text-red-200 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Menu Header */}
      <section id="menu" className="py-0 px-4" style={{ background: 'linear-gradient(135deg, #FFF6FA 0%, #FDE8EF 50%, #F9E9F0 100%)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#B86B6B] mb-4">Our Delicious Menu</h2>
            <p className="text-xl text-[#B86B6B] max-w-2xl mx-auto">
              Explore our handcrafted collection of cakes, cupcakes, and specialty treats
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation Container */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 p-1 mb-12">
              <TabsList className="w-full bg-transparent p-auto h-auto">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 w-full">
                  {/* Row 1: Bento Cakes and Frosted Cakes */}
                  <TabsTrigger 
                    value="bento-cakes" 
                    className="text-[#B86B6B] data-[state=active]:bg-[#B86B6B] data-[state=active]:text-white bg-pink-50 hover:bg-pink-100 data-[state=active]:hover:bg-[#B86B6B] rounded-xl px-3 py-4 text-sm font-medium transition-all duration-200 min-h-[60px] flex items-center justify-center border border-pink-200 data-[state=active]:border-[#B86B6B]"
                  >
                    <span className="text-center leading-tight">Bento<br className="lg:hidden" /> Cakes</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="frosted-cakes" 
                    className="text-[#B86B6B] data-[state=active]:bg-[#B86B6B] data-[state=active]:text-white bg-pink-50 hover:bg-pink-100 data-[state=active]:hover:bg-[#B86B6B] rounded-xl px-3 py-4 text-sm font-medium transition-all duration-200 min-h-[60px] flex items-center justify-center border border-pink-200 data-[state=active]:border-[#B86B6B]"
                  >
                    <span className="text-center leading-tight">Frosted<br className="lg:hidden" /> Cakes</span>
                  </TabsTrigger>
                  
                  {/* Row 2: Cupcakes and Cookies & Tea Cakes */}
                  <TabsTrigger 
                    value="cupcakes" 
                    className="text-[#B86B6B] data-[state=active]:bg-[#B86B6B] data-[state=active]:text-white bg-pink-50 hover:bg-pink-100 data-[state=active]:hover:bg-[#B86B6B] rounded-xl px-3 py-4 text-sm font-medium transition-all duration-200 min-h-[60px] flex items-center justify-center border border-pink-200 data-[state=active]:border-[#B86B6B]"
                  >
                    Cupcakes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cookies-tea-cakes" 
                    className="text-[#B86B6B] data-[state=active]:bg-[#B86B6B] data-[state=active]:text-white bg-pink-50 hover:bg-pink-100 data-[state=active]:hover:bg-[#B86B6B] rounded-xl px-3 py-4 text-sm font-medium transition-all duration-200 min-h-[60px] flex items-center justify-center border border-pink-200 data-[state=active]:border-[#B86B6B]"
                  >
                    <span className="text-center leading-tight">Cookies &<br className="lg:hidden" /> Tea Cakes</span>
                  </TabsTrigger>
                  
                  {/* Row 3: Delhice Specials - spans full width on mobile */}
                  <TabsTrigger 
                    value="delhice-specials" 
                    className="text-[#B86B6B] data-[state=active]:bg-[#B86B6B] data-[state=active]:text-white bg-pink-50 hover:bg-pink-100 data-[state=active]:hover:bg-[#B86B6B] rounded-xl px-3 py-4 text-sm font-medium transition-all duration-200 col-span-2 lg:col-span-1 min-h-[60px] flex items-center justify-center border border-pink-200 data-[state=active]:border-[#B86B6B]"
                  >
                    <span className="text-center leading-tight">Delhice<br className="lg:hidden" /> Specials</span>
                  </TabsTrigger>
                </div>
              </TabsList>
            </div>

            <TabsContent value="bento-cakes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Bento Cakes (Chocolate Based)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">350g - ₹750</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Belgian Chocolate</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Salted Caramel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Mocha</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Orange</span>
                      </div>
                    </div>
                    <img src="resourcelib/bento.png" alt="Chocolate bento cakes" className="w-full h-72 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Bento Cakes (Non-Chocolate)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">350g - ₹700</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Classic Vanilla</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Good Old Pineapple</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Lotus Biscoff</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Loaded Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[#B86B6B] italic">Other flavors available on demand</span>
                      </div>
                    </div>
                    <img src="resourcelib/bento-cake.jpg" alt="Non-chocolate bento cakes" className="w-full h-72 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="frosted-cakes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Frosted Cakes (Chocolate Based)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">500g - ₹990 | 1000g - ₹1900</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Belgian Chocolate</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Salted Caramel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Mocha</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Orange</span>
                      </div>
                    </div>
                    <img src="https://raw.githubusercontent.com/harman99deep/delhice-wp-2/refs/heads/main/src/resourcelib/Cake-slice-choco.jpg" alt="Chocolate frosted cakes" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Frosted Cakes (Non-Chocolate)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">500g - ₹890 | 1000g - ₹1700</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Classic Vanilla</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Good Old Pineapple</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Lotus Biscoff</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Loaded Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[#B86B6B] italic">Other flavors available on demand</span>
                      </div>
                    </div>
                    <img src="resourcelib/frosted-cake.png" alt="Non-chocolate frosted cakes" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cupcakes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Cupcakes (Chocolate Based)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">Pack of 6 - ₹900</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Belgian Chocolate</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Salted Caramel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Mocha</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Orange</span>
                      </div>
                    </div>
                    <img src="resourcelib/cupcakes-choco.jpg" alt="Chocolate cupcakes" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Cupcakes (Non-Chocolate)</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">Pack of 6 - ₹750</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Classic Vanilla</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Good Old Pineapple</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Lotus Biscoff</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Loaded Berry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[#B86B6B] italic">Other flavors available on demand</span>
                      </div>
                    </div>
                    <img src="resourcelib/vanilla-cupcake.png" alt="Non-chocolate cupcakes" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cookies-tea-cakes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Cookies</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">Pack of 6 - ₹350</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Chunk</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Peanut Butter</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Butter</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Oatmeal</span>
                      </div>
                    </div>
                    <img src="resourcelib/choco-cookies.jpg" alt="Cookies variety" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-[#B86B6B]">Tea Cakes</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">350g - ₹450</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Banana Bread</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Marble</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Choco-Chunk</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#B86B6B] rounded-full"></div>
                        <span className="text-[#B86B6B]">Lemon Drizzle</span>
                      </div>
                    </div>
                    <img src="resourcelib/marble-loaf.jpg" alt="Tea cakes variety" className="w-full h-48 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="delhice-specials" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[#B86B6B]">Burnt Basque Cheesecake</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">600g - ₹1100</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="resourcelib/basque-cheesecake.png" alt="Burnt Basque Cheesecake" className="w-full h-48 object-cover rounded-lg" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[#B86B6B]">Eclairs</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">Pack of 4 - ₹800</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="resourcelib/eclairs-choco.jpg" alt="Eclairs" className="w-full h-48 object-cover rounded-lg" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[#B86B6B]">Fudgy Chocolate Brownies</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">450g - ₹1200</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="resourcelib/brownies.png" alt="Fudgy Chocolate Brownies" className="w-full h-48 object-cover rounded-lg" />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-[#B86B6B]">Tiramisu</CardTitle>
                    <CardDescription className="text-[#B86B6B] font-medium">500g - ₹1150</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="resourcelib/tiramisu.jpg" alt="Tiramisu" className="w-full h-48 object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <div className="bg-pink-100 p-6 rounded-2xl inline-block">
              <div className="space-y-2">
                <p className="text-[#B86B6B] font-medium">• Baked fresh. Order 24h in advance</p>
                <p className="text-[#B86B6B] font-medium">• Customisation and delivery charges extra</p>
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
                <button onClick={scrollToOrder} className="block text-[#B86B6B] hover:text-white transition-colors">Place Order</button>
                <Link to="/contact" className="block text-[#B86B6B] hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Specialties</h4>
            <div className="space-y-2">
              <button onClick={() => { setActiveTab('bento-cakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block text-[#B86B6B] hover:text-white transition-colors">Bento Cakes</button>
              <button onClick={() => { setActiveTab('frosted-cakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block text-[#B86B6B] hover:text-white transition-colors">Frosted Cakes</button>
              <button onClick={() => { setActiveTab('cupcakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block text-[#B86B6B] hover:text-white transition-colors">Cupcakes</button>
              <button onClick={scrollToOrder} className="block text-[#B86B6B] hover:text-white transition-colors">Custom Orders</button>
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
                <Link to="/contact" className="flex items-center space-x-2 text-[#B86B6B] hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
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
