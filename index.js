const plus = document.querySelector(".incre"),
    minus = document.querySelector(".decre"),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? 0 + a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? 0 + a : a;
        num.innerText = a;
      }
    });