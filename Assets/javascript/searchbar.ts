var searchProducts = document.querySelector(".input__search");

searchProducts.addEventListener("input",function(){
    
    var products = document.querySelectorAll("");
    
    if(this.value.length >0){
        
    for(var i = 0; i <products.length ; i++){
        var automovel = products[i];
        var tdAuto = automovel.querySelector(".descricaoauto") ;
        var nomeAutomovel = tdAuto.textContent;
        var regLetter = new RegExp(this.value, "i");
        if(!regLetter.test(nomeAutomovel)){
            automovel.classList.add("invisivel");
        }else{
            automovel.classList.remove("invisivel"); 
        }
   
    }
 }else{
    for(var i = 0; i <products.length ; i++){
        var automovel = products[i];
        automovel.classList.remove("invisivel");
     }
 }

});