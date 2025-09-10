import FeatureRail from "@/components/hero-section";
import HowItWorksSection from "@/components/howIt-works-section/page";
import HeroConnectedSection from "@/components/jero-connected-section/page";
import FixYouDown from "@/components/shareComponents/FixYouDown";
import MultipleSection from "@/components/shareComponents/MultipleSection";

const page = () => {
  return (
    <div>
      <HeroConnectedSection
        description={
          "Built with contractors, for contractors. Coordeck makes coordination easier, connects your teams, and gives you control."
        }
        image={"/images/hero.png"}
        title={"Construction Simplified."}
      />
      <FeatureRail />
      <MultipleSection />
      <FixYouDown />
      <HowItWorksSection />
    </div>
  );
};

export default page;
