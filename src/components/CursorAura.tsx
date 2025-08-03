'use client';

import { useEffect } from 'react';

/**
 * A client component that creates a gradient aura effect following the user's cursor.
 * It listens for mouse movements and updates its position accordingly.
 * The visual styling is handled by the CSS in your global stylesheet.
 */
export default function CursorAura() {
  useEffect(() => {
    // Select the aura element from the DOM.
    const aura = document.querySelector('.cursor-gradient-aura');

    // If the element doesn't exist, do nothing.
    if (!aura) return;

    // Event handler for mouse movement.
    const handleMouseMove = (e: MouseEvent) => {
      // The 'aura' is an HTMLElement, so we need to cast it to use style properties.
      const auraElement = aura as HTMLElement;
      auraElement.style.left = e.clientX + 'px';
      auraElement.style.top = e.clientY + 'px';
    };

    // Event handler for when the mouse enters the viewport.
    const handleMouseEnter = () => {
      const auraElement = aura as HTMLElement;
      auraElement.style.opacity = '1';
    };

    // Event handler for when the mouse leaves the viewport.
    const handleMouseLeave = () => {
      const auraElement = aura as HTMLElement;
      auraElement.style.opacity = '0';
    };

    // Add event listeners to the document.
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // This is a cleanup function.
    // It removes the event listeners when the component is unmounted to prevent memory leaks.
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // The empty dependency array [] ensures this effect runs only once when the component mounts.

  // This component renders the div that the CSS targets.
  return <div className="cursor-gradient-aura"></div>;
}
