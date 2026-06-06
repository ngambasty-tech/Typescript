function typesDetect(val: number | string){
    if(typeof val === "number"){
        return val.toFixed(2)
    }
    return val.toLowerCase()
}

function providedId(id: string | null){
    if(!id){
        console.log("Please provide an ID")
        return 
    }
    return id.toLowerCase()
}

function printAll(strs: string | string[] | null) {

  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}