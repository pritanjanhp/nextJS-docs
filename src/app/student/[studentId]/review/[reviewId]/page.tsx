import { notFound, redirect } from "next/navigation";

let getRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function StudentReview({
  params
}: {
  params: { studentId: string; reviewId: string };
}) {
  const random = getRandom(2);
  if (random === 1) {
    throw new Error("Loading error");
  }

  const reviewId = params.reviewId;
  if (parseInt(reviewId) > 100) {
    // notFound();
    redirect("/student");
  }
  return (
    <div>
      <h1>Review page</h1>
      <p>
        Student ID: {params.studentId}
      </p>
      <p>
        Review ID: {params.reviewId}
      </p>
    </div>
  );
}
