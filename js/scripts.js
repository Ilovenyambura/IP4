$(document).ready(function(){
  var numberList = [1,2,3,4,5,6];
  var temporaryScore=0;
  var totalScore=0;
 $("button#dice").click(function(){
   var rns = numberList[Math.floor(numberList.length * Math.random())];
   temporaryScore +=rns;
   $("span#ts").text(rns);
 });
 $("button#roll").click(function(){
   var rns = numberList[Math.floor(numberList.length * Math.random())];
   temporaryScore += rns;
   $("span#temp").text(rns);
 })
 $("button#hld").click(function(){
  var holdIt = totalScore;
  totalScore += temporaryScore;
  $("span#total").text(totalScore);
 })
 $("button#hold").click(function(){
   var holdIt = totalScore;
   totalScore += temporaryScore;
   $("span#score").text(totalScore);
 })
});
// business logic
if(rns === 1){
  totalScore = 0;
} else {
   totalScore += temporaryScore
}
