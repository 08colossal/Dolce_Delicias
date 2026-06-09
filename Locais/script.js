
    function abrirRota() {
        // Abre o Google Maps com rota até o destino
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, "_blank");
    }