import mammoth from 'mammoth';

async function inspectDoc() {
  const result = await mammoth.extractRawText({ path: 'data/CATABIM-website-content-1-aa7c3e.docx' });
  console.log(result.value);
}

inspectDoc().catch(console.error);
