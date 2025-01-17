import FetchAPI from "@/components/FetchAPI";

const FetchPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-red-700 text-3xl font-bold">Fetch API</h1>
      <FetchAPI />
    </div>
  );
};

export default FetchPage;
