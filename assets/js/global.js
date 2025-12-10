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

function renderFinanceDemo(host) {
  const categories = ['Essenciais', 'Lazer', 'Saúde', 'Investimentos'];
  const state = {
    items: [
      { type: 'Entrada', description: 'Pagamento projeto', value: 1800, category: 'Investimentos' },
      { type: 'Saída', description: 'Aluguel', value: 1200, category: 'Essenciais' },
      { type: 'Saída', description: 'Mercado', value: 320, category: 'Essenciais' },
      { type: 'Entrada', description: 'Freelance UX', value: 650, category: 'Investimentos' },
    ],
    filter: 'Todos',
  };

  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">Dashboard em ação</p>
        <h3 style="margin:0;">Fluxo financeiro em tempo real</h3>
        <p style="color: var(--muted); margin:0;">Adicione entradas e saídas, veja o saldo e acompanhe o ritmo da semana.</p>
      </div>
      <div class="demo-pill-row">
        ${['Todos', ...categories]
          .map((cat) => `<button class="pill-btn" data-filter="${cat}">${cat}</button>`)
          .join('')}
      </div>
    </div>
    <div class="finance-grid">
      <div class="finance-summary">
        <div class="summary-card">
          <p class="kicker" style="margin:0;">Entradas</p>
          <strong data-fin-income></strong>
          <small data-fin-income-count></small>
        </div>
        <div class="summary-card">
          <p class="kicker" style="margin:0;">Saídas</p>
          <strong data-fin-expense></strong>
          <small data-fin-expense-count></small>
        </div>
        <div class="summary-card highlight">
          <p class="kicker" style="margin:0;">Saldo</p>
          <strong data-fin-balance></strong>
          <small>projeção semanal automática</small>
        </div>
      </div>
      <div class="finance-body">
        <div class="finance-form">
          <div class="form-row">
            <select data-fin-type>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
            <input type="text" placeholder="Descrição" data-fin-desc>
            <input type="number" min="1" step="0.01" placeholder="Valor" data-fin-value>
          </div>
          <div class="form-row">
            <select data-fin-cat>
              ${categories.map((cat) => `<option>${cat}</option>`).join('')}
            </select>
            <button class="btn" type="button" data-fin-add>Registrar</button>
          </div>
        </div>
        <div class="finance-chart" data-fin-chart>
          <div class="chart-bars" data-fin-bars></div>
          <div class="chart-legend">
            <span class="demo-chip">Ritmo diário</span>
            <span class="demo-chip" style="background: rgba(34, 211, 238, 0.12); color: #67e8f9;">Meta</span>
          </div>
        </div>
      </div>
      <div class="finance-table" data-fin-list></div>
    </div>
  `;

  const refs = {
    income: host.querySelector('[data-fin-income]'),
    incomeCount: host.querySelector('[data-fin-income-count]'),
    expense: host.querySelector('[data-fin-expense]'),
    expenseCount: host.querySelector('[data-fin-expense-count]'),
    balance: host.querySelector('[data-fin-balance]'),
    list: host.querySelector('[data-fin-list]'),
    type: host.querySelector('[data-fin-type]'),
    desc: host.querySelector('[data-fin-desc]'),
    value: host.querySelector('[data-fin-value]'),
    cat: host.querySelector('[data-fin-cat]'),
    add: host.querySelector('[data-fin-add]'),
    bars: host.querySelector('[data-fin-bars]'),
  };

  const renderSummary = () => {
    const incomeItems = state.items.filter((i) => i.type === 'Entrada');
    const expenseItems = state.items.filter((i) => i.type === 'Saída');
    const sum = (arr) => arr.reduce((total, item) => total + item.value, 0);
    const totalIncome = sum(incomeItems);
    const totalExpense = sum(expenseItems);
    const balance = totalIncome - totalExpense;
    refs.income.textContent = totalIncome.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    refs.expense.textContent = totalExpense.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    refs.balance.textContent = balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    refs.incomeCount.textContent = `${incomeItems.length} recebimentos`;
    refs.expenseCount.textContent = `${expenseItems.length} despesas`;
  };

  const renderList = () => {
    const rows = state.items
      .filter((item) => state.filter === 'Todos' || item.category === state.filter)
      .map(
        (item) => `
        <div class="finance-row" data-tone="${item.type === 'Entrada' ? 'positive' : 'negative'}">
          <div>
            <strong>${item.description}</strong>
            <p style="margin:0; color: var(--muted);">${item.category}</p>
          </div>
          <div class="row-right">
            <span class="badge">${item.type}</span>
            <span class="value">${(item.type === 'Entrada' ? 1 : -1) * item.value >= 0 ? '+' : ''}${
            (item.type === 'Entrada' ? item.value : -item.value).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }</span>
          </div>
        </div>
      `
      )
      .join('');
    refs.list.innerHTML = rows || '<p class="demo-empty">Nada aqui ainda.</p>';
  };

  const renderBars = () => {
    const totals = Array.from({ length: 7 }, (_, i) => ({ label: `D${i + 1}`, value: Math.max(80, 160 - i * 12) }));
    const max = Math.max(...totals.map((t) => t.value));
    refs.bars.innerHTML = totals
      .map(
        (day, idx) => `
        <div class="bar">
          <div class="bar-fill" style="height:${(day.value / max) * 100}%">
            <span>${day.value}</span>
          </div>
          <small>D${idx + 1}</small>
        </div>
      `
      )
      .join('');
  };

  refs.add.addEventListener('click', () => {
    const desc = refs.desc.value.trim();
    const value = parseFloat(refs.value.value);
    if (!desc || !Number.isFinite(value) || value <= 0) return;
    state.items.unshift({ type: refs.type.value, description: desc, value, category: refs.cat.value });
    refs.desc.value = '';
    refs.value.value = '';
    renderSummary();
    renderList();
  });

  host.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      host.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('pill-btn-active'));
      btn.classList.add('pill-btn-active');
      renderList();
    });
  });

  renderSummary();
  renderList();
  renderBars();
}

function renderBrandDemo(host) {
  const palettes = {
    Vibrante: ['#8B5CF6', '#22D3EE', '#0F172A', '#FACC15'],
    Minimal: ['#0F172A', '#E2E8F0', '#7C3AED', '#94A3B8'],
    Neutro: ['#111827', '#22D3EE', '#6EE7B7', '#9CA3AF'],
  };

  const randomize = (base) =>
    base.map((color) => {
      const delta = () => Math.max(Math.min(Math.floor(Math.random() * 30) - 15, 15), -15);
      const toHex = (num) => num.toString(16).padStart(2, '0');
      const [r, g, b] = color
        .match(/#(..)(..)(..)/)
        .slice(1)
        .map((pair) => parseInt(pair, 16))
        .map((val) => Math.min(255, Math.max(0, val + delta())));
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    });

  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">Brand kit generator</p>
        <h3 style="margin:0;">Gere logo e paleta na hora</h3>
        <p style="color: var(--muted); margin:0;">Mude o estilo e veja logo, cartão e UI adaptarem em tempo real.</p>
      </div>
      <div class="brand-form">
        <input type="text" placeholder="Nome da marca" value="Nordico" data-brand-name>
        <select data-brand-style>
          <option>Vibrante</option>
          <option>Minimal</option>
          <option>Neutro</option>
        </select>
        <button class="btn" type="button" data-brand-generate>Gerar kit</button>
      </div>
    </div>
    <div class="brand-grid">
      <div class="brand-logo" data-brand-logo>
        <div class="brand-mark" data-brand-mark>NC</div>
        <div>
          <strong data-brand-title>Nordico</strong>
          <p style="margin:0; color: var(--muted);">Brand kit instantâneo</p>
        </div>
      </div>
      <div class="brand-swatches" data-brand-swatches></div>
      <div class="brand-card" data-brand-card>
        <div class="card-top">
          <div class="mini-badge">UI preview</div>
          <span data-brand-chip>Nova coleção</span>
        </div>
        <h4 data-brand-heading>Landing premium</h4>
        <p style="color: var(--muted);">Botões, fundos e badges seguindo a paleta gerada.</p>
        <div class="card-actions">
          <button class="btn">Comprar</button>
          <button class="btn secondary">Ver detalhes</button>
        </div>
      </div>
    </div>
  `;

  const refs = {
    name: host.querySelector('[data-brand-name]'),
    style: host.querySelector('[data-brand-style]'),
    generate: host.querySelector('[data-brand-generate]'),
    logo: host.querySelector('[data-brand-logo]'),
    mark: host.querySelector('[data-brand-mark]'),
    title: host.querySelector('[data-brand-title]'),
    swatches: host.querySelector('[data-brand-swatches]'),
    chip: host.querySelector('[data-brand-chip]'),
    heading: host.querySelector('[data-brand-heading]'),
    card: host.querySelector('[data-brand-card]'),
  };

  const apply = () => {
    const brand = refs.name.value || 'Sua marca';
    const base = palettes[refs.style.value];
    const colors = randomize(base);
    const initials = brand
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    refs.mark.textContent = initials || 'BK';
    refs.title.textContent = brand;
    refs.logo.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
    refs.mark.style.color = colors[2];
    refs.mark.style.borderColor = colors[3];
    refs.swatches.innerHTML = colors
      .map((color) => `<div class="swatch" style="background:${color};"><span>${color}</span></div>`)
      .join('');
    refs.card.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
    refs.chip.style.background = colors[2];
    refs.heading.textContent = `${brand} — ${refs.style.value}`;
  };

  refs.generate.addEventListener('click', apply);
  apply();
}

