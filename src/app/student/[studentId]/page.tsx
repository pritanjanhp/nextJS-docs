import { Metadata } from "next";

type Props = {
  params: Promise<{ studentId: string }>;
};

export const generateMetaData = async ({
  params
}: Props): Promise<Metadata> => {
  const id = (await params).studentId;
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`asdff ${id}`);
    }, 100);
  });
  console.log(id);
  console.log(title);
  return {
    title: `student ${id}`
  };
};

export default async function page({
  params
}: {
  params: Promise<{ studentId: string }>;
}) {
  const studentId = (await params).studentId;
  // console.log(studentId);
  return (
    <h1>
      Student child page {studentId}
    </h1>
  );
}
