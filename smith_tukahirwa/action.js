$(function () {
    'use strict';

    $("#btn_add").click(addContact);

    function addContact() {



        if (isValid()) { // validate fn call

            let del = $("<button>", {
                "html": "delete",
                "id": "del" + idGen.delID(),
                "class": "del"
            }).click(deleteRow);

            $("#contacts").append(
                $("<tr>").append(
                    $("<td>").text($("#first_name").val())).append(
                    $("<td>").text($("#last_name").val())).append(
                    $("<td>").text(parseInt($("#phone").val()))) //.append(
                .append(del));

            // reset the thing -
            $("#contact_from")[0].reset(); // DOM method reset()
            $("span").text().hide();

        } else {
            alert("bad info, check!");
            // $("span").text("");
            $("span").text("Sorry, check yoa contact info and try again!!");
        }

    }

    // dynamic delete Button Id generation
    const idGen = (function () {
        let id = 0;
        return {
            delID: function () {
                return id++;
            }
        };

    })();

    // error validation
    function isValid() {
        //trim() each first
        let fN = $("#first_name").val() !== "" && $("#first_name").val() !== null && $("#first_name").val() !== undefined;
        let lN = $("#last_name").val() !== "" && $("#last_name").val() !== null && $("#last_name").val() !== undefined;
        let ph = $("#phone").val() !== "" && $("#phone").val() !== null && $("#phone").val() !== undefined && !Number.isNaN($("#phone").val()); // && Number.isSafeInteger($("#phone").val());
        // alert(fN && lN && ph);
        return fN && lN && ph;
    }

    // delete Row
    // $("input #del" + [0 - 9]).click(deleteRow); //+[0-9]{}
    function deleteRow() {
        $(this).parent().remove();

    }





});