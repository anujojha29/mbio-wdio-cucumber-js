async function waitForDocumentReady() {
  await browser.waitUntil(
    async () => (await browser.execute(() => document.readyState)) === 'complete',
    { timeout: 20000, timeoutMsg: 'Document did not reach complete readyState in time' }
  )
}

module.exports = { waitForDocumentReady }
