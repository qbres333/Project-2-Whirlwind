const logout = async () => {
    const response = await fetch('/api/users/logout', {
    // const response = await fetch("/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if(response.ok) {
        // return the user to the login page
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);