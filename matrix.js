class Matrix{
  constructor(arr,shape=arr.length){
    if(arr[0] === undefined || typeof arr == "string"){ // if arr isn't an array
      console.error("Matrix requires a numeric array as input!");
      return false;
    }
    if(arr.length == 1){
      console.error("Input array must have at least two values!");
      return false;
    }
    let counter=0;
    let outArr = [];
    if(typeof shape == "number"){
      let temp = shape;
      shape = [1,temp];
    }else if(shape.length == 1){
      let temp = shape;
      shape = [1,temp[0]];
    }
    if(shape.reduce((a,c)=>a=a*c) == arr.length){
      if(shape.length == 2){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1][i2] = arr[counter];
            counter++;
          }
        }
      }else if(shape.length == 3){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push(arr[counter]);
              counter++;
            }
          }
        }
      }else if(shape.length == 4){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push(arr[counter]);
                counter++;
              }
            }
          }
        }
      }else if(shape.length == 5){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push(arr[counter]);
                  counter++;
                }
              }
            }
          }
        }
      }else if(shape.length == 6){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push([]);
                  for(let i6=0;i6<shape[5];i6++){
                    outArr[i1][i2][i3][i4][i5].push(arr[counter]);
                    counter++;
                  }
                }
              }
            }
          }
        }
      }
      this.data = outArr;
      this.shape = shape;
      this.plain = arr;
      return this;
    }else{
      console.error("Input shape must match the number of items in input array!");
      return false;
    }
  }
  // --- Manage ---
  resetData(arr = this.plain,shape = this.shape){
    let counter=0;
    let outArr = [];
    let plainArr = [];
    if(shape.reduce((a,c)=>a=a*c) == arr.length){
      if(shape.length == 1){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push(arr[counter]);
          plainArr.push(arr[counter]);
          counter++;
        }
      }else if(shape.length == 2){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1][i2] = arr[counter];
            plainArr.push(arr[counter]);
            counter++;
          }
        }
      }else if(shape.length == 3){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push(arr[counter]);
              plainArr.push(arr[counter]);
              counter++;
            }
          }
        }
      }else if(shape.length == 4){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push(arr[counter]);
                plainArr.push(arr[counter]);
                counter++;
              }
            }
          }
        }
      }else if(shape.length == 5){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push(arr[counter]);
                  plainArr.push(arr[counter]);
                  counter++;
                }
              }
            }
          }
        }
      }else if(shape.length == 6){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push([]);
                  for(let i6=0;i6<shape[5];i6++){
                    outArr[i1][i2][i3][i4][i5].push(arr[counter]);
                    plainArr.push(arr[counter]);
                    counter++;
                  }
                }
              }
            }
          }
        }
      }
      this.data = outArr;
      this.plain = plainArr;
      return this;
    }else{
      console.error("Input shape must match the number of items in input array!");
      return false;
    }
  }
  reshape(newShape){
    if(newShape.reduce((a,c)=>a=a*c) == this.shape.reduce((a,c)=>a=a*c)){
      this.resetData(this.plain,newShape);
      return this;
    }else{
      console.error("Number of items must match total dimension specs!");
      return false;
    }
  }
  static duplicate(a){
    return new Matrix(a.plain,a.shape);
  }
  static concat(arr,newShape = [arr[0].data.length,arr.length]){
    if(isAMatrix(arr[0])){
      let check = true;
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(!sameArr(arr[i].shape,arr[j].shape)) check=false;
        }
      }
      if(check){
        if(newShape.reduce((a,c) => a=a*c) == (arr[0].data.length*arr.length)){
          let outArr = [];
          arr.forEach(c => {
            c.plain.forEach(v => {
              outArr.push(v);
            });
          });
          return new Matrix(outArr,newShape);
        }else{
          console.error("New provided shape does not conform to number of items in array!");
          return false;
        }
      }else{
        console.error("Not all shapes match!");
        return false;
      }
    }else{
      console.error("Argument does not contain matricies!");
      return false;
    }
  }
  // --- Get and Set ---
  static getValue(a,...args){
    if(a.shape == args.length){
      if(a.shape.length == 2) return a.data[args[0]][args[1]];
      else if(a.shape.length == 3) return a.data[args[0]][args[1]][args[2]];
      else if(a.shape.length == 4) return a.data[args[0]][args[1]][args[2]][args[3]];
      else if(a.shape.length == 5) return a.data[args[0]][args[1]][args[2]][args[3]][args[4]];
      else if(a.shape.length == 6) return a.data[args[0]][args[1]][args[2]][args[3]][args[4]][args[5]];
    }else{
        console.error("The number of coordinates must match the shape of matrix!");
        return false;
    }
  }
  static setValue(a,val,...args){
    if(a.shape.length == args.length){
      let indexCheck = 0;
      args.forEach((c,i) => indexCheck += (i+1)*c*a.shape[a.shape.length-i-1]);
      a.plain[indexCheck] = val;
      if(a.shape.length == 2) a.data[args[0]][args[1]] = val;
      else if(a.shape.length == 3) a.data[args[0]][args[1]][args[2]] = val;
      else if(a.shape.length == 4) a.data[args[0]][args[1]][args[2]][args[3]] = val;
      else if(a.shape.length == 5) a.data[args[0]][args[1]][args[2]][args[3]][args[4]] = val;
      else if(a.shape.length == 6) a.data[args[0]][args[1]][args[2]][args[3]][args[4]][args[5]] = val;
      return a;
    }else{
        console.error("The number of coordinates must match the shape of matrix!");
        return false;
    }
  }
  // --- View ---
  print(verbose = false,flat = false){
    if(verbose){
      console.log(`Shape: ${this.shape}\nData: ${this.data}`);
    }else{
      if(flat) console.table(this.plain);
      else console.log(this.data);
    }
  }
  // --- Reduction ---
  max(){
    return this.plain.reduce((a,c) => {
      if(a>=c) return a;
      else return c;
    });
  }
  min(){
    return this.plain.reduce((a,c) => {
      if(a<=c) return a;
      else return c;
    });
  }
  sum(){
    return this.plain.reduce((a,c) => a += c);
  }
  mean(){
    return this.sum()/this.plain.length;
  }
  stDev(){
    return Math.sqrt((Matrix.pow(this,2).sum() / this.plain.length) - Math.pow(this.mean(),2));
  }
  //--- Math ---
  static add(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] + b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise addition!");
      return false;
    }
  }
  add(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] + a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise addition!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] + a;
      }
      this.resetData();
      return this;
    }
  }
  static sub(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] - b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise subtaction!");
      return false;
    }
  }
  sub(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] - a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise subtraction!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] - a;
      }
      this.resetData();
      return this;
    }
  }
  static mul(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] * b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise multiplication!");
      return false;
    }
  }
  mul(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] * a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise multiplication!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] * a;
      }
      this.resetData();
      return this;
    }
  }
  static div(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] / b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise addition!");
      return false;
    }
  }
  div(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] / a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise division!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] / a;
      }
      this.resetData();
      return this;
    }

  }
  static pow(a,n){
    let temp = [];
    a.plain.forEach((c,i) => {
      temp.push(Math.pow(c,n));
    });
    return new Matrix(temp,a.shape);
  }
  pow(n){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.pow(c,n);
    });
    this.resetData();
    return this;
  }
  sqrt(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.sqrt(c);
    });
    this.resetData();
    return this;
  }
  exp(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.exp(c);
    });
    this.resetData();
    return this;
  }
  ln(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.log(c);
    });
    this.resetData();
    return this;
  }
  xrt(n){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.pow(c,1/n);
    });
    this.resetData();
    return this;
  }
  abs(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.abs(c);
    });
    this.resetData();
    return this;
  }
  round(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.round(c);
    });
    this.resetData();
    return this;
  }
  // --- Vector Math ---
  static norm(a){
    if(a.shape.length == 1){
      return Math.sqrt(Matrix.pow(a,2).sum());
    }else{
      console.error("Normalize only works on vectors!");
      return false;
    }
  }
  // --- Linear Algebra ---
  static transpose(a){
    if(a.shape.length == 2){
      let outArr = [];
      for(let c=0;c<a.shape[1];c++){ // Run over the rows
        for(let d=0;d<a.shape[0];d++){ // Run over the cols
          outArr.push(a.data[d][c]);
        }
      }
      return new Matrix(outArr,a.shape.reverse());
    }else{
      console.error("Transpose currently only works with two-dimensional matricies!");
      return false;
    }
  }
  transpose(){
    if(this.shape.length == 2){
      let outArr = [];
      for(let c=0;c<this.shape[1];c++){ // Run over the rows
        for(let d=0;d<this.shape[0];d++){ // Run over the cols
          outArr.push(this.data[d][c]);
        }
      }
      this.shape.reverse();
      this.resetData(outArr);
      return this;
    }else{
      console.error("Transpose currently only works with two-dimensional matricies!");
      return false;
    }
  }
  static dot(a,b){
    if(a.shape.length == 2 && sameArr(a.shape,b.shape)){
      if(a.shape[0] == 1 || a.shape[1] == 1){
        return Matrix.mul(a,b).sum();
      }else{
        console.error("The dot product only operates on vectors!");
        return false;
      }
    }else{
      console.error("The dot product only works on vectors of the same shape!");
      return false;
    }
  }
  dot(a){
    if(a.shape.length == 2 && sameArr(this.shape,a.shape)){
      if(a.shape[0] == 1 || a.shape[1] == 1){
        return Matrix.mul(this,a).sum();
      }else{
        console.error("The dot product only operates on vectors!");
        return false;
      }
    }else{
      console.error("The dot product only works on vectors of the same shape!");
      return false;
    }
  }
  static innerProduct(a,b){
    if(sameArr(a.shape,b.shape)){
        return Matrix.mul(a,b).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  innerProduct(a){
    if(sameArr(a.shape,this.shape)){
        return Matrix.mul(a,this).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  static innerProduct(a,b){
    if(sameArr(a.shape,b.shape)){
        return Matrix.mul(a,b).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  static trace(a){
    if(a.shape.length == 2){
      if(a.shape[0] == a.shape[1]){

      }else{
        console.error("Matrix must be square!");
      }
    }else{
      console.error("Matrix must be two dimensional!");
      return false;
    }
  }
  trace(){
    if(sameArr(a.shape,this.shape)){
        return Matrix.mul(a,this).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  static det(a){
    if(a.shape.length == 2){
      if(a.shape[0] == a.shape[1]){
        if(a.shape[0] == 2){
          return a.data[0][0]*a.data[1][1] - a.data[0][1]*a.data[1][0];
        }else if(a.shape[0] == 3){
          let output = 0;
          for(let i=0;i<3;i++){
            if(i==0) output += a.data[0][i]*(a.data[1][1]*a.data[2][2]-a.data[2][1]*a.data[2][2]);
            else if(i==1) output += a.data[0][i]*(a.data[1][0]*a.data[2][2]-a.data[2][0]*a.data[1][2]);
            else output += a.data[0][i]*(a.data[1][0]*a.data[2][1]-a.data[2][0]*a.data[1][1]);
          }
          return output;
        }else{
          console.error("Determinant calculations currently only implemented for 3x3 and 2x2 matricies!");
          return false;
        }
      }else{
        console.error("Determinant calculations only work with square matricies!");
        return false;
      }
    }else{
      console.error("Detminant calculations only currently work with two-dimensional matricies!");
      return false;
    }
  }
  // --- Trigonometry ---
  radToDeg(){
    this.mul(180).div(Math.PI);
    return this;
  }
  degToRad(){
    this.mul(Math.PI).div(180);
    return this;
  }
  static sin(a){
    return Matrix.duplicate(a).sin();
  }
  sin(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.sin(c);
    });
    this.resetData();
    return this;
  }
  static cos(a){
    return Matrix.duplicate(a).cos();
  }
  cos(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.cos(c);
    });
    this.resetData();
    return this;
  }
  static tan(a){
    return Matrix.duplicate(a).tan();
  }
  tan(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.tan(c);
    });
    this.resetData();
    return this;
  }
  static asin(a){
    return Matrix.duplicate(a).asin();
  }
  asin(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.asin(c);
    });
    this.resetData();
    return this;
  }
  static acos(a){
    return Matrix.duplicate(a).acos();
  }
  acos(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.acos(c);
    });
    this.resetData();
    return this;
  }
  static atan(a){
    return Matrix.duplicate(a).atan();
  }
  atan(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.atan(c);
    });
    this.resetData();
    return this;
  }
}
const sameArr = (a,b) => {
  if(a.length != b.length) return false;
  for(let c=0;c<a.length;c++) if(a[c] != b[c]) return false;
  return true;
}
const isAMatrix = (a) => {
  if(!(a.shape === undefined) && !(a.data === undefined) && !(a.plain === undefined)) return true;
  else return false;
}

