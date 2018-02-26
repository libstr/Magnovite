// Check browser support
var key=0;
if (typeof(Storage) !== "undefined") {
    key=1;
    if(key==1 && localStorage.getItem("dontshowpopupagain")=="no")
    {
      document.getElementById('helppopup').style.display="none";
    }
    else
    {
      document.getElementById('helppopup').style.display="block";
    }
} else {
  key=0;
    document.getElementById('helppopup').style.display="block";
    document.getElementById('help_got_container').style.display="none";
}
if(key==1 && localStorage.getItem("dontshowpopupagain")=="no")
{
  document.getElementById('helppopup').style.display="none";
}
function closepopup()
{
  if(key==1)
  {
    if(document.getElementById('help_got').checked)
    {
      localStorage.setItem("dontshowpopupagain", "no");
    }
    else {
      localStorage.setItem("dontshowpopupagain", "yes");
    }

  }
  document.getElementById('helppopup').style.display="none";
}
