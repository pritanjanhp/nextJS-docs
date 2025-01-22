import Image from "next/image";
// import sachin from "../../../../public/assets/images/sachin.jpeg";
import sachin from "../../../../public/assets/images/sachin.jpeg";

const Page = () => {
  return (
    <div>
      <h1>Page</h1>
      <Image src={sachin} alt="sachin Tendulkar" />
      {/* <Image
        src="https://s3.amazonaws.com/my-bucket"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
    </div>
  );
};

export default Page;
