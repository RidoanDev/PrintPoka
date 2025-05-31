const products = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 25,
        category: 'Fashion',
        rating: 4.8,
        image: 'https://example.com/white-tshirt.jpg',
        available: true,
        description: '100% cotton classic white t-shirt with a comfortable fit. Perfect for everyday wear.',
        specs: [
            '100% Cotton',
            'Regular Fit',
            'Machine Washable',
            'Breathable Fabric'
        ],
        reviews: [
            {
                user: 'John D.',
                rating: 5,
                comment: "Perfect fit and great quality!"
            },
            {
                user: 'Sarah M.',
                rating: 4.5,
                comment: 'Very comfortable fabric'
            }
        ],
        colors: ['White'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 50
    },
    {
        id: 2,
        name: 'Black Graphic Tee',
        price: 35,
        category: 'Fashion',
        rating: 4.9,
        image: 'https://example.com/black-graphic-tee.jpg',
        available: true,
        description: 'Premium black t-shirt with a cool graphic print. Soft fabric with a modern fit.',
        specs: [
            '100% Organic Cotton',
            'Screen Printed Design',
            'Slim Fit',
            'Pre-shrunk Fabric'
        ],
        reviews: [
            {
                user: 'Mike R.',
                rating: 5,
                comment: 'Love the design and fit'
            },
            { user: 'Lisa K.', rating: 4.8, comment: 'Great quality print' }
        ],
        colors: ['Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 35
    },
    {
        id: 3,
        name: 'Vintage Band T-Shirt',
        price: 45,
        category: 'Fashion',
        rating: 4.7,
        image: 'https://example.com/vintage-band-tee.jpg',
        available: true,
        description: 'Authentic vintage band t-shirt with distressed print for a retro look.',
        specs: [
            'Soft Washed Cotton',
            'Vintage Wash',
            'Oversized Fit',
            'Distressed Graphic'
        ],
        reviews: [
            {
                user: 'David W.',
                rating: 4.7,
                comment: 'Awesome vintage look'
            },
            { user: 'Emma S.', rating: 4.6, comment: 'Very comfortable' }
        ],
        colors: ['Gray', 'Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 20
    },
    {
        id: 4,
        name: 'Pocket Polo T-Shirt',
        price: 39,
        category: 'Fashion',
        rating: 4.6,
        image: 'https://example.com/pocket-polo-tee.jpg',
        available: true,
        description: 'Classic polo t-shirt with a chest pocket. Perfect for casual and smart-casual occasions.',
        specs: [
            'Pima Cotton',
            'Chest Pocket',
            'Ribbed Collar',
            'Tailored Fit'
        ],
        reviews: [
            {
                user: 'Tom H.',
                rating: 4.8,
                comment: 'Great for office casual'
            },
            {
                user: 'Alice B.',
                rating: 4.5,
                comment: 'Love the pocket detail'
            }
        ],
        colors: ['Navy', 'White', 'Gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 30
    },
    {
        id: 5,
        name: 'Oversized Tie-Dye Tee',
        price: 32,
        category: 'Fashion',
        rating: 4.5,
        image: 'https://example.com/tie-dye-tee.jpg',
        available: true,
        description: 'Trendy oversized t-shirt with vibrant tie-dye pattern. Soft and comfortable fabric.',
        specs: [
            '100% Cotton',
            'Oversized Fit',
            'Hand-dyed Pattern',
            'Relaxed Silhouette'
        ],
        reviews: [
            {
                user: 'Chris P.',
                rating: 4.6,
                comment: 'Love the colors!'
            },
            {
                user: 'Maria L.',
                rating: 4.4,
                comment: 'Very comfortable fit'
            }
        ],
        colors: ['Multicolor'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 25
    },
    {
        id: 6,
        name: 'Long Sleeve Basic Tee',
        price: 29,
        category: 'Fashion',
        rating: 4.7,
        image: 'https://example.com/long-sleeve-tee.jpg',
        available: true,
        description: 'Essential long sleeve t-shirt made from premium cotton. Perfect for layering or wearing alone.',
        specs: [
            'Premium Cotton',
            'Ribbed Cuffs',
            'Regular Fit',
            'Reinforced Neckline'
        ],
        reviews: [
            {
                user: 'Robert K.',
                rating: 4.8,
                comment: 'Great basic for my wardrobe'
            },
            {
                user: 'Jennifer H.',
                rating: 4.6,
                comment: 'Perfect weight for all seasons'
            }
        ],
        colors: ['Black', 'White', 'Gray'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 40
    }
];

const categories = ['All', 'Fashion', 'Men', 'Women', 'Unisex'];

const promotions = [
    {
        id: 1,
        title: 'Summer Sale',
        discount: '20% OFF',
        code: 'SUMMER20',
        validUntil: '2025-02-01'
    },
    {
        id: 2,
        title: 'New User Special',
        discount: '₹100 OFF',
        code: 'NEWUSER',
        validUntil: '2025-03-01'
    },
    {
        id: 3,
        title: 'T-Shirt Special',
        discount: 'Buy 2 Get 1 Free',
        code: 'TEEBOGO',
        validUntil: '2025-01-31'
    }
];

// Notification data
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
        title: 'Special Offer',
        message: 'Get 50% off on all t-shirts this week!',
        timestamp: new Date(2025, 0, 14, 7, 15).getTime(),
        isRead: false,
        icon: 'fa-tag',
        color: 'orange'
    },
    {
        id: 3,
        type: 'news',
        title: 'New Collection Arrived',
        message: 'Check out our latest summer t-shirt collection',
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

// Trending tags data
const trendingTags = [
    { id: 1, name: 'Basic Tees', searches: 15420 },
    { id: 2, name: 'Graphic Tees', searches: 12350 },
    { id: 3, name: 'Oversized T-Shirts', searches: 11200 },
    { id: 4, name: 'Vintage Tees', searches: 9870 },
    { id: 5, name: 'Pocket Tees', searches: 8940 },
    { id: 6, name: 'Long Sleeve Tees', searches: 7650 },
    { id: 7, name: 'Plain T-Shirts', searches: 6780 },
    { id: 8, name: 'Band Tees', searches: 5430 },
    { id: 9, name: 'Tie-Dye', searches: 4980 },
    { id: 10, name: 'Athletic Tees', searches: 4320 },
    { id: 11, name: 'Premium Cotton', searches: 3890 },
    { id: 12, name: 'Linen Tees', searches: 3450 },
    { id: 13, name: 'Polo Tees', searches: 3210 },
    { id: 14, name: 'Muscle Tees', searches: 2980 },
    { id: 15, name: 'Henley Tees', searches: 2760 }
];

localStorage.setItem('products', JSON.stringify(products));
