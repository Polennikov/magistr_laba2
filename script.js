(function() {
    let fileUploadEl = document.getElementById('imageLoader'),
		srcImgEl = document.getElementById('imageDefault')

    fileUploadEl.addEventListener("change", function (e) {
        srcImgEl.src = URL.createObjectURL(e.target.files[0]);
    }, false);

    srcImgEl.onload = function () {
        let src = cv.imread(srcImgEl);
        let dst = new cv.Mat();
        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
        cv.Canny(src, dst, 50, 100, 3, false);
        cv.imshow('imageCanvas', dst); // вывод на canvas
        src.delete();
        dst.delete();
    }
})()

function save(){
	let imageData = document.getElementById("imageCanvas").toDataURL();
    let image = new Image();
    image.src = imageData;
    let link = document.createElement("a");
    link.setAttribute("href", image.src);
    link.setAttribute("download", "NewImage");
    link.click();
}
