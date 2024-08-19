import React, { useState } from "react";
import ShoppingList from "./shopingList";
import CategoryButton from "./CategoryButton";
import Navbar from "../Navbar/Navbar";
import { phoneList, laptopList, ipadList } from "../data/shopingData";
import MainImage from "../images/MainImage.webp";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryItems = () => {
    switch (selectedCategory) {
      case "phones":
        return phoneList;
      case "laptops":
        return laptopList;
      case "ipads":
        return ipadList;
      default:
        return [];
    }
  };

  console.log("Selected Category:", selectedCategory);
  console.log("Items to Display:", getCategoryItems());

  return (
    <>
      <Navbar />
      <div className="flex items-center w-full h-[500px] mt-[60px] bg-black">
        <div className="w-1/2 p-8 ml-[20px]">
          <h2 className="text-3xl font-bold text-white mb-4 display-flex justify-center">
            Discover Our Electrical Devices
          </h2>
          <p className="text-white mb-4">
            Explore our wide range of phones, laptops, and iPads. Whether you
            are looking for the latest technology or a budget-friendly option,
            we have something for everyone. Check out our collection and find
            the perfect device for your needs.
          </p>
          <Link
            to="#shopping-list-section"
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded ml-[150px]"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("shopping-list-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Shop Now
          </Link>
        </div>
        <div
          className="w-1/2 h-full bg-no-repeat ml-[100px]"
          style={{ backgroundImage: `url(${MainImage})` }}
        >
          <img
            src={MainImage}
            alt="Main"
            className="absolute inset-0 object-cover w-full h-full opacity-0"
          />
        </div>
      </div>
      <div id="shopping-list-section" className="pt-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Shopping List
          </h1>
          <div className="mb-8 flex justify-center gap-4">
            <CategoryButton
              category="phones"
              onClick={() => setSelectedCategory("phones")}
            />
            <CategoryButton
              category="laptops"
              onClick={() => setSelectedCategory("laptops")}
            />
            <CategoryButton
              category="ipads"
              onClick={() => setSelectedCategory("ipads")}
            />
          </div>
          {selectedCategory ? (
            <ShoppingList items={getCategoryItems()} />
          ) : (
            <p className="text-gray-600 text-center">
              Please select a category to view the shopping list.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
