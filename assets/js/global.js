const demoData = {
  projeto01: {
    title: 'Fluxo financeiro',
    description: 'Adicione entradas e despesas e veja o saldo e a projeção do mês instantaneamente.',
    tagline: 'Dashboard em ação',
    samples: [
      {
        name: 'Projeção mensal',
        summary: 'Saldo previsto se mantivermos o ritmo atual.',
        tags: ['Despesas', 'Projeção', 'Alertas'],
        metrics: [
          { label: 'Entradas', value: '+R$ 5.200' },
          { label: 'Saídas', value: '-R$ 3.150' },
          { label: 'Saldo', value: 'R$ 2.050' },
        ],
        steps: ['Adicionar nova despesa', 'Selecionar categoria', 'Gerar gráfico'],
        results: ['Saldo positivo', 'Alertas automáticos', 'Resumo por categoria'],
        tone: 'data',
      },
      {
        name: 'Semana crítica',
        summary: 'Gastos acelerados acionam o alerta visual.',
        tags: ['Heatmap', 'Tendência', 'UX clara'],
        metrics: [
          { label: 'Gasto diário', value: 'R$ 420' },
          { label: 'Limite', value: 'R$ 380' },
          { label: 'Status', value: 'Ajustar ritmo' },
        ],
        steps: ['Filtrar semana', 'Ver tendência', 'Exportar PDF'],
        results: ['Decisão rápida', 'Copy objetiva', 'Experiência responsiva'],
        tone: 'business',
      },
    ],
  },
  projeto02: {
    title: 'Kit de marca instantâneo',
    description: 'Gere paleta, logo tipográfico e cards em segundos.',
    tagline: 'Brand kit generator',
    samples: [
      {
        name: 'Paleta suave',
        summary: 'Tons pastel e contraste sólido para botões.',
        tags: ['Cores', 'Tipografia', 'Preview'],
        metrics: [
          { label: 'Primária', value: '#7C3AED' },
          { label: 'Secundária', value: '#22D3EE' },
          { label: 'Texto', value: '#0F172A' },
        ],
        steps: ['Gerar cores', 'Testar contrastes', 'Exportar cards'],
        results: ['Logo legível', 'Cards prontos', 'Aplicações consistentes'],
        tone: 'creative',
      },
      {
        name: 'Logo minimal',
        summary: 'Tipografia condensada com símbolo geométrico.',
        tags: ['Minimal', 'SVG', 'Reutilizável'],
        metrics: [
          { label: 'Grid', value: '8px' },
          { label: 'Espaços', value: 'Consistentes' },
          { label: 'Status', value: 'Aprovado' },
        ],
        steps: ['Escolher fonte', 'Combinar símbolo', 'Gerar mockups'],
        results: ['Entrega rápida', 'Visual premium', 'Fácil replicar'],
        tone: 'creative',
      },
    ],
  },
  projeto03: {
    title: 'Landing gourmet',
    description: 'Hero com foto, menu destacado e CTA fixo para reservas.',
    tagline: 'Restaurante premium',
    samples: [
      {
        name: 'Menu degustação',
        summary: 'Cards com preços e pares de vinho sugeridos.',
        tags: ['Menu', 'CTA', 'Motion'],
        metrics: [
          { label: 'Tempo médio', value: '2 min no menu' },
          { label: 'Conversão', value: '18% reservas' },
          { label: 'Notas', value: '4.9/5' },
        ],
        steps: ['Explorar pratos', 'Animação suave', 'Focar conversão'],
        results: ['CTA visível', 'Fotos otimizadas', 'Mobile first'],
        tone: 'creative',
      },
      {
        name: 'Reserva imediata',
        summary: 'Formulário curto com feedback instantâneo.',
        tags: ['Form', 'Microcopy', 'Validado'],
        metrics: [
          { label: 'Campos', value: '3' },
          { label: 'Erro', value: '0 bloqueios' },
          { label: 'Status', value: 'Confirmado' },
        ],
        steps: ['Preencher dados', 'Escolher horário', 'Confirmar'],
        results: ['Menos atrito', 'Layout limpo', 'Feedback visual'],
        tone: 'business',
      },
    ],
  },
  projeto04: {
    title: 'Planejador diário',
    description: 'Monte rotinas, marque progresso e veja streaks.',
    tagline: 'Workout planner',
    samples: [
      {
        name: 'Treino push',
        summary: 'Sequência com descanso guiado.',
        tags: ['Timer', 'Checklist', 'LocalStorage'],
        metrics: [
          { label: 'Séries', value: '4x10' },
          { label: 'Descanso', value: '60s' },
          { label: 'Streak', value: '12 dias' },
        ],
        steps: ['Selecionar grupo', 'Iniciar timer', 'Registrar carga'],
        results: ['Histórico salvo', 'Feedback imediato', 'Mobile friendly'],
        tone: 'data',
      },
      {
        name: 'Rotina rápida',
        summary: 'Cardio + core para 20 minutos.',
        tags: ['Cardio', 'HIIT', 'Resumo'],
        metrics: [
          { label: 'Tempo', value: '20 min' },
          { label: 'Calorias', value: '~210' },
          { label: 'Status', value: 'Concluído' },
        ],
        steps: ['Iniciar sessão', 'Completar blocos', 'Salvar'],
        results: ['Gamificação leve', 'Controle diário', 'Exportar PDF'],
        tone: 'play',
      },
    ],
  },
  projeto05: {
    title: 'Catálogo interativo',
    description: 'Filtros, cards e mini carrinho local para simular e-commerce.',
    tagline: 'Loja estática',
    samples: [
      {
        name: 'Filtro ativo',
        summary: 'Aplicação de filtro por categoria e preço.',
        tags: ['Filtros', 'Cards', 'UX clara'],
        metrics: [
          { label: 'Itens exibidos', value: '12' },
          { label: 'Favoritos', value: '5' },
          { label: 'Carrinho', value: 'R$ 380' },
        ],
        steps: ['Escolher categoria', 'Ordenar', 'Adicionar'],
        results: ['Estado salvo', 'Feedback em tempo real', 'Layout responsivo'],
        tone: 'business',
      },
      {
        name: 'Card do produto',
        summary: 'Imagem, descrição curta e botão de compra.',
        tags: ['CTA', 'Quick view', 'Responsive'],
        metrics: [
          { label: 'Cliques', value: '+32%' },
          { label: 'Tempo', value: '1:12 no card' },
          { label: 'Status', value: 'Pronto para vender' },
        ],
        steps: ['Visualizar detalhes', 'Checar estoque', 'Adicionar ao carrinho'],
        results: ['Conversão simulada', 'Microanimações', 'Grid fluido'],
        tone: 'business',
      },
    ],
  },
  projeto06: {
    title: 'Mockups rápidos',
    description: 'Suba uma arte e veja em camiseta, caneca e cartão.',
    tagline: 'Mockup generator',
    samples: [
      {
        name: 'T-shirt preview',
        summary: 'Aplicação automática com ajuste de cor.',
        tags: ['Upload', 'Canvas', 'Auto-fit'],
        metrics: [
          { label: 'Resolução', value: '2K' },
          { label: 'Mockups', value: '3 formatos' },
          { label: 'Status', value: 'Exportável' },
        ],
        steps: ['Enviar PNG', 'Escolher superfície', 'Exportar'],
        results: ['Rapidez', 'Mockups variados', 'Download imediato'],
        tone: 'creative',
      },
      {
        name: 'Cartão de visita',
        summary: 'Arte aplicada com textura leve.',
        tags: ['Print', 'Textura', 'Nitidez'],
        metrics: [
          { label: 'DPI', value: '300' },
          { label: 'Corte', value: 'Sangria 3mm' },
          { label: 'Status', value: 'Pronto' },
        ],
        steps: ['Selecionar modelo', 'Reposicionar arte', 'Salvar'],
        results: ['Realismo', 'Custom rápido', 'Reutilizável'],
        tone: 'business',
      },
    ],
  },
  projeto07: {
    title: 'Calculadora de serviços',
    description: 'Escolha escopo, prazo e complexidade para ver o orçamento estimado.',
    tagline: 'Orçamento inteligente',
    samples: [
      {
        name: 'Projeto website',
        summary: 'Cálculo imediato para site institucional.',
        tags: ['Prazo', 'Complexidade', 'Margem'],
        metrics: [
          { label: 'Horas', value: '42h' },
          { label: 'Prazo', value: '12 dias' },
          { label: 'Estimativa', value: 'R$ 6.800' },
        ],
        steps: ['Definir serviço', 'Selecionar prazo', 'Gerar proposta'],
        results: ['Copy de venda', 'Valor percebido', 'PDF rápido'],
        tone: 'business',
      },
      {
        name: 'Pacote design',
        summary: 'Branding + landing page com bônus.',
        tags: ['Bundle', 'Desconto', 'Upsell'],
        metrics: [
          { label: 'Itens', value: '3 entregas' },
          { label: 'Desconto', value: '12%' },
          { label: 'Ticket', value: 'R$ 8.200' },
        ],
        steps: ['Adicionar extras', 'Recalcular', 'Enviar'],
        results: ['Upsell fácil', 'Preço claro', 'Simulação flexível'],
        tone: 'data',
      },
    ],
  },
  projeto08: {
    title: 'Hotel front-end',
    description: 'Galeria, quartos, diferenciais e CTA fixo de reserva.',
    tagline: 'Hotel & resort',
    samples: [
      {
        name: 'Galeria imersiva',
        summary: 'Grid de fotos com lightbox.',
        tags: ['Galeria', 'Reserva', 'Mapa'],
        metrics: [
          { label: 'Quartos', value: '08' },
          { label: 'Avaliações', value: '4.8/5' },
          { label: 'CTA', value: 'Sempre visível' },
        ],
        steps: ['Ver suíte', 'Checar datas', 'Solicitar'],
        results: ['Storytelling', 'Visual premium', 'Mobile seguro'],
        tone: 'creative',
      },
      {
        name: 'Comparar tarifas',
        summary: 'Tarifas dinâmicas com benefícios.',
        tags: ['Tarifas', 'Benefícios', 'CTA'],
        metrics: [
          { label: 'Diárias', value: 'R$ 480+' },
          { label: 'Economia', value: 'Até 15%' },
          { label: 'Status', value: 'Disponível' },
        ],
        steps: ['Selecionar plano', 'Aplicar cupom', 'Reservar'],
        results: ['Transparência', 'Conversão', 'Facilidade'],
        tone: 'business',
      },
    ],
  },
  projeto09: {
    title: 'Texturas CSS',
    description: 'Gere padrões geométricos e exporte como imagem.',
    tagline: 'Pattern studio',
    samples: [
      {
        name: 'Linha vibrante',
        summary: 'CSS puro com repetições suaves.',
        tags: ['CSS', 'Canvas', 'Download'],
        metrics: [
          { label: 'Tamanho', value: '1024x1024' },
          { label: 'Repetição', value: '16px' },
          { label: 'Formato', value: 'PNG' },
        ],
        steps: ['Escolher forma', 'Gerar preview', 'Exportar'],
        results: ['Padrão seamless', 'Cores custom', 'Arquivo leve'],
        tone: 'creative',
      },
      {
        name: 'Geometria bold',
        summary: 'Padrões com contraste alto.',
        tags: ['Gradiente', 'Noise', 'Tile'],
        metrics: [
          { label: 'Opacidade', value: '12%' },
          { label: 'Ruído', value: 'sutil' },
          { label: 'Status', value: 'Pronto' },
        ],
        steps: ['Alterar paleta', 'Testar tile', 'Salvar'],
        results: ['Export imediato', 'Preview fiel', 'Compartilhável'],
        tone: 'creative',
      },
    ],
  },
  projeto10: {
    title: 'Kanban lite',
    description: 'Listas e cartões arrastáveis com persistência local.',
    tagline: 'Trello style',
    samples: [
      {
        name: 'Sprints curtos',
        summary: 'Cards com status e prioridade.',
        tags: ['Drag & drop', 'Prioridade', 'Checklist'],
        metrics: [
          { label: 'To-do', value: '6 cards' },
          { label: 'Em progresso', value: '3 cards' },
          { label: 'Concluído', value: '4 cards' },
        ],
        steps: ['Criar lista', 'Arrastar card', 'Marcar concluído'],
        results: ['Persistência', 'Feedback visual', 'Produtividade'],
        tone: 'data',
      },
      {
        name: 'Quadro pessoal',
        summary: 'Salvar preferências e tema.',
        tags: ['Tema', 'LocalStorage', 'Atalhos'],
        metrics: [
          { label: 'Tema', value: 'Escuro' },
          { label: 'Atalhos', value: '3 ativos' },
          { label: 'Status', value: 'Salvo' },
        ],
        steps: ['Trocar cor', 'Usar atalhos', 'Sincronizar'],
        results: ['Experiência fluida', 'Microinterações', 'Acessível'],
        tone: 'play',
      },
    ],
  },
  projeto11: {
    title: 'Imóveis filtrados',
    description: 'Busque por localização, faixa de preço e metragem.',
    tagline: 'Catálogo de imóveis',
    samples: [
      {
        name: 'Filtro inteligente',
        summary: 'Resultados se atualizam conforme o usuário digita.',
        tags: ['Busca', 'Mapa', 'Cards'],
        metrics: [
          { label: 'Listados', value: '24' },
          { label: 'Favoritos', value: '7' },
          { label: 'Tempo', value: '0.8s resposta' },
        ],
        steps: ['Definir bairro', 'Ajustar preço', 'Salvar favorito'],
        results: ['Navegação clara', 'Dados em cards', 'Filtro persistente'],
        tone: 'business',
      },
      {
        name: 'Detalhe completo',
        summary: 'Cards com fotos, tags e contato.',
        tags: ['Galeria', 'CTA', 'Comparar'],
        metrics: [
          { label: 'Fotos', value: '8 por imóvel' },
          { label: 'CTA', value: 'Contato direto' },
          { label: 'Status', value: 'Disponível' },
        ],
        steps: ['Abrir ficha', 'Checar tags', 'Compartilhar'],
        results: ['Conteúdo rico', 'Confiança', 'Conversão'],
        tone: 'data',
      },
    ],
  },
  projeto12: {
    title: 'Clima visual',
    description: 'Gráficos animados com séries anuais e índices de chuva.',
    tagline: 'Dados climáticos',
    samples: [
      {
        name: 'Variação anual',
        summary: 'Linhas suavizadas com destaque de extremos.',
        tags: ['Charts', 'Motion', 'Tooltips'],
        metrics: [
          { label: 'Média', value: '23°C' },
          { label: 'Pico', value: '32°C' },
          { label: 'Chuva', value: '180mm' },
        ],
        steps: ['Escolher cidade', 'Animar série', 'Exportar'],
        results: ['Insights rápidos', 'Paleta contrastante', 'Legendas claras'],
        tone: 'data',
      },
      {
        name: 'Índice de chuva',
        summary: 'Barras com transição suave e destaques.',
        tags: ['Barras', 'Escala', 'Comparativo'],
        metrics: [
          { label: 'Secas', value: '3 meses' },
          { label: 'Picos', value: 'Jan/Dez' },
          { label: 'Status', value: 'Atualizado' },
        ],
        steps: ['Alternar ano', 'Ver ranking', 'Compartilhar'],
        results: ['Animações suaves', 'Dados claros', 'Mobile pronto'],
        tone: 'creative',
      },
    ],
  },
  projeto13: {
    title: 'Portfólio automático',
    description: 'Preencha nome, bio e projetos e gere layouts.',
    tagline: 'Gerador de portfólio',
    samples: [
      {
        name: 'Layout neon',
        summary: 'Hero com foto circular e cards de projetos.',
        tags: ['Temas', 'CTA', 'Avatar'],
        metrics: [
          { label: 'Projetos', value: '6 exibidos' },
          { label: 'Tempo', value: '10s geração' },
          { label: 'Status', value: 'Publicável' },
        ],
        steps: ['Subir foto', 'Adicionar links', 'Publicar'],
        results: ['Deploy no GitHub Pages', 'CSS pronto', 'Textos automáticos'],
        tone: 'creative',
      },
      {
        name: 'Template clean',
        summary: 'Layout branco com destaques e depoimentos.',
        tags: ['Clean', 'Tipografia', 'Grid'],
        metrics: [
          { label: 'Seções', value: 'Sobre + Projetos' },
          { label: 'CTA', value: 'Contato rápido' },
          { label: 'Status', value: 'Gerado' },
        ],
        steps: ['Escolher tema', 'Selecionar projetos', 'Exportar'],
        results: ['UX pronta', 'Cópia bem escrita', 'Links automáticos'],
        tone: 'business',
      },
    ],
  },
  projeto14: {
    title: 'Agência animada',
    description: 'Transitions entre seções e visual premium.',
    tagline: 'Creative agency',
    samples: [
      {
        name: 'Transição suave',
        summary: 'Scroll revela cases com parallax.',
        tags: ['Motion', 'Parallax', 'Hero'],
        metrics: [
          { label: 'Cases', value: '4 em destaque' },
          { label: 'Leads', value: 'CTA fixo' },
          { label: 'Tempo', value: '2.4s LCP' },
        ],
        steps: ['Scroll', 'Ver case', 'Abrir proposta'],
        results: ['Apelo premium', 'Interação rica', 'Performance'],
        tone: 'creative',
      },
      {
        name: 'Pitch rápido',
        summary: 'Bloco de serviços com badges.',
        tags: ['Serviços', 'Badges', 'CTA'],
        metrics: [
          { label: 'Serviços', value: 'UX, UI, Dev' },
          { label: 'Status', value: 'Disponível' },
          { label: 'Resposta', value: '<24h' },
        ],
        steps: ['Selecionar serviço', 'Ver detalhes', 'Enviar briefing'],
        results: ['Copys fortes', 'UI consistente', 'Form curto'],
        tone: 'business',
      },
    ],
  },
  projeto15: {
    title: 'Jogo da memória',
    description: 'Níveis, animações de acerto e recordes salvos.',
    tagline: 'Memory game',
    samples: [
      {
        name: 'Modo fácil',
        summary: 'Cartas grandes e feedback sonoro.',
        tags: ['Timer', 'Animação', 'Pontuação'],
        metrics: [
          { label: 'Tempo', value: '00:42' },
          { label: 'Acertos', value: '12/12' },
          { label: 'Recorde', value: 'Novo!' },
        ],
        steps: ['Virar carta', 'Encontrar par', 'Salvar recorde'],
        results: ['Replay rápido', 'Acessível', 'Mobile pronto'],
        tone: 'play',
      },
      {
        name: 'Modo difícil',
        summary: 'Mais pares e animação de shake.',
        tags: ['Desafio', 'Leaderboard', 'Controle'],
        metrics: [
          { label: 'Pares', value: '18' },
          { label: 'Erros', value: '3' },
          { label: 'Status', value: 'Em jogo' },
        ],
        steps: ['Selecionar nível', 'Ativar cronômetro', 'Competir'],
        results: ['Diversão', 'Feedback imediato', 'Salvar resultado'],
        tone: 'play',
      },
    ],
  },
  projeto16: {
    title: 'Rastreador de hábitos',
    description: 'Marque hábitos diários, veja streaks e metas.',
    tagline: 'Habit tracker',
    samples: [
      {
        name: 'Check-in diário',
        summary: 'Calendário interativo com streak destacado.',
        tags: ['Calendário', 'Streak', 'Metas'],
        metrics: [
          { label: 'Hábitos', value: '5 ativos' },
          { label: 'Streak', value: '18 dias' },
          { label: 'Meta', value: '90%' },
        ],
        steps: ['Marcar dia', 'Ver progresso', 'Ajustar meta'],
        results: ['Motivação visual', 'Dados salvos', 'Responsive'],
        tone: 'data',
      },
      {
        name: 'Metas semanais',
        summary: 'Visão por semana com insights.',
        tags: ['Insights', 'Badges', 'Resumo'],
        metrics: [
          { label: 'Cumpridos', value: '12/14' },
          { label: 'Tempo', value: '3 min/dia' },
          { label: 'Status', value: 'On track' },
        ],
        steps: ['Definir meta', 'Acompanhar', 'Celebrar'],
        results: ['Microinterações', 'UX clara', 'Mobile'],
        tone: 'play',
      },
    ],
  },
  projeto17: {
    title: 'Editor de fotos',
    description: 'Aplique filtros de brilho, contraste e saturação e exporte.',
    tagline: 'Photo editor',
    samples: [
      {
        name: 'Filtro cinema',
        summary: 'Contraste + vibração com preview em tempo real.',
        tags: ['Brilho', 'Contraste', 'Exportar'],
        metrics: [
          { label: 'Brilho', value: '+12' },
          { label: 'Contraste', value: '+18' },
          { label: 'Saturação', value: '+10' },
        ],
        steps: ['Ajustar slider', 'Comparar antes/depois', 'Salvar'],
        results: ['Preview rápido', 'Export PNG', 'UI simples'],
        tone: 'creative',
      },
      {
        name: 'Modo retrato',
        summary: 'Desfoque leve e correção de pele.',
        tags: ['Desfoque', 'Skin tone', 'Nitidez'],
        metrics: [
          { label: 'Desfoque', value: '8px' },
          { label: 'Realce', value: '+6' },
          { label: 'Status', value: 'Pronto' },
        ],
        steps: ['Aplicar filtro', 'Ajustar intensidade', 'Baixar'],
        results: ['Export rápido', 'Sem backend', 'Mobile first'],
        tone: 'creative',
      },
    ],
  },
  projeto18: {
    title: 'Logos minimalistas',
    description: 'Combine símbolos e tipografia para gerar logos.',
    tagline: 'Logo generator',
    samples: [
      {
        name: 'Símbolo geométrico',
        summary: 'Hexágono + monograma moderno.',
        tags: ['SVG', 'Monograma', 'Spacing'],
        metrics: [
          { label: 'Espaços', value: '8pt grid' },
          { label: 'Peso', value: '700' },
          { label: 'Status', value: 'Aprovado' },
        ],
        steps: ['Escolher símbolo', 'Digitar nome', 'Gerar'],
        results: ['Logo vetorial', 'Aplicações', 'Export'],
        tone: 'creative',
      },
      {
        name: 'Tipografia bold',
        summary: 'Fonte condensada com ligaduras.',
        tags: ['Tipografia', 'Ligadura', 'Mockup'],
        metrics: [
          { label: 'Kerning', value: 'Ajustado' },
          { label: 'Cores', value: '2 tons' },
          { label: 'Status', value: 'Variantes prontas' },
        ],
        steps: ['Selecionar peso', 'Aplicar cor', 'Exportar'],
        results: ['Aplicável em cards', 'Brand kit', 'Rapidez'],
        tone: 'business',
      },
    ],
  },
  projeto19: {
    title: 'Simulador de financiamento',
    description: 'Parcelas, juros compostos e linhas dinâmicas.',
    tagline: 'Financiamento',
    samples: [
      {
        name: 'Cenário conservador',
        summary: 'Entrada alta reduz juros totais.',
        tags: ['Juros', 'Tabela', 'Gráfico'],
        metrics: [
          { label: 'Entrada', value: 'R$ 50k' },
          { label: 'Parcela', value: 'R$ 820' },
          { label: 'Prazo', value: '48x' },
        ],
        steps: ['Definir entrada', 'Escolher prazo', 'Gerar tabela'],
        results: ['Linha temporal', 'Totais claros', 'Comparar planos'],
        tone: 'business',
      },
      {
        name: 'Cenário agressivo',
        summary: 'Prazo curto, economia em juros.',
        tags: ['Economia', 'Comparativo', 'Tooltip'],
        metrics: [
          { label: 'Juros', value: '-18%' },
          { label: 'Prazo', value: '24x' },
          { label: 'Status', value: 'Recomendado' },
        ],
        steps: ['Ajustar taxa', 'Ver economia', 'Exportar PDF'],
        results: ['Clareza', 'UI financeira', 'Responsivo'],
        tone: 'data',
      },
    ],
  },
  projeto20: {
    title: 'Landing de evento',
    description: 'Programação, palestrantes e CTA para ingressos.',
    tagline: 'Evento e conferência',
    samples: [
      {
        name: 'Agenda dinâmica',
        summary: 'Filtros por trilha e horário.',
        tags: ['Agenda', 'Palestrantes', 'CTA'],
        metrics: [
          { label: 'Talks', value: '18' },
          { label: 'Palestrantes', value: '12' },
          { label: 'Ingressos', value: 'Restam 80' },
        ],
        steps: ['Filtrar trilha', 'Salvar talk', 'Comprar'],
        results: ['Acesso rápido', 'Detalhe de speaker', 'Link direto'],
        tone: 'business',
      },
      {
        name: 'CTA fixo',
        summary: 'Botão sempre visível durante o scroll.',
        tags: ['Sticky CTA', 'Animações', 'Prova social'],
        metrics: [
          { label: 'Conversão', value: '+22%' },
          { label: 'Feedback', value: 'Tempo real' },
          { label: 'Status', value: 'Ativo' },
        ],
        steps: ['Ler highlights', 'Ver palestrante', 'Comprar ingresso'],
        results: ['Copy forte', 'Design leve', 'Mobile'],
        tone: 'creative',
      },
    ],
  },
  projeto21: {
    title: 'Wallpapers personalizados',
    description: 'Gere fractais e padrões matemáticos em HD.',
    tagline: 'Wallpaper lab',
    samples: [
      {
        name: 'Fractal neon',
        summary: 'Padrões com gradiente intenso.',
        tags: ['Fractal', 'Gradiente', 'Export'],
        metrics: [
          { label: 'Resolução', value: '1920p' },
          { label: 'Seed', value: '#A9F1' },
          { label: 'Status', value: 'Renderizado' },
        ],
        steps: ['Gerar seed', 'Ajustar cores', 'Baixar'],
        results: ['Arte exclusiva', 'Loop infinito', 'Compartilhável'],
        tone: 'creative',
      },
      {
        name: 'Geometria minimal',
        summary: 'Linhas e pontos com ruído sutil.',
        tags: ['Minimal', 'Ruído', 'Pattern'],
        metrics: [
          { label: 'Espaçamento', value: '12px' },
          { label: 'Ruído', value: '05%' },
          { label: 'Status', value: 'Pronto' },
        ],
        steps: ['Selecionar forma', 'Brincar com ruído', 'Exportar HD'],
        results: ['Visual limpo', 'Impressão fiel', 'Mobile'],
        tone: 'data',
      },
    ],
  },
  projeto22: {
    title: 'Receitas com busca',
    description: 'Encontre por ingrediente e siga etapas ilustradas.',
    tagline: 'Cookbook web',
    samples: [
      {
        name: 'Busca instantânea',
        summary: 'Filtragem por ingrediente em tempo real.',
        tags: ['Busca', 'Categorias', 'Tempo'],
        metrics: [
          { label: 'Receitas', value: '42' },
          { label: 'Tempo médio', value: '25min' },
          { label: 'Favoritos', value: '9' },
        ],
        steps: ['Digitar ingrediente', 'Escolher receita', 'Salvar'],
        results: ['Fácil de achar', 'UI saborosa', 'Mobile'],
        tone: 'business',
      },
      {
        name: 'Modo preparo',
        summary: 'Etapas cronometradas com fotos.',
        tags: ['Step by step', 'Timer', 'UX clara'],
        metrics: [
          { label: 'Passos', value: '6' },
          { label: 'Timer', value: '08:00' },
          { label: 'Status', value: 'Em andamento' },
        ],
        steps: ['Ler passo', 'Iniciar timer', 'Finalizar'],
        results: ['Sem distrações', 'Visual apetitoso', 'Controle total'],
        tone: 'creative',
      },
    ],
  },
  projeto23: {
    title: 'Guia digital',
    description: 'Capítulos navegáveis com transições suaves.',
    tagline: 'eBook web',
    samples: [
      {
        name: 'Navegação lateral',
        summary: 'Sumário interativo com progresso.',
        tags: ['Índice', 'Progresso', 'Scroll suave'],
        metrics: [
          { label: 'Capítulos', value: '12' },
          { label: 'Lido', value: '65%' },
          { label: 'Tempo', value: '7 min' },
        ],
        steps: ['Abrir capítulo', 'Pular seção', 'Retomar'],
        results: ['Leitura fluida', 'Sem downloads', 'Mobile'],
        tone: 'business',
      },
      {
        name: 'Modo imersivo',
        summary: 'Tela cheia com destaque de citações.',
        tags: ['Fullscreen', 'Notas', 'Highlights'],
        metrics: [
          { label: 'Notas', value: '14' },
          { label: 'Destaques', value: '5' },
          { label: 'Status', value: 'Sincronizado' },
        ],
        steps: ['Ativar modo', 'Destacar trecho', 'Compartilhar'],
        results: ['UX moderna', 'Tipografia clara', 'Interação leve'],
        tone: 'creative',
      },
    ],
  },
  projeto24: {
    title: 'Showcase de artista',
    description: 'Galeria com efeitos para artes 2D e 3D.',
    tagline: 'Art portfolio',
    samples: [
      {
        name: 'Grid responsivo',
        summary: 'Efeito hover com profundidade.',
        tags: ['Hover', 'Galeria', 'Video'],
        metrics: [
          { label: 'Obras', value: '30' },
          { label: 'FPS', value: '60 estável' },
          { label: 'Status', value: 'Online' },
        ],
        steps: ['Hover no card', 'Abrir modal', 'Curtir'],
        results: ['Interação rica', 'Foco na arte', 'Mobile'],
        tone: 'creative',
      },
      {
        name: 'Story de projeto',
        summary: 'Timeline de processo com fotos.',
        tags: ['Processo', 'Timeline', 'Case'],
        metrics: [
          { label: 'Passos', value: '5' },
          { label: 'Zoom', value: 'Detalhado' },
          { label: 'Status', value: 'Compartilhável' },
        ],
        steps: ['Ver processo', 'Ampliar detalhe', 'Salvar'],
        results: ['Storytelling', 'Transições', 'Apresentação'],
        tone: 'business',
      },
    ],
  },
  projeto25: {
    title: 'Comparador de produtos',
    description: 'Compare até três itens lado a lado.',
    tagline: 'Product compare',
    samples: [
      {
        name: 'Tabela direta',
        summary: 'Destaque do melhor custo-benefício.',
        tags: ['Tabela', 'Filtros', 'Badges'],
        metrics: [
          { label: 'Itens', value: '3' },
          { label: 'Melhor', value: 'Produto B' },
          { label: 'Economia', value: 'R$ 220' },
        ],
        steps: ['Adicionar item', 'Marcar favorito', 'Exportar'],
        results: ['Decisão rápida', 'UI limpa', 'Dados claros'],
        tone: 'business',
      },
      {
        name: 'Modo ficha',
        summary: 'Comparação por especificações.',
        tags: ['Specs', 'Notas', 'Ranking'],
        metrics: [
          { label: 'Notas', value: '4.6' },
          { label: 'Critérios', value: '8' },
          { label: 'Status', value: 'Atualizado' },
        ],
        steps: ['Selecionar critérios', 'Aplicar peso', 'Ver ranking'],
        results: ['Objetividade', 'Visual intuitivo', 'Mobile'],
        tone: 'data',
      },
    ],
  },
  projeto26: {
    title: 'Site corporativo',
    description: 'Sobre, serviços, produtos e cases em layout minimalista.',
    tagline: 'Tech company',
    samples: [
      {
        name: 'Hero corporativo',
        summary: 'CTA claro com pontos de prova.',
        tags: ['Hero', 'CTA', 'Prova social'],
        metrics: [
          { label: 'Clientes', value: '120+' },
          { label: 'SLAs', value: '99.9%' },
          { label: 'Feedback', value: 'NPS 72' },
        ],
        steps: ['Apresentar produto', 'Mostrar métricas', 'Direcionar CTA'],
        results: ['Clareza', 'Confiança', 'Conversão'],
        tone: 'business',
      },
      {
        name: 'Case rápido',
        summary: 'Resumo de impacto com números.',
        tags: ['Case', 'KPIs', 'Slides'],
        metrics: [
          { label: 'Tempo', value: '-32%' },
          { label: 'Receita', value: '+18%' },
          { label: 'Status', value: 'Publicado' },
        ],
        steps: ['Selecionar case', 'Destacar KPIs', 'Chamar para ação'],
        results: ['Layout clean', 'Copy concisa', 'Fácil replicar'],
        tone: 'data',
      },
    ],
  },
  projeto27: {
    title: 'Dashboard social',
    description: 'Seguidores, engajamento e gráficos temporais.',
    tagline: 'Social metrics',
    samples: [
      {
        name: 'Performance semanal',
        summary: 'Visualização de crescimento por rede.',
        tags: ['Seguidores', 'Engajamento', 'Timeline'],
        metrics: [
          { label: 'Seguidores', value: '+1.2k' },
          { label: 'Taxa', value: '6.4%' },
          { label: 'Cliques', value: '980' },
        ],
        steps: ['Filtrar rede', 'Ver gráfico', 'Exportar'],
        results: ['Insights rápidos', 'Cores distintas', 'Legendado'],
        tone: 'data',
      },
      {
        name: 'Conteúdo campeão',
        summary: 'Top posts com CTR alto.',
        tags: ['Ranking', 'CTR', 'Heatmap'],
        metrics: [
          { label: 'CTR', value: '12.8%' },
          { label: 'Salvos', value: '430' },
          { label: 'Status', value: 'Em alta' },
        ],
        steps: ['Selecionar período', 'Ver ranking', 'Duplicar post'],
        results: ['Ações claras', 'Design consistente', 'Mobile'],
        tone: 'play',
      },
    ],
  },
  projeto28: {
    title: 'Criador de avatares',
    description: 'Combine olhos, bocas, roupas e acessórios e exporte.',
    tagline: 'Avatar builder',
    samples: [
      {
        name: 'Avatar urbano',
        summary: 'Combinação com boné e hoodie.',
        tags: ['Camadas', 'Cores', 'Download'],
        metrics: [
          { label: 'Itens', value: '120+' },
          { label: 'Export', value: 'PNG' },
          { label: 'Status', value: 'Pronto' },
        ],
        steps: ['Escolher base', 'Adicionar acessório', 'Exportar'],
        results: ['Estilos variados', 'UI lúdica', 'Mobile'],
        tone: 'creative',
      },
      {
        name: 'Avatar corporativo',
        summary: 'Look sóbrio com cores brand.',
        tags: ['Uniforme', 'Paleta', 'SVG'],
        metrics: [
          { label: 'Paletas', value: '6' },
          { label: 'Compatível', value: 'SVG' },
          { label: 'Status', value: 'Exportado' },
        ],
        steps: ['Trocar cor', 'Aplicar sombra', 'Baixar'],
        results: ['Brandable', 'Variantes', 'Compartilhar'],
        tone: 'business',
      },
    ],
  },
  projeto29: {
    title: 'Sistema de anotações',
    description: 'Notas com tags, busca em tempo real e salvamento local.',
    tagline: 'Notas rápidas',
    samples: [
      {
        name: 'Busca instantânea',
        summary: 'Resultado muda enquanto você digita.',
        tags: ['Busca', 'Tags', 'Autosave'],
        metrics: [
          { label: 'Notas', value: '54' },
          { label: 'Tags', value: '12' },
          { label: 'Status', value: 'Sincronizado' },
        ],
        steps: ['Criar nota', 'Adicionar tag', 'Buscar'],
        results: ['Zero fricção', 'LocalStorage', 'Organização'],
        tone: 'business',
      },
      {
        name: 'Modo foco',
        summary: 'Editor sem distrações.',
        tags: ['Modo escuro', 'Markdown', 'Pin'],
        metrics: [
          { label: 'Fixadas', value: '4' },
          { label: 'Backup', value: 'Auto' },
          { label: 'Status', value: 'Seguro' },
        ],
        steps: ['Ativar foco', 'Editar', 'Fixar'],
        results: ['Concentração', 'Backup local', 'Pesquisa rápida'],
        tone: 'data',
      },
    ],
  },
  projeto30: {
    title: 'Landing para SaaS',
    description: 'Mockups 3D, seções de recursos e prova social.',
    tagline: 'SaaS startup',
    samples: [
      {
        name: 'Hero 3D',
        summary: 'Mockup flutuante com CTA duplo.',
        tags: ['Mockup', 'CTA duplo', 'Trust'],
        metrics: [
          { label: 'Trials', value: '+320' },
          { label: 'Conversão', value: '14%' },
          { label: 'Tempo', value: '1.9s LCP' },
        ],
        steps: ['Ver recursos', 'Assistir demo', 'Começar'],
        results: ['Velocidade', 'Visual moderno', 'Story SaaS'],
        tone: 'creative',
      },
      {
        name: 'Recursos em cards',
        summary: 'Cards com ícones e métricas.',
        tags: ['Features', 'Pricing', 'CTA'],
        metrics: [
          { label: 'Planos', value: '3' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Status', value: 'Ready' },
        ],
        steps: ['Selecionar plano', 'Comparar benefícios', 'Testar'],
        results: ['Confiança', 'Métrica clara', 'Botões sempre visíveis'],
        tone: 'business',
      },
    ],
  },
};

function renderDemo(host, data) {
  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">${data.tagline || 'Demonstração'}</p>
        <h3 style="margin:0.2rem 0 0.2rem;">${data.title}</h3>
        <p style="color: var(--muted); margin:0;">${data.description}</p>
      </div>
      <button class="btn demo-action" type="button" data-demo-next>Gerar variação</button>
    </div>
    <div class="demo-grid">
      <div class="demo-preview demo-toned" data-demo-tone>
        <h4 data-demo-name></h4>
        <p style="color: var(--muted); margin:0;" data-demo-summary></p>
        <div class="demo-chips" data-demo-tags></div>
        <div class="demo-metrics" data-demo-metrics></div>
      </div>
      <div class="demo-side">
        <div class="demo-card">
          <h4>Passos rápidos</h4>
          <div class="demo-pill-row" data-demo-steps></div>
        </div>
        <div class="demo-card">
          <h4>Resultados</h4>
          <div class="demo-pill-row" data-demo-results></div>
        </div>
      </div>
    </div>
  `;

  const next = host.querySelector('[data-demo-next]');
  const name = host.querySelector('[data-demo-name]');
  const summary = host.querySelector('[data-demo-summary]');
  const tags = host.querySelector('[data-demo-tags]');
  const metrics = host.querySelector('[data-demo-metrics]');
  const steps = host.querySelector('[data-demo-steps]');
  const results = host.querySelector('[data-demo-results]');
  const toneBox = host.querySelector('[data-demo-tone]');

  let index = 0;
  const apply = () => {
    const sample = data.samples[index];
    name.textContent = sample.name;
    summary.textContent = sample.summary;
    toneBox.dataset.tone = sample.tone || 'data';

    tags.innerHTML = sample.tags.map((tag) => `<span class="demo-chip">${tag}</span>`).join('');
    metrics.innerHTML = sample.metrics
      .map((metric) => `<div class="demo-metric"><span style="color: var(--muted);">${metric.label}</span><strong>${metric.value}</strong></div>`)
      .join('');
    steps.innerHTML = sample.steps.map((step) => `<span class="demo-pill">${step}</span>`).join('');
    results.innerHTML = sample.results.map((result) => `<span class="demo-pill">${result}</span>`).join('');
  };

  apply();
  next?.addEventListener('click', () => {
    index = (index + 1) % data.samples.length;
    apply();
  });
}

(function () {
  const path = window.location.pathname.replace(/\/$/, '');
  const links = document.querySelectorAll('.nav-links a');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && path.includes(href.replace('./', '').replace('index.html', ''))) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('[data-animated-badge]').forEach((badge, index) => {
    badge.style.animationDelay = `${index * 80}ms`;
  });

  document.querySelectorAll('[data-card-link]').forEach((card) => {
    const target = card.getAttribute('data-card-link');
    const open = () => {
      if (target) window.location.href = target;
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  const demoHost = document.querySelector('[data-demo-host]');
  const projectKey = document.body?.dataset.project;
  if (demoHost && projectKey) {
    const data = demoData[projectKey];
    if (data) {
      renderDemo(demoHost, data);
    } else {
      demoHost.innerHTML = '<p class="demo-empty">Demonstração em breve.</p>';
    }
  }
})();
