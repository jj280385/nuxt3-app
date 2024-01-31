const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(() => {
  const { apiSecret } = runtimeConfig;
  console.log('apiSecret', apiSecret);
  return {
    ok: true,
    data: 'Hello World!',
  };
});
