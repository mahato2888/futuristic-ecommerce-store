// script.js - Complete E-Commerce Store with 200+ Products and Payment Gateway

// Array of 200 products with all details
const products = [
    // ELECTRONICS - Headphones & Audio (20 products)
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 2999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        gallery: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"],
        description: "Premium wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Gaming Headset RGB",
        price: 3499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
        gallery: ["https://images.unsplash.com/photo-1599669454699-248893623440?w=500"],
        description: "RGB gaming headset with 7.1 surround sound"
    },
    {
        id: 3,
        name: "True Wireless Earbuds",
        price: 1999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        gallery: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"],
        description: "Compact earbuds with charging case"
    },
    {
        id: 4,
        name: "Studio Monitor Headphones",
        price: 5999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
        gallery: ["https://images.unsplash.com/photo-1545127398-14699f92334b?w=500"],
        description: "Professional studio monitoring headphones"
    },
    {
        id: 5,
        name: "Sports Wireless Earphones",
        price: 1499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
        gallery: ["https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"],
        description: "Sweatproof earphones for workouts"
    },
    {
        id: 6,
        name: "Over-Ear Bass Headphones",
        price: 2499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
        gallery: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"],
        description: "Deep bass over-ear headphones"
    },
    {
        id: 7,
        name: "Neckband Bluetooth Earphones",
        price: 1299,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1577174881658-0f30157f72ea?w=500",
        gallery: ["https://images.unsplash.com/photo-1577174881658-0f30157f72ea?w=500"],
        description: "Flexible neckband style earphones"
    },
    {
        id: 8,
        name: "Kids Safe Volume Headphones",
        price: 999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=500",
        gallery: ["https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=500"],
        description: "Volume-limited headphones for children"
    },
    {
        id: 9,
        name: "Audiophile Wired Headphones",
        price: 7999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=500",
        gallery: ["https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=500"],
        description: "High-fidelity wired headphones"
    },
    {
        id: 10,
        name: "Portable Bluetooth Speaker",
        price: 1799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        gallery: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"],
        description: "Waterproof portable speaker"
    },
    {
        id: 11,
        name: "Smart Speaker with Alexa",
        price: 4999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500",
        gallery: ["https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500"],
        description: "Voice-controlled smart speaker"
    },
    {
        id: 12,
        name: "Soundbar for TV",
        price: 8999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        gallery: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"],
        description: "Surround sound soundbar system"
    },
    {
        id: 13,
        name: "Vintage Record Player",
        price: 6499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=500",
        gallery: ["https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=500"],
        description: "Retro vinyl record player"
    },
    {
        id: 14,
        name: "USB Microphone",
        price: 3999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
        gallery: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"],
        description: "Professional USB podcast microphone"
    },
    {
        id: 15,
        name: "Karaoke Microphone",
        price: 1199,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500",
        gallery: ["https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500"],
        description: "Wireless karaoke microphone with speaker"
    },
    {
        id: 16,
        name: "DJ Mixer Console",
        price: 15999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500",
        gallery: ["https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500"],
        description: "Professional DJ mixing console"
    },
    {
        id: 17,
        name: "Home Theater System",
        price: 24999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        gallery: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
        description: "5.1 channel home theater system"
    },
    {
        id: 18,
        name: "Guitar Amplifier",
        price: 7499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500",
        gallery: ["https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500"],
        description: "Electric guitar amplifier 50W"
    },
    {
        id: 19,
        name: "Car Bluetooth Adapter",
        price: 799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500",
        gallery: ["https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500"],
        description: "Bluetooth audio adapter for car"
    },
    {
        id: 20,
        name: "Noise Cancelling Earbuds Pro",
        price: 8999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
        gallery: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500"],
        description: "Premium ANC earbuds with wireless charging"
    },

    // ELECTRONICS - Watches & Wearables (20 products)
    {
        id: 21,
        name: "Smart Watch Fitness Tracker",
        price: 4999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        gallery: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"],
        description: "Feature-rich smartwatch with heart rate monitor"
    },
    {
        id: 22,
        name: "Sports Fitness Band",
        price: 2499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
        gallery: ["https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500"],
        description: "Waterproof fitness tracking band"
    },
    {
        id: 23,
        name: "Luxury Smart Watch Gold",
        price: 12999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
        gallery: ["https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500"],
        description: "Premium gold-plated smartwatch"
    },
    {
        id: 24,
        name: "Kids Smart Watch GPS",
        price: 3499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500",
        gallery: ["https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500"],
        description: "GPS tracker watch for kids with SOS"
    },
    {
        id: 25,
        name: "Analog Digital Hybrid Watch",
        price: 5999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
        gallery: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"],
        description: "Hybrid watch with smart features"
    },
    {
        id: 26,
        name: "Running Watch with GPS",
        price: 6999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
        gallery: ["https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"],
        description: "GPS running watch with route tracking"
    },
    {
        id: 27,
        name: "Diving Smart Watch 100M",
        price: 8999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500",
        gallery: ["https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500"],
        description: "Waterproof diving smartwatch 100M depth"
    },
    {
        id: 28,
        name: "Women's Fashion Smart Watch",
        price: 4499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=500",
        gallery: ["https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=500"],
        description: "Elegant smartwatch for women"
    },
    {
        id: 29,
        name: "Outdoor Adventure Watch",
        price: 7499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500",
        gallery: ["https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500"],
        description: "Rugged outdoor watch with altimeter"
    },
    {
        id: 30,
        name: "Blood Pressure Monitor Watch",
        price: 5499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1611867967458-3190fad96e17?w=500",
        gallery: ["https://images.unsplash.com/photo-1611867967458-3190fad96e17?w=500"],
        description: "Health monitoring watch with BP sensor"
    },
    {
        id: 31,
        name: "Classic Chronograph Watch",
        price: 3999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=500",
        gallery: ["https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=500"],
        description: "Traditional chronograph design"
    },
    {
        id: 32,
        name: "Solar Powered Smart Watch",
        price: 9999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1579184020296-daaaa2f0e751?w=500",
        gallery: ["https://images.unsplash.com/photo-1579184020296-daaaa2f0e751?w=500"],
        description: "Eco-friendly solar charging watch"
    },
    {
        id: 33,
        name: "Minimalist Smart Watch",
        price: 3799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500",
        gallery: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500"],
        description: "Simple elegant minimalist design"
    },
    {
        id: 34,
        name: "Skeleton Mechanical Watch",
        price: 11999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
        gallery: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500"],
        description: "Automatic mechanical skeleton watch"
    },
    {
        id: 35,
        name: "Pilot Aviation Watch",
        price: 8499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1606390097149-92d80cbc8b0d?w=500",
        gallery: ["https://images.unsplash.com/photo-1606390097149-92d80cbc8b0d?w=500"],
        description: "Aviation-style pilot watch"
    },
    {
        id: 36,
        name: "Touchscreen Smart Watch AMOLED",
        price: 6799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
        gallery: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500"],
        description: "AMOLED display smartwatch with always-on"
    },
    {
        id: 37,
        name: "Military Tactical Watch",
        price: 4999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1616084541375-dbc3f5d6b0f1?w=500",
        gallery: ["https://images.unsplash.com/photo-1616084541375-dbc3f5d6b0f1?w=500"],
        description: "Tactical military-grade watch"
    },
    {
        id: 38,
        name: "Vintage Leather Strap Watch",
        price: 2999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=500",
        gallery: ["https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=500"],
        description: "Vintage style leather strap watch"
    },
    {
        id: 39,
        name: "Stainless Steel Sport Watch",
        price: 5799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587836374228-4c5c9f8dd28f?w=500",
        gallery: ["https://images.unsplash.com/photo-1587836374228-4c5c9f8dd28f?w=500"],
        description: "Durable stainless steel sports watch"
    },
    {
        id: 40,
        name: "Designer Luxury Watch",
        price: 19999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1596651253637-4c8e8d48ba95?w=500",
        gallery: ["https://images.unsplash.com/photo-1596651253637-4c8e8d48ba95?w=500"],
        description: "Designer luxury timepiece with sapphire crystal"
    },

    // ELECTRONICS - Mobile & Tech (20 products)
    {
        id: 41,
        name: "Smartphone 5G 128GB",
        price: 24999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        gallery: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"],
        description: "5G smartphone with triple camera"
    },
    {
        id: 42,
        name: "Wireless Charging Pad",
        price: 899,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1591290227814-7a8dc4ff4b42?w=500",
        gallery: ["https://images.unsplash.com/photo-1591290227814-7a8dc4ff4b42?w=500"],
        description: "10W wireless charging pad Qi-certified"
    },
    {
        id: 43,
        name: "Power Bank 20000mAh",
        price: 1799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1609592885821-69ae4c3b8b8f?w=500",
        gallery: ["https://images.unsplash.com/photo-1609592885821-69ae4c3b8b8f?w=500"],
        description: "High-capacity portable power bank"
    },
    {
        id: 44,
        name: "Phone Case Shockproof",
        price: 499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
        gallery: ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500"],
        description: "Military-grade drop protection case"
    },
    {
        id: 45,
        name: "Fast Charger 65W",
        price: 1299,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1591290619762-c588f7e85a7c?w=500",
        gallery: ["https://images.unsplash.com/photo-1591290619762-c588f7e85a7c?w=500"],
        description: "65W GaN fast charger with USB-C"
    },
    {
        id: 46,
        name: "Tablet 10 inch Android",
        price: 14999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        gallery: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"],
        description: "10-inch Android tablet with stylus"
    },
    {
        id: 47,
        name: "E-Reader Kindle Style",
        price: 9999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
        gallery: ["https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500"],
        description: "E-ink e-reader with backlight"
    },
    {
        id: 48,
        name: "USB-C Hub 7-in-1",
        price: 1999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
        gallery: ["https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500"],
        description: "Multi-port USB-C adapter hub"
    },
    {
        id: 49,
        name: "Wireless Mouse Ergonomic",
        price: 999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        gallery: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"],
        description: "Ergonomic wireless computer mouse"
    },
    {
        id: 50,
        name: "Mechanical Keyboard RGB",
        price: 4999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        gallery: ["https://images.unsplash.com/photo-1595225476474-87563907a212?w=500"],
        description: "RGB mechanical gaming keyboard"
    },
    {
        id: 51,
        name: "Webcam HD 1080p",
        price: 3499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
        gallery: ["https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"],
        description: "Full HD webcam for streaming"
    },
    {
        id: 52,
        name: "External SSD 1TB",
        price: 7999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
        gallery: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500"],
        description: "Portable 1TB SSD high-speed storage"
    },
    {
        id: 53,
        name: "Memory Card 256GB",
        price: 2499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=500",
        gallery: ["https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=500"],
        description: "256GB microSD card high-speed"
    },
    {
        id: 54,
        name: "USB Flash Drive 128GB",
        price: 999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500",
        gallery: ["https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500"],
        description: "128GB USB 3.0 flash drive"
    },
    {
        id: 55,
        name: "Laptop Stand Aluminum",
        price: 1499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        gallery: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500"],
        description: "Adjustable aluminum laptop stand"
    },
    {
        id: 56,
        name: "Monitor 24 inch Full HD",
        price: 9999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        gallery: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"],
        description: "24-inch Full HD LED monitor"
    },
    {
        id: 57,
        name: "Graphics Tablet Drawing Pad",
        price: 5999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcf?w=500",
        gallery: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcf?w=500"],
        description: "Digital drawing tablet with stylus"
    },
    {
        id: 58,
        name: "Bluetooth Keyboard Portable",
        price: 1799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        gallery: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"],
        description: "Compact wireless Bluetooth keyboard"
    },
    {
        id: 59,
        name: "Mouse Pad RGB Large",
        price: 799,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
        gallery: ["https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500"],
        description: "XXL RGB gaming mouse pad"
    },
    {
        id: 60,
        name: "Cable Organizer Set",
        price: 499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        gallery: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
        description: "Cable management organizer clips"
    },

    // FASHION - Shoes (40 products)
    {
        id: 61,
        name: "Running Shoes Men",
        price: 3999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        description: "Comfortable running shoes for daily workouts"
    },
    {
        id: 62,
        name: "Women's Sneakers White",
        price: 2999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
        gallery: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"],
        description: "Classic white sneakers for women"
    },
    {
        id: 63,
        name: "High-Top Basketball Shoes",
        price: 5999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500",
        gallery: ["https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500"],
        description: "Professional basketball shoes with ankle support"
    },
    {
        id: 64,
        name: "Canvas Casual Shoes",
        price: 1499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        gallery: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"],
        description: "Lightweight canvas casual footwear"
    },
    {
        id: 65,
        name: "Leather Formal Shoes",
        price: 4499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500",
        gallery: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500"],
        description: "Premium leather formal oxford shoes"
    },
    {
        id: 66,
        name: "Slip-On Loafers",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1631545806608-4b7c3c7c4e7e?w=500",
        gallery: ["https://images.unsplash.com/photo-1631545806608-4b7c3c7c4e7e?w=500"],
        description: "Comfortable slip-on loafers"
    },
    {
        id: 67,
        name: "Hiking Boots Waterproof",
        price: 6999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
        gallery: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500"],
        description: "Waterproof hiking boots for trails"
    },
    {
        id: 68,
        name: "Sandals Summer Beach",
        price: 999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
        gallery: ["https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500"],
        description: "Comfortable summer beach sandals"
    },
    {
        id: 69,
        name: "Women's High Heels",
        price: 3499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        gallery: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
        description: "Elegant high heel party shoes"
    },
    {
        id: 70,
        name: "Flip Flops Rubber",
        price: 499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1556217477-d325251ece38?w=500",
        gallery: ["https://images.unsplash.com/photo-1556217477-d325251ece38?w=500"],
        description: "Durable rubber flip flops"
    },
    {
        id: 71,
        name: "Soccer Cleats",
        price: 4999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500",
        gallery: ["https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500"],
        description: "Professional soccer cleats with studs"
    },
    {
        id: 72,
        name: "Ballet Flats Women",
        price: 1999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1603808033587-e2d781c87c0e?w=500",
        gallery: ["https://images.unsplash.com/photo-1603808033587-e2d781c87c0e?w=500"],
        description: "Comfortable ballet flats for everyday"
    },
    {
        id: 73,
        name: "Winter Snow Boots",
        price: 5499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500",
        gallery: ["https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500"],
        description: "Insulated waterproof snow boots"
    },
    {
        id: 74,
        name: "Espadrilles Summer Shoes",
        price: 1799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500",
        gallery: ["https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500"],
        description: "Casual espadrilles with jute sole"
    },
    {
        id: 75,
        name: "Chelsea Boots Leather",
        price: 5999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500",
        gallery: ["https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500"],
        description: "Classic Chelsea boots with elastic sides"
    },
    {
        id: 76,
        name: "Gym Training Shoes",
        price: 3499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500",
        gallery: ["https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500"],
        description: "Cross-training gym workout shoes"
    },
    {
        id: 77,
        name: "Boat Shoes Deck",
        price: 3999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
        gallery: ["https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500"],
        description: "Non-slip boat deck shoes"
    },
    {
        id: 78,
        name: "Moccasin Driving Shoes",
        price: 2799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1582897927760-b05f1846c315?w=500",
        gallery: ["https://images.unsplash.com/photo-1582897927760-b05f1846c315?w=500"],
        description: "Comfortable moccasin driving loafers"
    },
    {
        id: 79,
        name: "Skateboard Shoes",
        price: 2999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500",
        gallery: ["https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500"],
        description: "Durable skateboarding sneakers"
    },
    {
        id: 80,
        name: "Ankle Boots Women",
        price: 4499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500",
        gallery: ["https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500"],
        description: "Stylish women's ankle boots"
    },
    {
        id: 81,
        name: "Platform Sneakers",
        price: 3299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1582900977970-6d29c31d6e8f?w=500",
        gallery: ["https://images.unsplash.com/photo-1582900977970-6d29c31d6e8f?w=500"],
        description: "Trendy platform height sneakers"
    },
    {
        id: 82,
        name: "Desert Boots Suede",
        price: 4799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1529339944280-4c65eb1d6d96?w=500",
        gallery: ["https://images.unsplash.com/photo-1529339944280-4c65eb1d6d96?w=500"],
        description: "Suede desert chukka boots"
    },
    {
        id: 83,
        name: "Wedge Sandals",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=500",
        gallery: ["https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=500"],
        description: "Comfortable wedge heel sandals"
    },
    {
        id: 84,
        name: "Cowboy Boots Western",
        price: 6499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
        gallery: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500"],
        description: "Authentic western cowboy boots"
    },
    {
        id: 85,
        name: "Track Spikes Running",
        price: 4499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500",
        gallery: ["https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500"],
        description: "Professional track and field spikes"
    },
    {
        id: 86,
        name: "Water Shoes Aqua",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        gallery: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"],
        description: "Quick-dry water aqua shoes"
    },
    {
        id: 87,
        name: "House Slippers Cozy",
        price: 799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=500",
        gallery: ["https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=500"],
        description: "Warm fuzzy house slippers"
    },
    {
        id: 88,
        name: "Gladiator Sandals",
        price: 1999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        gallery: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],
        description: "Strappy gladiator style sandals"
    },
    {
        id: 89,
        name: "Work Safety Boots Steel Toe",
        price: 4999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
        gallery: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500"],
        description: "Steel toe safety work boots"
    },
    {
        id: 90,
        name: "Yoga Socks Non-Slip",
        price: 599,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1556906918-ed0db53cd566?w=500",
        gallery: ["https://images.unsplash.com/photo-1556906918-ed0db53cd566?w=500"],
        description: "Grip socks for yoga and pilates"
    },
    {
        id: 91,
        name: "Trail Running Shoes",
        price: 5499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        description: "Rugged trail running shoes"
    },
    {
        id: 92,
        name: "Fashion Boots Women",
        price: 4999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500",
        gallery: ["https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500"],
        description: "Trendy women's fashion boots"
    },
    {
        id: 93,
        name: "Dress Shoes Men Leather",
        price: 5999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500",
        gallery: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500"],
        description: "Premium leather dress shoes"
    },
    {
        id: 94,
        name: "Slip Resistant Work Shoes",
        price: 3299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
        gallery: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500"],
        description: "Non-slip work shoes for restaurant"
    },
    {
        id: 95,
        name: "Minimalist Barefoot Shoes",
        price: 3799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        description: "Natural feel barefoot running shoes"
    },
    {
        id: 96,
        name: "Knee High Boots Women",
        price: 6999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500",
        gallery: ["https://images.unsplash.com/photo-1586438688402-5c896c62b1f1?w=500"],
        description: "Stylish knee-high fashion boots"
    },
    {
        id: 97,
        name: "Roller Skate Shoes",
        price: 4499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        description: "Retro roller skate quad shoes"
    },
    {
        id: 98,
        name: "Oxford Brogues Shoes",
        price: 5499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500",
        gallery: ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500"],
        description: "Classic oxford brogue style"
    },
    {
        id: 99,
        name: "Rain Boots Waterproof",
        price: 2299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
        gallery: ["https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500"],
        description: "Waterproof rain boots wellington"
    },
    {
        id: 100,
        name: "Tennis Shoes Court",
        price: 4299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        gallery: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        description: "Professional tennis court shoes"
    },

    // FASHION - Bags & Backpacks (40 products)
    {
        id: 101,
        name: "Leather Backpack Brown",
        price: 3499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
        description: "Premium leather backpack with laptop compartment"
    },
    {
        id: 102,
        name: "School Backpack Kids",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=500",
        gallery: ["https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=500"],
        description: "Colorful school backpack for children"
    },
    {
        id: 103,
        name: "Hiking Backpack 50L",
        price: 4999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500",
        gallery: ["https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500"],
        description: "Large capacity trekking backpack"
    },
    {
        id: 104,
        name: "Laptop Bag Business",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        gallery: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500"],
        description: "Professional laptop briefcase bag"
    },
    {
        id: 105,
        name: "Tote Bag Canvas",
        price: 899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
        gallery: ["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500"],
        description: "Eco-friendly canvas tote shopping bag"
    },
    {
        id: 106,
        name: "Crossbody Bag Women",
        price: 1799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
        gallery: ["https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"],
        description: "Stylish crossbody purse for women"
    },
    {
        id: 107,
        name: "Gym Duffle Bag",
        price: 1999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500",
        gallery: ["https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500"],
        description: "Sports duffle bag with shoe compartment"
    },
    {
        id: 108,
        name: "Designer Handbag",
        price: 5999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        gallery: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"],
        description: "Luxury designer handbag with gold chain"
    },
    {
        id: 109,
        name: "Travel Backpack 40L",
        price: 3999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=500",
        gallery: ["https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=500"],
        description: "Carry-on travel backpack with USB port"
    },
    {
        id: 110,
        name: "Clutch Bag Evening",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
        gallery: ["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500"],
        description: "Elegant evening clutch with chain"
    },
    {
        id: 111,
        name: "Messenger Bag Leather",
        price: 2999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1548096026-7d5ce0d8f694?w=500",
        gallery: ["https://images.unsplash.com/photo-1548096026-7d5ce0d8f694?w=500"],
        description: "Vintage leather messenger bag"
    },
    {
        id: 112,
        name: "Diaper Bag Organizer",
        price: 1799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1590507969277-b5f40504add7?w=500",
        gallery: ["https://images.unsplash.com/photo-1590507969277-b5f40504add7?w=500"],
        description: "Multi-pocket baby diaper bag backpack"
    },
    {
        id: 113,
        name: "Waist Pack Fanny",
        price: 699,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1620799140188-3b2a7592f5bc?w=500",
        gallery: ["https://images.unsplash.com/photo-1620799140188-3b2a7592f5bc?w=500"],
        description: "Trendy fanny pack waist bag"
    },
    {
        id: 114,
        name: "Drawstring Bag Gym",
        price: 499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500",
        gallery: ["https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500"],
        description: "Lightweight drawstring sports bag"
    },
    {
        id: 115,
        name: "Rolling Suitcase 28 inch",
        price: 5999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
        gallery: ["https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500"],
        description: "Hardshell spinner luggage suitcase"
    },
    {
        id: 116,
        name: "Beach Bag Straw",
        price: 999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1590739225024-69e30e4c4be7?w=500",
        gallery: ["https://images.unsplash.com/photo-1590739225024-69e30e4c4be7?w=500"],
        description: "Woven straw beach tote bag"
    },
    {
        id: 117,
        name: "Cooler Bag Insulated",
        price: 1499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500",
        gallery: ["https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500"],
        description: "Insulated cooler lunch bag"
    },
    {
        id: 118,
        name: "Hydration Backpack",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500",
        gallery: ["https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500"],
        description: "Cycling hydration pack with water bladder"
    },
    {
        id: 119,
        name: "Satchel Bag Vintage",
        price: 2299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1548096026-7d5ce0d8f694?w=500",
        gallery: ["https://images.unsplash.com/photo-1548096026-7d5ce0d8f694?w=500"],
        description: "Retro vintage satchel shoulder bag"
    },
    {
        id: 120,
        name: "Laptop Sleeve 15 inch",
        price: 899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500",
        gallery: ["https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500"],
        description: "Protective laptop sleeve with handle"
    },
    {
        id: 121,
        name: "Makeup Bag Cosmetic",
        price: 599,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1593810451137-5dc55105dace?w=500",
        gallery: ["https://images.unsplash.com/photo-1593810451137-5dc55105dace?w=500"],
        description: "Travel makeup organizer cosmetic bag"
    },
    {
        id: 122,
        name: "Backpack Anti-Theft",
        price: 2999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
        description: "Anti-theft backpack with USB charging"
    },
    {
        id: 123,
        name: "Shoulder Bag Mini",
        price: 1199,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
        gallery: ["https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"],
        description: "Small crossbody mini shoulder purse"
    },
    {
        id: 124,
        name: "Toiletry Bag Travel",
        price: 799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500",
        gallery: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500"],
        description: "Hanging toiletry organizer bag"
    },
    {
        id: 125,
        name: "Camera Sling Bag",
        price: 1999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553531087-88e66bef5c08?w=500",
        gallery: ["https://images.unsplash.com/photo-1553531087-88e66bef5c08?w=500"],
        description: "Photographer sling bag with quick access"
    },
    {
        id: 126,
        name: "Bucket Bag Leather",
        price: 2799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        gallery: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"],
        description: "Drawstring bucket handbag"
    },
    {
        id: 127,
        name: "Weekender Bag Canvas",
        price: 3499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500",
        gallery: ["https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500"],
        description: "Large canvas weekend travel bag"
    },
    {
        id: 128,
        name: "Backpack Clear Transparent",
        price: 899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
        description: "Stadium approved clear backpack"
    },
    {
        id: 129,
        name: "Money Belt Travel",
        price: 699,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1620799140188-3b2a7592f5bc?w=500",
        gallery: ["https://images.unsplash.com/photo-1620799140188-3b2a7592f5bc?w=500"],
        description: "Hidden money belt for travelers"
    },
    {
        id: 130,
        name: "Hobo Bag Slouchy",
        price: 2199,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
        gallery: ["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500"],
        description: "Slouchy hobo style shoulder bag"
    },
    {
        id: 131,
        name: "Tool Bag Heavy Duty",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500",
        gallery: ["https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500"],
        description: "Professional heavy duty tool bag"
    },
    {
        id: 132,
        name: "Foldable Shopping Bag",
        price: 399,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
        gallery: ["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500"],
        description: "Eco reusable foldable shopping bag"
    },
    {
        id: 133,
        name: "Medical Emergency Bag",
        price: 1599,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500",
        gallery: ["https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500"],
        description: "First aid medical emergency bag"
    },
    {
        id: 134,
        name: "Insulated Lunch Box Bag",
        price: 899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500",
        gallery: ["https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500"],
        description: "Thermal insulated lunch box bag"
    },
    {
        id: 135,
        name: "Garment Bag Travel",
        price: 1899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
        gallery: ["https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500"],
        description: "Suit garment bag for travel"
    },
    {
        id: 136,
        name: "Yoga Mat Bag Carrier",
        price: 799,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500",
        gallery: ["https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500"],
        description: "Yoga mat carrier bag with strap"
    },
    {
        id: 137,
        name: "Laptop Backpack Women",
        price: 2899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
        description: "Stylish laptop backpack for women"
    },
    {
        id: 138,
        name: "Duffel Bag Large 60L",
        price: 3299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500",
        gallery: ["https://images.unsplash.com/photo-1567613365150-5c9f3d1e97e9?w=500"],
        description: "Extra large duffel travel bag"
    },
    {
        id: 139,
        name: "Wristlet Wallet Bag",
        price: 899,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
        gallery: ["https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"],
        description: "Small wristlet wallet clutch bag"
    },
    {
        id: 140,
        name: "Backpack Cooler Insulated",
        price: 2299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500",
        gallery: ["https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500"],
        description: "Insulated cooler backpack for picnics"
    },

    // HOME - Kitchen & Appliances (30 products)
    {
        id: 141,
        name: "Coffee Maker Automatic",
        price: 5999,
        category: "home",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
        gallery: ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500"],
        description: "Programmable coffee maker with timer"
    },
    {
        id: 142,
        name: "Blender High Speed",
        price: 3499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500",
        gallery: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=500"],
        description: "1000W smoothie blender with pulse"
    },
    {
        id: 143,
        name: "Air Fryer 5L",
        price: 4999,
        category: "home",
        image: "https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500",
        gallery: ["https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500"],
        description: "Digital air fryer oil-free cooking"
    },
    {
        id: 144,
        name: "Toaster 2-Slice",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1599139877720-0a98f09b9e3b?w=500",
        gallery: ["https://images.unsplash.com/photo-1599139877720-0a98f09b9e3b?w=500"],
        description: "Stainless steel 2-slice toaster"
    },
    {
        id: 145,
        name: "Electric Kettle 1.7L",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1621516026028-e6f935938ca1?w=500",
        gallery: ["https://images.unsplash.com/photo-1621516026028-e6f935938ca1?w=500"],
        description: "Fast boiling electric kettle"
    },
    {
        id: 146,
        name: "Microwave Oven 20L",
        price: 6999,
        category: "home",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500",
        gallery: ["https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500"],
        description: "Digital microwave with grill function"
    },
    {
        id: 147,
        name: "Rice Cooker 1.8L",
        price: 2499,
        category: "home",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
        gallery: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"],
        description: "Multi-function rice cooker steamer"
    },
    {
        id: 148,
        name: "Pressure Cooker Electric",
        price: 5499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500",
        gallery: ["https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500"],
        description: "6L electric pressure cooker instant pot"
    },
    {
        id: 149,
        name: "Food Processor 3-in-1",
        price: 4499,
        category: "home",
        image: "https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=500",
        gallery: ["https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=500"],
        description: "Multi-function food processor chopper"
    },
    {
        id: 150,
        name: "Mixer Grinder 750W",
        price: 3999,
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500",
        gallery: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=500"],
        description: "Mixer grinder with 3 jars"
    },
    {
        id: 151,
        name: "Sandwich Maker Grill",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500",
        gallery: ["https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500"],
        description: "Non-stick sandwich toaster grill"
    },
    {
        id: 152,
        name: "Juicer Cold Press",
        price: 6999,
        category: "home",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500",
        gallery: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500"],
        description: "Slow juicer cold press extractor"
    },
    {
        id: 153,
        name: "Hand Mixer Electric",
        price: 1799,
        category: "home",
        image: "https://images.unsplash.com/photo-1578991624414-276ef619b959?w=500",
        gallery: ["https://images.unsplash.com/photo-1578991624414-276ef619b959?w=500"],
        description: "5-speed electric hand mixer"
    },
    {
        id: 154,
        name: "Egg Boiler Electric",
        price: 999,
        category: "home",
        image: "https://images.unsplash.com/photo-1599139877720-0a98f09b9e3b?w=500",
        gallery: ["https://images.unsplash.com/photo-1599139877720-0a98f09b9e3b?w=500"],
        description: "Automatic egg boiler 7-egg capacity"
    },
    {
        id: 155,
        name: "Induction Cooktop",
        price: 3499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500",
        gallery: ["https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500"],
        description: "2000W induction cooktop single burner"
    },
    {
        id: 156,
        name: "Electric Grill Indoor",
        price: 4999,
        category: "home",
        image: "https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500",
        gallery: ["https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500"],
        description: "Smokeless indoor electric BBQ grill"
    },
    {
        id: 157,
        name: "Waffle Maker Belgian",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500",
        gallery: ["https://images.unsplash.com/photo-1619546952812-b50c8aa8faa5?w=500"],
        description: "Belgian waffle maker non-stick"
    },
    {
        id: 158,
        name: "Ice Cream Maker",
        price: 3999,
        category: "home",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
        gallery: ["https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"],
        description: "Automatic ice cream frozen yogurt maker"
    },
    {
        id: 159,
        name: "Slow Cooker 6-Quart",
        price: 4499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500",
        gallery: ["https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500"],
        description: "Programmable slow cooker crock pot"
    },
    {
        id: 160,
        name: "Popcorn Maker Hot Air",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1608063863497-9cfab1fc7afd?w=500",
        gallery: ["https://images.unsplash.com/photo-1608063863497-9cfab1fc7afd?w=500"],
        description: "Oil-free hot air popcorn machine"
    },
    {
        id: 161,
        name: "Deep Fryer 3L",
        price: 3499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500",
        gallery: ["https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500"],
        description: "Electric deep fryer with basket"
    },
    {
        id: 162,
        name: "Can Opener Electric",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
        gallery: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500"],
        description: "Automatic electric can opener"
    },
    {
        id: 163,
        name: "Vacuum Sealer Food",
        price: 2999,
        category: "home",
        image: "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=500",
        gallery: ["https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?w=500"],
        description: "Food vacuum sealer with bags"
    },
    {
        id: 164,
        name: "Water Filter Pitcher",
        price: 1799,
        category: "home",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        gallery: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"],
        description: "10-cup water filter purifier pitcher"
    },
    {
        id: 165,
        name: "Electric Wine Opener",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
        gallery: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500"],
        description: "Rechargeable electric corkscrew"
    },
    {
        id: 166,
        name: "Spice Grinder Electric",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500",
        gallery: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=500"],
        description: "Coffee and spice grinder mill"
    },
    {
        id: 167,
        name: "Kitchen Scale Digital",
        price: 999,
        category: "home",
        image: "https://images.unsplash.com/photo-1608555855762-b13a82e4e069?w=500",
        gallery: ["https://images.unsplash.com/photo-1608555855762-b13a82e4e069?w=500"],
        description: "Precise kitchen food scale weighing"
    },
    {
        id: 168,
        name: "Knife Set 15-Piece",
        price: 3999,
        category: "home",
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500",
        gallery: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500"],
        description: "Professional kitchen knife set with block"
    },
    {
        id: 169,
        name: "Cutting Board Bamboo Set",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799dd5f7?w=500",
        gallery: ["https://images.unsplash.com/photo-1594756202469-9ff9799dd5f7?w=500"],
        description: "3-piece bamboo cutting board set"
    },
    {
        id: 170,
        name: "Cookware Set Non-Stick 10pc",
        price: 6999,
        category: "home",
        image: "https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500",
        gallery: ["https://images.unsplash.com/photo-1585237672738-6d5d97925638?w=500"],
        description: "Complete non-stick cookware set"
    },

    // HOME - Lighting & Decor (30 products)
    {
        id: 171,
        name: "LED Desk Lamp Adjustable",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        gallery: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"],
        description: "Modern LED desk lamp with USB port"
    },
    {
        id: 172,
        name: "Floor Lamp Tripod",
        price: 3999,
        category: "home",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
        gallery: ["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500"],
        description: "Wooden tripod floor lamp with linen shade"
    },
    {
        id: 173,
        name: "Himalayan Salt Lamp",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500",
        gallery: ["https://images.unsplash.com/photo-1528127269322-539801943592?w=500"],
        description: "Natural Himalayan pink salt lamp"
    },
    {
        id: 174,
        name: "LED Strip Lights 16ft",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1607077820104-01e063e6ec3d?w=500",
        gallery: ["https://images.unsplash.com/photo-1607077820104-01e063e6ec3d?w=500"],
        description: "RGB color changing LED strip lights"
    },
    {
        id: 175,
        name: "Chandelier Crystal Modern",
        price: 8999,
        category: "home",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500",
        gallery: ["https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500"],
        description: "Modern crystal chandelier ceiling light"
    },
    {
        id: 176,
        name: "Table Lamp Bedside Set of 2",
        price: 2999,
        category: "home",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
        gallery: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500"],
        description: "Matching bedside table lamp pair"
    },
    {
        id: 177,
        name: "Pendant Light Industrial",
        price: 2499,
        category: "home",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
        gallery: ["https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500"],
        description: "Industrial style hanging pendant light"
    },
    {
        id: 178,
        name: "Night Light Plug-in",
        price: 399,
        category: "home",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500",
        gallery: ["https://images.unsplash.com/photo-1528127269322-539801943592?w=500"],
        description: "LED plug-in night light with sensor"
    },
    {
        id: 179,
        name: "Wall Sconce Set of 2",
        price: 3499,
        category: "home",
        image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500",
        gallery: ["https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500"],
        description: "Modern wall sconce lighting fixtures"
    },
    {
        id: 180,
        name: "String Lights Fairy",
        price: 699,
        category: "home",
        image: "https://images.unsplash.com/photo-1574270166307-75c0ad2bb117?w=500",
        gallery: ["https://images.unsplash.com/photo-1574270166307-75c0ad2bb117?w=500"],
        description: "33ft fairy string lights for bedroom"
    },
    {
        id: 181,
        name: "Picture Frame Set of 10",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
        gallery: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500"],
        description: "Gallery wall picture frame set"
    },
    {
        id: 182,
        name: "Wall Clock Modern",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
        gallery: ["https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500"],
        description: "Silent modern wall clock 12 inch"
    },
    {
        id: 183,
        name: "Wall Mirror Round",
        price: 2499,
        category: "home",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500",
        gallery: ["https://images.unsplash.com/photo-1618220179428-22790b461013?w=500"],
        description: "Round decorative wall mirror with frame"
    },
    {
        id: 184,
        name: "Throw Pillow Covers Set of 4",
        price: 999,
        category: "home",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
        gallery: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500"],
        description: "Decorative throw pillow cushion covers"
    },
    {
        id: 185,
        name: "Area Rug 5x7 ft",
        price: 4999,
        category: "home",
        image: "https://images.unsplash.com/photo-1585128792304-dcfb2f50aab6?w=500",
        gallery: ["https://images.unsplash.com/photo-1585128792304-dcfb2f50aab6?w=500"],
        description: "Modern geometric area rug carpet"
    },
    {
        id: 186,
        name: "Curtains Blackout Set of 2",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        gallery: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
        description: "Thermal blackout curtain panels"
    },
    {
        id: 187,
        name: "Vase Ceramic Set of 3",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
        gallery: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500"],
        description: "Modern ceramic decorative vase set"
    },
    {
        id: 188,
        name: "Artificial Plant Potted",
        price: 899,
        category: "home",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
        gallery: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"],
        description: "Realistic artificial succulent plant"
    },
    {
        id: 189,
        name: "Candle Holder Set",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1602874801006-e604b7d6cc7d?w=500",
        gallery: ["https://images.unsplash.com/photo-1602874801006-e604b7d6cc7d?w=500"],
        description: "Metal geometric candle holder set"
    },
    {
        id: 190,
        name: "Wall Art Canvas Print",
        price: 2999,
        category: "home",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
        gallery: ["https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500"],
        description: "Modern abstract canvas wall art"
    },
    {
        id: 191,
        name: "Bookends Decorative Pair",
        price: 899,
        category: "home",
        image: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=500",
        gallery: ["https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=500"],
        description: "Metal decorative bookends"
    },
    {
        id: 192,
        name: "Decorative Tray Set",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1625845027377-051cd30d550b?w=500",
        gallery: ["https://images.unsplash.com/photo-1625845027377-051cd30d550b?w=500"],
        description: "Wooden serving tray decorative set"
    },
    {
        id: 193,
        name: "Floating Shelves Set of 3",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
        gallery: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"],
        description: "Wall mounted floating shelves wood"
    },
    {
        id: 194,
        name: "Doormat Welcome Mat",
        price: 799,
        category: "home",
        image: "https://images.unsplash.com/photo-1585128792304-dcfb2f50aab6?w=500",
        gallery: ["https://images.unsplash.com/photo-1585128792304-dcfb2f50aab6?w=500"],
        description: "Indoor outdoor welcome doormat"
    },
    {
        id: 195,
        name: "Blanket Throw Cozy",
        price: 1499,
        category: "home",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
        gallery: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500"],
        description: "Soft fleece throw blanket for sofa"
    },
    {
        id: 196,
        name: "Storage Basket Woven Set",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
        gallery: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"],
        description: "Woven storage basket organizer set"
    },
    {
        id: 197,
        name: "Coat Rack Stand",
        price: 1999,
        category: "home",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
        gallery: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"],
        description: "Freestanding wooden coat rack hall tree"
    },
    {
        id: 198,
        name: "Ottoman Storage Bench",
        price: 3499,
        category: "home",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
        gallery: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"],
        description: "Folding storage ottoman bench seat"
    },
    {
        id: 199,
        name: "Desk Organizer Set",
        price: 899,
        category: "home",
        image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a6?w=500",
        gallery: ["https://images.unsplash.com/photo-1611224885990-ab7363d1f2a6?w=500"],
        description: "Mesh desk organizer caddy set"
    },
    {
        id: 200,
        name: "Umbrella Stand Holder",
        price: 1299,
        category: "home",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
        gallery: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"],
        description: "Metal umbrella stand holder rack"
    }
];

