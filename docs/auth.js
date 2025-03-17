async function checkUserStatus() {
    const email = localStorage.getItem("userEmail");
    if (!email) {
        return 1; 
    }

    try {
        const verificationResponse = await fetch(`http://localhost:5000/api/users/${email}`);

        if (!verificationResponse.ok) {
            return 2;
        }

        const verificationData = await verificationResponse.json();

        return verificationData.isVerified ? 3 : 2;
    } catch (error) {
        console.error("Error checking user status:", error);
        return 2; 
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


    function logout(){
        localStorage.clear();
        location.reload();
     }