import React from 'react';

const CtaBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-5/6 lg:w-full flex mx-auto justify-center -mb-32">
      <div className="bg-rumah-peran-red p-8 rounded-lg max-w-4xl 2xl:max-w-screen-2xl min-h-44 flex-1">
        {children}
      </div>
    </div>
  );
};

export default CtaBox;
