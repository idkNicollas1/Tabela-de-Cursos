const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('[type="checkbox"]:checked');
    let totalHours = 0;
    let count = 0;

    // Calcular o total de horas e o número de cursos selecionados
    checkboxes.forEach(checkbox => {
        totalHours += parseInt(checkbox.value);
        count++;
    });
    // Atualizar a linha de total
    atualizarLinhaTotal(count, totalHours);
});

function atualizarLinhaTotal(count, totalHours) {
    const totalRow = document.querySelector('.fimJS');
    if (totalRow) {
        totalRow.innerHTML = `
                <th id="fim">Total</th>
                <th id="fim">${count} Curso(s)</th>
                <th id="fim">${totalHours}h</th>
            `;

    }
    if (count == 0) {
        alert("Nenhum curso selecionado");
    }
    alert("Matrícula confirmada nos cursos!");
}
