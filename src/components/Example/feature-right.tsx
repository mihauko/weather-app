'use client';

// React and Next.js imports

import Image, { StaticImageData } from 'next/image';

import { Button } from '@/components/ui/button';
// UI component imports
import { Container, Section } from '@/components/ui/example';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

interface FeatureRightProps {
  featureRightTitle: string;
  featureRightDescription: string;
  featureRightCtaUrl: string;
  featureRightCtaTitle: string;
  featureRightImage: StaticImageData;
}

const Feature = ({
  featureRightTitle,
  featureRightDescription,
  featureRightCtaUrl,
  featureRightCtaTitle,
  featureRightImage,
}: FeatureRightProps) => {
  return (
    <Section id={`#${m.featureR_id()}`}>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 text-2xl md:text-3xl">{featureRightTitle}</h3>
          <p className="font-light leading-[1.4] opacity-70">
            {featureRightDescription}
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit px-0" variant="link" asChild>
              <Link href={featureRightCtaUrl}>{featureRightCtaTitle}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border p-4">
          <Image
            width={500}
            height={500}
            src={featureRightImage.src}
            alt="placeholder"
            className="fill object-cover rounded-lg"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
