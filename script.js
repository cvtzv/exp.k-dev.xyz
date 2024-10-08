// Replace with your server's IP and port
const serverIP = 'exp.komarucraft.pw';
const serverPort = '25565';

// Function to get server status from MCSRVSTAT API
async function fetchServerStatus() {
    const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}:${serverPort}`);
    const data = await response.json();

    if (data.online) {
        document.getElementById('server-status').innerText = 'Server is Online!';
        document.getElementById('players-online').innerText = data.players.online;
    } else {
        document.getElementById('server-status').innerText = 'Server is Offline';
    }
}

// Fetch server status when page loads
window.onload = fetchServerStatus;
