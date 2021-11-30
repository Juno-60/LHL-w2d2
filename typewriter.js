const sentence = "Here is the typewriter function using setTimeout. Sweet!\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 43 * i)
};