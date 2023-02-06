let selection1 = document.querySelector(".onee");
let main= document.querySelector(".one");
let selection2 = document.querySelector(".twoo")
let flag = 0;
selection1.addEventListener("click",function(){
    flag++;
    if(flag>3)
    {
        flag=0;
    }
    main.style.backgroundImage =`url("${flag}.jfif")`;
});
selection2.addEventListener("click",function()
{
    flag--;
    if(flag<0)
    {
        flag=3;
    }
    main.style.backgroundImage =`url("${flag}.jfif")`;

})
