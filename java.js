
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      window.onload = function() {
        const audio = document.getElementById("backgroundAudio");
        audio.play(); 
    };
    }, 1000);
  };