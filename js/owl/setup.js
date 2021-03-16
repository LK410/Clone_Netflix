$('.owl-carousel').owlCarousel({
    loop:true,  // Aqui é o lopp do carrosel, odne estão os filmes da netflix: true fica e infinito e false tem limite de filme
    margin:10, // Aqui é a margem que fica os filmes entre si margem 10px
    nav:true,   // aqui colocando false, desabilita a navegação do carrossel.
    

// Aqui onde é tratodo a responsividade do site:

    responsive:{  
        0:{
            items:1   // Quando estiver mil itens exiba 5 itens
        },
        600:{
            items:3 // Quando estiver mil itens exiba 5 itens
        },
        1000:{    // Quando estiver mil itens exiba 5 itens
            items:5 
        }
    }
})