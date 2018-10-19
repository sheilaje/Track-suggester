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

    if(anstwo==="yes" && ansfour==="yes")
      {
        $("#option3").show();
      }else
      if(ansone==="FED")
      {
      $("#option1").show();
      }else
        if (ansone==="BED")
        {
          $("#option2").show();
        }



  });
});
