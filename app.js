var color1=document.getElementById("color1"),
    color2=document.getElementById("color2"),
    color3=document.getElementById("color3");
    var mainsiz=document.getElementById("contaner");
    var divlogo=document.getElementById("divlogo");
    document.body.style.height=screen.height+"px";
    color3.addEventListener("click",()=>{
        if(document.body.hasAttribute('class') || mainsiz.hasAttribute("class")||divlogo.classList.length>1){
            document.body.removeAttribute("class");
            mainsiz.removeAttribute("class");
            divlogo.classList.remove("x1","x2");
            document.body.classList.add("x3");
            mainsiz.classList.add("x3");
            divlogo.classList.add("x3");
        }else{
            document.body.classList.add("x3");
            mainsiz.classList.add("x3");
            divlogo.classList.add("x3");
        }
        
    });
    color2.addEventListener("click",()=>{
        if(document.body.hasAttribute('class') || mainsiz.hasAttribute("class")||divlogo.classList.length>1){
            document.body.removeAttribute("class");
            mainsiz.removeAttribute("class");
            divlogo.classList.remove("x1","x3");
            document.body.classList.add("x2");
            mainsiz.classList.add("x2");
            divlogo.classList.add("x2");
        }else{
            document.body.classList.add("x2");
            mainsiz.classList.add("x2");
            divlogo.classList.add("x2");
        }
        
    });

    color1.addEventListener("click",()=>{
        if(document.body.hasAttribute('class') || mainsiz.hasAttribute("class")||divlogo.classList.length>1){
            document.body.removeAttribute("class");
            mainsiz.removeAttribute("class");
            divlogo.classList.remove("x2","x3");
            document.body.classList.add("x1");
            mainsiz.classList.add("x1");
            divlogo.classList.add("x1");
        }else{
            document.body.classList.add("x1");
            mainsiz.classList.add("x1");
            divlogo.classList.add("x1");
        }
        
    });
class Player{
    constructor(){
        var mainsiz=document.getElementById("contaner");
        mainsiz.style.height=screen.height+"px";
        
        if(screen.width<620){
            mainsiz.style.width=screen.width+"px";
            mainsiz.style.borderRadius="0px";
        }
    }
}
onload=new Player();



class Audio{
    constructor(){
        this.audio=document.getElementById("audio");
        this.titleaudio=document.getElementById("title");
        this.next=document.getElementById("next");
        this.start=document.getElementById("start");
        this.before=document.getElementById("before");
        this.isplyed;
        this.start.addEventListener("click",()=>{
        this.mymethod();
        });
        this.source=[];
        this.source[0]="http://live.mp3quran.net:9960/;";
        this.source[1]="http://live.mp3quran.net:9966/;";
        this.source[2]="http://live.mp3quran.net:9976/;";
        this.source[3]="http://live.mp3quran.net:8006/;";
        this.arr_mane=[];
        this.arr_mane[0]=" Quran Mp3";
        this.arr_mane[1]=" اذاعة راديو الشيخ أبو بكر الشاطري للقرآن الكريم";
        this.arr_mane[2]="اذاعة راديو الشيخ سعد الغامدي للقرآن الكريم";
        this.arr_mane[3]="mp3quran";
        this.counter=0;
        this.setlinks();
        this.next.addEventListener("click",()=>{
            if(this.counter<this.arr_mane.length-1){
            ++this.counter;
            }
            this.setlinks();
        });
        this.before.addEventListener("click",()=>{
            if(this.counter>0){
                --this.counter;
            }
            this.setlinks();
        });
    }

    setlinks(){
        this.audio.src=this.source[this.counter];
        this.titleaudio.innerHTML=this.arr_mane[this.counter];
    }
    mymethod(){
        if(this.isplyed==false){
            this.start.src="img/pause.png";
            this.audio.play();
            this.isplyed=true;
        }else{
            this.start.src="img/play.png";
            this.audio.pause();
            this.isplyed=false;
        }
    }
}
onload=new Audio();




    