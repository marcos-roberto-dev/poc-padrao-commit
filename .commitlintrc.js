const { defineConfig } = require('cz-git');

/** @type {import('cz-git').UserConfig} */
module.exports = defineConfig({
  prompt: {
        useEmoji: true,
        types: [
        {
            value: "feat",
            emoji: "✨",
            name: "✨ (feat) Nova funcionalidade",
            alias: ["feature", "nova", "funcionalidade", "adicionar", "implementação"]
        },
        {
            value: "fix",
            emoji: "🐛",
            name: "🐛 (fix) Correção de bug",
            alias: ["bug", "correção", "ajuste", "erro", "fixar"]
        },
        {
            value: "docs",
            emoji: "📝",
            name: "📝 (docs) Documentação",
            alias: ["documentação", "doc", "readme", "manual"]
        },
        {
            value: "style",
            emoji: "💄",
            name: "💄 (style) Estilo/formatação",
            alias: ["estilo", "formatação", "css", "visual", "layout"]
        },
        {
            value: "refactor",
            emoji: "♻️",
            name: "♻️ (refactor) Refatoração",
            alias: ["refatorar", "refatoração", "melhoria", "reorganizar"]
        },
        {
            value: "perf",
            emoji: "⚡️",
            name: "⚡️ (perf) Melhoria de performance",
            alias: ["performance", "otimizar", "velocidade"]
        },
        {
            value: "test",
            emoji: "✅",
            name: "✅ (test) Testes",
            alias: ["teste", "testes", "check", "validar"]
        },
        {
            value: "build",
            emoji: "📦️",
            name: "📦️ (build) Build/Dependências",
            alias: ["build", "dependência", "dependencias", "empacotar"]
        },
        {
            value: "ci",
            emoji: "👷",
            name: "👷 (ci) Integração contínua",
            alias: ["ci", "pipeline", "integração", "continua"]
        },
        {
            value: "chore",
            emoji: "🔨",
            name: "🔨 (chore) Tarefas de manutenção",
            alias: ["chore", "manutenção", "infra", "infraestrutura"]
        },
        {
            value: "revert",
            emoji: "⏪️",
            name: "⏪️ (revert) Reverter alterações",
            alias: ["reverter", "rollback", "voltar"]
        }
        ],

        messages: {
        type: "Selecione o tipo de commit:",
        scope: "Scope (módulo/arquivo) – opcional:",
        customScope: "Informe o scope:",
        subject: "Descrição curta (imperativo):\n",
        body: 'Descrição longa – opcional (use "|" para quebrar linha):\n',
        footer: "Referência a issues (ex: #123) – opcional:\n",
        confirmCommit: "Confirmar o commit acima?"
        },

        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
          skipQuestions: ['footerPrefix'],

        footerPrefixs: false,  
        allowCustomIssuePrefix: false,
        issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: '',
  },
        
});
