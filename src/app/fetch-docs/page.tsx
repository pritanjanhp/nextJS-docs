// import Notfound from "../notFound";

// interface Post {
//   id: number;
//   title: string;
// }

// async function getPost(id: number) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
//     cache: "no-store"
//   });
//   const post: Post[] = await res.json();
//   console.log(post);
//   if (!post) Notfound();
//   return post;
// }

// export async function generateStaticParams() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "force-cache"
//   }).then(res => res.json());
//   console.log("static params", posts);

//   return posts.map((post: Post) => ({
//     id: String(post.id)
//   }));
// }

// export async function generateMetadata({
//   params
// }: {
//   params: Promise<{ id: number }>;
// }) {
//   const { id } = await params;
//   const post = await getPost(id);

//   return {
//     title: post.title
//   };
// }

// export default async function Page({
//   params
// }: {
//   params: Promise<{ id: number }>;
// }) {
//   const { id } = await params;
//   const post = await getPost(id);

//   return (
//     <article>
//       <h2>fetching docs</h2>
//       <h1>
//         {post.id}
//       </h1>
//       <h1>
//         {post.title}
//       </h1>
//     </article>
//   );
// }

interface Post {
  id: string;
  title: string;
  content: string;
}

export const revalidate = 10;

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();
  console.log(posts);
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    </main>
  );
}
