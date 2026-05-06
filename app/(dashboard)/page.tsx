import { HomeView } from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Developer",
  description: "A gallery of digital products crafted with focus and simplicity.",
};

export default function HomePage() {
  return <HomeView />;
}
