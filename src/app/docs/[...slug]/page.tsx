export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string []}>;
}){
  const {slug} = await params;
  if(slug?.length === 0) return null;
  if(slug?.length === 1) return <h1>Docs {slug[0]}</h1>;
  if(slug?.length === 2) return <h1>Docs {slug[0]} {slug[1]}</h1>;
  return <h1>Docs</h1>
};
