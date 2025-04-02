document.getElementById('updateBtn').addEventListener('click', () => {
  const code = document.getElementById('codeInput').value;
  const lang = document.getElementById('langSelect').value;
  const codeBlock = document.getElementById('codeBlock');

  codeBlock.className = `language-${lang}`;
  codeBlock.textContent = code;

  hljs.highlightElement(codeBlock);
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const target = document.getElementById('preview');
  html2canvas(target).then(canvas => {
    const link = document.createElement('a');
    link.download = 'code-snap.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
