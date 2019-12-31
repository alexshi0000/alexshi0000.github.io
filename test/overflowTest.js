var all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;
for (; i < all.length; i++) {
    rect = all[i].getBoundingClientRect();
    if (rect.right > docWidth || rect.left < 0){
        console.log(all[i]);
    }
}
