export default defineNuxtPlugin(() => {
  if (process.server) {
    // 在服务器端为global提供navigator对象
    global.navigator = {
      userAgent: 'node.js',
    } as any;
  }
}); 