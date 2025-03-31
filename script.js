function calculate() {
    const w = parseFloat(document.getElementById('w').value);
    const h = parseFloat(document.getElementById('h').value);
    const material = document.getElementById('material').value;
    const boardCount = parseInt(document.getElementById('boardCount').value);
    const darukiType = document.getElementById('darukiType') ? document.getElementById('darukiType').value : null;

    let resultText = "";

    if (material === "레미탈" || material === "미장") {
        const d = parseFloat(document.getElementById('d').value); // d값을 미리 입력받음
        const volume = w * d * h;

        // 미장의 경우 미장밥 2번 기준 0.02로 계산
        const volumeForMiJang = (material === "미장") ? volume * 0.02 : volume;
        const bags = (volumeForMiJang * 40 * 1.1).toFixed(2);  // 로스율 10% 반영
        resultText = `${material} 필요 포대: ${bags}포`;
    }
    else if (material === "석고보드") {
        const area = w * h;
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1); // 석고보드 크기: 0.9m * 1.8m
        resultText = `석고보드 필요 장수: ${boards}장`;
    } 
    else if (material === "다루끼") {
        const total = boardCount * (darukiType === "300상" ? 3 : 4);  // 300상은 3개, 450상은 4개
        resultText = `다루끼 필요 개수: ${total}개`;
    } 
    else if (material === "MDF") {
        const area = w * h;
        const mdfBoards = Math.ceil((area / (1.2 * 2.4)) * 1.1); // MDF 판넬 사이즈: 1.2m * 2.4m
        resultText = `MDF 필요 장수: ${mdfBoards}장`;
    }

    document.getElementById('resultText').innerText = resultText;
}

// 자재 선택 시에 필드 보이기/숨기기 처리
document.getElementById('material').addEventListener('change', function() {
    const material = this.value;
    const mortarNote = document.getElementById('mortar-note');
    const dimensionInputs = document.getElementById('dimensionInputs');
    const boardCountDiv = document.getElementById('boardCountDiv');
    const darukiTypeDiv = document.getElementById('daruki-type');

    if (material === "미장") {
        mortarNote.style.display = 'block';
        dimensionInputs.style.display = 'block'; // 가로,
