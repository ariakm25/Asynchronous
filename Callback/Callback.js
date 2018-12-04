//Menampilkan list semua data memerlukan waktu 1 detik
//Menambahkan data memerlukan waktu 2 detik
const list = ['Satu','Dua'] ;

function getList() {
    setTimeout( () => {
        for (var i=0;i<=list.length-1;i++){
            console.log(list[i])
        }
    },1000);
}

function tambah(add,cb) {
    setTimeout( () => {
        list.push(add);
        cb();
    },2000);
}

tambah('Tiga',getList);

/* Output 
Satu
Dua
Tiga
*/
