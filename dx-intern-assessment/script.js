document.getElementById("btnExtract").onclick = async () => {
  const imgDiv = document.getElementsByClassName("append-images-here")[0];
  const file = document.getElementById("compressedFile").files[0];
  if (!file) return;

  const reader = new zip.ZipReader(new zip.BlobReader(file));
  const entries = await reader.getEntries();

  imgDiv.innerHTML = entries.length
    ? ""
    : " <p>No image found. Your extracted images should be here.</p>";

  for (let entry of entries) {
    if (!entry.compressedSize) continue;
    let data = await entry.getData(new zip.Data64URIWriter("image/png"));
    let img = document.createElement("img");
    img.src = data;

    imgDiv.appendChild(img);
  }

  await reader.close();
};
