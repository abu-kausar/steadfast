export async function GET() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/categories`);
    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch categories", error }),
      { status: 500 }
    );
  }
}