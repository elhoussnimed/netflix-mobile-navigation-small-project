const burgerIcon = document.querySelector(".burger-icone");
const closeIcon = document.querySelector(".close-icone");
const navigationContainer = document.querySelector(".navigation");
const navInfos = document.querySelector(".nav-infos");
const redBar = document.querySelector(".red-bar");
const brownBar = document.querySelector(".brown-bar");

burgerIcon.addEventListener("click", () => {
  navigationContainer.classList.add("show");
  openNavEffect();
});

closeIcon.addEventListener("click", () => {
  closeNavEffect();
});

function openNavEffect() {
  new Promise((resolve, reject) => {
    brownBar.classList.add("move");
    resolve();
  })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          brownBar.classList.add("scale");
          redBar.classList.add("move");
          res();
        }, 300);
      });
    })
    .then(() => {
      setTimeout(() => {
        redBar.classList.add("scale");
        navInfos.classList.add("move");
      }, 300);
    })
    .catch((error) => {
      console.log("error : ", error);
    });
}

// function openNavEffect() {
//     brownBar.classList.add("move");
//     setTimeout(() => {
//         brownBar.classList.add("scale");
//         redBar.classList.add("move");
//         setTimeout(() => {
//             redBar.classList.add("scale");
//             navInfos.classList.add("move");
//         },300)
//     },300)
// }

function closeNavEffect() {
  new Promise((resolve, reject) => {
    if (navigationContainer.classList.contains("show")) {
      navInfos.classList.remove("move");
      resolve();
    } else {
      reject();
    }
  })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          redBar.classList.remove("scale");
          res();
        }, 300);
      });
    })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          redBar.classList.remove("move");
          brownBar.classList.remove("scale");
          res();
        }, 300);
      });
    })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          brownBar.classList.remove("move");
          res();
        }, 300);
      });
    })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          navigationContainer.classList.remove("show");
          res();
        }, 100);
      });
    })
    .catch((error) => {
      console.log("error : ", error);
    });
}

// function closeNavEffect() {
//     navInfos.classList.remove("move");
//     setTimeout(() => {
//         redBar.classList.remove("scale");
//         setTimeout(() => {
//             redBar.classList.remove("move");
//             brownBar.classList.remove("scale");
//             setTimeout(() => {
//                 brownBar.classList.remove("move");
//                 setTimeout(()=>{
//                     navigationContainer.classList.remove("show");
//                 },100)
//             },300)
//         },300)
//     },300)
// };
