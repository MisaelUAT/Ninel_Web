var modal_btn = document.getElementById('btn_dialog1');
var modal_structure = document.getElementById('modal_btn1')
var modal_close = document.getElementById('btn_close1')


modal_btn.onclick = function(){
    modal_structure.classList.remove('hidden');
}
modal_close.onclick = function(){
    modal_structure.classList.add('hidden');
}