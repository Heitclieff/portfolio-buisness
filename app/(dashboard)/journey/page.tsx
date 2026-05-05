import { JourneyView } from "@/features/journey";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "A quiet record of work, study, and the journey of building software with care.",
};

export default function PostsPage() {
  return <JourneyView />;
}
