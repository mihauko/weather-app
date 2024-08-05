'use client';

// React and Next.js imports
// Icon imports
// import { Github, Twitter, Facebook } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
// Third-party library imports
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import logoDark from '../../../public/logo.png';
// Asset imports
import logoLight from '../../../public/logo_white.png';
// UI component imports
import { Button } from '../ui/button';

// Local component imports
import { Container, Section } from '@/components/ui/example';
import { useMounted } from '@/hooks/use-mounted';
import { Link } from '@/lib/i18n';

export default function Footer() {
  const { theme } = useTheme();
  const isMounted = useMounted();
  return (
    <>
      <footer className="w-full">
        <Section className="!py-0">
          <Container className="grid gap-12 md:grid-cols-[1fr_0.5fr_0.5fr]">
            <div className="not-prose flex flex-col gap-6">
              <Link href="/">
                <h3 className="sr-only">FrontendMe Michał Winiarski</h3>
                <Image
                  src={
                    !isMounted
                      ? logoDark.src
                      : theme === 'light'
                        ? logoDark.src
                        : logoLight.src
                  }
                  width={120}
                  height={27.27}
                  alt="Logo"
                  className="transition-all hover:opacity-75"
                />
              </Link>
              <p>
                <Balancer>
                  <span className="block text-md font-semibold py-1">
                    P: <a href={`tel:+48732256487`}>+48 732 256 487</a>
                  </span>
                  <span className=" py-1 font-semibold text-md block">
                    E:{' '}
                    <a href={`mailto:michal.winiarski@frontendme.pl`}>
                      michal.winiarski@frontendme.pl
                    </a>
                  </span>
                  <span className=" py-1 font-semibold text-md block">
                    NIP: 6793198861
                  </span>
                </Balancer>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {/* <h5 className="font-semibold">Mapa Strony</h5> */}
              {/* <Link href="/przykladowa-strona-wizytowka">
                Przykładowa strona z rejestracją
              </Link> */}
              {/* <Link href="/kalkulator-rekompensaty-40euro">
                Kalkulator rekompensaty
              </Link>
              <Link href="/just-euro-2024">Just Euro 2024</Link> */}
            </div>
            {/* <div className="flex flex-col gap-2">
              <h5>Legal</h5>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div> */}
          </Container>

          <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="p-1 mx-auto flex content-center justify-center"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href={'https://linkedin.com/in/michał-winiarski-2aa00a70/'}
                >
                  <FaLinkedin size={24} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="p-1 mx-auto flex content-center justify-center"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href={`https://www.facebook.com/profile.php?id=61560479227995`}
                >
                  <FaFacebook size={24} />
                </a>
              </Button>
              <Button
                className="p-1 mx-auto flex content-center justify-center"
                variant="outline"
                size="icon"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href={`https://github.com/mwiniarsk`}
                >
                  <FaGithub size={24} />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">
              © <a href="https://frontendme.pl">FrontendMe Michał Winiarski</a>
              . All rights reserved {new Date().getFullYear()}.
            </p>
          </Container>
        </Section>
      </footer>
    </>
  );
}
