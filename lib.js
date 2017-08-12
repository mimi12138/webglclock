
function initShader(gl,vertexShaderSource,fragmentShaderSource){
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader,vertexShaderSource);
    gl.shaderSource(fragmentShader,fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var program = gl.createProgram();
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);

    gl.linkProgram(program);

    gl.useProgram(program);
    console.log(gl.getShaderInfoLog(fragmentShader));
    return program;
}
//创建缓冲区，和posLocation链接
function bindAttribute(cxt, attributeName, data, program) {

    var buffer = cxt.createBuffer();
    cxt.bindBuffer(cxt.ARRAY_BUFFER, buffer);
    cxt.bufferData(cxt.ARRAY_BUFFER, data, cxt.STATIC_DRAW);

    var posLocation = cxt.getAttribLocation(program, attributeName);
    cxt.vertexAttribPointer(posLocation, 2, cxt.FLOAT, false, 0, 0);
    cxt.enableVertexAttribArray(posLocation);

}
