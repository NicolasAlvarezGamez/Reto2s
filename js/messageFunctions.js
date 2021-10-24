function getMessageInfo(){
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(ans){
            console.log(ans);
            $("#resultado").empty();
            showMessageAns(ans.items);
        }
        });

}

function showMessageAns(items){
    let mytable="<table>";
    mytable+="<td>"+" ID "+"</td>"
    mytable+="<td>"+" MESSAGE TEXT "+"</td>"
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].messagetext+"</td>";
        mytable+="<td> <button onclick='messageDelete("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function saveMessageInfo(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            alert("Se Guardó Correctamente")
        }
        });
}

function editMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            getMessageInfo();
            alert("Se Actualizó Correctamente")
        }
        });
}

function messageDelete(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g35ca2aacff2f9e-db202110010817.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(ans){
            $("#resultado").empty();
            getMessageInfo();
            alert("Se Eliminó Correctamente")
        }
        });
}
