/**
 * ======== HRD Hiring Method =====
 *
 * Seorang HRD ingin menghire seorang karyawan.
 * Loker yang tersedia ada 3 jenis : Junior, Middle, Senior.
 *
 * Syarat :
 * Junior :
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 4.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 *
 * Middle :
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 6.500.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
 *
 * Senior :
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 9.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000
 *
 * Buatlah algoritma, pseudocode dan codingnya. (Tanpa func)
 */

// Algoritma
/**
 * 1. Cari tau jenis loker yang dicari oleh HRD
 * 2. Cari tau kriteria dari setiap posisi yang dicari oleh HRD
 * 3. Tentukan dahulu var posisi pegawai, pengalaman, dan gaji sebagai nilai awal atau test case
 * 4. Buat seleksi kondisi sesuai nilai posisi pegawai
 * 4.1. Ketentuannya dengan memecah menjadi 4 kondisi yaitu posisi Junior, Middle, Senior, dan default
 * 4.2. Di dalam masing-masing seleksi kondisi posisi pegawai, buat lagi seleksi kondisi berdasarkan lamanya pengalaman kerja pegawai
 * 4.3. Lama pengalaman kerja pegawai dapat menentukan gaji yang akan didapat
 * 5. Mencetak jika pegawai dapat diterima dengan gaji yang sesuai dengan posisinya
 */

let posisiPegawai = "Middle";
let exp = 0;
let salary = 0;

console.log("\n======== HRD Hiring Method =====\n");
switch (posisiPegawai) {
  case "Junior":
    if (exp < 2) {
      salary += 3000000;
    } else if (exp >= 2 && exp <= 5) {
      salary += 4000000;
    } else if (exp > 5) {
      salary += 5000000;
    }

    console.log(
      `Anda diterima pada posisi ${posisiPegawai} dengan gaji sebesar Rp.${salary}`
    );
    break;
  case "Middle":
    if (exp < 2) {
      salary += 5500000;
    } else if (exp >= 2 && exp <= 5) {
      salary += 6500000;
    } else if (exp > 5) {
      salary += 7500000;
    }

    console.log(
      `Anda diterima pada posisi ${posisiPegawai} dengan gaji sebesar Rp.${salary}`
    );
    break;
  case "Senior":
    if (exp < 2) {
      salary += 7500000;
    } else if (exp >= 2 && exp <= 5) {
      salary += 9000000;
    } else if (exp > 5) {
      salary += 10000000;
    }

    console.log(
      `Anda diterima pada posisi ${posisiPegawai} dengan gaji sebesar Rp.${salary}`
    );
    break;
  default:
    console.log(
      `Mohon maaf posisi ${posisiPegawai} sedang kosong, mohon mendaftar pada posisi yang lain`
    );
    break;
}
