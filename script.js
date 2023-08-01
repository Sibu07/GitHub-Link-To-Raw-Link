function convertToRaw() {
  const inputLink = document.getElementById("githubLink").value.trim();
  if (inputLink === "") {
    return;
  }

  const rawLink = getRawLink(inputLink);
  displayRawLink(rawLink);

  // Show the Clear Input button and hide the Convert button
  document.getElementById("clearBtn").classList.remove("hide");
  document.getElementById("convertBtn").classList.add("hide");
}

function getRawLink(link) {
  // Check if the link contains '/blob'
  const blobIndex = link.indexOf('/blob');
  if (blobIndex !== -1) {
    // Remove '/blob' from the link
    link = link.slice(0, blobIndex) + link.slice(blobIndex + 5);
  }

  // Check if the link ends with '/'
  if (link.endsWith('/')) {
    // Remove the trailing '/'
    link = link.slice(0, -1);
  }

  // Convert the GitHub URL to raw content URL
  const rawLink = link.replace('github.com', 'raw.githubusercontent.com');
  return rawLink;
}

function displayRawLink(rawLink) {
  document.getElementById("rawLinkText").textContent = rawLink;
  document.getElementById("rawLink").classList.remove("hide");
  document.getElementById("copyBtn").classList.remove("hide");
}

function copyRawLink() {
  const rawLinkText = document.getElementById("rawLinkText");
  const textArea = document.createElement("textarea");
  textArea.value = rawLinkText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function clearInput() {
  document.getElementById("githubLink").value = "";
  document.getElementById("rawLink").classList.add("hide");
  document.getElementById("copyBtn").classList.add("hide");
  
  // Hide the Clear Input button and show the Convert button
  document.getElementById("clearBtn").classList.add("hide");
  document.getElementById("convertBtn").classList.remove("hide");
}
