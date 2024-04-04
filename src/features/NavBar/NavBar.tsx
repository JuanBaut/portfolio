import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar: React.FC = () => {
  return (
    <div className="mx-auto w-[50%]">
      <NavigationMenu className="mx-auto my-4">
        <NavigationMenuList>

          <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                about
              </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                projects
              </NavigationMenuLink>
          </NavigationMenuItem>
          
          <Link to={"/photos"}>
          <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                photos
              </NavigationMenuLink>
          </NavigationMenuItem>
          </Link>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
