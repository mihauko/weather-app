'use client';

// React and Next.js imports
// Third-party library imports
import Balancer from 'react-wrap-balancer';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import AnimatedShinyText from '../magicui/animated-shiny-text';
import Meteors from '../magicui/meteors';

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
    <Section
      className="py-16 md:py-24 h-screen flex flex-col items-center justify-center text-center relative"
      id={`#${m.homeId()}`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Meteors number={30} />
      </div>

      <Container className="flex flex-col items-center text-center relative  overflow-hidden ">
        <h1 className="!mb-0 font-bold tracking-tighter text-4xl md:text-5xl   pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <Balancer>{title}</Balancer>
        </h1>
        <h3 className="text-muted-foreground text-lg/relaxed sm:text-xl/relaxed tracking-normal pt-4  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <Balancer>{subtitle}</Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button
            variant="outline"
            className="font-semibold justify-center border border-white border-input bg-background hover:text-gray-900"
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
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ {cta_title}</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
