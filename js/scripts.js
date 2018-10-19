$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var name =$("input#name").val();
    var ansone=$("input:radio[name=q1]:checked").val();
    var anstwo=$("input:radio[name=q2]:checked").val();
    var ansthree=$("input:radio[name=q3]:checked").val();
    var ansfour=$("input:radio[name=q4]:checked").val();
    var ansfive=$("input:radio[name=q5]:checked").val();

    // console.log(ansone,anstwo,ansthree,ansfour,ansfive);

    if ((ansone==FED)&&(anstwo==yes)&&
    (ansthree==no)&&(ansfour==no)&&
    (ansfive==no))
    {
        $("#option1").show();
    }else {
      $("#option2").show();
    }

  });
});
