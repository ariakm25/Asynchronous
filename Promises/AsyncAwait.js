/* Catatan : setTimeout digunakan untuk simulasi asynchronous. Karena sebenarnya kita tidak bisa membuat proses asynchronous murni. 
    Memasak mie instan = 
    1. Membeli mie membutuhkan waktu 3 detik
    2. Memasak Mie membutuhkan waktu 3.5 detik
    3. Memberi bumbu dan mengaduk2 membutuhkan waktu 2 detik
    4. Memakan mie membutuhkan waktu 1 detik
*/


const beli = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log('Membeli Mie Instan...'));
    },3000)
});

const masak = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log('Mulai Memasak Mie...'));
    },3500)
});

const aduk = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log('Memberi bumbu...'));
    },2000)
});

const makan = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log('Memakan Mie...'));
    },1000)
});

const gas = async function() {
    try {
      await beli();
      await masak();
      await aduk();
      await makan();
      console.log('Selesai...');
    } catch (e) {
      console.log(err);
    }
  
  };
  
gas();

/* Output 
Membeli Mie Instan... (3 Detik)
Mulai Memasak Mie... (3.5 Detik)
Memberi bumbu... (2 Detik)
Memakan Mie... (1 Detik)
Selesai...
*/


