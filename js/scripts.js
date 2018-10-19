$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var name =$("input#name").val();
    var ansone=$("#animal-select").val();
    var anstwo=$("input:radio[name=q2]:checked").val();
    var ansthree=$("input:radio[name=q3]:checked").val();
    var ansfour=$("input:radio[name=q4]:checked").val();
    var ansfive=$("input:radio[name=q5]:checked").val();

    console.log(ansone,anstwo,ansthree,ansfour,ansfive);
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").hide();
    $("#option4").hide();
    $("#option5").hide();
    if(anstwo==null || ansfour==null || ansone==null ||ansthree==null || ansfive==null)
    {
      $("#option4").show();
    }

    else if(ansone==="Front End Developer" && ansfive==="yes")
    {
      $("#option1").show();
    }else
    if(anstwo==="yes" &&    ansfour==="yes" && ansone!="Front End Developers" && ansthree!="yes" && ansfive!="yes")
      {
        $("#option3").show();
      }
      else if(ansone==="Back End Developer" && ansthree==="yes" && anstwo!="yes")
         {
          $("#option2").show();
        }
      else {
        $("#option5").show();
      }
  });
});
