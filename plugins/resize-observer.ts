import { defineNuxtPlugin } from '#app'
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer'

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    window.ResizeObserver = ResizeObserverPolyfill
  }
})