function renderRestaurantDemo(host) {
  const menus = {
    Degustação: [
      { name: 'Robalo grelhado', price: 78, badge: 'Best seller' },
      { name: 'Risoto de limão siciliano', price: 62, badge: 'Chef' },
    ],
    Vegano: [
      { name: 'Gnocchi de batata doce', price: 54, badge: 'Light' },
      { name: 'Tartar de beterraba', price: 48, badge: 'Entrada' },
    ],
    Brunch: [
      { name: 'Ovos beneditinos', price: 44, badge: 'Clássico' },
      { name: 'Granola com iogurte', price: 32, badge: 'Fresh' },
    ],
  };

  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">Restaurante premium</p>
        <h3 style="margin:0;">Menu e reservas lado a lado</h3>
        <p style="color: var(--muted); margin:0;">Escolha o menu, ajuste pessoas e confirme a reserva imediatamente.</p>
      </div>
      <div class="restaurant-cta">
        <label>Data <input type="date" data-res-date></label>
        <label>Pessoas <input type="number" min="1" value="2" data-res-people></label>
        <button class="btn" type="button" data-res-confirm>Confirmar</button>
      </div>
    </div>
    <div class="restaurant-grid">
      <div class="menu-tabs" data-menu-tabs>
        ${Object.keys(menus)
          .map((tab) => `<button class="pill-btn" data-menu="${tab}">${tab}</button>`)
          .join('')}
      </div>
      <div class="menu-list" data-menu-list></div>
      <div class="reservation-card" data-resume>
        <p class="kicker" style="margin:0;">Reserva</p>
        <h4 data-resume-title>Degustação • 2 pessoas</h4>
        <p style="margin:0; color: var(--muted);">Horário premium com confirmação instantânea.</p>
        <div class="resume-prices" data-resume-items></div>
        <div class="resume-total">
          <span>Total estimado</span>
          <strong data-resume-total></strong>
        </div>
        <div class="resume-status" data-res-status>Selecione um menu e confirme.</div>
      </div>
    </div>
  `;

  const state = { tab: 'Degustação' };
  const refs = {
    tabs: host.querySelectorAll('[data-menu]'),
    list: host.querySelector('[data-menu-list]'),
    resumeTitle: host.querySelector('[data-resume-title]'),
    resumeItems: host.querySelector('[data-resume-items]'),
    resumeTotal: host.querySelector('[data-resume-total]'),
    status: host.querySelector('[data-res-status]'),
    date: host.querySelector('[data-res-date]'),
    people: host.querySelector('[data-res-people]'),
    confirm: host.querySelector('[data-res-confirm]'),
  };

  const renderList = () => {
    refs.list.innerHTML = menus[state.tab]
      .map(
        (item) => `
          <div class="menu-item">
            <div>
              <strong>${item.name}</strong>
              <p style="margin:0; color: var(--muted);">Inclui harmonização</p>
            </div>
            <div class="menu-meta">
              <span class="badge">${item.badge}</span>
              <strong>R$ ${item.price}</strong>
            </div>
          </div>
        `
      )
      .join('');
  };

  const renderResume = () => {
    const items = menus[state.tab];
    const total = items.reduce((sum, item) => sum + item.price, 0) * Number(refs.people.value || 1);
    refs.resumeTitle.textContent = `${state.tab} • ${refs.people.value || 1} pessoa(s)`;
    refs.resumeItems.innerHTML = items
      .map((item) => `<div class="resume-row"><span>${item.name}</span><span>R$ ${item.price}</span></div>`)
      .join('');
    refs.resumeTotal.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  refs.tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.tab = tab.dataset.menu;
      refs.tabs.forEach((t) => t.classList.remove('pill-btn-active'));
      tab.classList.add('pill-btn-active');
      renderList();
      renderResume();
    });
  });

  refs.people.addEventListener('input', renderResume);
  refs.confirm.addEventListener('click', () => {
    const date = refs.date.value ? new Date(refs.date.value).toLocaleDateString('pt-BR') : 'hoje';
    refs.status.textContent = `Mesa confirmada para ${refs.people.value || 1} • ${state.tab} em ${date}`;
  });

  refs.tabs[0].classList.add('pill-btn-active');
  renderList();
  renderResume();
}

function renderWorkoutDemo(host) {
  const exercises = [
    { name: 'Flexões', sets: 4, reps: 12, group: 'Peito' },
    { name: 'Agachamento', sets: 4, reps: 10, group: 'Pernas' },
    { name: 'Prancha', sets: 3, reps: 45, group: 'Core' },
  ];
  const state = { done: new Set(), streak: 8 };

  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">Workout planner</p>
        <h3 style="margin:0;">Sessão guiada com progresso</h3>
        <p style="color: var(--muted); margin:0;">Marque séries concluídas, acompanhe streak e exporte mini-resumo.</p>
      </div>
      <div class="workout-badges">
        <span class="demo-chip">Streak <strong data-wk-streak>8</strong> dias</span>
        <span class="demo-chip" data-wk-progress>0% concluído</span>
      </div>
    </div>
    <div class="workout-grid">
      <div class="workout-list" data-wk-list></div>
      <div class="workout-panel">
        <h4>Bloco rápido</h4>
        <p style="color: var(--muted);">Use o temporizador de 45s entre séries.</p>
        <div class="timer" data-wk-timer>00:45</div>
        <div class="timer-actions">
          <button class="btn" type="button" data-wk-start>Iniciar</button>
          <button class="btn secondary" type="button" data-wk-reset>Reset</button>
        </div>
        <div class="export" data-wk-export>Exportar resumo</div>
      </div>
    </div>
  `;

  const refs = {
    list: host.querySelector('[data-wk-list]'),
    streak: host.querySelector('[data-wk-streak]'),
    progress: host.querySelector('[data-wk-progress]'),
    timer: host.querySelector('[data-wk-timer]'),
    start: host.querySelector('[data-wk-start]'),
    reset: host.querySelector('[data-wk-reset]'),
    export: host.querySelector('[data-wk-export]'),
  };

  const updateProgress = () => {
    const pct = Math.round((state.done.size / exercises.length) * 100);
    refs.progress.textContent = `${pct}% concluído`;
  };

  const renderList = () => {
    refs.list.innerHTML = exercises
      .map(
        (ex, idx) => `
        <label class="workout-item">
          <input type="checkbox" data-wk-check="${idx}" ${state.done.has(idx) ? 'checked' : ''}>
          <div>
            <strong>${ex.name}</strong>
            <p style="margin:0; color: var(--muted);">${ex.sets}x${ex.reps} • ${ex.group}</p>
          </div>
        </label>
      `
      )
      .join('');

    refs.list.querySelectorAll('[data-wk-check]').forEach((input) => {
      input.addEventListener('change', () => {
        const id = Number(input.dataset.wkCheck);
        if (input.checked) state.done.add(id);
        else state.done.delete(id);
        updateProgress();
      });
    });
  };

  let timerId;
  const startTimer = () => {
    let seconds = 45;
    clearInterval(timerId);
    refs.timer.textContent = '00:45';
    timerId = setInterval(() => {
      seconds -= 1;
      if (seconds <= 0) {
        clearInterval(timerId);
        refs.timer.textContent = 'Pronto!';
        state.streak += 1;
        refs.streak.textContent = state.streak;
        return;
      }
      const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
      const ss = String(seconds % 60).padStart(2, '0');
      refs.timer.textContent = `${mm}:${ss}`;
    }, 1000);
  };

  refs.start.addEventListener('click', startTimer);
  refs.reset.addEventListener('click', () => {
    clearInterval(timerId);
    refs.timer.textContent = '00:45';
    state.streak = 8;
    refs.streak.textContent = state.streak;
    state.done.clear();
    renderList();
    updateProgress();
  });

  refs.export.addEventListener('click', () => {
    const checked = exercises.filter((_, idx) => state.done.has(idx)).map((ex) => ex.name);
    refs.export.textContent = checked.length ? `Exportado: ${checked.join(', ')}` : 'Nada para exportar';
  });

  renderList();
  updateProgress();
}

