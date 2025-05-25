# 🖼️ Crypto Lending NFT

Smart contract ini memungkinkan pengguna untuk menjaminkan NFT mereka untuk pinjaman berbasis Ethereum.

## 📁 Struktur Proyek

```
crypto-lending-nft/
├── contracts/
│   └── NFTLending.sol
├── scripts/
│   └── deploy.js
├── test/
│   └── NFTLending-test.js
├── hardhat.config.js
└── README.md
```

## 🔧 Fitur

- 📌 Pengguna dapat menggadaikan NFT sebagai jaminan pinjaman.
- 🔐 NFT akan disimpan sementara di smart contract.
- 💰 Pengguna dapat menebus NFT setelah melunasi pinjaman.
- 📤 Event log untuk monitoring pinjaman.

## 🚀 Setup dan Penggunaan

### 1. Instalasi Dependency

```bash
npm install --save-dev hardhat @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethers chai
npm install @openzeppelin/contracts
```

### 2. Kompilasi Kontrak

```bash
npx hardhat compile
```

### 3. Menjalankan Test

```bash
npx hardhat test
```

### 4. Deploy Kontrak

Deploy ke jaringan lokal:

```bash
npx hardhat run scripts/deploy.js --network hardhat
```

Atau ke testnet Rinkeby (jangan lupa ganti `YOUR_INFURA_PROJECT_ID` dan `YOUR_PRIVATE_KEY`):

```js
rinkeby: {
  url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  accounts: ["YOUR_PRIVATE_KEY"]
}
```

## 🧪 Testing

Testing dilakukan menggunakan **Mocha** dan **Chai**. Unit test memastikan:
- Peminjaman dibuat hanya oleh pemilik NFT.
- NFT berpindah ke smart contract saat pinjaman dibuat.
- NFT kembali ke peminjam saat pinjaman dilunasi.

## 🛠️ Kontrak dan Dependensi

Kontrak utama:
- `NFTLending.sol` — kontrak pinjaman NFT berbasis ERC721.

Dependensi:
- OpenZeppelin Contracts
- Hardhat
- Ethers.js

## 📄 Lisensi

MIT License
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
