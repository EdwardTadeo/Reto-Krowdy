function mostrar(){
    var x = document.getElementById('mostrado');
    var lista_2=document.querySelector(".lista-2");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        lista_2.style.marginBottom='4250px';
        lista_2.style.borderBottomLeftRadius='0px';
        lista_2.style.borderBottomRightRadius='0px';
    }
    else{
        x.style.display = 'none';
        lista_2.style.marginBottom='20px';
    }
}

function desplegar(){
    var e=document.getElementById('select');
    var target=document.querySelector(".search");
    if(e.style.display=='none'){
        target.textContent = 'Type...';
        e.style.display='block';
        target.style.border='2px solid red';
    }
    else{
        e.style.display='none';
        target.style.border='1px solid rgba(0, 0, 0, 0.12)';
        target.textContent='🔍 Search';
    }
}

