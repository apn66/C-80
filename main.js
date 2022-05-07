var name_student_array=[]
function submit(){
    var display_array=[];
    for(var j=1; j<=4; j++){
        var name_of_student= document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_student_array.push(name_of_student);
    }
    var lenght_of_array=name_student_array.length;
    for(var k=0; k<lenght_of_array; k++){
        display_array.push("<h4>NAME-"+name_student_array[k]+"</h4>");
        console.log(display_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_student_array.sort();
console.log(name_student_array);
var display_sorted_array=[];
var lenght_of_array=name_student_array.length;
for(var k=0; k<lenght_of_array; k++){
    display_sorted_array.push("<h4>NAME-"+name_student_array[k]+"</h4>");
    console.log(display_sorted_array);
}
var remove_commas=display_sorted_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}