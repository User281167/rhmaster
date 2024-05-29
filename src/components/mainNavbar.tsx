"use client";

import { Link } from "@nextui-org/link";
import { Button, ButtonGroup } from "@nextui-org/button";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";

export default function MainNavbar() {
    return (
        <Navbar
            isBlurred={false}
            className="bg-trasparent absolute inset-x-0 top-0 z-10 px-20"
            height={"6em"}
            maxWidth="full"
        >
            <NavbarBrand>
                <Link href="/">
                    <img src="/icon.png" alt="" />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Button color="secondary" variant="bordered">
                        Inicia Sesión
                    </Button>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/crear-cuenta">
                        <Button color="secondary" variant="bordered">
                            Crear una cuenta
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
