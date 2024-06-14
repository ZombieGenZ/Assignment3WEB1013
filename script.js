function Submit() {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const specialized = document.getElementById("specialized").value;
    
    console.log(name);
    console.log(birthday);
    console.log(phone);
    console.log(address);
    console.log(specialized);

    if (name == "" || birthday == "" || phone == "" || address == "" || specialized == "") {
      Swal.fire({
        title: 'Oops...',
        text: 'Có vẻ bạn chưa điền đầy đủ thông tin',
        icon: 'error'
      });
    }
    else {
      Swal.fire({
        title: 'Tuyệt vời',
        text: 'Vui lòng kiểm tra điện thoại để xác nhận tư vấn',
        icon: 'success'
      }).then((result) => {
        var myModalEl = document.getElementById('exampleModal');
        var myModal = bootstrap.Modal.getInstance(myModalEl);
        myModal.hide();
      });;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn").click();
    setTimeout(function() {
      document.querySelector('.register-form-submit').classList.add('hover');
      setTimeout(function() {
        document.querySelector('.register-form-submit').classList.remove('hover');
      }, 3000);
    }, 1000);
  });