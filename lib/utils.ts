import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToElement(elementId: string, offset: number = 0) {
  if (typeof window === 'undefined') return false;

  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
}

export function handleHashNavigation(href: string) {
  if (typeof window === 'undefined') return false;

  // Parse the URL to check if it's a hash link
  try {
    const url = new URL(href, window.location.origin);

    // If it's a different page with a hash
    if (url.pathname !== window.location.pathname && url.hash) {
      // Navigate to the page and store the hash for later scrolling
      sessionStorage.setItem('scrollToElement', url.hash.substring(1));
      window.location.href = href;
      return true;
    }
    // If it's the same page with a hash
    else if (url.hash) {
      const elementId = url.hash.substring(1);
      return smoothScrollToElement(elementId, 100); // 100px offset for navbar
    }
  } catch {
    // Invalid URL, let default behavior handle it
    return false;
  }

  return false;
}