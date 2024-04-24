console.log("hello");
const ARRAYS = [
    {
        "name": "Argentina"
    },
    {
        "name": "Philippines"
    },
    {
        "name": "Sweden"
    },
    {
        "name": "Colombia"
    },
    {
        "name": "France"
    },
    {
        "name": "Tunisia"
    },
    {
        "name": "Japan"
    },
    {
        "name": "Philippines"
    },
    {
        "name": "Indonesia"
    },
    {
        "name": "Slovenia"
    },
    {
        "name": "France"
    },
    {
        "name": "Sweden"
    },
]
function objarrsort(arr){
    arr.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(arr)
    arr.reverse();
    console.log(arr)
    arr.reverse();
    console.log(arr)
}
objarrsort(ARRAYS)