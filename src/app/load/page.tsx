export default async function Blog() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("delay");
    }, 2000);
  });
  console.log("page");
  return (
    <div>
      <h1>My page...</h1>
    </div>
  );
}
