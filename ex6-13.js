function hyoji2() { var str = "一文字ずつ表示します。"; 
var cnt = document.timer2.moji.value.length; 
if ( cnt < 11 ) { document.timer2.moji.value = str.substr(0,cnt+1); } 
else { document.timer2.moji.value = ""; } 
setTimeout("hyoji2()",1000); }
function startfnc2() { setTimeout("hyoji2()",1000); }
