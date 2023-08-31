// JQuery Code

$ ( function () {

// Slider Up

        $(`.hide`).click( function (){

        $(`.box`).slideUp(1000) 

    })

// Slider Down

    $(`.show`).click( function (){

    $(`.box`).slideDown(1000)

   })

// Slider Toggle

    $(`.toggle`).click(function(){ 
    
    $(`.box`).slideToggle(1000)
    })

  

});