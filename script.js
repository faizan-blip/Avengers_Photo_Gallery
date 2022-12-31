function f1(){
    const button = document.getElementById('toggle-button');
    const cross = document.getElementById('cross-button');
    const nav = document.querySelector('.navlist');
    const flex = document.getElementsByClassName('flex');
    const navbar = document.querySelector('.navbar');
    button.addEventListener('click' , () =>{
        button.style.display = 'none';
        // nav.style.setTimeout = '2s';
      
        nav.style.transitionDelay = "1s";
        nav.style.display = 'block';
        cross.style.display = 'block';
        navbar.style.height = "340px";
    });
    cross.addEventListener('click' , () =>{
        nav.style.display = 'none';
        cross.style.display = 'none';
        nav.classList.remove('.shadow');
        button.style.display = 'block';
        navbar.style.height = "67px";
    });
}
// function close1(){
//     document.getElementById('cross-button').click();
// }
//  function close1(){
//     const navbar = document.querySelector('.navbar');
//     const nav = document.querySelector('.navlist');
//     const button = document.getElementById('toggle-button');
//      const cross = document.getElementById('cross-button');
//      const title = document.getElementById('title');
//      const x = window.matchMedia("(max-width: 767px)");
//      if(x.matches){    
//     navbar.style.height = "67px";
//     nav.style.display = 'none';
//     button.style.display = 'block';
//     cross.style.display = 'none';
//      }
//      else{
//         navbar.style.opacity = '0.4';
//         navbar.style.opacity = '1';
//      }
//  }