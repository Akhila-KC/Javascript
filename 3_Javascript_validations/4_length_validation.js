function stringlength(inputtxt,minlength,maxlength)
{
    var field=inputtxt.value;
    var mnlen=minlength;
    var mxlen=maxlength;

    if(field.length<mnlen||field.length>mxlen)

        {
            alert("Please input the user id between 6 and 8");
        }
    else
        {
            alert("Your userid is accepted");
        }
}