const mat_identity = shape => {
  if(shape[0] === undefined || typeof shape == "string"){
      console.error("mat_identity requires an array for shape of matrix!");
      return false;
  }else{
    if(shape.length != 2){
      console.error("mat_identity requires a 2 dimensional matrix shape!");
      return false;
    }else{
      if(shape[0] != shape[1]){
        console.error("mat_identity requres a square matrix shape!");
        return false;
      }else{
        let outArr = [];
        for(let i=0;i<shape[0]*shape[1];i++){
          //
        }
      }
    }
  }
}

const arr_seq = (i,e) => {
  let outputArr = [];
  for(let c=i;c<e;c++) outputArr.push(c);
  return outputArr;
}
const mat_seq = (shape,i,e) => new Matrix(arr_seq(i,e),shape);

const arr_ones = n => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(1);
  return outputArr;
}
const mat_ones = shape => new Matrix(arr_ones(shape.reduce((a,c) => a=a*c)),shape);

const arr_fixed = (n,val) => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(val);
  return outputArr;
}
const mat_fixed = (shape,val) => new Matrix(arr_fixed(shape.reduce((a,c) => a=a*c),val),shape);

const arr_rand = (n,min=0,max=1) => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(Math.random()*max + min);
  return outputArr;
}
const mat_rand = (shape,min=0,max=1) => new Matrix(arr_rand(shape.reduce((a,c) => a=a*c),min,max),shape);
