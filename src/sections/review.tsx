"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Home Pipeline",
    username: "@homepipeline",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "./logo4.jpg",
  },
  {
    name: "InfaXon",
    username: "@infaXon",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "./logo5.jpg",
  },
  {
    name: "Inara",
    username: "@inara",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./logo6.jpg",
  },
  {
    name: "Verlanie",
    username: "@verlaine",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./logo3.jpg",
  },
  {
    name: "pink",
    username: "@The natural care",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./Logos-04.png",
  },
  {
    name: "Zeeri",
    username: "@zeeri",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./logo1.jpg",
  },
  {
    name: "Mithang Mantra",
    username: "@mithang mantra",
    body: "This service is a game-changer! Highly recommend it to anyone.",
    img: "./logo2.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  // The most common reason the Marquee animation doesn't work is missing the "use client" directive at the top of the file.
  // This is required for client-side interactivity and animation in Next.js app directory.
  // Make sure your Marquee component from magicui is implemented correctly and supports animation.
  // Also, ensure that your Tailwind config includes the necessary keyframes and animation utilities if Marquee relies on them.
  // If you still have issues, check the Marquee component source for any required props or context.

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 mt-4 text-center font-jakarta">Testimonials</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default MarqueeDemo