 import { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Cart } from "./Cart";

import { AiOutlineShoppingCart } from "react-icons/ai";

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';

export default function Header({handleMinused, count}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);  
  const [multy, setMulty] = useState(0);

  return (
    <>
      <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer" />
              </li>
            )}
            {isOpen && (
              <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img src={close} alt="" className="cursor-pointer w-6" />
              </li>
            )}
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>

          <nav className={isOpen && "open"}>
            <ul className="">
              <li><a href="/colections"> Collections </a></li>
              <li> <a href="/men"> Men</a></li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center justify-start gap-4">
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={count} color="error">
                <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                  <AiOutlineShoppingCart />
                </button>
                </Badge>
            </IconButton>
            </Box>
           
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <li>{cartIsOpen && <Cart handleMinused={handleMinused} count={count} multy={multy} setMulty={setMulty}/>}</li>
           
            </IconButton>
            </Box>
            <li>
              <img src={avatar} alt="" className="w-12" />
            </li>
          </ul>
        </div>

        
      </header>
    </>
  );
}