import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	LinkIcon,
} from "@nextui-org/react";


import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { PiSoundcloudLogoDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">JMATBB</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
			<NavbarItem className=" sm:flex gap-2">
					<Link isExternal href={siteConfig.links.soundcloud}>
						<PiSoundcloudLogoDuotone/>
					</Link>
				</NavbarItem>
				<NavbarItem className=" sm:flex gap-2">
					<Link color="foreground" isExternal href="mailto:band@jmatbb.ch">
						<MdEmail />
					</Link>
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
