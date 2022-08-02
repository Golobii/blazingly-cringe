const source = document.documentElement.innerHTML;

document.documentElement.innerHTML = source.replace(/blazing(ly)? fast/gi, "fast");