@"
import { getQuestions } from './sheets.ts';
import { getPlayer, savePlayer } from './db.ts';

const LINE_TOKEN = 'xo0eU32fmFl4QwYEwMAMrgf+NzuxN83BOexMxHdqkXfR3fTS8daebcGNO7MSP6uq+3467/rI3/GrBMufJZMC0YTCC2/r010XlrzKazsqbFmEy6zCtXTS00B2yasnsOZPwuVv/rR6YGfaNouizBS+ngdB04t89/1O/w1cDnyilFU=';

function buildQuestionFlex(q){
  return {
    type:'flex',
    altText: `Q${q.qnum}. ${q.question}`,
    contents: {
      type:'bubble',
      header: {
        type:'box',
        layout:'vertical',
        contents:[{ type:'text', text:`🐾 第${q.chapter}章`, weight:'bold', size:'lg'}]
      },
      hero:{ type:'image', url:'https://i.imgur.com/0KFBHTB.png', size:'full', aspectMode:'cover'},
      body:{ type:'box', layout:'vertical', spacing:'md', contents:[{type:'text', text:q.story},{type:'text', text:`❓ ${q.question}`, wrap:true}]},
      footer:{ type:'box', layout:'vertical', spacing:'sm', contents:q.options.map((opt,i)=>({type:'button', action:{type:'postback', label:String.fromCharCode(65+i)+'. '+opt, data:`answer:${q.globalIndex}:${i}`}}))}
    }
  }
}
...
"@ | Out-File -Encoding utf8 line.ts
