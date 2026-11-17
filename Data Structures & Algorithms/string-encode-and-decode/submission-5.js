class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let decodedString = "";

        for(const str of strs) {
            decodedString += `${str.length}!${str}`;
        };

        return decodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArr = [];
        let currString = "";
        let delimCollection = "";
        let delim = null;
        let gettingDelim = true;

        for(let i = 0; i < str.length; i++) {
            if (gettingDelim) {
                if (str[i] === "!") {
                    delim = i + parseInt(delimCollection)
                    gettingDelim = false;
                    delimCollection = "";
                } else delimCollection += str[i]
            } else if(i < delim) {
                currString += str[i];
            } else if (i === delim) {
                currString += str[i];
                decodedArr.push(currString);
                gettingDelim = true;
                currString = "";
            } else if(i > delim) {
                console.log("running");
                decodedArr.push(currString);
                gettingDelim = true;
                delimCollection += str[i];
            }
        };

        if(!gettingDelim) decodedArr.push(currString);

        return decodedArr;
    }
}
