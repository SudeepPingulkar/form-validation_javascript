
function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    
}

function seterror(id , error)
{
    //set error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateform()
{
    var returnval = true;
    clearErrors();
    

    //perform form validation & if it fails, set the value of returnval as false.
    var name = document.forms["myform"]["fname"].value;
    if(name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if(name.length==0){
        seterror("name", "*Name cant be empty");
        returnval = false;
    }


    var email = document.forms["myform"]["femail"].value;
    if(email.length>15){
        seterror("email", "*Invalid email!");
        returnval = false;
    }

    var phone = document.forms["myform"]["fphone"].value;
    if(phone.length!=10)
    {
        seterror("phone", "*Invalid Phone number!");
        returnval = false;
    }

    var pass = document.forms["myform"]["fpass"].value;
    if(pass.length<6)
    {
        seterror("pass", "Password should be atleast of 6 characters");
        returnval = false;
    }

    var cpass = document.forms["myform"]["fcpass"].value;
    if(cpass != pass)
    {
        seterror("cpass" , "*Both the passwords should match!");
        returnval = false;
    }




    return returnval;
   
    
}
