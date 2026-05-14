 // Warte, bis das Dokument vollständig geladen ist
  document.addEventListener("DOMContentLoaded", function() {
    // Funktion zur Entfernung des Logos
    function removeLogo() {
      // Finde das spline-viewer Element
      const splineViewer = document.querySelector('spline-viewer');
      
      if (splineViewer && splineViewer.shadowRoot) {
        // Versuche direkt auf das Logo zuzugreifen
        const logo = splineViewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          console.log('Spline Logo erfolgreich entfernt');
          return;
        }
      }
      
      // Falls das Logo noch nicht gefunden wurde, erneut versuchen
      setTimeout(removeLogo, 500);
    }
    
    // Starte den Prozess
    removeLogo();
  });
      var modal = document.getElementById('modal-cover');

      function show_modal() {
        modal.style.display = 'flex';
      }

      // Handler an Close-Button binden
      document.getElementById('modal-close').addEventListener('click',
      function() {
        modal.style.display = 'none';
      });

      // Timer starten
      setTimeout(show_modal, 1000);




 