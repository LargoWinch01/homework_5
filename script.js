let temperature='input';

if (temperature<0){
    console.log('frozen ');
}
else if (temperature>=0 && temperature <=10) {
    console.log('very cold');
}
else if (temperature>=11 && temperature <=20) {
    console.log('cold');
}
else if (temperature>=21 && temperature <=30) {
    console.log('hot');
}
else if (temperature>30 ) {
    console.log('very hot');
}
else{
    console.log('error');
}
