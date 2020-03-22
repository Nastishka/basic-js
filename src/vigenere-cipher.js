class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
        this.alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    _generateKey(message, key) {
        let keyInUpperCase = key.toUpperCase();
        return Array.from(
            { length: message.length },
            (item, index) => keyInUpperCase[index % keyInUpperCase.length]
        );
    }

    _transformMessage(message, key, transformFunc) {
        if (message && key) {
            let lettersToTransform = Array.from(message.toUpperCase()).filter(
                letter => this.alphabet.indexOf(letter) >= 0
            );
            let generatedKey = this._generateKey(lettersToTransform, key);
            let transformedLetters = Array.from(lettersToTransform,
                (letterToTransform, index) => {
                    let letterToTransformIndex = this.alphabet.indexOf(letterToTransform);
                    let keyLetterIndex = this.alphabet.indexOf(generatedKey[index]);
                    let transformedLetterIndex = transformFunc(letterToTransformIndex, keyLetterIndex);
                    return this.alphabet[transformedLetterIndex];
                }
            );
            let transformedMessage = Array.from(message.toUpperCase(),
                (letter, index) => {
                    if (this.alphabet.indexOf(letter) >= 0) {
                        return transformedLetters.shift();
                    } else {
                        return letter;
                    }
                }
            );
            if (!this.isDirect) {
                transformedMessage.reverse();
            }
            return transformedMessage.join('');
        } else {
            throw new Error();
        }
    }
    encrypt(strToEncode, key) {
        let encryptLetterFunc = (letterIndex, keyIndex) => {
            return (letterIndex + keyIndex) % this.alphabet.length;
        };
        return this._transformMessage(strToEncode, key, encryptLetterFunc);
    }

    decrypt(strToDecode, key) {
        let decryptLetterFunc = (letterIndex, keyIndex) => {
            return (this.alphabet.length + letterIndex - keyIndex) % this.alphabet.length;
        };
        return this._transformMessage(strToDecode, key, decryptLetterFunc)
    }
}
module.exports = VigenereCipheringMachine;
