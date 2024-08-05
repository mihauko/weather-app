'use client';

// React and Next.js imports
import Image, { StaticImageData } from 'next/image';

import { Button } from '@/components/ui/button';
// UI component imports
import * as Craft from '@/components/ui/example';
import { Link } from '@/lib/i18n';
import { jumpToRelevantDiv } from '@/lib/scrollToId';
import * as m from '@/paraglide/messages';

interface FeatureLeftProps {
  featureLeftTitle: string;
  featureLeftDescription: string;
  featureLeftImage: StaticImageData;
  featureLeftCtaTitle: string;
  featureLeftCtaId: string;
}

const Feature = ({
  featureLeftTitle,
  featureLeftDescription,
  featureLeftImage,
  featureLeftCtaTitle,
  featureLeftCtaId,
}: FeatureLeftProps) => {
  return (
    <Craft.Section id={`#${m.featureL_id()}`}>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border p-4">
          <Image
            width={500}
            height={500}
            src={featureLeftImage.src}
            alt="placeholder"
            className="fill object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 text-2xl md:text-3xl">{featureLeftTitle}</h3>
          <p className="font-light leading-[1.4] opacity-70">
            {featureLeftDescription}
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button
              className="w-fit"
              asChild
              onClick={() => {
                jumpToRelevantDiv(featureLeftCtaId);
              }}
            >
              <Link scroll={false} href={`#${featureLeftCtaId}`}>
                {featureLeftCtaTitle}
              </Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
