function myfunexit(){
    window.close();
}
    
window.onload = () => {

    var level_time;
    var level1 = document.getElementById("l1");
    var level2 = document.getElementById("l2");
    var level3 = document.getElementById("l3");

    document.getElementById("btn").addEventListener("click",()=>{
        if(level1.checked == true){
            level_time = 3000;
        }
        else if(level2.checked == true){
            level_time = 2000;
        }
        else if(level3.checked == true){
            level_time = 1000;
        }

        document.getElementById("menu").style.display = "none";

        game_start();

    });

    document.getElementById("btn1").addEventListener("click",()=>{
        location.reload();
    });

    function game_start(){
        var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var losscount = 1;
    var timer = setInterval(()=> {
        var min = 0;
        var max = 80;
        var posX = Math.floor(Math.random() * (max - min) + min);
        var sp = document.createElement("span");
        sp.className = "bubble";

        var mincolor = 000;
        var maxcolor = 255;
        var colors = Math.floor(Math.random() * (maxcolor - mincolor) + mincolor);
        var mincolor2 = 000;
        var maxcolor2 = 255;
        var colors2 = Math.floor(Math.random() * (maxcolor2 - mincolor2) + mincolor2);
        var mincolor3 = 000;
        var maxcolor3 = 255;
        var colors3 = Math.floor(Math.random() * (maxcolor3 - mincolor3) + mincolor3);


        sp.style.backgroundColor = "rgba(" + colors + "," + colors2 + "," + colors3 + ",0.4)";
        sp.style.borderColor = "rgb(" + colors + "," + colors2 + "," + colors3 + ")";


        var min1 = 0;
        var max1 = ch.length;
        var ch1 = Math.floor(Math.random() * (max1 + min1) - min1);
        sp.innerHTML = ch[ch1];
        sp.id = ch[ch1];
        sp.style.left = posX + "%";
        document.getElementById("bd").appendChild(sp);

        setTimeout(() => {
            document.getElementById("bd").removeChild(sp);
            document.getElementById("Loss").innerHTML = losscount;
            losscount++;

            if(losscount==21){
                document.getElementById("game_over").style.display = "block";
                var val1 = document.getElementById("Score").innerHTML;
                var val2 = document.getElementById("Loss").innerHTML;
                document.getElementById("total_bubbles").innerHTML = parseInt(val1)+parseInt(val2);
                document.getElementById("score").innerHTML = val1;
                document.getElementById("loss").innerHTML = val2;
                clearInterval(timer);
                document.getElementById("bd").setAttribute("id","bd1");
            }
        }, 5000);

    }, level_time);

    var count = 0;
    var key = null;
    document.getElementById("bd").addEventListener("keyup", () => {
        key = event.keyCode;
        var res = String.fromCharCode(key);
        var e = document.getElementById(res);
        var sp_code = e.innerHTML.charCodeAt(0);
        if (sp_code == key) {

            count++;

            document.getElementById("dis-sound").setAttribute("src", "slider.wav");

            e.classList.toggle("bubble-dis1");

            setInterval(() => {
                e.classList.toggle("bubble-dis2");
                e.innerHTML = "";                
            }, 300);

            setInterval(() => {
                e.classList.toggle("bubble-dis3");
            }, 400);

            setInterval(() => {
                document.getElementById("bd").removeChild(e);
                document.getElementById("Score").innerHTML = count;
            }, 500)
        }
    });
}
}