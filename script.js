// Dados das áreas de conhecimento
const knowledgeAreas = {
    operacoes: {
        title: 'Operações',
        description: 'Processos operacionais e gestão',
        icon: 'fas fa-cog',
        onboarding: {
            title: 'Bem-vindo à Operações',
            description: 'A área de Operações é responsável pela execução e monitoramento de todos os processos operacionais da Sura.',
            firstWeek: [
                'Conhecer a estrutura organizacional da área',
                'Entender os principais processos operacionais',
                'Acessar sistemas e ferramentas de trabalho',
                'Participar de reuniões de alinhamento'
            ],
            keyProcesses: [
                'Gestão de processos internos',
                'Controle de qualidade',
                'Monitoramento de SLAs',
                'Melhoria contínua'
            ],
            manager: 'Ricardo Oliveira - Gerente de Operações'
        },
        glossary: [
            { term: 'SLA', definition: 'Service Level Agreement - Acordo de Nível de Serviço que define prazos e qualidade esperados.' },
            { term: 'KPI', definition: 'Key Performance Indicator - Indicador-chave de Performance para medir resultados.' },
            { term: 'Processo', definition: 'Sequência de atividades organizadas para atingir um objetivo específico.' },
            { term: 'Melhoria Contínua', definition: 'Filosofia de aprimoramento constante de processos e resultados.' }
        ]
    },
    sinistros: {
        title: 'Sinistros',
        description: 'Gestão e regulação de sinistros',
        icon: 'fas fa-exclamation-triangle',
        onboarding: {
            title: 'Bem-vindo aos Sinistros',
            description: 'A área de Sinistros cuida de todo o processo desde o aviso até o pagamento da indenização.',
            firstWeek: [
                'Conhecer o fluxo completo de sinistros',
                'Entender tipos de cobertura e exclusões',
                'Aprender a usar sistemas de regulação',
                'Acompanhar casos reais com reguladores'
            ],
            keyProcesses: [
                'Recebimento de avisos de sinistro',
                'Análise de cobertura',
                'Regulação e vistoria',
                'Pagamento de indenizações'
            ],
            manager: 'Marcos Ferreira - Gerente de Sinistros'
        },
        glossary: [
            { term: 'Sinistro', definition: 'Evento coberto pela apólice que gera direito à indenização.' },
            { term: 'Regulação', definition: 'Processo de análise e verificação do sinistro para determinar indenização.' },
            { term: 'Vistoria', definition: 'Inspeção técnica realizada por perito para avaliar danos.' },
            { term: 'Indenização', definition: 'Valor pago pela seguradora ao segurado em caso de sinistro coberto.' }
        ]
    },
    emissoes: {
        title: 'Emissões',
        description: 'Processo de emissão de apólices',
        icon: 'fas fa-file-text',
        onboarding: {
            title: 'Bem-vindo às Emissões',
            description: 'A área de Emissões transforma propostas aprovadas em apólices de seguro.',
            firstWeek: [
                'Entender o fluxo de emissão de apólices',
                'Conhecer sistemas de emissão',
                'Aprender sobre documentação necessária',
                'Acompanhar processo de subscrição'
            ],
            keyProcesses: [
                'Análise de propostas',
                'Subscrição de riscos',
                'Emissão de apólices',
                'Gestão de endossos'
            ],
            manager: 'Carla Oliveira - Gerente de Emissões'
        },
        glossary: [
            { term: 'Proposta', definition: 'Solicitação formal de contratação de seguro.' },
            { term: 'Subscrição', definition: 'Processo de análise e avaliação de riscos.' },
            { term: 'Apólice', definition: 'Contrato de seguro que formaliza a proteção.' },
            { term: 'Endosso', definition: 'Documento que altera condições da apólice.' }
        ]
    },
    negocios: {
        title: 'Negócios',
        description: 'Estratégia e desenvolvimento comercial',
        icon: 'fas fa-bullseye',
        onboarding: {
            title: 'Bem-vindo aos Negócios',
            description: 'A área de Negócios desenvolve estratégias comerciais e identifica oportunidades de crescimento.',
            firstWeek: [
                'Conhecer portfólio de produtos da Sura',
                'Entender estratégias comerciais',
                'Aprender sobre análise de mercado',
                'Participar de reuniões de planejamento'
            ],
            keyProcesses: [
                'Desenvolvimento de produtos',
                'Análise de mercado',
                'Estratégia comercial',
                'Parcerias e canais'
            ],
            manager: 'Patricia Santos - Gerente de Negócios'
        },
        glossary: [
            { term: 'ROI', definition: 'Return on Investment - Retorno sobre investimento em novos produtos.' },
            { term: 'Market Share', definition: 'Participação de mercado da Sura em cada segmento.' },
            { term: 'Pipeline', definition: 'Funil de oportunidades comerciais em desenvolvimento.' },
            { term: 'Cross-sell', definition: 'Venda cruzada de produtos complementares ao cliente.' }
        ]
    },
    transporte: {
        title: 'Transporte',
        description: 'Seguros para frotas e cargas',
        icon: 'fas fa-truck',
        onboarding: {
            title: 'Bem-vindo ao Transporte',
            description: 'A área de Transporte especializa-se em seguros para frotas, cargas e logística.',
            firstWeek: [
                'Conhecer produtos de transporte',
                'Entender riscos específicos do setor',
                'Aprender sobre regulamentações',
                'Acompanhar casos de sinistros'
            ],
            keyProcesses: [
                'Subscrição de frotas',
                'Análise de rotas e cargas',
                'Gestão de riscos logísticos',
                'Relacionamento com transportadoras'
            ],
            manager: 'Roberto Lima - Gerente de Transporte'
        },
        glossary: [
            { term: 'Frete', definition: 'Valor do transporte da mercadoria segurada.' },
            { term: 'Avaria', definition: 'Dano parcial ou total da carga durante transporte.' },
            { term: 'Conhecimento', definition: 'Documento que comprova o contrato de transporte.' },
            { term: 'Rastreamento', definition: 'Monitoramento da carga durante o trajeto.' }
        ]
    },
    automovel: {
        title: 'Automóvel',
        description: 'Seguros automotivos',
        icon: 'fas fa-car',
        onboarding: {
            title: 'Bem-vindo ao Automóvel',
            description: 'A área de Automóvel oferece proteção completa para veículos de passeio e utilitários.',
            firstWeek: [
                'Conhecer coberturas automotivas',
                'Entender processo de vistoria',
                'Aprender sobre assistência 24h',
                'Conhecer rede credenciada'
            ],
            keyProcesses: [
                'Cotação e emissão',
                'Vistoria de veículos',
                'Gestão de sinistros auto',
                'Rede de oficinas'
            ],
            manager: 'Fernando Costa - Gerente Automóvel'
        },
        glossary: [
            { term: 'Franquia', definition: 'Valor pago pelo segurado em caso de sinistro com cobertura.' },
            { term: 'Guincho', definition: 'Serviço de reboque incluído na assistência 24 horas.' },
            { term: 'Perda Total', definition: 'Quando o custo do reparo supera 75% do valor do veículo.' },
            { term: 'Bonus', definition: 'Desconto concedido por não ter sinistros no período.' }
        ]
    },
    residencial: {
        title: 'Residencial',
        description: 'Seguros para residências',
        icon: 'fas fa-home',
        onboarding: {
            title: 'Bem-vindo ao Residencial',
            description: 'A área Residencial protege lares e patrimônios familiares contra diversos riscos.',
            firstWeek: [
                'Conhecer coberturas residenciais',
                'Entender avaliação de riscos',
                'Aprender sobre assistência domiciliar',
                'Conhecer produtos complementares'
            ],
            keyProcesses: [
                'Avaliação de imóveis',
                'Subscrição residencial',
                'Gestão de sinistros residenciais',
                'Assistência domiciliar'
            ],
            manager: 'Lucia Mendes - Gerente Residencial'
        },
        glossary: [
            { term: 'Cobertura Básica', definition: 'Proteção contra incêndio, raio, explosão e danos elétricos.' },
            { term: 'Conteúdo', definition: 'Bens móveis existentes dentro da residência segurada.' },
            { term: 'Responsabilidade Civil', definition: 'Cobertura por danos causados a terceiros.' },
            { term: 'Assistência 24h', definition: 'Serviços de emergência domiciliar disponíveis 24 horas.' }
        ]
    },
    financeiro: {
        title: 'Financeiro',
        description: 'Gestão financeira e contábil',
        icon: 'fas fa-calculator',
        onboarding: {
            title: 'Bem-vindo ao Financeiro',
            description: 'A área Financeira gerencia recursos, controles e relatórios financeiros da Sura.',
            firstWeek: [
                'Conhecer estrutura financeira da empresa',
                'Entender processos contábeis',
                'Aprender sobre controles internos',
                'Conhecer sistemas financeiros'
            ],
            keyProcesses: [
                'Contabilidade geral',
                'Controles financeiros',
                'Relatórios gerenciais',
                'Planejamento orçamentário'
            ],
            manager: 'Carlos Rodrigues - Gerente Financeiro'
        },
        glossary: [
            { term: 'DRE', definition: 'Demonstração do Resultado do Exercício - relatório de receitas e despesas.' },
            { term: 'Fluxo de Caixa', definition: 'Controle de entradas e saídas de recursos financeiros.' },
            { term: 'Provisão', definition: 'Reserva contábil para cobrir obrigações futuras.' },
            { term: 'Conciliação', definition: 'Processo de conferência entre registros contábeis e bancários.' }
        ]
    },
    tesouraria: {
        title: 'Tesouraria',
        description: 'Gestão de caixa e investimentos',
        icon: 'fas fa-piggy-bank',
        onboarding: {
            title: 'Bem-vindo à Tesouraria',
            description: 'A Tesouraria gerencia recursos financeiros, investimentos e relacionamento bancário.',
            firstWeek: [
                'Conhecer política de investimentos',
                'Entender gestão de caixa',
                'Aprender sobre relacionamento bancário',
                'Conhecer controles de tesouraria'
            ],
            keyProcesses: [
                'Gestão de caixa',
                'Aplicações financeiras',
                'Relacionamento bancário',
                'Controle de liquidez'
            ],
            manager: 'Marina Silva - Gerente de Tesouraria'
        },
        glossary: [
            { term: 'Liquidez', definition: 'Capacidade de converter investimentos em dinheiro rapidamente.' },
            { term: 'CDB', definition: 'Certificado de Depósito Bancário - investimento de renda fixa.' },
            { term: 'Spread', definition: 'Diferença entre taxa de captação e aplicação de recursos.' },
            { term: 'Hedge', definition: 'Operação para proteção contra variações de mercado.' }
        ]
    },
    tecnologia: {
        title: 'Tecnologia',
        description: 'Sistemas e infraestrutura de TI',
        icon: 'fas fa-desktop',
        onboarding: {
            title: 'Bem-vindo à Tecnologia',
            description: 'A área de Tecnologia mantém e evolui toda infraestrutura e sistemas da Sura.',
            firstWeek: [
                'Conhecer arquitetura de sistemas',
                'Entender processos de TI',
                'Aprender sobre segurança da informação',
                'Conhecer ferramentas de trabalho'
            ],
            keyProcesses: [
                'Desenvolvimento de sistemas',
                'Infraestrutura e redes',
                'Segurança da informação',
                'Suporte técnico'
            ],
            manager: 'Alexandre Costa - Gerente de TI'
        },
        glossary: [
            { term: 'API', definition: 'Interface de Programação de Aplicações para integração entre sistemas.' },
            { term: 'Backup', definition: 'Cópia de segurança dos dados para proteção contra perda.' },
            { term: 'Firewall', definition: 'Sistema de segurança que controla tráfego de rede.' },
            { term: 'SLA de TI', definition: 'Acordo de nível de serviço para tempo de resposta técnica.' }
        ]
    },
    'talento-humano': {
        title: 'Talento Humano',
        description: 'Gestão de pessoas e RH',
        icon: 'fas fa-users',
        onboarding: {
            title: 'Bem-vindo ao Talento Humano',
            description: 'A área de Talento Humano cuida do desenvolvimento e bem-estar dos colaboradores.',
            firstWeek: [
                'Conhecer políticas de RH',
                'Entender processos de recrutamento',
                'Aprender sobre benefícios',
                'Conhecer programas de desenvolvimento'
            ],
            keyProcesses: [
                'Recrutamento e seleção',
                'Gestão de benefícios',
                'Desenvolvimento de pessoas',
                'Relações trabalhistas'
            ],
            manager: 'Ana Paula Rocha - Gerente de RH'
        },
        glossary: [
            { term: 'Onboarding', definition: 'Processo de integração de novos colaboradores.' },
            { term: 'Performance', definition: 'Avaliação de desempenho dos colaboradores.' },
            { term: 'Turnover', definition: 'Taxa de rotatividade de funcionários na empresa.' },
            { term: 'Employer Branding', definition: 'Estratégia para fortalecer marca empregadora.' }
        ]
    },
    sox: {
        title: 'SOX',
        description: 'Controles Sarbanes-Oxley',
        icon: 'fas fa-building',
        onboarding: {
            title: 'Bem-vindo ao SOX',
            description: 'A área de SOX garante conformidade com controles internos e regulamentações.',
            firstWeek: [
                'Conhecer Lei Sarbanes-Oxley',
                'Entender controles internos',
                'Aprender sobre auditoria',
                'Conhecer processos de compliance'
            ],
            keyProcesses: [
                'Controles internos',
                'Auditoria interna',
                'Compliance regulatório',
                'Gestão de riscos'
            ],
            manager: 'Eduardo Santos - Gerente de SOX'
        },
        glossary: [
            { term: 'SOX', definition: 'Sarbanes-Oxley Act - lei americana de controles corporativos.' },
            { term: 'Controle Interno', definition: 'Processo para assegurar eficácia operacional e conformidade.' },
            { term: 'Compliance', definition: 'Conformidade com leis, regulamentos e políticas internas.' },
            { term: 'Auditoria', definition: 'Exame independente de processos e controles internos.' }
        ]
    }
};

