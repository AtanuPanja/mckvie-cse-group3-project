import CustomerSection from "@/components/CustomerSection";
import Slide from "@/components/Slide";
import DetailsSection from "@/components/DetailsSection";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsSection from "@/components/RatingSection";

export default function Home() {
  const homeSliderData = [
    {
      heading: "Enhanced visibility and transparency",
      content:
        "Improve end-to-end visibility across the supply chain, providing stakeholders with real-time insights into the movement of goods, inventory levels, and production status for better decision-making.",
      image: "./business_deal.svg"
    },
    {
      heading: "Optimized logistics and distribution",
      content:
        "Optimize transportation routes, minimize lead times, and enhance overall distribution efficiency by leveraging advanced analytics, route planning, and technology integration within the supply chain network.",
      image: "./distribution.svg"
    },
    {
      heading: "Efficient inventory management",
      content:
        "Streamline inventory levels and reduce carrying costs by implementing real-time tracking and automation, ensuring optimal stock levels at each stage of the supply chain.",
      image: "./tracking.svg"
    }
  ];

  return (
    <main>
      {/* <Hero heading="Heading"/> */}
      <HeroSlider slides={homeSliderData} />
      <CustomerSection />
      <hr />
      <DetailsSection />
      <hr />
      <TestimonialsSection />
    </main>
  );
}
