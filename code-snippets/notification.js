function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    console.log('permission is already granted - 1');
    var notification = new Notification("Hi there! - 1", {
        body: "this is a browser notification - 1"
    });
    notification.onshow = function() {
        console.log('notification was shown - 1');
    };
    notification.onclick = function() {
        console.log('notification was clicked - 1');
    };
    notification.onclose = function() {
        console.log('notification was closed - 1');
    };
    notification.onerror = function() {
        console.log('notification was error - 1');
    };
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there! - 2", {
            body: "this is a browser notification - 2",
            requireInteraction: true,
        });
        notification.onshow = function() {
            console.log('notification was shown - 2');
        };
        notification.onclick = function() {
            console.log('notification was clicked - 2');
        };
        notification.onclose = function() {
            console.log('notification was closed - 2');
        };
        notification.onerror = function() {
            console.log('notification was error - 2');
        };
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

notifyMe();