// Estado da aplicação
let currentArea = 'operacoes';
let currentTab = 'onboarding';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    updateAreaContent(currentArea);
    updateActiveTab(currentTab);
}

function setupEventListeners() {
    // Botões de área
    document.querySelectorAll('.area-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const areaId = this.dataset.area;
            selectArea(areaId);
        });
    });

    // Botões de aba
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            selectTab(tabId);
        });
    });

    // Botões de tópico (navegação hierárquica)
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const topicId = this.dataset.topic;
            toggleTopic(topicId);
        });
    });

    // Botões de subtópico
    document.querySelectorAll('.subtopic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const subtopicId = this.dataset.subtopic;
            selectSubtopic(subtopicId);
        });
    });
}

function selectArea(areaId) {
    // Atualizar botão ativo
    document.querySelectorAll('.area-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-area="${areaId}"]`).classList.add('active');

    // Atualizar estado
    currentArea = areaId;
    currentTab = 'onboarding';

    // Atualizar conteúdo
    updateAreaContent(areaId);
    updateActiveTab('onboarding');
}

function selectTab(tabId) {
    currentTab = tabId;
    updateActiveTab(tabId);
}

function updateAreaContent(areaId) {
    const area = knowledgeAreas[areaId];
    if (!area) return;

    // Atualizar header da área
    const areaIcon = document.querySelector('.area-icon i');
    const areaName = document.querySelector('.area-name');
    const areaDescription = document.querySelector('.area-description');

    areaIcon.className = area.icon;
    areaName.textContent = area.title;
    areaDescription.textContent = area.description;

    // Atualizar conteúdo do onboarding
    updateOnboardingContent(area);

    // Atualizar glossário
    updateGlossaryContent(area);
}

function updateOnboardingContent(area) {
    const onboarding = area.onboarding;

    // Atualizar título e descrição
    document.querySelector('.welcome-section h3').textContent = onboarding.title;
    document.querySelector('.welcome-section p').textContent = onboarding.description;

    // Atualizar checklist da primeira semana
    const checklist = document.querySelector('.checklist');
    checklist.innerHTML = '';
    onboarding.firstWeek.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="number">${index + 1}</span>${item}`;
        checklist.appendChild(li);
    });

    // Atualizar processos-chave
    const processList = document.querySelector('.process-list');
    processList.innerHTML = '';
    onboarding.keyProcesses.forEach(process => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-bolt"></i>${process}`;
        processList.appendChild(li);
    });

    // Atualizar gestor
    document.querySelector('.manager-name').textContent = onboarding.manager;
}

