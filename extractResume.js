const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/build/pdf.js');
const data = new Uint8Array(fs.readFileSync('Jacob_Resume.pdf'));
(async () => {
  const doc = await pdfjsLib.getDocument({ data }).promise;
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += pageText + '\n\n';
  }
  console.log(fullText);
})();
