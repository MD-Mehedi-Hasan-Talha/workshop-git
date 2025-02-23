import { NextResponse } from "next/server";
import products from "@/data/products.json";

// Get all products from local file
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: "Data fetched successfully",
      products: products.products || products // Handle both array formats
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong"
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const product = await req.json();
    const { name, price, description, category, image } = product;

    if (!name || !price || !description || !category || !image) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required"
        },
        { status: 400 }
      );
    }

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      price,
      description,
      category,
      image,
      createdAt: new Date().toISOString()
    };

    // Ensure products.products exists
    if (!products.products) {
      products.products = [];
    }
    
    products.products.push(newProduct);

    return NextResponse.json(
      {
        success: true,
        message: "Product saved successfully",
        product: newProduct
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Something went wrong"
      },
      { status: 500 }
    );
  }
}
