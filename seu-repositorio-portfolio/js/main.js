// Arquivo JS principal
document.addEventListener('DOMContentLoaded', () => {
	// Define o ano no rodapé automaticamente
	const elYear = document.getElementById('year');
	if (elYear) elYear.textContent = new Date().getFullYear();
});
