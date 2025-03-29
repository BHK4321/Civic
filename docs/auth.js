async function checkUserStatus() {
    const email = localStorage.getItem("userEmail");
    const token = localStorage.getItem("jwtToken");
    console.log(email);
    console.log(token);
    if (!email || !token) {
        return 1; // No email or token found, user is not logged in
    }

    try {
    console.log(email);

        const verificationResponse = await fetch(`http://localhost:5000/api/users/${email}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`, // Attach the token
                "Content-Type": "application/json"
            }
        });
        const data = await verificationResponse.json();
        if (!data.valid) {
            return 1; // Token is invalid or user is unauthorized
        }
        if(verificationResponse.status == 403){
            alert("Unauthorized access");
            return;
        }
        console.log(data.user.isVerified);
        return data.user.isVerified ? 3 : 2; // If valid, return 3, otherwise return 2
    } catch (error) {
        console.error("Error checking user status:", error);
        return 2; // Default to unauthorized in case of an error
    }
}

async function handleUserAccess() {
    const cases = await checkUserStatus();
    console.log("User Status:", cases);

    if (cases === 1) {
        // document.getElementById("communityIframe").onload = function() {
        //     document.getElementById("Communitytalks").style.display = "block";
        // };
        document.getElementById("auth-link").style.display = "block";
    } else if (cases === 2) {
        // document.getElementById("communityIframe").onload = function() {
        //     document.getElementById("Communitytalks").style.display = "block";
        // };
        document.getElementById("verifyi").style.display = "block";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("logout-btn").style.display = "block";
    }
}
    handleUserAccess();
   async function logout() {
        const log = await fetch(`http://localhost:5000/api/logout`,{
             method : "POST",
             headers: {
                "Content-Type": "application/json"
            }
        });
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userEmail");
        alert("Logged out!");
        window.location.href = "index.html";
    }