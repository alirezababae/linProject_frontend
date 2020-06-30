// showing multiple
document.getElementById('btn-menu-drawer').addEventListener("click", (event) => {
    $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
});

document.querySelector('.left.floated.comment.outline').addEventListener("click", (event) => {
    $('.ui.modal').modal({blurring: true}).modal('show');
});
