function toggleButtonn(selector){
const button= document.querySelector(selector);
        if(!button.classList.contains('is-toggled')){
            //check if its on
            turnOffpreviousButton();
            button.classList.add('is-toggled');
        }else{
            button.classList.remove('is-toggled');
        } 
    }

    function turnOffpreviousButton(){
        const prevButtonn= document.querySelector('.is-toggled');
        if(prevButtonn){
        (prevButtonn.classList.remove('is-toggled'));
        }
    }