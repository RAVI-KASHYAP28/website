function register()
{
    var n1_name=document.forum.n1.value;
    var n2_name=document.forum.n2.value;
    var n3_name=document.forum.n3.value;
    var ph=document.forum.p.value;
    var em=document.forum.e.value;
    var pw=document.forum.pw1.value;
    var db1=document.forum.db.value;
    var radio=document.forum.r1.value;
    str=" ";
    str=str+n1_name+n2_name+n3_name+ph+em+pw+db1+radio;
    if(document.forum.c1.checked)
    {
    str=str+document.forum.c1.value;
    }
    if(document.forum.c2.checked)
    {
      str=str+document.forum.c2.value;
    }
    if(document.forum.c3.checked)
    {
       str=str+document.forum.c3.value;
    }
    
    var c1=document.forum.c.value;
    var d1=document.forum.d.value;
    var h1=document.forum.h.value;
    var l1=document.forum.l.value;
    var p1=document.forum.p.value;
    

       str=str+c1+d1+h1+l1+p1;

    var a1=document.forum.a.value;
    var pan1=document.forum.pan.value;
  
       str=str+a1+pan1;
    var o1=document.forum.o.value;
       str=str+o1;






    document.write(str);
    
    






}