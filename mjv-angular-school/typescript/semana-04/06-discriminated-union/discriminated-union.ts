type Square = {
    type: 'square';
    width: number;
}

type Cicle = {
    type: 'cicle';
    radius: number;
}

//união com discriminante na propriedade "type"
type Shape = Cicle | Square;

function calculateArea(shape: Shape){
    //afunilamento feito por meio de discriminante
    switch(shape.type){
        case 'cicle':{
            return shape.radius * Math.PI * 2;
        }
        case 'square': {
            return shape.width * shape.width;
        }
    }
}

