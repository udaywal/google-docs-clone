import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 px-4 py-3 shadow-sm bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-16 w-16 border-0"
      >
        <Icon name="menu" size="2xl" />
      </Button>

      <img 
        loading="lazy"
        className="w-10 ml-2"
        src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="logo" />

      <h1 className="ml-2 text-gray-800 text-xl">Docs</h1>

      <div className="flex flex-grow items-center bg-gray-100 rounded-lg 
        px-5 py-2 mx-5 focus-within:shadow-md focus-within:bg-gray-50">
        <Icon name="search" size="2xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent text-gray-700 outline-none px-3"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-10 w-10 border-0"
      >
        <Icon name="apps" size="2xl" />
      </Button>

      <img 
        className="h-10 w-10 rounded-full ml-2 cursor-pointer"
        src="https://yt3.ggpht.com/yti/APfAmoH34sMdmlsSW00bRk85B5_UZ6rEDwo8y8229IetLA=s88-c-k-c0x00ffffff-no-rj-mo" alt="profile" />

    </header>
  );
}

export default Header;
