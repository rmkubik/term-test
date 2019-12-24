import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import "chalkie";

var term = new Terminal();
term.open(document.getElementById("terminal"));
term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
term.write(`Hello from ${chalk.bold.red("xterm.js")}$ `);
term.write(chalk.bold.rgb(10, 100, 200)("Hello!"));

console.log(chalk.red("test"));

term.onKey(({ key, domEvent }) => {
  console.log(key, domEvent);
  if (domEvent.keyCode === 13) term.write("\n");
  term.write(key);
});
