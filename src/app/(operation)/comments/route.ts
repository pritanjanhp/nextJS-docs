import { request } from "http";
import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filterComment);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
    author: comment.author
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201
  });
}
