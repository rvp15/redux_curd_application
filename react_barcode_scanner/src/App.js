
import { useEffect, useState } from 'react';
import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';


function App() {
const [scanResult, setScanResult] =useState(null)

useEffect(()=>{
  //  We create a new instance of Html5QrcodeScanner 
const qrScanner = new Html5QrcodeScanner('reader',// Element ID where the scanner should be rendered
{
  qrbox: 250,// Size of the QR code scanning box
  fps:10, // Frames per second for scanning
})
// Define a callback function to handle scanned results
qrScanner.render(async (result)=>{
  setScanResult(result)
});


},[])

  return (
    <div className="App">
     <h1 className='header'>Barcode Scanner</h1>
     {scanResult ?
     <div>Sucess: <a href={scanResult}> {scanResult}</a></div>
     : <div className='read' id='reader'></div>}
    
    </div>
  );
}

export default App;
