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

    const section = document.querySelector("section"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector("#add"),
    closeBtn = document.querySelector(".close-btn");

  showBtn.addEventListener("click", () => section.classList.add("active"));

  overlay.addEventListener("click", () =>
    section.classList.remove("active")
  );

  closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
  );


    