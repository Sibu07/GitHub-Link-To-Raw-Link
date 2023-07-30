function convertToRaw() {
  const githubLink = document.getElementById('githubLink').value;
  const rawLink = githubLink.replace('github.com', 'raw.githubusercontent.com');
  rawLink = rawLink.replace('/blob', ''); // Remove '/blob' from the link if present
  document.getElementById('rawLink').innerText = rawLink;
  document.getElementById('copyBtn').classList.remove('hide');
}

function copyToClipboard() {
  const rawLink = document.getElementById('rawLink').innerText;
  const textarea = document.createElement('textarea');
  textarea.value = rawLink;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Copied to clipboard!\n\n' + rawLink);
}
