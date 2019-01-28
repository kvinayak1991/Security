//JS CODE with npm install crypto-js --save in angular 6 or just include    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>


    var message = "password";
    var key = "aesEncryptionKey"; //length=22
    var iv  = "encryptionIntVec"; //length=22
    
      key = CryptoJS.enc.Utf8.parse(key);
      iv = CryptoJS.enc.Utf8.parse(iv);
    var cipherData = CryptoJS.AES.encrypt(message, key, { iv: iv });
    console.log(cipherData.toString());
    var data = CryptoJS.AES.decrypt(cipherData, key, { iv: iv });
    console.log("Original String:::"+data.toString(CryptoJS.enc.Utf8));
