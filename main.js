document.getElementById('default').click();
    function drop(btn){
      var content = btn.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = 200 + 'px';
      }
      btn.classList.toggle('active');
    }