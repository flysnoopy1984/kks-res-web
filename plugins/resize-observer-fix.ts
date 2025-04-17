export default defineNuxtPlugin(() => {
  if (import.meta.server) {
    try {
      // 使用 Object.defineProperty 安全地定义 navigator
      if (!global.navigator) {
        Object.defineProperty(global, 'navigator', {
          value: {
            userAgent: 'node.js',
          },
          writable: false,
          configurable: true
        });
      }
    } catch (error) {
      console.warn('无法定义 navigator 对象:', error);
    }
  }
});
