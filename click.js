//declare samecolor() here
function samecolor(hex){
  let color = "#b1ffa3";
  const doc = document;

  let divs = doc.querySelectorAll("#samecolor div");

  for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor = "#11D7C8";
    divs[i].style.opacity = 0.50+10*i;
    divs[i].style.height= "450px";
    divs[i].style.width= "500px";
  }


}
//declare diffcolor() here
function diffcolor(hex){
  let color = "#B30EB8";
  const doc = document;

  let divs = doc.querySelectorAll("#diffcolor div");

  for(let i=0;i<divs.length;i++){
    divs[i].style.height = "500px";

  }

}
