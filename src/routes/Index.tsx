import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="text-white">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Plant Cell Game
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Learn the names of the organelles!
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6 pb-6">
        If you correctly label all the organelles, you'll see a magical cellular
        spectacular!
      </p>
      <Button
        asChild
        className="bg-green-500"
        onClick={() => console.log(dayjs().format("HH:mm:ss"))}
      >
        <Link
          to={"/game"}
          className="scroll-m-20 text-xl font-semibold tracking-tight"
        >
          Play!
        </Link>
      </Button>
      <p className="leading-7 [&:not(:first-child)]:mt-6 italic">
        Open this game using your laptop for the most optimal experience.
      </p>
    </main>
  );
}
