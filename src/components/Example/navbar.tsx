'use client';
import * as React from 'react';
import { MenuIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import Logo from '../logo';
import ModeToggle from './mode-toggle';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose } from '@/components/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuItem,
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
import * as m from '@/paraglide/messages';

const links = [
  {
    href: `#${m.homeId()}`,
    label: m.nav_home(),
  },
  {
    href: `#${m.featureL_id()}`,
    label: m.nav_featureL_text(),
  },
  {
    href: `#${m.featureR_id()}`,
    label: m.nav_featureR_text(),
  },
  {
    href: `#${m.contact_id()}`,
    label: m.nav_contact(),
  },
];

export function NavBar() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-50 mt-[2rem]">
      <div className="relative flex w-[95%] justify-between rounded-xl border border-white/20 bg-white p-4 shadow-lg  md:w-[720px] dark:border-zinc-900 dark:bg-black dark:bg-opacity-80 dark:backdrop-blur dark:backdrop-blur">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              {links.map((link, index) => (
                <DialogClose asChild key={index}>
                  <Link scroll={false} href={link.href}>
                    <Button
                      onClick={() => jumpToRelevantDiv(link.href)}
                      variant="outline"
                      className="w-full"
                    >
                      {link.label}
                    </Button>
                  </Link>
                </DialogClose>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Dialog>
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <Logo className="opacity-75" isLight={theme !== 'dark'} />
          </Link>
          <NavigationMenu className="justify-between">
            <NavigationMenuList className="max-[825px]:hidden ">
              {links.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={link.href} legacyBehavior passHref scroll={false}>
                    <NavigationMenuLink>
                      <Button
                        onClick={() => jumpToRelevantDiv(link.href)}
                        variant="ghost"
                      >
                        {link.label}
                      </Button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex">
            <div className="mr-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           href={props.href}
//           ref={ref}
//           className={cn(
//             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = 'ListItem';
