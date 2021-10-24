function getRoomInfo(){
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(ans){
            console.log(ans);
            $("#resultado").empty();
            showClientAns(ans.items);
        }
        });

}

function showClientAns(items){
    let mytable="<table>";
    mytable+="<td>"+" ID "+"</td>";
    mytable+="<td>"+" ROOM "+"</td>";
    mytable+="<td>"+" STARS"+"</td>";
    mytable+="<td>"+" Category "+"</td>";
    mytable+="<td>"+" Description "+"</td>";
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].room+"</td>";
        mytable+="<td>"+items[i].stars+"</td>";
        mytable+="<td>"+items[i].category_id+"</td>";
        mytable+="<td>"+items[i].description+"</td>";
        mytable+="<td> <button onclick='roomDelete("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function saveRoomInfo(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            alert("Se Guardó Correctamente")
        }
        });
}

function editRoom(){
    let myData={
        id:$("#id").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category_id").val(),
        description:$("#description").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            $("#id").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            getRoomInfo();
            alert("Se Actualizó Correctamente")
        }
        });
}

function roomDelete(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            getRoomInfo();
            alert("Se Eliminó Correctamente")
        }
        });
}
