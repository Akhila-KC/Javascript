function validateEmail(inputText)
{
    var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("email accepted");
    }
    else
    {
        alert("You have entered an invalid email address");
        document.form1.text1.focus();
    }
        
}

