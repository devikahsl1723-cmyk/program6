let present=0;
let absent=0;
function markAttendance(){
    let name=document.getElementById("name").value;
    let status=document.getElementById("student").value;
    if(name==""){
        alert("enter student name");
        return;
    }
    document.getElementById("list").innerHTML+=
    "<div class='student'>"+"-"+status+"</div>";
    if(status=="present")
        present++;
    else
        absent++;
    document.getElementById("count").innerHTML=
    "present:"+present+"|absent:"+absent;
    document.getElementById("name").value;
}