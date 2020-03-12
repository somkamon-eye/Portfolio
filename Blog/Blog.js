var x=0;

function postFunction()
{
    var name=["post1","reply1","reply2"];
    var contentText=document.getElementById("text1").value;
    var post= document.getElementById(name[x]);
   x++;
   if (x>2)
   {
       x=2
   }

   post.innerHTML=contentText;
}


function clearFunction()
{
   var i;
   var name=["post1","reply1","reply2"];
   for(i=0;i<3;i++)
   {
    var post= document.getElementById(name[i]);  
    post.innerHTML="";
   }
   x=0;
}

var count = 1 ;
function postFunction()
{
    var text = document.getElementById("text1").value;

    if(count==1)
    {
        var post1 = document.getElementById("post1");
        post1.innerHTML= text;
        
    }
    else if (count==2)
    {
        var reply1 = document.getElementById("reply1");
        reply1.innerHTML= text;
        
    }
    else if (count==3)
    {
        var reply2 = document.getElementById("reply2");
        reply2.innerHTML= text;
        
    }
    count++
}
function clearFunction()
{
    count=1;
    var post1 = document.getElementById("post1");
    post1.innerHTML="";
    var reply1 = document.getElementById("reply1");
    reply1.innerHTML="";
    var reply2 = document.getElementById("reply2");
    reply2.innerHTML="";
    
}