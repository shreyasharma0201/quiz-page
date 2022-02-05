window.onload = ()=>{
    const quizData = [
        {question: "Giddha is the folk dance of?",
         a: "Bihar",
         b: "Assam",
         c: "Maharashtra",
         d: "Punjab",
         correct: d   
        },
        {question: "Who was the first Prime Minister of India?",
         a: "Narendra Modi",
         b: "Rajeev Gandhi",
         c: "Jawaharlala Nehru",
         d: "Narshima Rao",
         correct: c   
        },
        {question: "Who is known as Father of Indian Constitution?",
         a: "Sonia Gandhi",
         b: "Dr. B.R. Ambedkar",
         c: "Indira Gandhi",
         d: "Dr. Rajendra Prasad",
         correct: b   
        },
        {question: "1024 Kilobytes is equal to?",
         a: "1 Megabytes(MB)",
         b: "100 Megabytes(MB)",
         c: "0.1 Megabytes(MB)",
         d: "10 Megabytes(MB)",
         correct: a   
        }
    ]
    const questionE1 = document.getElementById('questions');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const subtn = document.getElementById('sub');
    // 56:32
    let currentQuiz = 0;  
    loadQuiz();

    function loadQuiz(){
        const currentQuizdata = quizData[currentQuiz];
        questionE1.innerText = currentQuizdata.question;
        a_text.innerText = currentQuizdata.a;
        b_text.innerText = currentQuizdata.b;
        c_text.innerText = currentQuizdata.c;
        d_text.innerText = currentQuizdata.d;
    }

    function getSelected(){
        const answer = document.querySelectorAll('ans');

        answer.forEach((answer) => {
            console.log(answer.ariaChecked);
        });
    }

    subtn.addEventListener('click', () => {
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            alert('Quiz finished!');
        }
        
    })
    // var ques = document.querySelector('.ques');
    // ques.textContent = quizData[0].question;
    // var opta = document.getElementById('a');
    // var optb = document.getElementById('b');
    // var optc = document.getElementById('c');
    // var optd = document.getElementById('d');
    // opta.textContent = quizData[0].a;
    // optb.textContent = quizData[0].b;
    // optc.textContent = quizData[0].c;
    // optd.textContent = quizData[0].d;
}
