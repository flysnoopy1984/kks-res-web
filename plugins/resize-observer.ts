import { defineNuxtPlugin } from '#app'
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    window.ResizeObserver = ResizeObserverPolyfill
  }
})
