import Link from "next/link";

export default async function Articles({
  params,
  searchParams
}: {
  params: Promise<{ articlesId: number }>;
  searchParams: Promise<{ lang: "en" | "es" | "hi" }>;
}) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>
        news Articles {articlesId}{" "}
      </h1>
      <p>
        article reading in language {lang}
      </p>

      <div>
        <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
        <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articlesId}?lang=hi`}>Hindi</Link>
      </div>
    </div>
  );
}
