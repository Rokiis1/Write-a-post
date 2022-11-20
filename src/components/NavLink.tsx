import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

type NavLinkProps = PropsWithChildren<LinkProps>;

const NavLink = (props: NavLinkProps) => <Link {...props} />;

export default NavLink;
