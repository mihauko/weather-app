'use client';
import * as React from 'react';
import { MenuIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import Logo from '../logo';
import { LanguageSwitcher } from '../navbar/language-switcher';
import ModeToggle from './mode-toggle';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose } from '@/components/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@/lib/i18n';
import { jumpToRelevantDiv } from '@/lib/scrollToId';
import { cn } from '@/lib/utils';
import * as m from '@/paraglide/messages';

export function NavBar() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-50 mt-[2rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-4 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            {/* <SheetHeader>
              <SheetTitle>FrontendMe</SheetTitle>
              <SheetDescription>{m.mobile_navbar_title()}</SheetDescription>
            </SheetHeader> */}
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Button
                  asChild
                  onClick={() => jumpToRelevantDiv(`#${m.nav_home()}`)}
                  variant="outline"
                  className="w-full"
                >
                  <Link scroll={false} href="/">
                    {m.nav_home()}
                  </Link>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Link scroll={false} href={`#${m.nav_featureL_text()}`}>
                  <Button
                    onClick={() => jumpToRelevantDiv(`#${m.featureL_id()}`)}
                    variant="outline"
                    className="w-full"
                  >
                    {m.nav_featureL_text()}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link scroll={false} href={`#${m.nav_featureR_text()}`}>
                  <Button
                    onClick={() => jumpToRelevantDiv(`#${m.featureR_id()}`)}
                    variant="outline"
                    className="w-full"
                  >
                    {m.nav_featureR_text()}
                  </Button>
                </Link>
                <Button
                  onClick={() => jumpToRelevantDiv(`#${m.contact_id()}`)}
                  variant="outline"
                  className="w-full"
                >
                  <Link scroll={true} href={`#${m.contact_id()}`}>
                    {m.nav_contact()}
                  </Link>
                </Button>
              </DialogClose>
              <ModeToggle />
              <LanguageSwitcher />
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/">
              <Logo className="opacity-75" isLight={theme !== 'dark'} />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          <Link href={`#${m.homeId()}`} scroll={false}>
            <Button
              onClick={() => jumpToRelevantDiv(`#${m.homeId()}`)}
              variant="ghost"
            >
              <>{m.nav_home()}</>
            </Button>
          </Link>
          <Link href={`#${m.featureL_id()}`} scroll={false}>
            <Button
              onClick={() => jumpToRelevantDiv(`#${m.featureL_id()}`)}
              variant="ghost"
            >
              <>{m.nav_featureL_text()}</>
            </Button>
          </Link>
          <Link href={`#${m.featureR_id()}`} scroll={false}>
            <Button
              onClick={() => jumpToRelevantDiv(`#${m.featureR_id()}`)}
              variant="ghost"
            >
              <>{m.nav_featureR_text()}</>
            </Button>
          </Link>
          <Link href={`#${m.contact_id()}`} scroll={false}>
            <Button
              onClick={() => jumpToRelevantDiv(`#${m.contact_id()}`)}
              variant="ghost"
            >
              <>{m.nav_contact()}</>
            </Button>
          </Link>
        </div>
        <div className="flex">
          <div className="mr-2">
            <ModeToggle />
          </div>
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
