const form = document.getElementById('formContato');
const listaContatos = document.getElementById('listaContatos');

let contatos = [];   // array para guardar os contatos

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email) {
        alert("Nome e E-mail são obrigatórios!");
        return;
    }

    const novoContato = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        data: new Date()
    };

    contatos.push(novoContato);
    renderizarContatos();

    // Limpa o formulário
    form.reset();

    alert("Contato adicionado com sucesso!");
});

function renderizarContatos() {
    listaContatos.innerHTML = '';

    contatos.forEach((contato, index) => {
        const card = document.createElement('div');
        card.className = 'contato-card';
        card.innerHTML = `
            <h3>${contato.nome}</h3>
            <p><strong>📧 E-mail:</strong> ${contato.email}</p>
            ${contato.telefone ? `<p><strong>📱 Telefone:</strong> ${contato.telefone}</p>` : ''}
            ${contato.mensagem ? `<p><strong>💬 Mensagem:</strong> ${contato.mensagem.substring(0, 100)}${contato.mensagem.length > 100 ? '...' : ''}</p>` : ''}
            <p style="font-size: 13px; color: #888; margin-top: 10px;">
                📅 ${contato.data.toLocaleString('pt-BR')}
            </p>
        `;
        listaContatos.appendChild(card);
    });
}