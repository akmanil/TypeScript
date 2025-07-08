interface Rectangle {
    height : number,
    width : number
}

interface colorRectangle extends Rectangle{
    color : string
}

const colrectangle : colorRectangle = {
    height :20,
    width : 30,
    color:"Red"
}

console.log(colrectangle , "Area : ", 0.5 * colrectangle.height * colrectangle.width);