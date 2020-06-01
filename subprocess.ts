const filenames = Deno.args;

// process
const p = Deno.run({
  cmd: [
    "deno",
    "run",
    "--allow-read",
    "unix-cat.js",
    ...filenames
  ],
  stdout: "piped",
  stderr: "piped"
})

const { code } = await p.status();

if (code === 0) {
  const rawOutput = await p.output();
  await Deno.stdout.write(rawOutput);
} else {
  const rawError = await p.stderrOutput();
  const err = new TextDecoder().decode(rawError);
  console.log(err);
}

Deno.exit();