function calculate() {
    const w = parseFloat(document.getElementById('w').value);
    const d = parseFloat(document.getElementById('d').value);
    const material = document.getElementById('material').value();
    const boardCount = document.getElementById('boardCount').value;

    let resultText = "";
    
    if (material === "레미탈") {
        const volume = w * d * 0.02;  // h 값이 없고, 0.02는 미장밥 2번 기준으로
        const bags = (volume * 40 * 1.1).toFixed(2); // 로스율 10% 반영
        resultText = `레미탈 필요 포대: ${bags}포`;
    }
    else if (material === "미장") {
        const volume = w * d * 0.02;  // h 값이 없고, 0.02는 미장밥 2번 기준
        const bags = (volume * 40 * 1.1).toFixed(2);  // 미장 포대 수 계산
        resultText = `미장 필요 포대: ${bags}포`;
    }
    else if (material === "석고보드") {
        const area = w * d; 
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1); // 석고보드 1개 크기: 0.9m * 1.8m
        resultText = `석고보드 필요 장수: ${boards}장`;
    } 
    else if (material === "다루끼") {
        const area = w * d;
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1);  // 석고보드 기준 다루끼 개수
        const total = boards * 3;  // 다루끼는 석고보드 개수의 3배
        resultText = `다루끼 필요 개수: ${total}개`;
    } 
    else if (material === "MDF") {
        const area = w * d;
        const mdfBoards = Math.ceil((area / (1.2 * 2.4)) * 1.1); // MDF 판넬 사이즈: 1.2m * 2.4m
        resultText = `MDF 필요 장수: ${mdfBoards}장`;
    }

    document.getElementById('resultText').innerText = resultText;
}

// 자재 선택 시 다루끼를 위한 석고보드 개수 입력 필드 보이기
document.getElementById('material').addEventListener('change', function() {
    const material = this.value;
    const boardCountLabel = document.getElementById('boardCountLabel');
    const boardCountInput = document.getElementById('boardCount');
    
    if (material === "다루끼") {
        boardCountLabel.style.display = 'block';
        boardCountInput.style.display = 'block';
    } else {
        boardCountLabel.style.display = 'none';
        boardCountInput.style.display = 'none';
    }
});
