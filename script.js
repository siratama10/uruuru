const quizData = {
       easy: [
      {
           question: "AIを使うために多くのエネルギーが必要になると、何が影響を受けるか？",
            choices: ["水の使う量が増える", "CO₂が減る", "水が綺麗になる", "エネルギー消費が減る"],
            answer: "水の使う量が増える",
            explanation: "多くのエネルギーを使用するとその分多くの熱を発生させるため、冷却に必要な水の量も増えることになります。"
        },
 {
            question: "AIのために多くのエネルギーを使うデータセンターが増えると、地域の水にどんな影響が起こるか？",
            choices: ["水が増える", "水が綺麗になる", "水が足りなくなる", "水がたくさん使えるようになる"],
            answer: "水が足りなくなる",
            explanation: "データセンターで多くの水が使用されるため、周辺地域で使用できる水の量は減少することになります。"
        },
 {
            question: "半導体を作る工場で水をたくさん使う理由はなんですか？",
            choices: ["部品を冷やすため", "部品をきれいにするため", "電気を使うため", "他の素材を薄めるため"],
            answer: "部品をきれいにするため",
            explanation: "半導体の製造において、装置や器具の洗浄のために”超純水”に作り変えて使用されます。"
        },
        {
            question: "AIデータセンターで使われた水が環境に悪い影響を与える可能性がありますが、その影響は何でしょうか?",
            choices: ["水が汚れる", "水が足りなくなる", "水が温かくなる", "水の流れが変わる"],
            answer: "水が汚れる",
            explanation: "未処理または処理が不十分な場合、半導体工場からの排水には化学物質、重金属などの汚染物質が含まれている可能性があり、水質汚染や健康被害を引き起こす可能性があります。"
        },
        {
  
            question: "家庭から出る排水の内、最も多くの割合を占めるのはどの種類の排水でしょうか",
            choices: ["キッチンの排水", "トイレの排水", "洗濯の排水", "シャワーや浴槽の排水"],
            answer: "洗濯の排水",
            explanation: "家庭内で出る排水の多くは洗濯から発生します。洗濯機は頻繁に使用され、一回の洗濯で大量の水を使うため、洗濯に伴う排水の割合が最も高いです"
        },
        {
            question: "家庭排水の中で、処理が必要で環境に悪影響な物質は次のうちどれでしょうか？",
            choices: ["食品の残りかす", "石鹸や洗剤の成分", "トイレットペーパー", "水道水そのもの"],
            answer: "石鹸や洗剤の成分",
            explanation: "石鹸や洗剤の成分は、下水道処理施設に送られる前に処理しなければならない重要な汚染物質です。これらは環境に悪影響を及ぼすことがあり、特に水質に影響を与えます。"
        },
        {
            question: "家庭排水を処理するための一般的な方法でないものは次のうちどれでしょうか？",
            choices: ["下水道による処理", "浸透処理", "直接河川への放流", "再利用して灌漑に使用"],
            answer: "直接河川への放流",
            explanation: "家庭排水は、通常は下水道や浄化槽で処理されるべきです。直接河川に放流することは環境への負荷を大きくするため、適切な処理が必要です。"
        },
        {
            question: "次の中で水質に最も影響のある食べ物はどれでしょうか。",
            choices: ["マヨネーズ", "牛乳", "みそしる", ],
            answer: "マヨネーズ",
            explanation: "マヨネーズは油とリンを多く含み、水に流すと酸素を消費して水質悪化やアオコの発生を引き起こします。水質に最も悪影響を与える食品です。"
        },
        {
            question: "１水力発電では、水の流れがどう影響しますか？",
            choices: ["水が多いほど電気がたくさん作れる", "水が少ないほど電気がたくさん作れる", "水の流れは関係ない", "水の流れが急だと電気が止まる"],
            answer: "水が多いほど電気がたくさん作れる",
            explanation: "水路を流れる水の量が多く、高低差が大きほど発電力が大きくなる"        
        },
        ],
normal: [
        {

 question: "工業廃水にはどんな物が含まれていることが多いでしょうか？",
            choices: ["プラスチックのゴミ", "毒のある金属（例：鉛、カドミウム）", "普通の水", "砂や小石"],
            answer: "毒のある金属（例：鉛、カドミウム）",
            explanation: "工場廃水は、毒性のある金属が含まれている事が多いです。これらは環境にとても悪影響を与えます。"
        },        
{
            question: "工業排水をきれいにするために使う方法として、正しいものはどれでしょうか？",
            choices: ["水をろ過する", "化学薬品で中和する", "微生物で分解する", "すべての方法"],
            answer: "すべての方法",
            explanation: "工業排水には色々な汚れがあるので、ろ過や科学的な処理、微生物を使った処理など、いろいろな方法を組み合わせて使います。"
        },      
        {
            question: "工業排水の「pH」が重要になる理由は何でしょうか？",
            choices: ["pHが中性だと水に溶けないから", "pHが高すぎたり低すぎたりすると生き物に害があるから", "pHは水と相性が悪いから", "pHは関係ない"],
            answer: "pHが高すぎたり低すぎたりすると生き物に害がある",
            explanation: "pHは水の酸性やアルカリ性を示します。pHが極端だと、生き物が生きられない環境になってしまいます。"
        },
        {
            question: "工業排水の中の油を取り除くために使われる方法はどれでしょうか？",
            choices: ["活性炭で吸着する", "油と水を分ける装置を使う", "高温で焼却する", "何もせずそのまま流す"],
            answer: "油と水を分ける装置を使う",
            explanation: "工業の排水には油が含まれていることがあり、油と水を分ける装置を使って油を取り除きます"
        },
        {
            question: "ファストファッションによる水問題を解決するために、私達ができることは何でしょうか？",
            choices: ["安い服をたくさん買う", "衣服を長く大切に使う", "服を毎シーズン買い替える", "服を水で洗わない"],
            answer:  "衣服を長く大切に使う",
            explanation: "環境に影響が及ぶことを衣服を長く大切に使うことで防ぐことができます。"
        },    
       {
            question: "ファストファッションが水に与える影響は何でしょうか？",
            choices: ["水が減り、水質が汚染される", "水が温かくなり魚たちに影響が出る", "水が増えて洪水になる"],
            answer: "水が減り、水質が汚染される",　
            explanation: "たった1枚のTシャツをつくるのに消費される水の量は、平均にして約2,700リットルと言われています。また、衣類の染色や、シワ防止などの加工には、水とともに多くの化学物質が使われています。"
        },
        {
            question: "google検索よりもchatGPTのほうが水の消費量が多い",
            choices: ["◯","✕"],
            answer: "◯",
            explanation: "AI（chatgpt）を一度使用するのとgoogleで一度検索を行うのでは水の消費量が10倍程度差があります。chatGPTは500mLで、google検索は30mLです。"
        },
        {

            question: "googleデータセンターの冷却方法は？",
            choices: ["空冷", "水冷", "冷却剤", "無冷却"],
            answer: "水冷",
            explanation: "googleは近年は、雨水の再利用や空冷システムを活用することで水の消費を削減する取り組みを進めています"
        },   
        {
           question: "データセンターで水が使われる主な目的は？",
            choices: ["サーバーの冷却", "運転", "バックアップ", "消毒"],
            answer: "サーバーの冷却",
            explanation: "データの送受信をする際に発生する熱を冷却するために水が使われています。"
        },
        {
            question: "火力発電所で水は主に何に使われますか？",
            choices: ["冷やしたり蒸気にしたりするため", "空間を涼しくするため", "お湯を沸かすため", "水を飲むため"],
            answer: "冷やしたり蒸気にしたりするため",
            explanation: "タービンを回すための蒸気を発生させるため。また、その水蒸気を冷やすための冷却水として使用するため"
        },
        {
           
            question: "発電所で使われた冷却水はどうなりますか？",
            choices: ["海に流す", "再利用される", "地下に埋める", "飲料水として使う"],
            answer: "海に流す",
            explanation: "膨大な熱とともに化学物質を含んで放出される"
        },
        {
            question:"半導体の水消費を減らす方法として有効である可能性のあるものはどれですか?",
            choices: ["水を再利用する", "処理をせずそのまま同じ水を使う", "水道水を使う", "水で洗浄しないようにする"],
            answer: "水を再利用する",
            explanation: "技術の進歩により処理済みの廃水を超純水を作り出すシステムに使える可能性がある"
        },
    ],
hard:[            
{
question: "一枚のデニムを作るのに必要な水の量は？※1ガロン=3,785ml(約4L)",
            choices: ["250L", "1000L", "7500L", "10000L"],
            answer: "7500L",
            explanation: "https://www.unic.or.jp/news_press/features_backgrounders/32952/ "
        },    
   {
            question: "日本の年間衣料廃棄量は次のうちどれでしょうか？(ファストファッションはトレンドの変化が早く、大量生産・大量消費につながっているため)",
            choices: ["約1000トン", "約1万トン", "約50万トン", "約100万トン"],
            answer: "約50万トン",
            explanation: "廃棄量といっても、生産過程で出る廃棄量とアパレル店や家庭からでる廃棄量などの種類に分ける事ができ、各場面で課題を抱えているため、消費者と生産者の両方が廃棄量を減らす意識を持つことが重要である"
        },
        {
            question: "1キロの綿を作るのに必要な水の量は？",
            choices: ["200L", "2000L", "20000L", "200000L"],
            answer: "2000L",
            explanation: "世界平均で1キロののコットンを生産するのに1,931リットルもの灌漑用水が利用されている"
        
        },
        {
question: "Chatgptで10~50回の質問のやり取りをする事に500mlペットボトル1本分の水が消費される○か×か",
            choices: ["○", "×"],
            answer: "○",
            explanation: "質問をするたびに冷却する水は増え、10~50で500ml程度消費します。"
        },
        {
           question: "Google検索一回で消費する水の量は？",
            choices: ["0.01mL", "0.3mL", "1mL", "3mL"],
            answer: "0.3mL",
            explanation: "一度の検索で約一滴分の水が使用され、2021年のgoogleのデータセンターで冷却に使用された水の量は約57.5億Lです。"
        },        
        {
  
          question:"50mプールで例えると超純水に含まれる不純物の量はどのくらいでしょう?",
           choices: ["ドラム缶２本〜数本分","コップ１杯分","耳かき１さじ分"],
           answer:"耳かき１さじ分",
           explanation:"水道水はドラム缶２本～数本分、純水はコップ１杯分です。"},
          
        {
            question: "３データセンターの水効率向上策は？",
            choices: ["水のリサイクル", "水道水の使用を減らす", "雨水の収集", "全部"],
            answer: "全部",
            explanation: "この他にも寒冷地においては外気を活用して冷却する「フリークーリング」海水を使った冷却方法などもあります。"
        },            
        {
            question: "AIを使うデータセンターで水をたくさん使うことの問題は何か？",
            choices: ["水が足りなくなる", "水が汚れる", "水温が高くなる", "すべて"],
            answer: "すべて",
            explanation: "今後も発展し、莫大な量の水が使用されることが予想される。（水不足）使われた水は温排水になり、海に排出される。（水温上昇）排水にはミネラルや不純物が濃縮されている。（水質汚染）"        },
        {
            question: "コンピューターチップの製造に使う水の量は、約何リットル必要でしょうか？",
            choices: ["100L", "1,000L", "10,000L", "100,000L"],
            answer: "100,000L",
            explanation: "チップを製造する工程で超純水と言われる水で洗浄する工程が数百回あり、それによって大量の水を消費します。"
        },
              ]
}
     

    let currentQuestionIndex = 0;
    let selectedQuiz = [];
    let score = 0; // ✅ 正解数をカウントする変数を追加

    
    const genreSelectionEl = document.getElementById("genre-selection");
    const quizContainerEl = document.getElementById("quiz-container");
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const explanationEl = document.getElementById("explanation");
    const nextButton = document.getElementById("next-btn");
    
    // 🔹 配列をシャッフルする関数（Fisher-Yates シャッフル）
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
        }
        return array;
    }
    
  function startQuiz(genre) {
    const allQuestions = quizData[genre];
    selectedQuiz = shuffleArray([...allQuestions]).slice(0, 5); // 🔸ランダムに5問抽出
    currentQuestionIndex = 0;
    score = 0;
    genreSelectionEl.style.display = "none";
    quizContainerEl.style.display = "block";
    loadQuestion();
}
    
    function loadQuestion() {
        const currentQuestion = selectedQuiz[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        choicesEl.innerHTML = "";
        explanationEl.textContent = ""; // 解説をクリア
        nextButton.disabled = true;
    
        // 🔹 選択肢をランダムに並び替える
        let shuffledChoices = shuffleArray([...currentQuestion.choices]); // 元の配列を変更しないようコピー
    
        shuffledChoices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => checkAnswer(button, choice);
            choicesEl.appendChild(button);
        });
    }

    function checkAnswer(button, selectedAnswer) {
        const currentQuestion = selectedQuiz[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;
    
        if (selectedAnswer === correctAnswer) {
            button.classList.add("correct"); // ✅ 正解した選択肢を緑色に
        } else {
            button.classList.add("wrong"); // ❌ 間違えた選択肢を赤色に
    
            // ✅ 間違えた場合、正解のボタンを探して緑色にする
            Array.from(choicesEl.children).forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add("correct"); // 正解を緑色に
                }
            });
        }

        if (selectedAnswer === correctAnswer) {
            button.classList.add("correct");
            score++; // ✅ 正解した場合、スコアを加算
        }
    
        // すべての選択肢を無効化
        Array.from(choicesEl.children).forEach(btn => btn.disabled = true);
    
        // 解説を表示
        let explanationText = `解説: ${currentQuestion.explanation}`;
        if (currentQuestion.url) {
            explanationText += `<br><a href="${currentQuestion.url}" target="_blank">詳しくはこちら</a>`;
        }
        explanationEl.innerHTML = explanationText;
    
        // 次の問題ボタンを有効化
        nextButton.disabled = false;
    }
    
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuiz.length) {
            loadQuestion();
        } else {
            alert(`クイズ終了！お疲れさまでした！\nあなたの正解数: ${score} / ${selectedQuiz.length}`);
            genreSelectionEl.style.display = "block"; // レベル選択画面に戻る
            quizContainerEl.style.display = "none";   // クイズ画面を非表示
        }
    });
    
    // 初期状態ではクイズを表示しない
    quizContainerEl.style.display = "none";
const backButton = document.getElementById("back-btn");

backButton.addEventListener("click", () => {
    const confirmed = confirm("本当にレベル選択に戻りますか？\n進行中のクイズは終了します。");
    if (confirmed) {
        genreSelectionEl.style.display = "block";
        quizContainerEl.style.display = "none";
    }
});
