import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import React, { Children } from 'react';

function PageHeader(props: { children: string }) {
  return (
    <header className="flex items-center justify-between">
      <ChevronLeftIcon className="w-4 text-white" />
      <h2 className="typography-title">{props.children}</h2>
      <div className="w-4"></div>
    </header>
  );
}

export default PageHeader;
