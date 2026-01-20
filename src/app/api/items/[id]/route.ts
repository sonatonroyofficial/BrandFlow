import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // Validate ObjectId format
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid Item ID" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("brandflow");

        const item = await db.collection("items").findOne({ _id: new ObjectId(id) });

        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({
            ...item,
            id: item._id.toString(),
            _id: undefined
        });
    } catch (error) {
        console.error("Error reading item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
