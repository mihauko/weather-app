'use client';

// React and Next.js imports
// Third-party library imports
import Balancer from 'react-wrap-balancer';

import { Button } from '@/components/ui/button';
// Local component imports
import { Container, Section } from '@/components/ui/example';
import { Link } from '@/lib/i18n';
// Asset imports
import { jumpToRelevantDiv } from '@/lib/scrollToId';
import * as m from '@/paraglide/messages';

const Hero = ({
  title,
  subtitle,
  cta_title,
  cta_section_id,
}: {
  title: string;
  subtitle: string;
  cta_title: string;
  cta_section_id: string;
}) => {
  return (
    <Section className="py-16 md:py-24" id={`#${m.homeId()}`}>
      <Container className="flex flex-col items-center text-center">
        <h1 className="!mb-0 font-bold tracking-tighter text-4xl md:text-5xl">
          <Balancer>{title}</Balancer>
        </h1>
        <h3 className="text-muted-foreground text-lg/relaxed sm:text-xl/relaxed tracking-normal pt-4">
          <Balancer>{subtitle}</Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button
            variant="outline"
            className="font-semibold justify-center border border-white border-input bg-background hover:bg-white hover:text-gray-900"
            asChild
            onClick={() => {
              jumpToRelevantDiv(cta_section_id);
            }}
          >
            <Link
              className="text-gray-400"
              scroll={false}
              href={`#${cta_section_id}`}
            >
              {cta_title}
            </Link>
          </Button>
          {/* <Button
            className="font-semibold justify-center border border-white border-input bg-background hover:bg-white hover:text-gray-900"
            asChild
            onClick={() => {
              jumpToRelevantDiv('kalkulator');
            }}
          >
            <Link scroll={false} href="#kalkulator">
              Idę wyliczać -{'>'}
            </Link>
          </Button> */}
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
