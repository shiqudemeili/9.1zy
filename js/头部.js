window.onload=function () {
    var oHeaderNavLis=document.getElementById("header_nav").getElementsByTagName("li");
    for(var i=0;i<oHeaderNavLis.length;i++){
        oHeaderNavLis[i].onclick=function () {
            for(var i=0;i<oHeaderNavLis.length;i++){
                oHeaderNavLis[i].className="";
            }
            this.className="bgl";
        }
    }
    /*以上是背景图片改变*/

    var oDown=document.getElementById("header_search_left_down");
    var  oUp=document.getElementById("header_search_left_up");
    var  oCon=document.getElementById("header_search_left_con");
    oUp.onmouseover=function () {
        oUp.style.display="none";
        oDown.style.display="block";
        oCon.style.display="block";
    }
    oDown.onmouseout=function () {
        oUp.style.display="block";
        oDown.style.display="none";
        oCon.style.display="none";
    }
    oCon.onmouseover=function () {
        oCon.style.display="block";
    }
    oCon.onmouseout=function () {
        oCon.style.display="none";
    }
    function disPlay(id) {
        var oBl1=document.getElementById(id);
        var oBl1Div=document.getElementById(id).getElementsByTagName("div")[0];
        oBl1.onmouseover=function () {
            oBl1Div.style.display="block";
        }
        oBl1.onmouseout=function () {
            oBl1Div.style.display="none";
        }
    }
    disPlay("bl_1");
    disPlay("bl_2");
    disPlay("bl_3");
    disPlay("bl_4");

    var oInput3=document.getElementById("header_search_con_3");
    var oDiv6=document.getElementById("header_search_con_6");
    var oDiv6P=document.getElementById("header_search_con_6").getElementsByTagName("p");
    oInput3.onclick=function () {
        oDiv6.style.display="block";
    }
    oDiv6.onmouseover=function () {
        oDiv6.style.display="block";
    }
    oDiv6.onmouseout=function () {
        oDiv6.style.display="none";
    }
    for(var i=0;i<oDiv6P.length;i++){
        oDiv6P[i].onclick=function () {
            oInput3.value=this.innerHTML;
        }
    }
}
