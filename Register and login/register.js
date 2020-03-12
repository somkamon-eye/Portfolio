
window.onload = pageLoad;
function pageLoad()
{
    var clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password"].value; 
    var y = document.forms["myForm"]["password2"].value;
    if(x==y)
    {
        alert("True");
    }
    else if(x!=y)
    {
        var password = document.getElementById("errormsg");
        password.innerHTML = "Password is not match";
        return false;
    }
}