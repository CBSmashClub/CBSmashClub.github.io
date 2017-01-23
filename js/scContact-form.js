//update this with your js_form selector
	var form_id_js = "javascript_form";
	
    var data_js = {
        "access_token": "j0n4grmtq9cfu8ceh6edykgt" // sent after you sign up
    };

    var sendButton = document.getElementById("js_send");
	
    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
		var email = document.querySelector("#" + form_id_js + " [name='email']").value;
        var message = document.querySelector("#" + form_id_js + " [name='text']").value;

        if (subject === '' || email === '' || message === '')
        {
            if (subject === '')
            {
                alert('Please enter a subject.');
            }
            if (email === '')
            {
                 alert('Please enter your email.');
            }
            if (message === '')
            {
                alert('Please enter a message.');
            }
            window.location = window.location.pathname
        }
        else
        {
            data_js['subject'] = subject;
            data_js['text'] = email + "\n" + message;
            var params = toParams(data_js);

            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(params);
            window.location = window.location.pathname

            return false;
        }
    }
	
    sendButton.onclick = js_send;
	
    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);

    js_form.addEventListener("submit", function (e)
    {
        e.preventDefault();
    }
    );