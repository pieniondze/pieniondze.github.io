const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
    help: "Available commands: help, about, contact, clear",
    about: "Hello! I'm blu, a SigmaVid mod and Wave founder. I enjoy tech.",
    contact: "You can reach me at blank.",
    clear: () => output.innerHTML = ''
};

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        processCommand(command);
    }
});

function processCommand(command) {
    const promptLine = `gaydroid@michalik:~$ ${command}\n`;
    output.innerHTML += promptLine;

    if (commands[command]) {
        if (typeof commands[command] === 'function') {
            commands[command]();
        } else {
            output.innerHTML += `${commands[command]}\n`;
        }
    } else {
        output.innerHTML += `Command not found: ${command}\n`;
    }

    output.scrollTop = output.scrollHeight;
}
