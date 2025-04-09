// declaration de fonction pour aller a la page cv
function home(){
    window.location.href='cv.html'
}

// declaration de fonction pour retour à la page d'acceuil
function back(){
    window.location.href='index.html'
}

// changer de couleur
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
     return color;
  }
    // Fonction pour changer la couleur du div
    function changeColor() {
      const colorDiv = document.getElementById('cv');
      colorDiv.style.backgroundColor = getRandomColor();
    }
    document.getElementById('cvcolor').addEventListener('click', changeColor);


    // description pour le telechargement du cv
    document.getElementById("download").addEventListener("click", async () => {
        const element = document.getElementById("cv");
        
     
     
      
     
       // Attendre que html2canvas fonctionne
       const canvas = await html2canvas(element, {
         useCORS: true,
         allowTaint: false,
         scale: 2, // qualité
       });
     
       const imgData = canvas.toDataURL("image/png");
     
       // Créer le PDF
       const { jsPDF } = window.jspdf;
       const pdf = new jsPDF("p", "mm", "a4");
     
       const pageWidth = pdf.internal.pageSize.getWidth();
       const pageHeight = pdf.internal.pageSize.getHeight();
     
       const imgProps = pdf.getImageProperties(imgData);
       const pdfWidth = pageWidth;
       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
     
       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
       pdf.save("cv_Hamza_SANMO.pdf");
     
      
     
     
     
     });
   