import { PropsWithChildren, createContext, useState } from "react";

const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const MenuProvider = ({ children }: PropsWithChildren) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Initial state is 'closed'
  
    // Function to toggle menu open state
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
  
    // The context value that will be supplied to any descendants of this component.
    const value = { isMenuOpen, toggleMenu, closeMenu };
  
    return (
      <MenuContext.Provider value={value}>
        {children}
      </MenuContext.Provider>
    );
  };

export default MenuContext;
