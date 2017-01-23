//update this with your js_form selector
	var form_id_js_newsletter = "javascript_form_newsletter";

    var data_js = {
        "access_token": "j0n4grmtq9cfu8ceh6edykgt" // sent after you sign up
    };

	var sendButtonNewsletter = document.getElementById("js_send_newsletter");

	function js_send_newsletter() {
		sendButtonNewsletter.value='Sending…';
        sendButtonNewsletter.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var newsletter = document.querySelector("#" + form_id_js_newsletter + " [name='newsletter']").value;

        if (newsletter === '')
        {
            alert('Please enter your email.');
            window.location = window.location.pathname
        }
        else
        {
            data_js['subject'] = "New newsletter user";
            data_js['text'] = newsletter + " would like to sign up for the newsletter.";
            var params = toParams(data_js);

            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(params);
            window.location = window.location.pathname

            return false;
        }

    }
	sendButtonNewsletter.onclick = js_send_newsletter;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });