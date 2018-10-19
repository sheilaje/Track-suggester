$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var name =$("input#name").val();
    // console.log(name);
    var ansone=$("input:radio[name=q1]:checked").val();
    anstwo=$("input:radio[name=q2]:checked").val();
    ansthree=$("input:radio[name=q3]:checked").val();
    ansfour=$("input:radio[name=q4]:checked").val();
    ansfive=$("input:radio[name=q5]:checked").val();

    console.log(ansone,anstwo,ansthree,ansfour,ansfive);
  });
});
