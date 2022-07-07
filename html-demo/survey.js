var formElement = document.getElementsByTagName('form')[0];

function submitHandler(event) {
    // var formData = Object.fromEntries(new FormData(event.target).entries());
    var formData = new FormData(event.target);
    var entries = formData.entries();
    var resultObject = Object.fromEntries(entries);
    console.log('formData', resultObject);
    console.log('event.target', event.target);
}

formElement.addEventListener('submit', submitHandler);

// http://127.0.0.1:5500/survey.html?name=adsfasdf&gender=1&age=10&country=c2&country=c3&comments=&email=&password=&url=

