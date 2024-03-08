/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook } from '@testing-library/react-hooks';
import { useAddAnimationOnScroll } from '../useAddAnimationOnScroll'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

// Mocking IntersectionObserver
class IntersectionObserverMock {
  constructor(public callback: IntersectionObserverCallback, public options?: IntersectionObserverInit) {}
  
  observe(target: Element) {
    // @ts-ignore
    this.callback([{ isIntersecting: true, target: target, intersectionRatio: 0.6 } as IntersectionObserverEntry], this);
  }
  
  unobserve() {
    // Mock unobserve function
  }

  disconnect() {
    // Mock disconnect function
  }
}
window.innerWidth = 500;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.IntersectionObserver = IntersectionObserverMock as any;

describe('useAddAnimationOnScroll', () => {
  it('should add animation class when element is visible', () => {
    const animationStateRef = { current: {} };
    const containerRef = { current: document.createElement('div') };
    const selector = '.animate-on-scroll';
    
    // Append test elements to containerRef.current
    const element1 = document.createElement('div');
    element1.classList.add('animate-on-scroll');
    containerRef.current.appendChild(element1);
    
    const element2 = document.createElement('div');
    element2.classList.add('animate-on-scroll');
    containerRef.current.appendChild(element2);

    renderHook(() => useAddAnimationOnScroll(containerRef, animationStateRef, selector));
    
    expect(element1.classList).toContain('animate-slide-in-left');
    expect(element2.classList).toContain('animate-slide-in-right');
  });
});