function renderStoreDemo(host) {
  const products = [
    { name: 'Headphone Neo', price: 180, tag: 'Audio', category: 'Eletrônicos' },
    { name: 'Smartwatch Fit', price: 220, tag: 'Wearable', category: 'Eletrônicos' },
    { name: 'Mochila Tech', price: 140, tag: 'Lifestyle', category: 'Acessórios' },
    { name: 'Camiseta Minimal', price: 89, tag: 'Moda', category: 'Vestuário' },
  ];
  const state = { filter: 'Todos', cart: [] };

  host.innerHTML = `
    <div class="demo-header">
      <div>
        <p class="kicker" style="margin:0;">Loja estática</p>
        <h3 style="margin:0;">Catálogo interativo</h3>
        <p style="color: var(--muted); margin:0;">Filtre produtos, adicione ao carrinho e veja o ticket médio em tempo real.</p>
      </div>
      <div class="store-filters">
        ${['Todos', 'Eletrônicos', 'Acessórios', 'Vestuário']
          .map((cat) => `<button class="pill-btn" data-store-filter="${cat}">${cat}</button>`)
          .join('')}
      </div>
    </div>
    <div class="store-grid">
      <div class="product-list" data-store-list></div>
      <div class="cart-card">
        <div class="cart-head">
          <p class="kicker" style="margin:0;">Carrinho</p>
          <strong data-cart-count>0 itens</strong>
        </div>
        <div class="cart-body" data-cart-body></div>
        <div class="cart-foot">
          <span>Total</span>
          <strong data-cart-total>R$ 0,00</strong>
        </div>
      </div>
    </div>
  `;

  const refs = {
    buttons: host.querySelectorAll('[data-store-filter]'),
    list: host.querySelector('[data-store-list]'),
    cartBody: host.querySelector('[data-cart-body]'),
    cartTotal: host.querySelector('[data-cart-total]'),
    cartCount: host.querySelector('[data-cart-count]'),
  };

  const renderProducts = () => {
    refs.list.innerHTML = products
      .filter((p) => state.filter === 'Todos' || p.category === state.filter)
      .map(
        (p) => `
        <div class="product-card">
          <div>
            <div class="mini-badge">${p.tag}</div>
            <strong>${p.name}</strong>
            <p style="margin:0; color: var(--muted);">${p.category}</p>
          </div>
          <div class="product-meta">
            <strong>R$ ${p.price}</strong>
            <button class="btn secondary" data-add="${p.name}">Adicionar</button>
          </div>
        </div>
      `
      )
      .join('');

    refs.list.querySelectorAll('[data-add]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const product = products.find((p) => p.name === btn.dataset.add);
        if (product) state.cart.push(product);
        renderCart();
      });
    });
  };

  const renderCart = () => {
    if (!state.cart.length) {
      refs.cartBody.innerHTML = '<p class="demo-empty">Carrinho vazio</p>';
      refs.cartTotal.textContent = 'R$ 0,00';
      refs.cartCount.textContent = '0 itens';
      return;
    }
    refs.cartBody.innerHTML = state.cart
      .map((item) => `<div class="cart-row"><span>${item.name}</span><strong>R$ ${item.price}</strong></div>`)
      .join('');
    const total = state.cart.reduce((sum, item) => sum + item.price, 0);
    refs.cartTotal.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    refs.cartCount.textContent = `${state.cart.length} item(s)`;
  };

  refs.buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.storeFilter;
      refs.buttons.forEach((b) => b.classList.remove('pill-btn-active'));
      btn.classList.add('pill-btn-active');
      renderProducts();
    });
  });

  refs.buttons[0].classList.add('pill-btn-active');
  renderProducts();
  renderCart();
}

const customRenderers = {
  projeto01: renderFinanceDemo,
  projeto02: renderBrandDemo,
  projeto03: renderRestaurantDemo,
  projeto04: renderWorkoutDemo,
  projeto05: renderStoreDemo,
};

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
    const custom = customRenderers[projectKey];
    if (custom) {
      custom(demoHost);
    } else if (data) {
      renderDemo(demoHost, data);
    } else {
      demoHost.innerHTML = '<p class="demo-empty">Demonstração em breve.</p>';
    }
  }
})();
