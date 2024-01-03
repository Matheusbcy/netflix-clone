import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return (
      <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-900 flex">
        <div className="flex flex-col gap-4">
          <div className="px-3 text-center text-white hover:underline">
            Home
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Series
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Filmes
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Novos e Populares
          </div>
          <div className="px-3 text-center text-white hover:underline">
           Minha Lista
          </div>
          <div className="px-3 text-center text-white hover:underline">
           Procurar por lingua
          </div>
        </div>
      </div>
    );
  }
};

export default MobileMenu;
