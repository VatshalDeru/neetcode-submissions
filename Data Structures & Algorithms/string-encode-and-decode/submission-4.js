class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStrings = "";

        for(const str of strs) {
            const delimiter = str.length;
            // console.log("encode delimiter: ", delimiter + "!")
            let encodedString = delimiter + "!" + str;
            encodedStrings += encodedString;
        }
        // console.log("encodedStrings: ", encodedStrings)
        
        return encodedStrings;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let currDelimiter = 0;
        let currDecodedString = "";
        let decodedArr = [];
        let gettingDelim = true;
        let delimTracker = "";
        for(let i = 0; i <= str.length; i++) {
            // console.log(currDelimiter, i, str[i], (i > currDelimiter))
            // console.log(currDelimiter, "string: ", currDecodedString, i);
            // console.log(i === currDelimiter, i, currDelimiter)
            // console.log(str[i], i, currDelimiter)
            
            if(gettingDelim) {
                // console.log("running")
                if(str[i] === "!") {
                    currDelimiter = parseInt(delimTracker) + i + 1;
                    // console.log(delimTracker, i, 1)
                    // currDelimiter += String(currDelimiter).length;
                    // console.log("delimTracker: ", delimTracker, "currDelimiter: ", currDelimiter)
                    delimTracker = "";
                    gettingDelim = false;
                    continue;
                } else delimTracker += str[i];
            } else if (i >= currDelimiter){
                // console.log("running")
                decodedArr.push(currDecodedString);
                currDecodedString = "";
                delimTracker += str[i]
                gettingDelim = true;
                // if(i >= currDelimiter){
                //     console.log("running")
                //     decodedArr.push(currDecodedString);
                //     currDecodedString = "";
                //     gettingDelim = true;
                // }
            } else currDecodedString += (str[i] || "");
        }
        // console.log("decodedArr", decodedArr);

        return decodedArr;
    }
}
