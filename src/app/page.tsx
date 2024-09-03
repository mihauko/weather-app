import FeatureLeftImage from '../../public/background.jpeg';
import FeatureRightImage from '../../public/ImageRectanglePortet.jpg';

import CTA from '@/components/Example/cta';
import FeatureLeft from '@/components/Example/feature-left';
import FeatureRight from '@/components/Example/feature-right';
import Footer from '@/components/Example/footer';
import Hero from '@/components/Example/hero';
import { Separator } from '@/components/Separator';
import { Main } from '@/components/ui/example';
import * as m from '@/paraglide/messages';

const Home = () => {
  return (
    <Main>
      <Hero
        title={m.hero_title()}
        subtitle={m.hero_description()}
        cta_title={m.hero_cta_title()}
        cta_section_id={`#${m.contact_id()}`}
      />
      <Separator />
      <FeatureLeft
        featureLeftTitle={m.featureL_title()}
        featureLeftDescription={m.featureL_description()}
        featureLeftCtaId={m.contact_id()}
        featureLeftCtaTitle={m.cta_title()}
        featureLeftImage={FeatureLeftImage}
      />
      <Separator />
      <FeatureRight
        featureRightTitle={m.featureR_title()}
        featureRightDescription={m.featureR_description()}
        featureRightCtaUrl={'https://frontendme.pl'}
        featureRightCtaTitle={m.frontendmeCta()}
        featureRightImage={FeatureRightImage}
      />
      <Separator />
      {/* <FeatureSet /> */}
      <CTA
        title={m.cta_section_title()}
        description={m.cta_section_description()}
      />
      <Separator width="w-96" />
      <Footer />
    </Main>
  );
};

export default Home;
