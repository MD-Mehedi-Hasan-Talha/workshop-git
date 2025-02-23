import { NextResponse } from "next/server";
import productsData from "@/data/products.json";

// get product by id
export const GET = async (_req, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, message: "id need" });
    }
    const findProduct = productsData.products.find(
      (prod) => prod.id === Number(id)
    );

    return NextResponse.json({ success: true, findProduct });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};

// delete product by id
export const DELETE = async (_req, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, message: "id need" });
    }
    const findProduct = productsData.products.filter(
      (prod) => prod.id !== Number(id)
    );
    const deleteProduct = productsData.products.find(
      (prod) => prod.id === Number(id)
    );

    productsData.products = findProduct;

    return NextResponse.json({
      success: true,
      message: "Delete successfully",
      deleteProduct,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};

// product update by id
export const PUT = async (req, { params }) => {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const productIndex = productsData.products.findIndex(
      (prod) => prod.id === Number(id)
    );

    if (productIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    const updatedData = await req.json();
    const { name, price, description, category, image } = updatedData;

    // Update the product
    productsData.products[productIndex] = {
      ...productsData.products[productIndex],
      name: name || productsData.products[productIndex].name,
      price: price || productsData.products[productIndex].price,
      description:
        description || productsData.products[productIndex].description,
      category: category || productsData.products[productIndex].category,
      image: image || productsData.products[productIndex].image,
    };

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      updatedProduct: productsData.products[productIndex],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
