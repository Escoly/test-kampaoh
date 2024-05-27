"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import ListCard from "./listCard";

import KampaohBlackLogo from "@/public/kampaoh-logo-black.png";
import KampaohWhiteLogo from "@/public/kampaoh-logo-white.png";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/themeSwitch";
import { useGlobalState } from "@/app/context/globalStateContext";

export const Navbar = ({ defaultTheme }: { defaultTheme: string }) => {
  const { state } = useGlobalState();
  const { theme } = useTheme();
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  return (
    <Fragment>
      <Modal hideCloseButton={true} isOpen={isFavModalOpen}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Favoritos</ModalHeader>
          <ModalBody>
            {state.favs.length > 0
              ? state.favs.map((fav) => (
                  <ListCard
                    key={fav.id}
                    isDeletable={true}
                    isPressable={false}
                    item={fav}
                  />
                ))
              : "Todavía no hay favoritos"}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => setIsFavModalOpen(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <NextUINavbar className="flex" maxWidth="full" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-4 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              {currentTheme === "dark" ? (
                <Image
                  alt={"logo"}
                  height={250}
                  src={KampaohWhiteLogo}
                  width={250}
                />
              ) : (
                <Image
                  alt={"logo"}
                  height={250}
                  src={KampaohBlackLogo}
                  width={250}
                />
              )}
            </NextLink>
          </NavbarBrand>
          <NavbarItem className="ml-4">
            <div className="flex flex-row items-center">
              <i className="fa-solid fa-cat text-2xl mr-1" />
              <p className="text-2xl">{state.cats}</p>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
          <ul className="hidden lg:flex gap-4 justify-start items-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground", size: "lg" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem
            className="mr-4 cursor-pointer"
            onClick={() => {
              setIsFavModalOpen(true);
            }}
          >
            <div className="flex flex-row items-center">
              <i className="fa-solid fa-heart text-2xl mr-2" />
              <p className="text-2xl">{state.favs.length}</p>
            </div>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </Fragment>
  );
};