// Shopping cart array to store items
let cart = [];

// Currently displayed products
let displayedProducts = [...products];

// Function to display products on the page
function displayProducts(productsToShow) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    productsToShow.forEach((product, index) => {
        const productCard = `
            <div class="col-md-4 col-lg-3 mb-4" style="animation-delay: ${index * 0.05}s">
                <div class="product-card">
                    <div class="product-image-container" onclick="openGallery(${product.id})">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <span class="category-badge">${product.category.toUpperCase()}</span>
                    </div>
                    <div class="product-card-body">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p class="product-price">₹${product.price}</p>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn-view-gallery" onclick="openGallery(${product.id})">
                            <i class="bi bi-images"></i> View Gallery (${product.gallery.length})
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    
    // Show success notification
    showNotification(`${product.name} added to cart!`, 'success');
}

// Function to show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    notification.style.zIndex = '9999';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Function to update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceHeader = document.getElementById('total-price');
    const cartTotal = document.getElementById('cart-total');
    
    let totalItems = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });
    
    // Update cart count and total price in header
    cartCount.textContent = totalItems;
    totalPriceHeader.textContent = totalPrice.toLocaleString();
    cartTotal.textContent = totalPrice.toLocaleString();
    
    // Display cart items or empty message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <div class="mt-2 fw-bold" style="color: #00f2ff;">Subtotal: ₹${(item.price * item.quantity).toLocaleString()}</div>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${item.id})" title="Remove from cart">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
}

// Function to update item quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity === 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    
    if (product) {
        showNotification(`${product.name} removed from cart`, 'warning');
    }
}

// Function to open product gallery modal
function openGallery(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('modal-product-name').textContent = product.name;
    
    const carouselContainer = document.getElementById('carousel-images');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    
    carouselContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';
    
    product.gallery.forEach((imageUrl, index) => {
        // Create carousel items
        const carouselItem = `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${imageUrl}" class="d-block w-100" alt="${product.name}">
            </div>
        `;
        carouselContainer.innerHTML += carouselItem;
        
        // Create thumbnail images
        const thumbnail = `
            <img src="${imageUrl}" 
                 class="thumbnail-img ${index === 0 ? 'active' : ''}" 
                 onclick="jumpToSlide(${index})"
                 alt="Thumbnail ${index + 1}">
        `;
        thumbnailContainer.innerHTML += thumbnail;
    });
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

// Function to jump to specific carousel slide
function jumpToSlide(slideIndex) {
    const carousel = document.getElementById('galleryCarousel');
    const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
    bsCarousel.to(slideIndex);
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-img');
    thumbnails.forEach((thumb, index) => {
        if (index === slideIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Function to filter and sort products
function filterAndSortProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const sortOption = document.getElementById('price-sort').value;
    
    let filtered = [...products];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Apply price sorting
    if (sortOption === 'low-to-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
        filtered.sort((a, b) => b.price - a.price);
    }
    
    displayedProducts = filtered;
    displayProducts(displayedProducts);
}

// RAZORPAY PAYMENT GATEWAY INTEGRATION
function initiatePayment() {
    // Check if cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before checkout.');
        return;
    }
    
    // Calculate total amount
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Razorpay payment options
    const options = {
        key: 'rzp_test_1DP5mmOlF5G5ag', // Test key - Replace with your actual Razorpay key
        amount: totalAmount * 100, // Amount in paise (₹1 = 100 paise)
        currency: 'INR',
        name: 'E-Commerce Store',
        description: 'Order Payment',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=150',
        
        // Enable payment methods
        method: {
            netbanking: true,
            card: true,
            wallet: true,
            upi: true,
            paylater: false
        },
        
        // Prefill customer information
        prefill: {
            name: 'Customer',
            email: 'customer@example.com',
            contact: '9999999999'
        },
        
        // Theme customization
        theme: {
            color: '#667eea',
            backdrop_color: 'rgba(15, 12, 41, 0.9)'
        },
        
        // Success callback - Called when payment is successful
        handler: function(response) {
            handlePaymentSuccess(response);
        },
        
        // Modal settings
        modal: {
            ondismiss: function() {
                showNotification('Payment cancelled!', 'warning');
            },
            escape: true,
            backdropclose: false
        },
        
        // Notes for your reference
        notes: {
            order_type: 'E-commerce Purchase',
            total_items: cart.length
        }
    };
    
    // Open Razorpay payment modal
    const razorpay = new Razorpay(options);
    razorpay.open();
    
    // Handle payment failure
    razorpay.on('payment.failed', function(response) {
        alert('Payment Failed! Please try again.');
        console.error('Payment failed:', response.error);
    });
}

// Function to handle successful payment
function handlePaymentSuccess(response) {
    // Show success message with payment details
    const successMessage = `
        Payment Successful! 🎉
        
        Payment ID: ${response.razorpay_payment_id}
        
        Thank you for your order!
        Your order will be processed shortly.
    `;
    
    alert(successMessage);
    
    // Log payment details for backend integration
    console.log('Payment Response:', response);
    console.log('Payment ID:', response.razorpay_payment_id);
    console.log('Order Items:', cart);
    
    // Clear the cart after successful payment
    cart = [];
    updateCart();
    
    // Close the cart sidebar
    const cartOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartSidebar'));
    if (cartOffcanvas) {
        cartOffcanvas.hide();
    }
    
    // Optional: Send order details to your backend server
    // sendOrderToServer(response, cart);
}

// Optional: Function to send order to backend (implement as needed)
function sendOrderToServer(paymentResponse, orderItems) {
    // Example API call to your backend
    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payment_id: paymentResponse.razorpay_payment_id,
            items: orderItems,
            total_amount: orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order saved:', data);
    })
    .catch(error => {
        console.error('Error saving order:', error);
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display all products initially
    displayProducts(products);
    
    // Update cart display
    updateCart();
    
    // Add carousel event listener to update thumbnails
    const galleryCarousel = document.getElementById('galleryCarousel');
    if (galleryCarousel) {
        galleryCarousel.addEventListener('slid.bs.carousel', function(event) {
            const activeIndex = event.to;
            const thumbnails = document.querySelectorAll('.thumbnail-img');
            thumbnails.forEach((thumb, index) => {
                if (index === activeIndex) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
        });
    }
    
    console.log('E-Commerce Store Loaded Successfully!');
    console.log(`Total Products: ${products.length}`);
});

// Optional: Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Press 'C' to open cart
    if (event.key === 'c' || event.key === 'C') {
        const cartButton = document.querySelector('[data-bs-target="#cartSidebar"]');
        if (cartButton) cartButton.click();
    }
    
    // Press 'Escape' to close modals
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) modalInstance.hide();
        });
    }
});

// Save cart to localStorage (optional - for persistence)
function saveCartToLocalStorage() {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
}

// Load cart from localStorage (optional - for persistence)
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('ecommerce_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Optional: Call these functions if you want cart persistence
// loadCartFromLocalStorage();
// Add saveCartToLocalStorage() to updateCart() function if needed

