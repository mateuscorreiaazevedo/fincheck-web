export async function sleep(delayInMs = 1200) {
  await new Promise(resolve => setTimeout(resolve, delayInMs));
}
