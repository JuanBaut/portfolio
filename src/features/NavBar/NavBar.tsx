import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="mx-auto w-[50%]">
      <NavigationMenu className="mx-auto my-4">
        <NavigationMenuList>
          <Link to="/">
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              about
            </NavigationMenuItem>
          </Link>

          <Link to="/projects">
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              projects
            </NavigationMenuItem>
          </Link>

          <Link to="/photos">
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              photos
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
