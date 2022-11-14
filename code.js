// const messages=[
//   {time:'10:21', name:'Zaur', text:'Baglanmiyin kimese'},
//   {time:'13:00',name:'Lala',text:'Hi-hi'},
//   {time:'13.30',name:'NikaChika',text:'idk'}
// ];
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}


class Messager {
    constructor(){
         this.messages = new Message
    }
  show_history(){
    for(let i = 0; i < 5; i++){
        console.log(this.messages.toString())
    }
  }
  send(name,text){
    this.messages.push(new Message(name,text))
  }
}

class Message{
    constructor(time,name,text){
        this.time = gettime();
        this.name = name;
        this.text = text;
    }
    toString(){
        let str = `<${this.time}><${this.name}>:<${this.text}>`;
        return str;
    }
}