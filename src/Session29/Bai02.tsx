import React, { useEffect, useState } from "react";

type ProductType = {
    id: string;
    product_name: string;
    image: string;
    price: number;
    created_at: string;
};

export default function Bai02() {
    const [products, setProducts] = useState<ProductType[]>([]);

    const getAllProduct = async () => {
        try {
            const response = await fetch("http://localhost:3001/product");
            const data = await response.json();
            console.log("API tra ve:", data);
            setProducts(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>Bài 2</div>
    );
}
