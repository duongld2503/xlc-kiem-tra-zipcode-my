regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

function isZipcode(str) {
    if (regexp.test(str)){
        console.log("dung")
    } else console.log("sai");
}