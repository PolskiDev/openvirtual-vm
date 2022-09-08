import { exec } from "child_process"

/**
 * 
 * @syntax vm --new fedora-xfce
 * @syntax vm --run fedora-xfce --device=/dev/driver
 * @syntax vm --listvm
 * @syntax vm --kill 04d0b9431419
 */

function InstallNewVM(system_vm:string): void {
    let port = 8000;
    if(process.argv[2] == "--new") {
        exec(`docker pull linuxserver/webtop:${system_vm}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
            console.log(`Virtual Machine Docker Container created with operating system: (${system_vm})`)
        });

    } else if(process.argv[2] == "--run") {
        let cmd;
        let nvidia;

        if (process.argv[4]) {
            nvidia = process.argv[4].slice(process.argv[4].indexOf("=")+1)
            cmd = `docker run --privileged --device=${nvidia}:${nvidia} -dp 8000:8000 linuxserver/webtop:${system_vm}`
        } else {
            cmd = `docker run --privileged -dp 8000:8000 linuxserver/webtop:${system_vm}`
        }

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
            console.log(`Virtual Machine Docker Container running at (localhost:${port})`)
        });


    } else if(process.argv[2] == "--listvm") {
        exec(`docker ps`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });

    } else if(process.argv[2] == "--kill") {
        exec(`docker stop ${system_vm}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
            console.log(`Virtual Machine Docker Container stopped at (localhost:${port})`)
        });

    } else {
        console.log("\n\n1. Commands - Running at (http://localhost:8000):\n")
        console.log("Create new Virtual Machine Container:          openvirtual --new <linux_distribution>\n")

        console.log("Run Virtual Machine Container on browser:      openvirtual --run <linux_distribution>")
        console.log("Run with Graphics Acceleration on browser:     openvirtual --run <linux_distribution> --device=/dev/<drive_name>\n")
        
        console.log("List all running Virtual Machine Containers:   openvirtual --listvm")
        console.log("Stop a running Container by Process ID:        openvirtual --kill <process_id>\n\n")
         

        console.log("2. Linux distributions and user environments:\n\n")

        console.log("(XFCE)")
        console.log("ubuntu-xfce")
        console.log("fedora-xfce")
        console.log("arch-xfce\n")

        console.log("(KDE)")
        console.log("alpine-kde")
        console.log("ubuntu-kde")
        console.log("fedora-kde")
        console.log("arch-kde\n")

        console.log("(Mate)")
        console.log("alpine-mate")
        console.log("ubuntu-mate")
        console.log("fedora-mate")
        console.log("arch-mate\n")

        console.log("(i3)")
        console.log("alpine-i3")
        console.log("ubuntu-i3")
        console.log("fedora-i3")
        console.log("arch-i3\n")

        console.log("(OpenBox)")
        console.log("alpine-openbox")
        console.log("ubuntu-openbox")
        console.log("fedora-openbox")
        console.log("arch-openbox\n")

        console.log("(IceWm)")
        console.log("alpine-icewm")
        console.log("ubuntu-icewm")
        console.log("fedora-icewm")
        console.log("arch-icewm\n")
        
    }
}

InstallNewVM(process.argv[3])