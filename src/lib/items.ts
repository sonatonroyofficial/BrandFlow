
export interface Item {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: string;
}

export const items: Item[] = [
    {
        id: "1",
        name: "Modern Workstation",
        description: "A high-performance workspace setup designed for creative professionals. Features ample desk space, integrated cable management, and a sleek modern aesthetic that fits any office environment.",
        price: "৳299,999",
        imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop",
        category: "Furniture"
    },
    {
        id: "2",
        name: "Ergonomic Chair",
        description: "Premium mesh chair with lumbar support for all-day comfort. Fully adjustable armrests, headrest, and seat height to ensure perfect posture.",
        price: "৳71,880",
        imageUrl: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
        category: "Furniture"
    },
    {
        id: "3",
        name: "Wireless Mechanical Keyboard",
        description: "Low-profile mechanical switches with multi-device connectivity. Connect up to 3 devices simultaneously and switch between them with a single click. RGB backlighting included.",
        price: "৳17,880",
        imageUrl: "https://images.unsplash.com/photo-1587829741301-3794507f900d?q=80&w=1000&auto=format&fit=crop",
        category: "Accessories"
    },
    {
        id: "4",
        name: "4K Monitor Pro",
        description: "27-inch 4K IPS display with 99% color accuracy for editing. HDR10 support and ultra-thin bezels make it perfect for multi-monitor setups.",
        price: "৳83,880",
        imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
        category: "Electronics"
    },
    {
        id: "5",
        name: "Noise Cancelling Headphones",
        description: "Industry-leading noise cancellation with 30-hour battery life. Plush ear cushions and high-fidelity sound for an immersive listening experience.",
        price: "৳41,880",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        category: "Electronics"
    },
    {
        id: "6",
        name: "Minimalist Desk Lamp",
        description: "Adjustable color temperature and brightness with wireless charging base. The perfect companion for late-night work sessions.",
        price: "৳10,680",
        imageUrl: "https://images.unsplash.com/photo-1534073828943-f801091a7d51?q=80&w=1000&auto=format&fit=crop",
        category: "Lighting"
    },
];
