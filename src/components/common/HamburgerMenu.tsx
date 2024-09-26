// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";

// const ClassProps = {
//   iconSize: "24",
//   iconClass: "text-xl text-gray-600 cursor-pointer",
// };

// const HamburgerMenu: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Animation variants for the icons
//   const variants = {
//     opened: {
//       rotate: 90,
//       opacity: 1,
//     },
//     closed: {
//       rotate: 0,
//       opacity: 1,
//     },
//     initial: {
//       rotate: 0,
//       opacity: 0,
//     },
//   };

//   return (
//     <div onClick={() => setIsOpen(!isOpen)}>
//       <motion.div
//         initial="initial"
//         animate={isOpen ? "opened" : "closed"}
//         variants={variants}
//         className={ClassProps.iconClass}
//       >
//         {isOpen ? (
//           <FaTimes size={parseInt(ClassProps.iconSize)} />
//         ) : (
//           <FaBars size={parseInt(ClassProps.iconSize)} />
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default HamburgerMenu;

"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <a
            href="#"
            className="text-lg hover:underline"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg hover:underline"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-lg hover:underline"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="text-lg hover:underline"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
