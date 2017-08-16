function find_repeat_number(arr){
    return arr.filter((value,index,arr)=>{
        return arr.lastIndexOf(value)!==index;
    }).filter((value,index,arr)=>arr.indexOf(value)===index);
}

console.log(find_repeat_number(['a', 'ab','a', 'ed', 'da', 'a', 'ed', 'b']));