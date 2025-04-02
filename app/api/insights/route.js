import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const interests = searchParams.get("interests"); // Get interests from query params
  const apiKey = process.env.NEWS_API_KEY; // Access API key from environment

  if (!interests) {
    return new Response(JSON.stringify({ message: "No interests provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const query = interests.split(",").join(" OR "); // Format query for API

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );

    const articles = response.data.articles.slice(0, 5).map((article) => ({
      title: article.title,
      description: article.description || "No description available",
      url: article.url,
      imageUrl: article.urlToImage,
    }));

    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching insights:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch industry insights" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
