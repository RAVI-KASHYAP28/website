function login()
{
    var u=document.getElementById("user").value;
    var p=document.getElementById("pass").value;
   

    if(u=="rav.kashyap22@gmail.com" && p=="123")
    {
        document.write("login successfully");
    }
    else
    {
        document.write("USERNAME AND PASSWORD DOES NOT MATCH");
    }


}