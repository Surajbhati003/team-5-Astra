// open-url.cjs

const { exec } = require('child_process');

// Open the desired URL in the default browser
exec('start http://localhost/DataShastra/login.php', (err) => {
    if (err) {
        console.error('Failed to open URL:', err);
    }
});
