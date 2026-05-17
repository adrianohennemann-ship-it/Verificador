# Verificador - Gerador de Provas com IA

Um aplicativo que ajuda professores a criar provas de forma rápida e eficiente utilizando inteligência artificial.

## 🎯 Objetivo

Facilitar a criação de avaliações e provas personalizadas para diferentes disciplinas e níveis de dificuldade, economizando tempo dos professores.

## ✨ Recursos

- ✅ Geração automática de questões com IA
- ✅ Suporte a múltiplos formatos (múltipla escolha, discursivas, verdadeiro/falso)
- ✅ Personalização por disciplina e nível escolar
- ✅ Exportação de provas em PDF/Word
- ✅ Banco de dados com questões criadas
- ✅ Interface amigável e intuitiva

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ OU Python 3.8+
- Chave de API (OpenAI ou similar)
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/adrianohennemann-ship-it/Verificador.git
cd Verificador
```

2. Instale as dependências:
```bash
# Para Node.js
npm install

# Para Python
pip install -r requirements.txt
```

3. Configure suas variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com sua chave de API
```

4. Inicie a aplicação:
```bash
# Node.js
npm start

# Python
python app.py
```

5. Acesse em seu navegador:
```
http://localhost:3000
```

## 📋 Como Usar

1. **Acesse o aplicativo** através do link web
2. **Preencha os dados da prova:**
   - Disciplina/Tema
   - Número de questões
   - Nível de dificuldade
   - Tipo de questões
3. **Clique em "Gerar Prova"**
4. **Revise e customize** as questões geradas
5. **Exporte** em PDF ou Word

## 🏗️ Estrutura do Projeto

```
Verificador/
├── README.md
├── .env.example
├── .gitignore
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── src/
│   ├── app.py (ou server.js)
│   ├── config.py
│   ├── ai_service.py
│   └── db_service.py
├── templates/
│   └── index.html
├── requirements.txt (ou package.json)
└── docs/
    └── API.md
```

## 🤖 Integração com IA

O projeto utiliza a API da **OpenAI** para gerar questões automaticamente.

### Configuração
1. Obtenha uma chave API em [https://platform.openai.com/](https://platform.openai.com/)
2. Adicione a chave no arquivo `.env`
3. As questões são geradas em tempo real

## 📝 Exemplos de Uso

### Exemplo 1: Prova de Matemática
- Disciplina: Matemática
- Tema: Equações de 2º grau
- Questões: 10
- Tipo: Múltipla escolha
- Nível: Ensino Médio

### Exemplo 2: Prova de História
- Disciplina: História
- Tema: Revolução Francesa
- Questões: 5
- Tipo: Discursivas
- Nível: Ensino Médio

## 🔐 Segurança

- Variáveis de ambiente protegidas
- Validação de inputs
- Autenticação para salvar provas (futuro)
- HTTPS em produção

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [Issue](https://github.com/adrianohennemann-ship-it/Verificador/issues)

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autores

- **Adrian Hennemann** - Desenvolvedor

---

**Versão:** 1.0.0  
**Última atualização:** 2026-05-17
