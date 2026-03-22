document.addEventListener('DOMContentLoaded', () => {
    const statusBadge = document.getElementById('status-badge');
    const onlineSection = document.getElementById('service-online');
    const offlineSection = document.getElementById('service-offline');

    function updateStatus() {
        const now = new Date();
        const hour = now.getHours();
        
        // HORARIO DE SERVICIO: 9:00 AM a 6:00 PM (18:00)
        const openingTime = 9;
        const closingTime = 18;

        const isOpen = hour >= openingTime && hour < closingTime;

        if (isOpen) {
            statusBadge.textContent = "● ESTAMOS EN SERVICIO";
            statusBadge.className = "badge open";
            onlineSection.style.display = "block";
            offlineSection.style.display = "none";
        } else {
            statusBadge.textContent = "○ CERRADO POR AHORA";
            statusBadge.className = "badge closed";
            onlineSection.style.display = "none";
            offlineSection.style.display = "block";
        }
    }

    // Ejecutar al cargar
    updateStatus();
    
    // Opcional: Revisar cada minuto sin recargar la página
    setInterval(updateStatus, 60000);
});