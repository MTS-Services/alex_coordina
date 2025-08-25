import FixWhatSlowSection from '@/components/fixWhat-slow-section';
import HeroSection from '@/components/hero-section';
import HowItWorksSection from '@/components/howIt-works-section/page';
import HeroConnectedSection from '@/components/jero-connected-section/page';
import TemporaryWorksFeatureDuo from '@/components/temporary-works-featureDuo/page';

export default function Home() {
  return (
    <div>
      <HeroConnectedSection></HeroConnectedSection>
      <HeroSection></HeroSection>

      <TemporaryWorksFeatureDuo></TemporaryWorksFeatureDuo>
      <FixWhatSlowSection></FixWhatSlowSection>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
}
