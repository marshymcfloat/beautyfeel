import Customer from "../../../../lib/models/Customer";

async function GET(req) {
  try {
    const url = new URL(req.url);
    const customerName = url.searchParams.get("customerName");

    if (!customerName) {
      return new Response(
        JSON.stringify({ message: "No customer name provided", customers: [] }),
        { status: 200 } // Return 200 with an empty array
      );
    }

    const customers = await Customer.find({
      name: { $regex: `^${customerName}`, $options: "i" }, // ^ indicates "starts with"
    }).limit(5); // Limit to 5 customers

    return new Response(JSON.stringify({ message: "success", customers }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return new Response(
      JSON.stringify({
        message: "There was an error in fetching customer",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export { GET };
