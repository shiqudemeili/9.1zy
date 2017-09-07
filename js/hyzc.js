window.onload=function () {
    oHyzc=document.getElementById("hyzc");
    oShzc=document.getElementById("shzc");
    oShzcCon=document.getElementById("shzc_con");
    oHyzcCon=document.getElementById("hyzc_con")
    oHyzc.onclick=function () {
        oShzc.className="hyzc_con_l_6";
        oHyzc.className="hyzc_con_l_5";
        oHyzcCon.style.display="block";
        oShzcCon.style.display="none";
    };
    oShzc.onclick=function () {
        oShzc.className="hyzc_con_l_5";
        oHyzc.className="hyzc_con_l_6";
        oHyzcCon.style.display="none";
        oShzcCon.style.display="block";
    }
};