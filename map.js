new Set([1,1,2,2,3,4])
// returns {1,2,3,4}

[...new Set("referee")].join("")
// returns "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {Array(3)=> true}
// {Array(3)=> false}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = array => new Set(array).size ! == array.length;

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowels(char){
    return "aeiou".includes(char);
}
function vowelCount(string){
    const vowelMap = new Map();
    for(let char of string){
        let lowerCase = char.toLowerCase()
        if(vowels(lowerCase)){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase,vowelMap.get(lowerCase)+1)
            } else{
                vowelMap.set(lowerCase,1)
            }
        }
    }
    return vowelMap;
}