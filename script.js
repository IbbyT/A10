document.addEventListener('DOMContentLoaded', function () {
    const cookieDisplay = document.getElementById('cookieDisplay');

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let cookieValue = getCookie("userCookie");
    if (cookieValue) {
        cookieDisplay.textContent = "Saved cookie value: " + cookieValue;
    } else {
        let input = prompt("Enter a value to save in your cookie:");
        if (input !== null && input.trim() !== "") {
            setCookie("userCookie", input.trim(), 7);
            cookieDisplay.textContent = "Saved cookie value: " + input.trim();
        } else {
            cookieDisplay.textContent = "No cookie set.";
        }
    }
});