function updateGlossaryContent(area) {
    const glossaryGrid = document.querySelector('.glossary-grid');
    glossaryGrid.innerHTML = '';

    area.glossary.forEach(item => {
        const card = document.createElement('div');
        card.className = 'glossary-card';
        card.innerHTML = `
            <div class="term-header">${item.term}</div>
            <div class="term-definition">${item.definition}</div>
        `;
        glossaryGrid.appendChild(card);
    });
}

function updateActiveTab(tabId) {
    // Atualizar botões de aba
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

    // Atualizar conteúdo das abas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

function toggleTopic(topicId) {
    const topicBtn = document.querySelector(`[data-topic="${topicId}"]`);
    const subtopics = document.getElementById(`${topicId}-subtopics`);

    if (topicBtn.classList.contains('expanded')) {
        // Colapsar
        topicBtn.classList.remove('expanded');
        subtopics.classList.remove('expanded');
    } else {
        // Expandir (e colapsar outros)
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.remove('expanded');
        });
        document.querySelectorAll('.subtopics').forEach(sub => {
            sub.classList.remove('expanded');
        });

        topicBtn.classList.add('expanded');
        subtopics.classList.add('expanded');
    }
}

function selectSubtopic(subtopicId) {
    // Atualizar subtópico ativo
    document.querySelectorAll('.subtopic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-subtopic="${subtopicId}"]`).classList.add('active');

    // Atualizar painel de detalhes
    const detailsPanel = document.querySelector('.details-panel');
    
    // Dados dos subtópicos (exemplo para Operações)
    const subtopicData = {
        mapeamento: {
            title: 'Mapeamento de Processos',
            description: 'Documentação e análise de todos os processos operacionais da empresa.',
            details: 'Responsável por identificar, documentar e otimizar fluxos de trabalho para garantir eficiência operacional.',
            contact: 'Marina Santos - Analista de Processos'
        },
        qualidade: {
            title: 'Controle de Qualidade',
            description: 'Monitoramento e garantia da qualidade dos processos e entregas.',
            details: 'Estabelece padrões de qualidade, realiza auditorias internas e implementa melhorias contínuas.',
            contact: 'Carlos Ferreira - Coordenador de Qualidade'
        },
        sla: {
            title: 'Gestão de SLA',
            description: 'Controle de acordos de nível de serviço e prazos operacionais.',
            details: 'Monitora cumprimento de prazos, gera relatórios de performance e propõe ações corretivas.',
            contact: 'Ana Lima - Supervisora de SLA'
        },
        projetos: {
            title: 'Projetos de Melhoria',
            description: 'Iniciativas para otimização de processos e redução de custos.',
            details: 'Identifica oportunidades de melhoria, desenvolve projetos e acompanha implementação.',
            contact: 'Pedro Costa - Analista de Projetos'
        },
        indicadores: {
            title: 'Indicadores de Performance',
            description: 'KPIs e métricas para acompanhamento da performance operacional.',
            details: 'Define, coleta e analisa indicadores para tomada de decisão e melhoria contínua.',
            contact: 'Lucia Rocha - Analista de Indicadores'
        }
    };

    const data = subtopicData[subtopicId];
    if (data) {
        detailsPanel.innerHTML = `
            <div class="subtopic-details">
                <h3 style="color: #3b82f6; margin-bottom: 0.5rem;">${data.title}</h3>
                <p style="color: #6b7280; margin-bottom: 1rem; font-size: 1rem;">${data.description}</p>
                
                <div style="margin-bottom: 1rem;">
                    <h4 style="font-weight: 600; color: #111827; margin-bottom: 0.5rem;">Detalhes</h4>
                    <p style="color: #374151; line-height: 1.6;">${data.details}</p>
                </div>
                
                <div style="border-top: 1px solid #e5e7eb; padding-top: 1rem;">
                    <h4 style="font-weight: 600; color: #111827; margin-bottom: 0.5rem;">Quem Procurar</h4>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-user" style="color: #3b82f6;"></i>
                        <span style="font-weight: 500; color: #3b82f6;">${data.contact}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Funcionalidade de busca (placeholder)
function searchContent(query) {
    console.log('Buscando por:', query);
    // Implementar busca aqui
}

// Responsividade - colapsar sidebar em mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

// Adicionar funcionalidade de impressão
function printContent() {
    window.print();
}

// Exportar dados (placeholder)
function exportData() {
    console.log('Exportando dados...');
    // Implementar exportação aqui
}

