import * as React from 'react';

interface HelloProps {
    compiler: string,
    framework: string,
}

let myAdd:(x:number,y:number) => void = function(x,y){
    return x+y;
}



export const Hello = ({
    compiler,
    framework
}: HelloProps) => {
    return <h1>hello from {compiler} and {framework} !</h1>
}
