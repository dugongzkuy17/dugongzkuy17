pindah = 1;
function ga(){
    if(pindah == 1){
        Btn.style.top=400;
        Btn.style.left=300;
        pindah=2;
        }
        else if(pindah == 2){
            Btn.style.top=400;
            Btn.style.top=50;
            pindah=3;
            }
            else if(pindah == 3){
                Btn.style.top=370;
                Btn.style.top=166;
                pindah=1;
                }
}            