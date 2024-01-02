
import React from "react";

const TabButton = ({active, selectTab,children}) => {
    const tabClasses= active ? 'text-white text-[#ADB7BE] border-b border-purple-500' :'text-[#ADB7BE]'
  return (
    <div>
      <div className="flex flex-row mt-8 text-white">
      
        <span onClick={selectTab}>
        <p className={`mr-4 font-semibold hover:text-white ${tabClasses}`}>
        {children}
        </p>
        </span>
        
      </div>
    </div>
  );
};

export default TabButton;
