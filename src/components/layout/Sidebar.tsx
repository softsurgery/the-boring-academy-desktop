import * as React from 'react';
import { ChevronDownIcon, Home, ListVideo, Mic2, Music, Play, RadioIcon, SquareStack, User } from 'lucide-react';
import cn from 'clsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ScrollArea } from '../ui/scroll-area';

type IMenu = {
  label: string;
  name: string;
  icon: React.ReactNode;
  submenu?: Submenu[];
  href: string;
};

type Submenu = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export default function SidebarMenu() {
  const menus: IMenu[] = [
    {
      label: 'Discover',
      name: 'Home',
      icon: <Home size={15} className="mr-2" />,
      href: '/'
    },
    {
      label: 'Discover',
      name: 'Browse',
      icon: <SquareStack size={15} className="mr-2" />,
      href: '/browse'
    },
    {
      label: 'Discover',
      name: 'Radio',
      icon: <RadioIcon size={15} className="mr-2" />,
      href: '/radio'
    },
    {
      label: 'Library',
      name: 'Playlist',
      icon: <Play size={15} className="mr-2" />,
      href: '/playlist',
      submenu: [
        {
          name: 'Playlist 1',
          icon: <ListVideo size={15} className="mr-2" />,
          href: '/playlist/1'
        },
        {
          name: 'Playlist 2',
          icon: <ListVideo size={15} className="mr-2" />,
          href: '/playlist/2'
        },
        {
          name: 'Playlist 3',
          icon: <ListVideo size={15} className="mr-2" />,
          href: '/playlist/3'
        }
      ]
    },
    {
      label: 'Library',
      name: 'Songs',
      icon: <Music size={15} className="mr-2" />,
      href: '/songs'
    },
    {
      label: 'Library',
      name: 'Made for You',
      icon: <User size={15} className="mr-2" />,
      href: '/made-for-you'
    },
    {
      label: 'Library',
      name: 'Artist',
      icon: <Mic2 size={15} className="mr-2" />,
      href: '/artist'
    }
  ];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  return (
    <ScrollArea className="h-screen lg:w-1/4 md:w-1/3 sm:w-full rounded-md">
      <div className="md:px-4 sm:p-0 mt-5">
        {uniqueLabels.map((label, index) => (
          <React.Fragment key={label}>
            {label && (
              <p
                className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${
                  index > 0 ? 'mt-10' : ''
                }`}
              >
                {label}
              </p>
            )}
            {menus
              .filter((menu) => menu.label === label)
              .map((menu) => (
                <React.Fragment key={menu.name}>
                  {menu.submenu && menu.submenu.length > 0 ? (
                    <Accordion
                      key={menu.name}
                      type="single"
                      className="mt-[-10px] mb-[-10px] p-0 font-normal"
                      collapsible
                    >
                      <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                        <AccordionTrigger>
                          <a
                            key={menu.name}
                            href={menu.href}
                            className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md"
                          >
                            <div className={cn('flex justify-between w-full [&[data-state=open]>svg]:rotate-180')}>
                              <div className="flex">
                                <div className="w-6">{menu.icon}</div>
                                {menu.name}
                              </div>
                              <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                            </div>
                          </a>
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.submenu.map((submenu) => (
                            <a
                              key={submenu.name}
                              href={submenu.href}
                              className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md"
                            >
                              <div className="w-6">{submenu.icon}</div>
                              {submenu.name}
                            </a>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <div key={menu.name}>
                      <a
                        href={menu.href}
                        className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md"
                      >
                        <div className="w-6">{menu.icon}</div>
                        {menu.name}
                      </a>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
