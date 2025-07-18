
# Deskripsi Class Tailwind CSS pada `App.jsx`

Berikut adalah penjelasan untuk setiap class utility Tailwind CSS yang digunakan dalam file `src/App.jsx`.

## Kontainer Utama (`<div className="min-h-screen bg-gray-100 flex items-center justify-center">`)

- `min-h-screen`: Mengatur tinggi minimum elemen agar sama dengan tinggi layar penuh (`100vh`). Ini memastikan latar belakang abu-abu memenuhi seluruh halaman.
- `bg-gray-100`: Memberikan warna latar belakang abu-abu muda pada elemen.
- `flex`: Mengaktifkan layout Flexbox untuk elemen ini.
- `items-center`: (Flexbox) Menyelaraskan item-item di dalamnya secara vertikal ke tengah.
- `justify-center`: (Flexbox) Menyelaraskan item-item di dalamnya secara horizontal ke tengah.

## Kartu Form (`<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">`)

- `bg-white`: Memberikan warna latar belakang putih solid.
- `p-8`: Memberikan padding sebesar `2rem` (32px) di semua sisi elemen.
- `rounded-lg`: Menerapkan sudut yang membulat dengan ukuran besar (`large`).
- `shadow-md`: Menerapkan efek bayangan (box-shadow) dengan ukuran sedang (`medium`).
- `w-full`: Mengatur lebar elemen menjadi 100% dari kontainer induknya.
- `max-w-md`: Mengatur lebar maksimum elemen ke ukuran `medium` (28rem atau 448px), mencegahnya menjadi terlalu lebar di layar besar.

## Judul Form (`<h2 className="text-2xl font-bold mb-6 text-center">`)

- `text-2xl`: Mengatur ukuran font menjadi `1.5rem` (24px).
- `font-bold`: Membuat teks menjadi tebal.
- `mb-6`: Memberikan margin bawah sebesar `1.5rem` (24px).
- `text-center`: Memposisikan teks di tengah secara horizontal.

## Label Input (`<label className="block text-gray-700 text-sm font-bold mb-2">`)

- `block`: Membuat elemen `label` ditampilkan sebagai elemen blok, sehingga menempati seluruh lebar yang tersedia dan memaksa elemen berikutnya berada di baris baru.
- `text-gray-700`: Mengatur warna teks menjadi abu-abu gelap.
- `text-sm`: Mengatur ukuran font menjadi `0.875rem` (14px).
- `font-bold`: Membuat teks menjadi tebal.
- `mb-2`: Memberikan margin bawah sebesar `0.5rem` (8px).

## Input Fields (`<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">`)

- `shadow`: Menerapkan efek bayangan (box-shadow) dasar.
- `appearance-none`: Menghapus gaya default browser untuk elemen input (seperti panah pada input angka atau gaya default lainnya).
- `border`: Menambahkan border (garis tepi) solid 1px di sekeliling input.
- `rounded`: Menerapkan sudut yang membulat dengan ukuran standar.
- `w-full`: Mengatur lebar input menjadi 100% dari kontainer induknya.
- `py-2`: Memberikan padding vertikal (atas dan bawah) sebesar `0.5rem` (8px).
- `px-3`: Memberikan padding horizontal (kiri dan kanan) sebesar `0.75rem` (12px).
- `text-gray-700`: Mengatur warna teks di dalam input menjadi abu-abu gelap.
- `leading-tight`: Mengatur jarak antar baris (line-height) menjadi lebih rapat.
- `focus:outline-none`: Menghapus garis luar (outline) default yang muncul saat input difokuskan.
- `focus:shadow-outline`: Menerapkan efek bayangan yang menyerupai outline saat input difokuskan, sebagai alternatif visual untuk menandakan fokus.

## Margin Bawah Tambahan

- `mb-4`: Memberikan margin bawah sebesar `1rem` (16px). Digunakan pada pembungkus input.
- `mb-6`: Memberikan margin bawah sebesar `1.5rem` (24px). Digunakan pada pembungkus input password untuk memberi jarak lebih sebelum tombol.
- `mb-3`: Memberikan margin bawah sebesar `0.75rem` (12px). Digunakan pada input password itu sendiri.

## Kontainer Tombol (`<div className="flex items-center justify-between">`)

- `flex`: Mengaktifkan layout Flexbox.
- `items-center`: Menyelaraskan item di dalamnya secara vertikal ke tengah.
- `justify-between`: (Flexbox) Memberi ruang di antara item-item flex, mendorongnya ke ujung-ujung kontainer.

## Tombol Register (`<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">`)

- `bg-blue-500`: Memberikan warna latar belakang biru.
- `hover:bg-blue-700`: Mengubah warna latar belakang menjadi biru yang lebih gelap saat kursor mouse berada di atas tombol.
- `text-white`: Mengatur warna teks menjadi putih.
- `font-bold`: Membuat teks menjadi tebal.
- `py-2`: Memberikan padding vertikal (atas dan bawah) sebesar `0.5rem` (8px).
- `px-4`: Memberikan padding horizontal (kiri dan kanan) sebesar `1rem` (16px).
- `rounded`: Menerapkan sudut yang membulat dengan ukuran standar.
- `focus:outline-none`: Menghapus outline default saat tombol difokuskan.
- `focus:shadow-outline`: Menerapkan efek bayangan seperti outline saat tombol difokuskan.
