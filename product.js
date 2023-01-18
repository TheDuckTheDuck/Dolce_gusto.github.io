
makeTapMenu('capsule_button','capsule_inner_category','.capsule_left','.capsule_right')
makeTapMenu('machine_button','machine_inner_category','.machine_left','.machine_right')


function makeTapMenu(button,category,btnLeft,btnRight){

    const buttons = document.getElementsByClassName(button);
    const categorys = document.getElementsByClassName(category);
    const left = document.querySelector(btnLeft);
    const right = document.querySelector(btnRight);

    let index = 0;

    for(let j = 0 ; j < buttons.length ; j ++){

        buttons[j].addEventListener('click',(e)=>{
            e.preventDefault();
            index=j;
            setContents();
        })
    }

    left.addEventListener('click',(e)=>{
        e.preventDefault();
        index--;
        if(index<0)
            index=buttons.length-1;
        setContents();
    })
    right.addEventListener('click',(e)=>{
        e.preventDefault();
        index++;
        if(index===buttons.length)
            index=0;

        setContents();
    })


    function setContents() {
        for(let i = 0 ; i < categorys.length ; i ++) {
            categorys[i].classList.remove('category_active');
            buttons[i].classList.remove('button_active');
        }
        buttons[index].classList.add('button_active');
        categorys[index].classList.add('category_active');
    }

}