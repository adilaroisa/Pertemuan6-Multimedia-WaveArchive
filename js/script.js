window.onload = function() {
    alert("Ini adalah halaman Wave Archive dengan video, gambar, dan audio!");
    
    const heading = document.getElementById("alertText");
    heading.innerHTML += " 🎉";
  
    // Event listener untuk tiap heading
    document.getElementById("videoLocal").onclick = function() {
      alert("Ini adalah video lokal: Gacha Carlotta 🎞️");
    };
  
    document.getElementById("videoYT").onclick = function() {
      alert("Ini adalah video YouTube: Gacha Cantarella 📺");
    };
  
    document.getElementById("gambarBrant").onclick = function() {
      alert("Ini adalah gambar karakter Brant 🖼️");
    };
  
    document.getElementById("audioReality").onclick = function() {
      alert("Ini adalah audio: Am I Bothering You - Reality Club 🎧");
    };
  };
  