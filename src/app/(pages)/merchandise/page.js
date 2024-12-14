"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const products = [
  {
    id: 1,
    name: "LeetCode T-Shirt",
    description: "Premium quality T-shirt with LeetCode logo.",
    price: "$25",
    image: "/images/tshirt.jpg", // Example image path
  },
  {
    id: 2,
    name: "LeetCode Mug",
    description: "Ceramic mug for your coffee breaks.",
    price: "$15",
    image: "/images/mug.jpg", // Example image path
  },
  {
    id: 3,
    name: "LeetCode Hoodie",
    description: "Stay warm with our cozy hoodie.",
    price: "$50",
    image: "/images/hoodie.jpg", // Example image path
  },
  {
    id: 4,
    name: "LeetCode Cap",
    description: "Stylish cap to complement your outfit.",
    price: "$20",
    image: "/images/cap.jpg", // Example image path
  },
  {
    id: 5,
    name: "Mouse Pad",
    description: "Smooth surface mouse pad with LeetCode branding.",
    price: "$10",
    image: "/images/mousepad.jpg", // Example image path
  },
  {
    id: 6,
    name: "Notebook",
    description: "Elegant notebook for jotting down ideas.",
    price: "$18",
    image: "/images/notebook.jpg", // Example image path
  },
  {
    id: 7,
    name: "Exclusive Kit",
    description: "Exclusive bundle with all merchandise items.",
    price: "$120",
    image: "/images/exclusive-kit.jpg", // Example image path
  },
];

const page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold mt-2">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full">
                Reedem
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
