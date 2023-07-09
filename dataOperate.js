function del(e){
    var tab = document.getElementById('table')
    var tr = e.parentNode.parentNode;

    tab.deleteRow(tr.rowIndex);
}
function update(e){
    var tr = e.parentNode.parentNode;

    var name = tr.cells[1];
    var isbn = tr.cells[2];
    var no = tr.cells[3];
    var sta = tr.cells[4];
    var price = tr.cells[5];

    name.innerHTML= "<input type='text' value='"+name.innerHTML +"' onblur='update_2(this)'>";
    isbn.innerHTML= "<input type='text' value='"+isbn.innerHTML +"' onblur='update_2(this)'>";
    no.innerHTML= "<input type='text' value='"+no.innerHTML +"' onblur='update_2(this)'>";
    sta.innerHTML= "<input type='text' value='"+sta.innerHTML +"' onblur='update_2(this)'>";
    price.innerHTML= "<input type='text' value='"+price.innerHTML +"' onblur='update_2(this)'>";


    var s = "<input type=\"text\" value=\"<input type=";
    if (name.innerHTML.toString().startsWith(s)||name.innerHTML===""){
        // alert(name.innerHTML.toString());
        name.innerHTML="<input type='text' value='' onblur='update_2(this)'>";
    }

    if (isbn.innerHTML.toString().startsWith(s)||isbn.innerHTML===""){
        isbn.innerHTML="<input type='text' value='' onblur='update_2(this)'>";
    }
    if (no.innerHTML.toString().startsWith(s)||no.innerHTML===""){
        no.innerHTML="<input type='text' value='' onblur='update_2(this)'>";
    }
    if (sta.innerHTML.toString().startsWith(s)||sta.innerHTML===""){
        sta.innerHTML="<input type='text' value='' onblur='update_2(this)'>";
    }

    if (price.innerHTML.toString().startsWith(s)||price.innerHTML===""){
        price.innerHTML="<input type='text' value='' onblur='update_2(this)'>";
    }
    // if (!isNaN(Number(price.innerHTML)))
    // {
    //     price.innerHTML = "<input type='text' value='"+price.innerHTML +"' onblur='update_2(this)'>";
    // }

}
function update_2(e){
    var cell = e.parentNode;
    cell.innerHTML=e.value;
}
function choseDel(){
    var table = document.getElementById('table');

    var chks = document.getElementsByName('chks');
    for (var i =1;i<chks.length; i++){

        if (chks[i].checked){
            table.deleteRow(i);
            i--;
        }
    }
}

function insert(){
    var table = document.getElementById('table');

    var tr = table.insertRow(table.length);

    var cell0 = tr.insertCell(0);
    cell0.innerHTML="<input type='checkbox' name='chks'/>";
    var cell1 = tr.insertCell(1);
    cell1.innerHTML="default";
    var cell2 = tr.insertCell(2);
    cell2.innerHTML="default";
    var cell3 = tr.insertCell(3);
    cell3.innerHTML="default";
    var cell4 = tr.insertCell(4);
    cell4.innerHTML="default";
    var cell5 = tr.insertCell(5);
    cell5.innerHTML="0";
    var cell6 = tr.insertCell(6);
    cell6.innerHTML="<a style=\"cursor: default\" onclick=\"update(this)\">修改</a>"+"<a style=\"cursor: default\" onclick=\"del(this)\"> 删除</a>";
}
function selectAll(){
    var selectAll = document.getElementById('selectAll');
    var chks = document.getElementsByName('chks');
    if (selectAll.checked === true){
        for (var i = 0; i < chks.length;i++){
            chks[i].checked = true;
        }
    }
}

function changeColor(){
    var table = document.getElementById('table');
    var rows = table.rows;
    for (var i =0;i<rows.length;i++){
        if (i % 2 === 0){
            rows[i].style.backgroundColor = "rgba(120,146,121,0.3)";
            // '#789279';
        }else{
            rows[i].style.backgroundColor = "rgba(204,255,255,0.3)";
            // '#CCFFFF';
        }
    }

}