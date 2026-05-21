import React from 'react';

export default function GroceriesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="p-8">
      {children}
      {/* This named slot maps directly to the @modal folder */}
      {modal}
    </div>
  );
}

// PROBLEM - 7 

// 2. The Intercepted Modal Component (app/groceries/@modal/(.)[id]/page.tsx)

// Complete this component. It needs to:

// Properly unwrap the asynchronous params (Next.js 15 style) to fetch the dynamic product ID.

// Render a floating modal backdrop and an overlay container.

// Contain a button that closes the modal.