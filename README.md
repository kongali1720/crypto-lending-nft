# crypto-lending-nft# Crypto Lending dengan Garansi NFT

Platform pinjaman crypto yang memungkinkan peminjam menggunakan NFT sebagai jaminan.  
Sistem ini menggunakan smart contract untuk memastikan NFT yang dijaminkan aman dan pinjaman diterima dengan transparan dan otomatis.

---
# Crypto Lending NFT

Project ini adalah contoh sederhana smart contract untuk sistem lending berbasis NFT.

## Struktur

- `contracts/NFTLending.sol` — smart contract utama untuk lending NFT.
- `scripts/deploy.js` — skrip deploy kontrak menggunakan Hardhat.
- `test/NFTLending-test.js` — contoh unit test menggunakan Mocha & Chai.
- `hardhat.config.js` — konfigurasi Hardhat standar.

## Setup

1. Install dependencies:

```bash
npm install --save-dev hardhat @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethers chai
npm install @openzeppelin/contracts

    Compile kontrak:

npx hardhat compile

    Jalankan test:

npx hardhat test

    Deploy ke jaringan lokal:

npx hardhat run scripts/deploy.js --network hardhat

---

## Fitur

- Pinjaman crypto dengan NFT sebagai jaminan  
- Smart contract mengelola transaksi pinjaman dan pengembalian  
- Otomatisasi penguncian dan pelepasan NFT saat pinjaman aktif dan lunas  
- Transparansi dan keamanan via blockchain  

---

## Cara Kerja

1. Peminjam mengunci NFT-nya ke smart contract sebagai jaminan.  
2. Smart contract mengeluarkan pinjaman dalam bentuk crypto.  
3. Peminjam membayar kembali pinjaman sesuai perjanjian.  
4. Setelah lunas, NFT dilepaskan kembali ke peminjam.  
5. Jika gagal bayar, NFT bisa dijual oleh pemberi pinjaman sesuai aturan.

---

## Teknologi

- Solidity (Smart Contract Ethereum)  
- Web3.js / Ethers.js (Frontend interaction)  
- Hardhat / Truffle (Development & Testing)  
- React / Next.js (Frontend, opsional)  
- IPFS (Untuk metadata NFT, opsional)

---

## Instalasi & Penggunaan

*Masih dalam pengembangan, stay tuned!*

---

## Kontribusi

Semua kontribusi sangat diterima!  
Silakan buat pull request atau issues jika ada fitur atau perbaikan.

---

## Lisensi

MIT License

---

## Kontak

- Email: kongali1720@gmail.com  
- GitHub: [kongali1720](https://github.com/kongali1720)

---

## ☕ Dukung aku agar tetap waras menulis script tengah malam...

👉 [Buy Me a Coffee via PayPal](https://www.paypal.com/paypalme/bungtempong99) 👈  
Support with 💸 so I can buy ☕ and keep being 🔥!

---

## 📫 Let’s Connect Like Hackers

- 🧙 GitHub: [kongali1720](https://github.com/kongali1720)
- 💌 Email: [kongali1720@gmail.com](mailto:kongali1720@gmail.com)
- 🕵️‍♂️ Site: Coming soon — stay curious...

---

💻 INITIATING HUMANITY MODE...

🎯 Target Locked: Anak-anak Pejuang Down Syndrome  
🩺 Status: Butuh Dukungan  
❤️ Response: Buka Hati + Klik Link = Satu Senyum Baru

🧬 Mereka bukan berbeda — mereka dilahirkan untuk mengajarkan dunia tentang cinta yang murni dan kesabaran yang luar biasa.

👣 Setiap langkah kecil mereka = Keajaiban besar.

⚡ Bantu mereka melangkah lebih jauh, dengan caramu sendiri.

<p align="center">
  <a href="https://mydonation4ds.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/SUPPORT--NOW-%F0%9F%A7%A1-orange?style=for-the-badge&logo=heart" />
  </a>
</p>

"Karena jadi hacker hati bukan cuma soal kode... tapi juga soal peduli." 🖤

"Ngoding boleh sambil senyum, asal jangan inject SQL sambil ngambek!" 😜

---
