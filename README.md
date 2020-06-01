# Example scripts created with [Deno](https://deno.land)

### Check if a execution is the main input:
Test if the current script has been executed as the main input to the program.

```bash
$ deno run check-main.ts
is main.
```

### Unix cat:
Standard UNIX `cat`  with `file.txt`. In this execution `check-main.ts` is not main script.

```
$ deno run --allow-read unix-cat.js file.txt
is not main.
Lorem ipsum dolor sit amet, consectetur adipiscing...
```

### Run a subprocess:
Run a subprocess, in this case run `unix-cat.js` with `file.txt` by `subprocess_simple.ts`. Again, in this execution `check-main.ts` is not main script.

```
$ deno run --allow-run subprocess.ts file.txt
```

##### For more example see [https://deno.land/manual/examples](https://deno.land/manual/examples)