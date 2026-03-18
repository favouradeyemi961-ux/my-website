 function submitform(event){
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = <strong>Name:</strong> S[name]<br>
             <strong>Email:</strong> S(email)<br>
              <strong>message:</strong>- S[message]</br>;
        }