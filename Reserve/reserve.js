document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-availability');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Verificar se a data de check-in é maior que a data atual
      const currentDate = new Date().toISOString().split('T')[0];
      if (checkInInput.value <= currentDate) {
        alert('A data de check-in deve ser maior que a data atual.');
        return;
      }
  
      // Verificar se o número total de pessoas é maior que 5
      const totalPeople = parseInt(adultsInput.value) + parseInt(childrenInput.value);
      if (totalPeople > 5) {
        alert('O número total de pessoas (adultos + crianças) não pode ser maior que 5.');
        return;
      }
      
      // Limpar os campos de texto e datas
      checkInInput.value = '';
      checkOutInput.value = '';
      adultsInput.value = '';
      childrenInput.value = '';
    });
});