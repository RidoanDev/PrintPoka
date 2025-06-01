const products = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 25,
        category: 'Fashion',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: '100% cotton classic white t-shirt with a comfortable fit. Perfect for everyday wear.',
        specs: ['100% Cotton', 'Regular Fit', 'Machine Washable', 'Breathable Fabric'],
        reviews: [
            { user: 'John D.', rating: 5, comment: "Perfect fit and great quality!" },
            { user: 'Sarah M.', rating: 4.5, comment: 'Very comfortable fabric' }
        ],
        colors: ['White', 'Black', 'Navy', 'Gray'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 50
    },
    {
        id: 2,
        name: 'Premium Graphic Tee',
        price: 35,
        category: 'Fashion',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Premium graphic tee with artistic design. Made from organic cotton.',
        specs: ['100% Organic Cotton', 'Screen Printed Design', 'Slim Fit', 'Pre-shrunk'],
        reviews: [
            { user: 'Mike R.', rating: 5, comment: 'Love the design and fit' },
            { user: 'Lisa K.', rating: 4.8, comment: 'Great quality print' }
        ],
        colors: ['Black', 'White', 'Charcoal', 'Burgundy'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 35
    },
    {
        id: 3,
        name: 'Vintage Band T-Shirt',
        price: 45,
        category: 'Fashion',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Authentic vintage band t-shirt with distressed print for a retro look.',
        specs: ['Soft Washed Cotton', 'Vintage Wash', 'Oversized Fit', 'Distressed Graphic'],
        reviews: [
            { user: 'David W.', rating: 4.7, comment: 'Awesome vintage look' },
            { user: 'Emma S.', rating: 4.6, comment: 'Very comfortable' }
        ],
        colors: ['Gray', 'Black', 'Faded Blue', 'Washed Red'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 20
    },
    {
        id: 4,
        name: 'Premium Polo T-Shirt',
        price: 39,
        category: 'Fashion',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Classic polo t-shirt with premium finish. Perfect for casual and smart-casual occasions.',
        specs: ['Pima Cotton', 'Chest Pocket', 'Ribbed Collar', 'Tailored Fit'],
        reviews: [
            { user: 'Tom H.', rating: 4.8, comment: 'Great for office casual' },
            { user: 'Alice B.', rating: 4.5, comment: 'Love the pocket detail' }
        ],
        colors: ['Navy', 'White', 'Gray', 'Light Blue', 'Pink'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 30
    },
    {
        id: 5,
        name: 'Tie-Dye Collection',
        price: 32,
        category: 'Fashion',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Trendy tie-dye t-shirt with unique patterns. Each piece is one of a kind.',
        specs: ['100% Cotton', 'Hand-dyed', 'Relaxed Fit', 'Unique Pattern'],
        reviews: [
            { user: 'Chris P.', rating: 4.6, comment: 'Love the colors!' },
            { user: 'Maria L.', rating: 4.4, comment: 'Very comfortable fit' }
        ],
        colors: ['Rainbow', 'Ocean Blue', 'Sunset', 'Forest'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 25
    },
    {
        id: 6,
        name: 'Essential Long Sleeve',
        price: 29,
        category: 'Fashion',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Essential long sleeve t-shirt made from premium cotton. Perfect for layering.',
        specs: ['Premium Cotton', 'Ribbed Cuffs', 'Regular Fit', 'Reinforced Seams'],
        reviews: [
            { user: 'Robert K.', rating: 4.8, comment: 'Great basic for my wardrobe' },
            { user: 'Jennifer H.', rating: 4.6, comment: 'Perfect weight for all seasons' }
        ],
        colors: ['Black', 'White', 'Gray', 'Navy', 'Olive'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 40
    },
    {
        id: 7,
        name: 'Eco-Friendly Hemp Tee',
        price: 42,
        category: 'Fashion',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Sustainable hemp t-shirt with natural dyes. Eco-friendly and stylish.',
        specs: ['Hemp Blend', 'Natural Dyes', 'Relaxed Fit', 'Sustainable'],
        reviews: [
            { user: 'Alex G.', rating: 4.9, comment: 'Love the eco-friendly approach' },
            { user: 'Nina P.', rating: 4.7, comment: 'So soft and comfortable' }
        ],
        colors: ['Natural', 'Earth Brown', 'Sage Green', 'Ocean Blue'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 30
    },
    {
        id: 8,
        name: 'Athletic Performance Tee',
        price: 38,
        category: 'Fashion',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/4045762/pexels-photo-4045762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'High-performance athletic t-shirt with moisture-wicking technology.',
        specs: ['Moisture Wicking', 'Quick Dry', 'Athletic Fit', 'Breathable Mesh'],
        reviews: [
            { user: 'Mark T.', rating: 5, comment: 'Perfect for workouts' },
            { user: 'Sarah L.', rating: 4.8, comment: 'Stays dry during intense sessions' }
        ],
        colors: ['Black', 'Gray', 'Blue', 'Red', 'Neon Yellow'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 45
    },
    {
        id: 9,
        name: 'Limited Edition Art Tee',
        price: 49,
        category: 'Fashion',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Limited edition t-shirt featuring artwork from local artists.',
        specs: ['Premium Cotton', 'Artist Collaboration', 'Numbered Edition', 'Custom Tag'],
        reviews: [
            { user: 'Julia M.', rating: 4.8, comment: 'Unique and beautiful design' },
            { user: 'Peter K.', rating: 4.6, comment: 'Great conversation starter' }
        ],
        colors: ['White', 'Black', 'Navy'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 20
    },
    {
        id: 10,
        name: 'Retro Gaming Tee',
        price: 36,
        category: 'Fashion',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        available: true,
        description: 'Retro gaming inspired t-shirt with classic pixel art designs.',
        specs: ['100% Cotton', 'Pixel Art Design', 'Regular Fit', 'Gaming Theme'],
        reviews: [
            { user: 'Steve R.', rating: 5, comment: 'Perfect for gaming enthusiasts' },
            { user: 'Linda K.', rating: 4.7, comment: 'Great quality print' }
        ],
        colors: ['Black', 'Navy', 'Dark Gray', 'Purple'],
        sizes: ['S', 'M', 'L', 'XL', '2XL'],
        stock: 35
    }
];

const categories = ['All', 'Fashion', 'Men', 'Women', 'Unisex', 'Limited Edition', 'Eco-Friendly', 'Athletic'];

const promotions = [
    {
        id: 1,
        title: 'Summer Collection',
        discount: '30% OFF',
        code: 'SUMMER30',
        validUntil: '2025-02-01'
    },
    {
        id: 2,
        title: 'New Customer Special',
        discount: '₹200 OFF',
        code: 'NEWCUSTOMER',
        validUntil: '2025-03-01'
    },
    {
        id: 3,
        title: 'Bundle Deal',
        discount: 'Buy 3 Get 1 Free',
        code: 'BUNDLE4',
        validUntil: '2025-01-31'
    },
    {
        id: 4,
        title: 'Limited Edition',
        discount: '15% OFF',
        code: 'LIMITED15',
        validUntil: '2025-02-15'
    }
];

const notifications = [
    {
        id: 1,
        type: 'order',
        title: 'Order Delivered',
        message: 'Your order #1234 has been delivered successfully',
        timestamp: new Date(2025, 0, 14, 8, 30).getTime(),
        isRead: false,
        icon: 'fa-box-check',
        color: 'green'
    },
    {
        id: 2,
        type: 'promo',
        title: 'Flash Sale',
        message: 'Get 40% off on all graphic tees for the next 24 hours!',
        timestamp: new Date(2025, 0, 14, 7, 15).getTime(),
        isRead: false,
        icon: 'fa-tag',
        color: 'orange'
    },
    {
        id: 3,
        type: 'news',
        title: 'New Collection Launch',
        message: 'Check out our new eco-friendly collection',
        timestamp: new Date(2025, 0, 13, 18, 45).getTime(),
        isRead: true,
        icon: 'fa-tshirt',
        color: 'blue'
    },
    {
        id: 4,
        type: 'system',
        title: 'Profile Updated',
        message: 'Your profile information has been updated successfully',
        timestamp: new Date(2025, 0, 13, 15, 20).getTime(),
        isRead: true,
        icon: 'fa-user-check',
        color: 'purple'
    }
];

const trendingTags = [
    { id: 1, name: 'Eco-Friendly', searches: 18500 },
    { id: 2, name: 'Graphic Tees', searches: 15600 },
    { id: 3, name: 'Limited Edition', searches: 14200 },
    { id: 4, name: 'Athletic Wear', searches: 13100 },
    { id: 5, name: 'Vintage Style', searches: 12400 },
    { id: 6, name: 'Artist Series', searches: 11800 },
    { id: 7, name: 'Gaming Collection', searches: 10500 },
    { id: 8, name: 'Tie-Dye', searches: 9700 },
    { id: 9, name: 'Premium Cotton', searches: 8900 },
    { id: 10, name: 'Sustainable', searches: 8200 },
    { id: 11, name: 'Performance Wear', searches: 7600 },
    { id: 12, name: 'Hemp Collection', searches: 6900 },
    { id: 13, name: 'Limited Stock', searches: 6200 },
    { id: 14, name: 'New Arrivals', searches: 5800 },
    { id: 15, name: 'Best Sellers', searches: 5100 }
];

localStorage.setItem('products', JSON.stringify(products));
