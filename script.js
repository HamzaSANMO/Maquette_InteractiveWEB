function home(){
    window.location.href='cv.html'
}
// const btn = document.getElementById("download");

function downloadPDF() {
    const element = document.getElementById("cv");
    html2pdf()
      .from(element)
      .save("cv.pdf");
    //   .then(() => {
    //     if (localStorage.getItem("count")) {
    //       count = +localStorage.getItem("count");
    //     }
    //     count += 1;
    //     localStorage.setItem("count", count);
  
    //     counter.innerText = localStorage.getItem("count");
    //   });
}


// btn.addEventListener("click",()=>{
//     console.log("fdsfdf");
//   })

const telecharger = document.getElementById('download')

telecharger.addEventListener('click', ()=>{
    console.log('telecharger');
})
