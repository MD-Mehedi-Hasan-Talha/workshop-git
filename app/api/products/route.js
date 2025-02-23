import { NextResponse } from "next/server";
import products from "@/data/products.json";

// getall product from local file
export const GET = async (req, res) => {
  try {
    return NextResponse.json({
      success: true,
      message: "Data fetch successfully",
      products,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const POST = async (req, res) => {
  try {
    const product = await req.json();
    const { name, price, description, category, image } = product;

    if (!name || !price || !description || !category || !image) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }
    const newProduct = {
      id: crypto.randomUUID(),
      name,
      price,
      description,
      category,
      image,
    };
    products.products.push(newProduct);

    return NextResponse.json({
      success: true,
      message: "Product save successfully",
      newProduct,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
