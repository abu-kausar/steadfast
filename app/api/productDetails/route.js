export async function GET() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/product/iphone-15-plus`);
    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch product details", error }),
      { status: 500 }
    );
  }
}