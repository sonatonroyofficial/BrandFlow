import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("brandflow");

    // Fetch all items from the 'items' collection
    // Convert _id to string id for frontend compatibility
    const items = await db.collection("items").find({}).toArray();

    const formattedItems = items.map(item => ({
      ...item,
      id: item._id.toString(),
      _id: undefined
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("Error reading items from DB:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("brandflow");

    const newItem = {
      name: body.name,
      price: body.price,
      category: body.category,
      imageUrl: body.imageUrl,
      description: body.description,
      createdAt: new Date()
    };

    const result = await db.collection("items").insertOne(newItem);

    return NextResponse.json({
      ...newItem,
      id: result.insertedId.toString()
    }, { status: 201 });

  } catch (error) {
    console.error("Error adding item to DB:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
