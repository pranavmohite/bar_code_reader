// Set up the scanner
const videoElement = document.getElementById('preview');
const scanner = new Instascan.Scanner({ video: videoElement });

// Detect and process the scanned barcodes
scanner.addListener('scan', function (content) {
  console.log('Detected barcode: ' + content);
  // You can perform additional actions with the scanned barcode content here
});

// Start the scanner when the button is clicked
const startScanButton = document.getElementById('start-scan-btn');
startScanButton.addEventListener('click', function () {
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]); // You can choose a specific camera by passing its ID as an argument
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (error) {
    console.error(error);
  });
});
