const projects = [
  {
    id: 1,
    slug: 'atlas-de-cores',
    title: 'Atlas de Cores Procedural',
    summary: 'Mapa infinito de paletas em HSL com gradientes dinâmicos.',
    description:
      'Gera paletas e transições em HSL para sugerir identidades visuais. O usuário pode iterar combinações e observar a harmonia de cores em movimento.',
    technologies: ['HTML5 Canvas', 'JavaScript', 'HSL'],
    highlights: ['Interpolação de matiz e saturação', 'Grades animadas com ruído suave', 'Exportação rápida de paletas'],
    demo: 'Animação suave de gradientes com pontos pivô aleatórios.',
    palette: ['#5bd1b5', '#7aa2f7', '#ffc38c', '#f25f5c'],
    impact:
      'Mostra domínio de teoria das cores aplicada a motion design, reforçando cuidado estético e capacidade de gerar identidades.',
    usage:
      'Serve para workshops de branding, moodboards dinâmicos e inspiração de paletas em projetos de produtos digitais.',
  },
  {
    id: 2,
    slug: 'micro-jogo-orbital',
    title: 'Micro Jogo Orbital',
    summary: 'Jogo casual onde satélites evitam colisões em órbita.',
    description:
      'Controla pequenos satélites que precisam manter órbitas estáveis e desviar de meteoros. A física é simplificada, mas gera trajetórias inesperadas.',
    technologies: ['Canvas', 'JavaScript', 'Motion'],
    highlights: ['Órbitas elípticas parametrizadas', 'Dificuldade progressiva', 'Visual retro com brilho neon'],
    demo: 'Trajetórias curvas e pulsantes em torno de um planeta central.',
    palette: ['#0ff0fc', '#ff7edb', '#190b2e', '#b4f8c8'],
    impact:
      'Evidencia habilidades em física 2D, loops de jogo e microinterações, tudo leve e pronto para web.',
    usage:
      'Mostra potencial para protótipos gamificados, onboarding lúdico e experiências educacionais rápidas.',
  },
  {
    id: 3,
    slug: 'painel-de-insights',
    title: 'Painel de Insights',
    summary: 'Dashboard estático com microvisualizações responsivas.',
    description:
      'Coleção de gráficos SVG prontos para dados fictícios: linhas, barras e indicadores de KPI. O layout é responsivo e pensado para portfólio.',
    technologies: ['HTML', 'CSS Grid', 'SVG'],
    highlights: ['Gráficos em SVG puros', 'Cartões responsivos', 'Tema escuro legível'],
    demo: 'Mini dashboard com barras animadas por CSS.',
    palette: ['#1f2937', '#10b981', '#f9a8d4', '#60a5fa'],
    impact:
      'Demonstra clareza visual e boas práticas de UI de dados, pronto para produtos que precisam comunicar KPIs.',
    usage:
      'Ideal para portfólios de produto, pitch decks e apresentações de resultados sem depender de frameworks pesados.',
  },
  {
    id: 4,
    slug: 'poster-tipografico',
    title: 'Pôster Tipográfico',
    summary: 'Gerador de pôsteres com variações de grid e contraste.',
    description:
      'Brinca com pesos tipográficos, alinhamentos e cortes geométricos. Cada atualização sorteia um novo layout de poster digital.',
    technologies: ['CSS', 'Variable Fonts', 'JS'],
    highlights: ['Grades diagonais', 'Mistura de serif e sans', 'Modo monocromático e duotone'],
    demo: 'Tipografia fluida ocupando a tela com cortes diagonais.',
    palette: ['#0f172a', '#e0e7ff', '#f8fafc', '#38bdf8'],
    impact:
      'Reforça sensibilidade editorial e domínio de grids, perfeito para mostrar direção de arte digital.',
    usage:
      'Serve para explorações de identidade, key visuals de campanhas e variações rápidas para social media.',
  },
  {
    id: 5,
    slug: 'silhuetas-animais-svg',
    title: 'Silhuetas Animais SVG',
    summary: 'Coleção de silhuetas vetoriais com animação de traçado.',
    description:
      'SVGs de animais minimalistas com efeitos de contorno e preenchimento. Cada figura revela um padrão diferente ao passar o mouse.',
    technologies: ['SVG', 'CSS Animations'],
    highlights: ['Traçado desenhado em tempo real', 'Padrões orgânicos', 'Destaque em contraste alto'],
    demo: 'Desenho de linha que se completa com gradiente interno.',
    palette: ['#ffe4e6', '#0f172a', '#22d3ee', '#f97316'],
    impact:
      'Mostra domínio de vetores puros e motion delicado, entregando um visual editorial e acessível.',
    usage:
      'Funciona como kit de ícones animados para landing pages, educational content e campanhas ambientais.',
  },
  {
    id: 6,
    slug: 'cartas-de-ia',
    title: 'Cartas de IA Visual',
    summary: 'Deck de cartas conceituais que simulam saídas de IA.',
    description:
      'Cada carta descreve uma ideia de imagem gerada, com chips de parâmetros e estilos artísticos. Serve como showroom de prompts.',
    technologies: ['HTML', 'CSS Flexbox'],
    highlights: ['Cartões tipo tarot', 'Parâmetros visuais em chips', 'Bordas holográficas'],
    demo: 'Cartas que brilham com gradientes iridescentes.',
    palette: ['#d946ef', '#22c55e', '#0f172a', '#e2e8f0'],
    impact:
      'Comunica fluência com IA generativa e storytelling visual, mantendo um layout elegante.',
    usage:
      'Perfeito para apresentações de prompts, pacotes de moodboard e experiências de onboarding em produtos de IA.',
  },
  {
    id: 7,
    slug: 'micro-lab-de-filtros',
    title: 'Micro Lab de Filtros',
    summary: 'Laboratório de filtros CSS aplicados em mosaicos de imagens.',
    description:
      'Exibe miniaturas com filtros diferentes: blur, hue-rotate, duotone e glitch. Cada clique alterna variações ao vivo.',
    technologies: ['CSS Filters', 'JavaScript'],
    highlights: ['Duotone customizado', 'Efeito glitch suave', 'Hover com blend-modes'],
    demo: 'Mosaico de imagens com filtros alternados via JS.',
    palette: ['#020617', '#22d3ee', '#fbbf24', '#f472b6'],
    impact:
      'Comprova domínio de efeitos nativos e performance sem dependências externas, ideal para equipes que prezam por leveza.',
    usage:
      'Aplicável em catálogos, landing pages com fotografia artística e estudos rápidos de estilo para branding.',
  },
  {
    id: 8,
    slug: 'timeline-sonora',
    title: 'Timeline Sonora',
    summary: 'Linha do tempo que associa cores a frequências musicais.',
    description:
      'Cada marco da timeline pulsa em cor e ritmo, simulando paisagens sonoras. Ideal para mostrar sensibilidade audiovisual.',
    technologies: ['CSS Animations', 'JavaScript'],
    highlights: ['Pulso sincronizado', 'Gradientes harmônicos', 'Layout horizontal responsivo'],
    demo: 'Marcos que expandem em batidas com cores complementares.',
    palette: ['#0ea5e9', '#a855f7', '#f59e0b', '#0f172a'],
    impact:
      'Explora sinestesia visual, reforçando sensibilidade para experiências musicais e narrativas interativas.',
    usage:
      'Ótimo para timelines de produtos, storytelling de eventos culturais e ativações de marca com áudio.',
  },
  {
    id: 9,
    slug: 'mapa-de-particulas',
    title: 'Mapa de Partículas',
    summary: 'Simulação de partículas atraídas por pontos de interesse.',
    description:
      'Partículas seguem âncoras invisíveis, criando trilhas luminosas. O resultado lembra mapas de calor animados.',
    technologies: ['Canvas', 'JavaScript', 'Perlin noise'],
    highlights: ['Forças vetoriais suaves', 'Rastro luminoso', 'Controles simples'],
    demo: 'Partículas que orbitam hotspots com brilho.',
    palette: ['#0b132b', '#f72585', '#4cc9f0', '#b8c1ec'],
    impact:
      'Mostra controle de partículas e estética sci-fi, útil para visualizar dados e fluxos de usuários.',
    usage:
      'Serve como base para mapas de calor, fundos hero com movimento e dashboards narrativos.',
  },
  {
    id: 10,
    slug: 'editor-de-fractais',
    title: 'Editor de Fractais',
    summary: 'Explorador de fractais com presets e zoom progressivo.',
    description:
      'Renderiza fractais estilizados (Mandelbrot, Julia) em baixa resolução com paletas customizadas. Permite alternar modos de cor.',
    technologies: ['Canvas', 'JavaScript', 'Math'],
    highlights: ['Interpolação de cores por iteração', 'Zoom incremental', 'Presets salvos em JSON'],
    demo: 'Fractal colorido em zoom contínuo.',
    palette: ['#030712', '#a3e635', '#38bdf8', '#ef4444'],
    impact:
      'Revela domínio matemático e visualização performática, valorizando curiosidade técnica.',
    usage:
      'Ideal para explorações criativas, aulas de matemática aplicada e fundos generativos em sites premium.',
  },
  {
    id: 11,
    slug: 'laboratorio-de-grid',
    title: 'Laboratório de Grid',
    summary: 'Playground visual para sistemas de grid e modulação.',
    description:
      'Mostra combinações de colunas, espaçamentos e ritmos visuais. Ideal para demonstrar domínio de layout responsivo.',
    technologies: ['CSS Grid', 'JavaScript'],
    highlights: ['Alternância entre grids', 'Overlay com baseline', 'Breakpoints evidenciados'],
    demo: 'Grades coloridas que se reorganizam ao clique.',
    palette: ['#0ea5e9', '#22c55e', '#f97316', '#0f172a'],
    impact:
      'Evidencia conhecimento profundo de layout system, pronto para design systems e sites escaláveis.',
    usage:
      'Aplicável em documentações de design system, treinamentos internos e protótipos de páginas responsivas.',
  },
  {
    id: 12,
    slug: 'gerador-de-nevoa',
    title: 'Gerador de Névoa',
    summary: 'Efeito de neblina procedural com variação de densidade.',
    description:
      'Cria camadas de névoa translúcida com ruído Perlin e movimentos lentos. Serve como fundo atmosférico.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Ruído em múltiplas oitavas', 'Blend-modes suaves', 'Controle de densidade'],
    demo: 'Neblina se movendo em camadas paralelas.',
    palette: ['#94a3b8', '#e2e8f0', '#0f172a', '#38bdf8'],
    impact:
      'Mostra sensibilidade cinematográfica e domínio de ruído procedural em peças leves.',
    usage:
      'Ideal para hero sections atmosféricas, banners de produto e suportes visuais em vídeos.',
  },
  {
    id: 13,
    slug: 'diagramador-de-sprints',
    title: 'Diagramador de Sprints',
    summary: 'Quadro estático para comunicar ciclos de design e dev.',
    description:
      'Apresenta etapas de discovery a entrega com colunas, status e highlights visuais. Útil para mostrar processos de produto.',
    technologies: ['HTML', 'CSS Grid'],
    highlights: ['Swimlanes claras', 'Badges de status', 'Variações de cor por fase'],
    demo: 'Quadro de sprint colorido e compacto.',
    palette: ['#0f172a', '#67e8f9', '#a5b4fc', '#fef9c3'],
    impact:
      'Comunica processos de forma visual, reforçando alinhamento entre design e engenharia.',
    usage:
      'Serve para portfólios de UX, apresentações de roadmap e onboarding de times ágeis.',
  },
  {
    id: 14,
    slug: 'cinematica-de-cards',
    title: 'Cinemática de Cards',
    summary: 'Cards que reagem com física simulada e parallax.',
    description:
      'Cards flutuantes com camadas deslocadas pelo mouse, dando sensação de profundidade. Mostra domínio de efeitos suaves.',
    technologies: ['CSS', 'JavaScript'],
    highlights: ['Parallax multi-camadas', 'Elasticidade controlada', 'Gradientes de profundidade'],
    demo: 'Cartões inclinando conforme o cursor.',
    palette: ['#1e293b', '#22d3ee', '#a855f7', '#f8fafc'],
    impact:
      'Entrega uma microinteração premium, com física convincente e acessível a diferentes devices.',
    usage:
      'Ótimo para hero cards, vitrines de produto e seções “como funciona” com movimento sutil.',
  },
  {
    id: 15,
    slug: 'teia-generativa',
    title: 'Teia Generativa',
    summary: 'Rede generativa que conecta pontos com linhas tensionadas.',
    description:
      'Pontua um espaço e cria conexões de acordo com proximidade, gerando uma teia orgânica. A cada ciclo surgem novas ligações.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Triangulação simples', 'Linhas pulsantes', 'Pontos vivos com ruído'],
    demo: 'Redes que se reconfiguram lentamente.',
    palette: ['#0b1220', '#38bdf8', '#f472b6', '#22d3ee'],
    impact:
      'Demonstra domínio de grafos e estética conectada, útil para apresentar redes e comunidades.',
    usage:
      'Perfeito para visualizações de conexões, relacionamentos de dados e fundos tecnológicos.',
  },
  {
    id: 16,
    slug: 'estudio-de-botoes',
    title: 'Estúdio de Botões',
    summary: 'Coleção de botões temáticos com microinterações.',
    description:
      'Mostra diferentes abordagens de botões: vidro, neomorfismo, contraste máximo, outline e brutalista. Ideal para UI.',
    technologies: ['HTML', 'CSS'],
    highlights: ['Estados hover e focus', 'Sombras suaves e fortes', 'Contraste AA/AAA testado'],
    demo: 'Botões alinhados com estados animados por CSS.',
    palette: ['#0f172a', '#a5b4fc', '#22c55e', '#fb7185'],
    impact:
      'Expõe cuidado com acessibilidade, contraste e microcopys, entregando UI usável e bonita.',
    usage:
      'Aplicável em bibliotecas de componentes, design systems e provas de conceito de UI kit.',
  },
  {
    id: 17,
    slug: 'scanner-de-posterizacao',
    title: 'Scanner de Posterização',
    summary: 'Filtro visual que reduz cores e simula impressão riscada.',
    description:
      'Imagem base recebe posterização controlada e linhas diagonais. Demonstra manipulação de canvas e composição.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Quantização de cor', 'Overlay de hatch', 'Controle de exposição'],
    demo: 'Imagem estilizada com textura impressa.',
    palette: ['#1f2937', '#fbbf24', '#ef4444', '#e2e8f0'],
    impact:
      'Mostra sensibilidade para efeitos editoriais e filtros customizados sem depender de libs.',
    usage:
      'Pode ser usado em capas digitais, material promocional e filtros rápidos para social.',
  },
  {
    id: 18,
    slug: 'jardim-low-poly',
    title: 'Jardim Low-Poly',
    summary: 'Cenário isométrico simplificado gerado por polígonos.',
    description:
      'Renderiza jardins estilizados com montes, lago e árvores low-poly. Tudo em canvas 2D com coloração em blocos.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Paletas analógicas', 'Isometria falsa', 'Sombras projetadas'],
    demo: 'Pequena ilha geométrica vista de cima.',
    palette: ['#10b981', '#34d399', '#d9f99d', '#0f172a'],
    impact:
      'Entrega visual 3D em 2D leve, demonstrando criatividade para narrativas ambientais.',
    usage:
      'Serve para mascotes de produto, backgrounds ilustrados e explorações de visualização isométrica.',
  },
  {
    id: 19,
    slug: 'painel-de-energia',
    title: 'Painel de Energia Sustentável',
    summary: 'Monitor fictício de geração solar e eólica.',
    description:
      'Dashboard que simula métricas de usinas renováveis com ícones e indicadores. Visual claro para sustentabilidade.',
    technologies: ['SVG', 'CSS Grid', 'JavaScript'],
    highlights: ['Indicadores de produção', 'Cores associadas a energia limpa', 'Layout denso e legível'],
    demo: 'Cartões com barras e ícones de energia.',
    palette: ['#0f172a', '#22c55e', '#fbbf24', '#c084fc'],
    impact:
      'Mostra aptidão para temas ESG e visualização clara de dados verdes.',
    usage:
      'Útil para pitches de energia limpa, relatórios estáticos e microsites institucionais.',
  },
  {
    id: 20,
    slug: 'scanner-de-texturas',
    title: 'Scanner de Texturas',
    summary: 'Faz amostras de texturas e gera padrões repetíveis.',
    description:
      'Analisa imagens base e cria tiles com repetições orgânicas. Usa canvas para mapear contraste e desenhar blocos.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Tileable patterns', 'Detecção simples de borda', 'Geração procedural'],
    demo: 'Padrões em grid com variações de cor.',
    palette: ['#0f172a', '#38bdf8', '#f8fafc', '#f59e0b'],
    impact:
      'Revela domínio de texturas generativas e prepara assets reutilizáveis.',
    usage:
      'Perfeito para criar fundos de interfaces, papéis de parede digitais e kits de branding.',
  },
  {
    id: 21,
    slug: 'mosaico-de-vidro',
    title: 'Mosaico de Vidro',
    summary: 'Grid que simula vidro translúcido com luz dinâmica.',
    description:
      'Blocos com blur e brilho simulam vidro fosco. Movimento de luz lateral cria efeito premium de UI glassmorphism.',
    technologies: ['CSS', 'JavaScript'],
    highlights: ['Vidro com blur controlado', 'Animação de luz', 'Cantos arredondados e cintilantes'],
    demo: 'Painéis de vidro que recebem feixe de luz animado.',
    palette: ['#0ea5e9', '#f8fafc', '#a5b4fc', '#0f172a'],
    impact:
      'Demonstra domínio de glassmorphism e microtransições, alinhado a tendências de UI.',
    usage:
      'Aplicável a dashboards premium, vitrines de produto e landing pages de SaaS.',
  },
  {
    id: 22,
    slug: 'carrossel-3d',
    title: 'Carrossel 3D Minimalista',
    summary: 'Carrossel com cartões girando em perspectiva.',
    description:
      'Utiliza transformações 3D em CSS para criar um carrossel circular. Controle simples de rotação e foco.',
    technologies: ['CSS 3D', 'JavaScript'],
    highlights: ['Transformações perspective', 'Estados de foco e blur', 'Controles de rotação'],
    demo: 'Cartões flutuando em círculo com rotação automática.',
    palette: ['#0f172a', '#22d3ee', '#f472b6', '#94a3b8'],
    impact:
      'Mostra habilidade em 3D CSS sem dependências, entregando wow-effect leve.',
    usage:
      'Serve para galerias de cases, depoimentos visuais e apresentações de features.',
  },
  {
    id: 23,
    slug: 'painel-de-metaverso',
    title: 'Painel de Metaverso',
    summary: 'UI conceitual para experiências imersivas.',
    description:
      'Combina cards neon, chips de status e gráficos minimalistas. Visual futurista para dashboards de metaverso.',
    technologies: ['CSS Grid', 'SVG', 'JavaScript'],
    highlights: ['Glows controlados', 'Tipografia futurista', 'Indicadores compactos'],
    demo: 'HUD com barras de energia e cartões de mundo virtual.',
    palette: ['#0b1220', '#7aa2f7', '#7c3aed', '#f472b6'],
    impact:
      'Prova domínio de UI futurista e legibilidade em ambientes escuros.',
    usage:
      'Ótimo para portfolios de AR/VR, dashboards temáticos e apresentações de produto digital.',
  },
  {
    id: 24,
    slug: 'laboratorio-de-ruido',
    title: 'Laboratório de Ruído',
    summary: 'Explora ruído Perlin e simplex em padrões animados.',
    description:
      'Renderiza campos de ruído com diferentes lacunaridades, criando texturas hipnóticas. Totalmente configurável.',
    technologies: ['Canvas', 'JavaScript', 'Noise'],
    highlights: ['Camadas de ruído', 'Gradientes suaves', 'Loops perfeitos'],
    demo: 'Mar de ruído animado que se transforma lentamente.',
    palette: ['#0f172a', '#38bdf8', '#22d3ee', '#f472b6'],
    impact:
      'Mostra domínio de matemática criativa e motion suave, com toque artístico.',
    usage:
      'Serve para backgrounds premium, overlays de vídeo e efeitos de scroll narrativo.',
  },
  {
    id: 25,
    slug: 'editor-de-tipografia',
    title: 'Editor de Tipografia',
    summary: 'Painel que ajusta peso, largura e tracking em tempo real.',
    description:
      'Permite explorar variações de fontes com sliders nativos. Ajuda a validar estilos antes de implementar.',
    technologies: ['CSS', 'JavaScript'],
    highlights: ['Variable fonts', 'Pré-visualização instantânea', 'Modo escuro e claro'],
    demo: 'Texto dinâmico reagindo aos controles.',
    palette: ['#0f172a', '#f8fafc', '#38bdf8', '#a5b4fc'],
    impact:
      'Evidencia cuidado tipográfico e preocupação com acessibilidade visual.',
    usage:
      'Útil para definições de brand voice, guias de estilo e playgrounds de UI.',
  },
  {
    id: 26,
    slug: 'estacao-climatica',
    title: 'Estação Climática Estática',
    summary: 'Painel que ilustra condições climáticas com ícones vivos.',
    description:
      'Mostra previsão sintética com ícones animados em CSS e gradientes que variam conforme o clima simulado.',
    technologies: ['CSS', 'JavaScript'],
    highlights: ['Ícones animados', 'Gradientes contextuais', 'Layout compacto'],
    demo: 'Cartões de clima mudando cor e iconografia.',
    palette: ['#0ea5e9', '#f8fafc', '#f59e0b', '#0f172a'],
    impact:
      'Combina ilustração, motion e dados sintéticos para comunicar clima de forma amigável.',
    usage:
      'Serve para widgets de sites, telas de onboarding e apresentações de design responsivo.',
  },
  {
    id: 27,
    slug: 'galeria-de-posters',
    title: 'Galeria de Pôsteres',
    summary: 'Coleção de pôsteres generativos com temas variados.',
    description:
      'Cada pôster combina blocos de cor, tipografia e formas abstratas. O layout muda a cada nova renderização.',
    technologies: ['Canvas', 'JavaScript', 'CSS'],
    highlights: ['Layouts randômicos', 'Paletas variadas', 'Texturas leves'],
    demo: 'Pôsteres surgindo em uma grade responsiva.',
    palette: ['#0f172a', '#f472b6', '#38bdf8', '#fbbf24'],
    impact:
      'Expressa direção de arte generativa com controle e coerência visual.',
    usage:
      'Perfeito para campanhas rápidas, capinhas digitais e experimentos editoriais.',
  },
  {
    id: 28,
    slug: 'paisagem-minimalista',
    title: 'Paisagem Minimalista',
    summary: 'Gera cenas minimalistas com céu, montanhas e sol.',
    description:
      'Utiliza formas básicas, gradientes e ruído para criar paisagens calmas. Permite pequenas variações de composição.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Horizontes suaves', 'Grão controlado', 'Cores análogas'],
    demo: 'Cenários mudando lentamente com cores pastel.',
    palette: ['#0f172a', '#22d3ee', '#fbbf24', '#e0f2fe'],
    impact:
      'Mostra capacidade de storytelling visual com simplicidade e elegância.',
    usage:
      'Serve para ilustrações hero, wallpapers e covers minimalistas.',
  },
  {
    id: 29,
    slug: 'sintetizador-de-gradientes',
    title: 'Sintetizador de Gradientes',
    summary: 'Mixer de gradientes com variação de ângulo e saturação.',
    description:
      'Permite combinar duas a três cores e variar ângulo, criando fundos modernos. Inclui modo animado.',
    technologies: ['CSS', 'JavaScript'],
    highlights: ['Ângulos dinâmicos', 'Interpolação suave', 'Animação opcional'],
    demo: 'Gradientes oscilando e mudando tonalidade.',
    palette: ['#7c3aed', '#22d3ee', '#f8fafc', '#f97316'],
    impact:
      'Demonstra controle de cor e sensibilidade para tendências visuais de UI.',
    usage:
      'Aplicável em backgrounds de landing pages, capas de apresentações e kits de branding digital.',
  },
  {
    id: 30,
    slug: 'estudio-de-reticula',
    title: 'Estúdio de Retícula',
    summary: 'Ferramenta que aplica retículas e pontos em imagens.',
    description:
      'Converte imagens em padrões de retícula inspirados em impressão. Ajusta densidade, tamanho e contraste.',
    technologies: ['Canvas', 'JavaScript'],
    highlights: ['Retícula variável', 'Controle de contraste', 'Preto e branco ou cor'],
    demo: 'Imagem convertida em pontos com alto contraste.',
    palette: ['#0f172a', '#f8fafc', '#facc15', '#f472b6'],
    impact:
      'Une estética editorial e processamento visual sem plugins.',
    usage:
      'Ótimo para capas, pôsteres digitais e filtros customizados em campanhas.',
  },
];

