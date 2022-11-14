function afterClick()
{
    count = Number(document.getElementById("count-el").innerHTML);
    count+=1;
    document.getElementById("count-el").innerHTML = count; 
}
let message = "Previous Count: ";
let discount = "";
function afterRefresh()
{ 
    let cnt = document.getElementById("count-el").innerHTML;
    var temp = cnt+" - ";
    discount+=temp;
    document.getElementById("count-el-prev").innerHTML = message+discount;
    document.getElementById("count-el").innerHTML = 0;
}