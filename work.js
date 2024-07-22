function loginSahifasiniKorsat() {
    document.getElementById('auth-sahifa').style.display = 'none';
    document.getElementById('login-sahifa').style.display = 'block';
}



// Kirish formasini jo'natish uchun funksiya
function loginTasdiqlash(event) {
    event.preventDefault();
    // Kirish logikasini bajarish (masalan, API orqali autentifikatsiya)
    // Muvaffaqiyatli kirishdan so'ng, admin sahifasiga o'tish
    document.getElementById('login-sahifa').style.display = 'none';
    document.getElementById('admin-sahifa').style.display = 'block';
}

// Admin formasini jo'natish uchun funksiya
function formaniJonatish(event) {
    event.preventDefault();
    // Kiritilgan malumotlarni to'plab olish
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    
    // Ob'ektni yaratish
    let malumotlarObj = {
        input1: input1,
        input2: input2,
        input3: input3
    };

    // Malumotlarni mapi orqali chiqarish yoki foydalanish
    console.log(malumotlarObj);

    // Tablega malumotlarni joylash
    let tableBody = document.getElementById('table-body');
    let newRow = tableBody.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.textContent = input1;
    cell2.textContent = input2;
    cell3.textContent = input3;

    // Inputlarni tozalash yoki boshqa amallarni bajarish
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
}



// Autentifikatsiya yoki ma'lumotlarni olish uchun fetch ishlatish mumkin, masalan:
function autentifikatsiya(login, parol) {
    // Masalan, fetch API bilan
    fetch('https://fakeapi.platzi.com/en/rest/products', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token // 'token' ni o'z asosiy token bilan almashtiring
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Tarmoq javobi yaxshi emas');
        }
        return response.json();
    })
    .then(data => {
        console.log('Mahsulotlar ma\'lumoti:', data);
        // Ma'lumotlarni talablariga muvofiq qo'llash
    })
    .catch(error => {
        console.error('Fetch xatosi:', error);
    });
}
