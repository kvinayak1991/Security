var message = "password";
    var key = "aesEncryptionKey"; //length=22
    var iv  = "encryptionIntVec"; //length=22
    
      key = CryptoJS.enc.Utf8.parse(key);
      iv = CryptoJS.enc.Utf8.parse(iv);
    var cipherData = CryptoJS.AES.encrypt(message, key, { iv: iv });
    console.log(cipherData.toString());
    var data = CryptoJS.AES.decrypt(cipherData, key, { iv: iv });
    console.log("Original String:::"+data.toString(CryptoJS.enc.Utf8));
