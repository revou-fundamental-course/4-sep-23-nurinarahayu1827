function calculate() {
  // Mendapatkan panjang sisi dari input
  const sideLength = parseFloat(document.getElementById('sideLength').value);

  // Menghitung keliling (K = 4 * sisi) dan luas (A = sisi^2)
  const perimeter = 4 * sideLength;
  const area = sideLength * sideLength;

  // Menampilkan hasil di dalam elemen HTML
  document.getElementById('perimeter').textContent = perimeter;
  document.getElementById('area').textContent = area;
}

function reset() {
  // Mengosongkan input field dan hasil
  document.getElementById('sideLength').value = '';
  document.getElementById('perimeter').textContent = '0';
  document.getElementById('area').textContent = '0';
}

// Event listener untuk tombol "Hitung"
document.getElementById('calculateButton').addEventListener('click', calculate);

// Event listener untuk tombol "Reset"
document.getElementById('resetButton').addEventListener('click', reset);





