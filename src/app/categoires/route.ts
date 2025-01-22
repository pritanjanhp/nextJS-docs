export async function GET() {
  const categories = [
    { id: 1, name: "asdf" },
    { id: 2, name: "asd" },
    { id: 3, name: "as" },
    { id: 4, name: "a" }
  ];
  return Response.json(categories);
}
