export class model {
    constructor() {
      this.strings = [];// 存储当前的字符串列表

    }

    add(){
        const randomString = this.genraterandomString(Math.random() * 5); //随机数的字符串 
        this.strings.push(randomString);//记录字符串

    } 

    delete(){
        if(this.strings.length >0 ) {
            const index = Math.floor(Math.random() * this.strings.length);
            this.strings.splice(index, 1);
        }//删除随机数，创建一个随机数索引然后删除这个索引的-1的，即做到了删除一个随机字符

    }

    show() {
        return this.strings;// 返回所有生成的字符串

    }//显示代码

    genraterandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"£$%^&*';
        let result = '';
        for (let i = 0; i < length; i++) {
           
            const randomAscii = Math.floor(Math.random() * 126) + 33; 
            result += String.fromCharCode(randomAscii);
        }
        return result;
    }//保存字符串的地方，用随机数创建索引，然后把这个随机索引给显示出来     
}