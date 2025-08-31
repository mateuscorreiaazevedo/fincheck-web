export async function sleep(delayInMs = 500) {
  await new Promise(resolve => setTimeout(resolve, delayInMs));
}
