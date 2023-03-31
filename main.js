'use strict';

{
  const title = document.getElementById("title");
  const sub_title = document.getElementById("sub_title");
  const start_btn = document.getElementById("start_btn");
  const timer = document.getElementById("timer");

  let startTime;
  let timerId;
  let count = 0;

  //カウントアップ関数----------------------------------------------------
  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    timer.textContent = `${m}:${s}`;
    
    timerId = setTimeout(() => {
      if(count <= 10){
        countUp();
      }
    },1000); //10ミリ秒で処理繰り返す
  }
  //-----------------------------------------------------------------------
  //問題のランダム表示
    let question;
    let questions = [];
  function ques() {
    questions = [
      "自己紹介をどうぞ", 
      "志望動機は？", 
      "転職理由は？", 
      "長所と短所を教えてください", 
      "失敗した経験はありますか？", 
      "仕事をするうえで一番大事だと思うことは？", 
      "人間関係で気を付けていることは？", 
      "現在学んでいることは？", 
      "退職理由は？", 
      "入社後のビジョンは？",
      "空白期間は何をされてましたか？",
      "自己PRをお願いします",
      "職務経歴をお願いします",
      "なぜこの業界を選びましたか？",
      "どのようなシステム開発に携わりたいですか？",
      "応募先を決める基準はなんですか？",
      "最近の気になったニュースはありますか？",
      "他に受けているところはありますか？",
      "一番頑張ってきたことはありますか？",
      "なぜ建築業界に就職しなかったのですか？",
      "得意な言語はありますか？",
      "学習する際の工夫はありますか？"
    ];
  }
  
  ques();
  
  //スタートの挙動---------------------------------------------------------
  start_btn.addEventListener('click', () => {
    
    clearTimeout(timerId);
    
    count++;
        
    if(count > 10){
      title.textContent = "終了です、お疲れさまでした！";
      sub_title.textContent = "　";
      start_btn.textContent = "最初から始める";
      count = 0;
      ques();
      return;
    }
    
    
    //スタートボタン押したらカウント
    startTime = Date.now();
    console.log(count);

    countUp();
    
    //スタート押したら文字変わる
    title.textContent = "Q：質問を表示";
    sub_title.textContent = "（" + count + "問目" + "）";
    start_btn.textContent = "次の質問へ";

    //質問のランダム表示
    question = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
    title.textContent = "Q:" + question;
    // console.log(question);
    
  });
  //---------------------------------------------------------------------------

}