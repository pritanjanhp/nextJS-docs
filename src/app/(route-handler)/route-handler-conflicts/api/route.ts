import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  request.cookies.has("theme"); // => true
  request.cookies.delete("theme");
  request.cookies.has("theme"); // => false

  const cokkieStore = await cookies();
  cokkieStore.set("resultsPerPage", "20");
  console.log(cokkieStore.get("resultsPerPage"));

  return new Response("<h1> Route conflict data </h1>", {
    headers: {
      "content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  });
}
