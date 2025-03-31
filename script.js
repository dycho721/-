function calculate() {
    const w = parseFloat(document.getElementById('w').value);
    const d = parseFloat(document.getElementById('d').value);
    const h = parseFloat(document.getElementById('h').value);
    const material = document.getElementById('material').value;
    
    let resultText = "";
    
    if (material === "레미탈") {
        const volume = w * d * h;
        const bags = (volume * 40 * 1.1).toFixed(2);
        resultText = `레미탈 필요 포대: ${bags}포`;
    } 
    else if (material === "미장") {
        const volume = w * d * 0.02;
        const bags = (volume * 40 * 1.1).toFixed(2);
        resultText = `미장 필요 포대: ${bags}포`;
    } 
    else if (material === "석고보드") {
        const area = w * h;
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1);
        resultText = `석고보드 필요 장수: ${boards}장`;
    } 
    else if (material === "다루끼") {
        const area = w * h;
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1);
        const total = boards * 3;
        resultText = `다루끼 필요 개수: ${total}개`;
    } 
    else if (material === "MDF") {
        const area = w * h;
        const mdfBoards = Math.ceil((area / (1.2 * 2.4)) * 1.1);
        resultText = `MDF 필요 장수: ${mdfBoards}장`;
    }

    document.getElementById('resultText').innerText = resultText;
}
