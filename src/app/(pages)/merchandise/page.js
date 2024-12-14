"use client";
import Madel from "@/components/Madel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Cleverrank T-Shirt",
    description: "Premium quality T-shirt with Cleverrank logo.",
    price: "250",
    image: "/store/tshirt.jpg", // Example image path
    paper: "100",
  },
  {
    id: 2,
    name: "Cleverrank Mug",
    description: "Ceramic mug for your coffee breaks.",
    price: "150",
    image: "/store/cup.png", // Example image path
    paper: "100",
  },
  {
    id: 3,
    name: "Cleverrank Hoodie",
    description: "Stay warm with our cozy hoodie.",
    price: "500",
    image: "/store/hoodie.png", // Example image path
    paper: "100",
  },
  {
    id: 4,
    name: "Cleverrank Cap",
    description: "Stylish cap to complement your outfit.",
    price: "200",
    image: "/store/cap.png", // Example image path
    paper: "100",
  },
  {
    id: 5,
    name: "Mouse Pad",
    description: "Smooth surface mouse pad with Cleverrank branding.",
    price: "100",
    image: "/store/mousepad.jpg", // Example image path
    paper: "100",
  },
  {
    id: 6,
    name: "Notebook",
    description: "Elegant notebook for jotting down ideas.",
    price: "180",
    image: "/store/notebook.jpg",
    paper: "100",
  },
];

const page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Merchandise</h1>
      <p className="w-[45rem] mb-6 text-gray-500">
        Redeem your hard-earned points for exclusive merchandise like branded
        apparel, tech gadgets, and research-themed accessories. Celebrate your
        academic journey with every reward!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <Card key={product.id} className="shadow-sm w-72 ">
            <CardHeader>
              <div className=" h-56 w-full rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" object-contain rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="">
              <h2 className=" font-semibold">{product.name}</h2>
              <div className="">
                <p className="text-gray-600 text-xs h-4 ">
                  {product.description}
                </p>
              </div>
            </CardContent>
            <CardContent className=" flex justify-between ">
              <div className=" font-bold text-center flex items-center gap-4">
                <div className="flex gap-1 items-center">
                  <span className="">
                    <Newspaper className="size-4" />
                  </span>
                  <span>{product.paper}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="">
                    <Madel />
                  </span>
                  <span>{product.price}</span>
                </div>
              </div>
              <Button>Redeem</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
