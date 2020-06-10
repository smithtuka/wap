$(function () {
    $("#submit").click(fetchDetails);


    const userId = $("#user_id").val();
    // alert(userId.val());

    function fetchDetails(e) {
        const url = "http://jsonplaceholder.typicode.com/users"; //"http://jsonplaceholder.typicode.com/users/1"

        $.get(url + "/" + $("#user_id").val(), { //+ $("#user_id").val(), 
            "data": {}
            // "userId": userId
            // // "": "" //userId
            // },
            // "dataType": "json",
            // "method": "GET"

        }).done(populatePage).fail((err) => console.log(err)).always(fetchPosts);

        return false;

    }

    function populatePage(response) {

        const resp = $(response); //one jq obj

        resp.each(function (idx, elem) {

            alert(idx + " - " + elem.id); // thus no need for logic below now since url is clear enough
            if (parseInt(elem.id) == parseInt($("#user_id").val())) {
                let addr = `&nbsp;street: ${elem.address.street}&nbsp;  city: &nbsp;${elem.address.city}&nbsp; Zip: &nbsp;${elem.address.zipcode} &ensp;Geo:-&nbsp; lat: &nbsp;${elem.address.geo.lat} lng: &nbsp;${elem.address.geo.lng}`;
                $("#user_details").append($("<span>").html(`ID: ${elem.id} &ensp; USERNAME: ${elem.username}  &ensp; EMAIL: ${elem.email}  <br /> &emsp;ADDRESS: ${addr}`));

            }
        });
        $("#user_details").append($("<hr />"));
        // fetchPosts();

    }

    function fetchPosts() {
        const url = "http://jsonplaceholder.typicode.com/posts"; //?"userId": $("#user_id").val() be dynamically added in data{} below
        const usID = $("#user_id").val();

        $.get(url + "?userId=" + `${usID}`, {
            "datatype": "json",
            "data": {
                // "userId": usID //$("#user_id").val()
                //how to pass param efficiently here?
            }

        }).done(displayPosts).fail((err) => console.log(err));

    }
    let btnId = 0;

    function displayPosts(posts) {
        let data = $(posts);

        const commentBtn =
            $("<button>", {
                "text": "show comments",
                "color": "maroon",
                "class": "commBtn",
                "id": btnId++
            }).click(showComment);


        data.each(function (idx, elem) {
            // alert(ele.title);
            let elemo = $(elem);
            elemo.each(function (id, ele) {
                const content = `post_id: ${ele.id} &ensp; TITLE: ${ele.title}  &ensp; BODY: ${ele.body} `;
                $("#posts").append($("<p>").html(content));
                $("#posts").append(commentBtn);
            });

        });

        function showComment() { // url + /comments?postId=1
            const comment = "yes"; // fetch
            $(this).parent().append($("<p>").text(comment)); // fetch comments based on ID and display them/
        }

    }
});