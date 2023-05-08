
function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
 
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
}

function DownloadQrCode() {
   var container = document.getElementById("qrcode");
   html2canvas(container, { allowTaint: true }).then(function (canvas) {
 
   var link = document.createElement("a");
   document.body.appendChild(link);
   link.download = "html_image.jpg";
   link.href = canvas.toDataURL();
   link.target = '_blank';
   link.click();
 });
}