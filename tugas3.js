//Looping fizz buzz
for (let i=1; i <=20; i++){
    if (i%15 == 0){
        console.log(i,"fizz buzz");}
    else if (i%3 ==0){
        console.log(i,"fizz");}
    else if (i%5 == 0){
        console.log(i,"buzz");}
    else {
        console.log(i);}
}

// Soal No.1
// Buat sebuah program yang menampilkan teks 'User ke - 1 ... User ke - 100 pada setiap baris di halaman HTML!
// Lakukan FOR LOOP pada Javascript.
// Jawaban
document.write("<b>Jawaban Soal No.1</b><br>");
for (let u=1; u<=100; u++){
    document.write("User ke - ", u, "<br>");
}

// Soal No. 2
// Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali!
// Jawaban
document.write("<br><b>Jawaban Soal No.2</b><br>");
for (let n=0; n < 20; n+=2){
    document.write(n, "<br>");
}

// Soal No. 3
// Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0...20!
// Jawaban
document.write("<br><b>Jawaban Soal No.3</b><br>");
for(let cek=0; cek <= 20; cek++){
    if(cek % 2 == 0){
        document.write(cek," Genap <br>");
    }
    else {
        document.write(cek," Ganjil <br>");
    }
}

// Soal No. 4
// Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();!
// Jawaban
let ulang = confirm("Apakah anda mau mengulang?");
let hitung = 0;

while (ulang){
    hitung++;
    ulang = confirm("Apakah anda mau mengulang?");
}
document.write("<br><b>Jawaban Soal No.4</b><br>");
document.write("Perulangan sudah dilakukan sebanyak ", hitung, " kali");

// Soal No. 5
// Buat sebuah program kuis !
// Jawaban
let jawab = prompt("Sebutkan kepanjangan dari nama IB !");

while(jawab != null){
    if (jawab !="Impact Byte"){
        jawab = prompt("Jawaban kamu salah. Silahkan ulangi.\nSebutkan kepanjangan dari nama IB !");
    }
    else {
        alert("Selamat jawaban kamu benar");
        break;
    }
}