function calculate() {
    const w = parseFloat(document.getElementById('w').value);
    const d = parseFloat(document.getElementById('d').value);
    let h = parseFloat(document.getElementById('h').value);
    const material = document.getElementById('material').value;
    const boardCount = parseInt(document.getElementById('boardCount').value);
    const darukiType = document.getElementById('darukiType') ? document.getElementById('darukiType').value : null;

    let resultText = "";

    if (material === "레미탈") {
        const volume = w * d * h;
        const bags = (volume * 40 * 1.1).toFixed(2);
        resultText = `레미탈 필요 포대: ${bags}포`;
    }
    else if (material === "미장") {
        if (!h) h = 0.02;  // 기본값 설정
        const volume = w * d * h;
        const bags = (volume * 40 * 1.1).toFixed(2);
        resultText = `미장 필요 포대: ${bags}포 (미장밥 2번 기준)`;
    }
    else if (material === "석고보드") {
        const area = w * h;
        const boards = Math.ceil((area / (0.9 * 1.8)) * 1.1);
        resultText = `석고보드 필요 장수: ${boards}장`;
    } 
    else if (material === "다루끼") {
        const total = boardCount * (darukiType === "300상" ? 3 : 4);
        resultText = `다루끼 필요 개수: ${total}개`;
    } 
    else if (material === "MDF") {
        const area = w * h;
        const mdfBoards = Math.ceil((area / (1.2 * 2.4)) * 1.1);
        resultText = `MDF 필요 장수: ${mdfBoards}장`;
    }

    document.getElementById('resultText').innerText = resultText;
}

// 자재 선택 시 필드 보이기/숨기기 처리
document.getElementById('material').addEventListener('change', function() {
    const material = this.value;
    const mortarNote = document.getElementById('mortar-note');
    const wInput = document.getElementById('w-input');
    const dInput = document.getElementById('d-input');
    const hInput = document.getElementById('h-input');
    const boardCountDiv = document.getElementById('boardCountDiv');
    const darukiTypeDiv = document.getElementById('daruki-type');

    if (material === "미장") {
        mortarNote.style.display = 'block';
        wInput.style.display = 'block';
        dInput.style.display = 'block';
        hInput.style.display = 'block';  // H 값 보이게 설정
        document.getElementById('h').value = 0.02; // 기본값 자동 설정
        boardCountDiv.style.display = 'none';
        darukiTypeDiv.style.display = 'none';
    } else if (material === "레미탈") {
        mortarNote.style.display = 'none';
        wInput.style.display = 'block';
        dInput.style.display = 'block';
        hInput.style.display = 'block';
        boardCountDiv.style.display = 'none';
        darukiTypeDiv.style.display = 'none';
    } else if (material === "석고보드" || material === "MDF") {
        mortarNote.style.display = 'none';
        wInput.style.display = 'block';
        dInput.style.display = 'none';  // D 값 숨기기
        hInput.style.display = 'block';
        boardCountDiv.style.display = 'none';
        darukiTypeDiv.style.display = 'none';
    } else if (material === "다루끼") {
        mortarNote.style.display = 'none';
        wInput.style.display = 'none';
        dInput.style.display = 'none';
        hInput.style.display = 'none';
        boardCountDiv.style.display = 'block';
        darukiTypeDiv.style.display = 'block';
    }
});
