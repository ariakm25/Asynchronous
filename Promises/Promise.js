//Menampilkan list semua data memerlukan waktu 3 detik
//Menambahkan data memerlukan waktu 2 detik
//Menghapus data memerlukan waktu 1 detik
const list = ['Satu','Dua'] ;

function getList() {
    setTimeout( () => {
        for (var i=0;i<=list.length-1;i++){
            console.log(list[i])
        }
    },3000);
}

function tambah(add) {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const err = false;
            if(err) {
                reject('Gagal menambahkan data.');
            }else {
                resolve(list.push(add));
            }
        },2000);
    });
}

function hapus(){
    return new Promise ( (resolve,reject) => {
      setTimeout( () => {
          const err = false;
          if(err) {
            reject('Gagal menghapus data.')
          }else {
            resolve(list.splice(0, 1));
          }
      },1000);  
    });
}

tambah('Tiga')
hapus()//menghapus data ke 1
tambah('Empat')
.then(getList)
.catch(err => console.log(err));

/* Output 
Dua
Tiga
Empat
*/
