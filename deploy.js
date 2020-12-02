
    var FtpDeploy = require("ftp-deploy");
    var ftpDeploy = new FtpDeploy();

    var config = {
        user: "3a4xp_gecko",
        // Password optional, prompted if none given
        password: "nx82EwG36J9f6h72",
        host: "3a4xp.ftp.infomaniak.com",
        port: 21,
        localRoot: __dirname + "/dist/timetable",
        remoteRoot: "/pwa/timetable/",
        // include: ["*", "**/*"],      // this would upload everything except dot files
        include: ["*", "**/*", ".*"],
        // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
        exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
        // delete ALL existing files at destination before uploading, if true
        deleteRemote: false,
        forcePasv: true
    };
    
    ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));