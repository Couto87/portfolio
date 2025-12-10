const projects = [
  {
    id: 1,
    slug: 'atlas-de-cores',
    title: 'Atlas de Cores: kit de identidade para marcas',
    summary: 'Landing completa que vende um estúdio de cor modular com checkout rápido.',
    description:
      'Uma página one-page que apresenta o Atlas de Cores como produto: manifesto forte, cards de benefícios, demonstrações de paletas e seção de planos. Inclui fluxo de seleção de pacote, depoimentos e bloco de perguntas frequentes para conversão direta.',
    technologies: ['HTML5', 'CSS Grid', 'JavaScript'],
    highlights: [
      'Hero com manifesto e CTA para planos',
      'Cards de pacotes com comparação clara',
      'Demonstração interativa de paletas e exportação de arquivos',
    ],
    demo: 'Stack de seções com CTA fixo e visual de branding premium.',
    palette: ['#5bd1b5', '#7aa2f7', '#ffc38c', '#0f172a'],
    impact:
      'Posiciona o autor como especialista em branding digital, apresentando oferta pronta para venda e fluxo de contratação sem atrito.',
    usage:
      'Ideal para quem precisa de uma landing comercial de serviço criativo com checkout ou formulário externo já integrado.',
  },
  {
    id: 2,
    slug: 'micro-jogo-orbital',
    title: 'Micro Jogo Orbital: página de lançamento jogável',
    summary: 'Landing de lançamento com demo jogável, leaderboard e roadmap.',
    description:
      'Página de produto com narrativa sci-fi, trailer animado, área de comandos do jogo embutida e ranking estático para ilustrar comunidade. Inclui cronograma de temporadas e cards de features para provar profundidade.',
    technologies: ['Canvas', 'JavaScript', 'CSS Animations'],
    highlights: [
      'Demo jogável embutida na hero',
      'Leaderboard estático com layout de comunidade',
      'Roadmap visual para futuras temporadas',
    ],
    demo: 'Jogo em miniatura ancorado na página com CTA para baixar build web.',
    palette: ['#0ff0fc', '#ff7edb', '#190b2e', '#b4f8c8'],
    impact:
      'Mostra habilidade em juntar narrativa, marketing e gameplay em um só lugar, simulando páginas de lançamento usadas em campanhas reais.',
    usage:
      'Serve como modelo para lançamentos indie, campanhas de produto gamificado ou seções hero com demonstração interativa.',
  },
  {
    id: 3,
    slug: 'painel-de-insights',
    title: 'Painel de Insights de Produto',
    summary: 'Dashboard completo para squads monitorarem métricas de produto.',
    description:
      'Página apresenta visão executiva com KPIs, cards de health, seções de funil e retenção, e área de highlights com insights textuais. Tudo pensado para ser consumido em reuniões ou anexos de status.',
    technologies: ['HTML', 'CSS Grid', 'SVG'],
    highlights: [
      'Gráficos SVG estilizados para funil e retenção',
      'Cards de KPI com badges de tendência',
      'Layout responsivo pronto para telas grandes',
    ],
    demo: 'Dashboard escuro com microvisualizações e legenda clara.',
    palette: ['#1f2937', '#10b981', '#f9a8d4', '#60a5fa'],
    impact:
      'Entrega uma peça que poderia ser publicada como dashboard estático interno ou demo para executivos, provando domínio de design de dados.',
    usage:
      'Aplicável a relatórios trimestrais, apresentações de time de produto e sites institucionais que precisam mostrar números.',
  },
  {
    id: 4,
    slug: 'poster-tipografico',
    title: 'Coleção de Pôsteres Tipográficos para evento',
    summary: 'Microsite que vende uma coleção de pôsteres com layout editorial.',
    description:
      'Exibe uma grade de pôsteres responsiva, cada um com variação de grid, contraste e texto alternativo. Inclui seção sobre o festival, CTA para baixar o kit e uma área de créditos com parceiros.',
    technologies: ['CSS', 'Variable Fonts', 'JavaScript'],
    highlights: [
      'Grade editorial responsiva',
      'Controles de modo duotone/monocromático',
      'CTA para download de kit de pôsteres',
    ],
    demo: 'Vitrine editorial com destaque para dois pôsteres principais e mosaico secundário.',
    palette: ['#0f172a', '#e0e7ff', '#f8fafc', '#38bdf8'],
    impact:
      'Apresenta domínio de direção de arte e permite que alguém baixe um pacote completo de peças, como faria em uma campanha real.',
    usage:
      'Perfeito para landing de festivais, exposições ou bundles digitais de comunicação visual.',
  },
  {
    id: 5,
    slug: 'silhuetas-animais-svg',
    title: 'Coleção de Ícones Animais para ONGs',
    summary: 'Página catálogo com ícones SVG animados e casos de uso.',
    description:
      'Landing apresenta coleção de ícones de fauna com animação de traçado, blocos que mostram aplicações em cartões, posts e apps. Possui CTA para baixar a biblioteca e sessão de licensing.',
    technologies: ['SVG', 'CSS Animations', 'HTML'],
    highlights: [
      'Galeria responsiva com hover de traçado',
      'Mockups de aplicação em cartões e apps',
      'Seção de licenciamento e créditos',
    ],
    demo: 'Grade de ícones com animação ao scroll e cartões de aplicação.',
    palette: ['#ffe4e6', '#0f172a', '#22d3ee', '#f97316'],
    impact:
      'Mostra entrega real para comunicação ambiental, pronta para ser usada como biblioteca em sites institucionais.',
    usage:
      'Ótimo para ONGs, zoológicos, campanhas ambientais e apps educativos que precisem de ícones proprietários.',
  },
  {
    id: 6,
    slug: 'cartas-de-ia',
    title: 'Cartas de IA Visual: biblioteca de prompts',
    summary: 'Microsite com deck de cartas que organiza prompts e outputs.',
    description:
      'Apresenta um deck colecionável de prompts de IA com descrição de uso, parâmetros e visual de cartas holográficas. Inclui guia rápido de estilos, filtros por tipo de saída e CTA para baixar o pack.',
    technologies: ['HTML', 'CSS Flexbox', 'JavaScript'],
    highlights: [
      'Filtro por estilo (retrato, paisagem, produto)',
      'Chips de parâmetros prontos para copiar',
      'CTA de download com mockup do pack',
    ],
    demo: 'Deck em grade com animação neon e cards expansíveis.',
    palette: ['#d946ef', '#22c55e', '#0f172a', '#e2e8f0'],
    impact:
      'Entrega uma vitrine real de prompts que qualquer criador pode usar, mostrando fluência em IA aplicada.',
    usage:
      'Serve para landing de pack digital, onboarding de plataforma de IA ou demonstração de estilo para squads criativos.',
  },
  {
    id: 7,
    slug: 'micro-lab-de-filtros',
    title: 'Estúdio de Filtros para Fotografia',
    summary: 'Página de produto com catálogo de filtros, presets e mockups.',
    description:
      'Expõe uma biblioteca de filtros CSS e LUTs simuladas com comparativos antes/depois, cards de preset e bloco de download. Seção de FAQ e depoimentos reforçam confiança.',
    technologies: ['CSS Filters', 'JavaScript', 'HTML'],
    highlights: [
      'Comparador antes/depois com slide',
      'Catálogo de presets com nomes comerciais',
      'Mockups aplicados em fotos lifestyle',
    ],
    demo: 'Mosaico de fotos com filtros alternáveis via tabs.',
    palette: ['#020617', '#22d3ee', '#fbbf24', '#f472b6'],
    impact:
      'Transforma efeitos em um produto completo, mostrando copy, prova social e catálogo pronto para venda.',
    usage:
      'Ideal para fotógrafos vendendo presets, landing de apps de edição ou campanhas de filtros patrocinados.',
  },
  {
    id: 8,
    slug: 'timeline-sonora',
    title: 'Timeline Sonora de Eventos',
    summary: 'Linha do tempo interativa para festivais, com playlists e destaques.',
    description:
      'Página que lista edições do festival com cores e ritmos, cards de headliners, embed de playlists e CTA de ingresso. Inclui sessão de bastidores e selo de patrocinadores.',
    technologies: ['CSS Animations', 'JavaScript', 'SVG'],
    highlights: [
      'Timeline horizontal com pulso sonoro',
      'Embed de playlist e setlist',
      'Sessão de ingressos com tabela de preços',
    ],
    demo: 'Marcos com batidas animadas e cards de artistas com capa.',
    palette: ['#0ea5e9', '#a855f7', '#f59e0b', '#0f172a'],
    impact:
      'Entrega uma landing real de evento, combinando informação, cultura e conversão de ingressos.',
    usage:
      'Aplicável a festivais, tours de bandas, retrospectivas de eventos corporativos e hubs culturais.',
  },
  {
    id: 9,
    slug: 'mapa-de-particulas',
    title: 'Mapa de Fluxo de Usuários',
    summary: 'Visualização estática que ilustra movimentação em um campus ou app.',
    description:
      'Simula partículas seguindo hotspots como se fossem pessoas ou interações, com legenda de áreas e CTA para baixar relatório. Inclui cards que explicam cada zona e insights.',
    technologies: ['Canvas', 'JavaScript', 'Perlin noise'],
    highlights: [
      'Hotspots configuráveis',
      'Legenda de zonas e intensidade',
      'Export rápido de imagem',
    ],
    demo: 'Fluxo animado em mapa escuro com pontos de interesse marcados.',
    palette: ['#0b132b', '#f72585', '#4cc9f0', '#b8c1ec'],
    impact:
      'Conecta visualização generativa a uma narrativa de analytics real, mostrando utilidade para UX research e facilities.',
    usage:
      'Serve para relatórios de circulação, monitoramento de apps e fundos hero de dashboards comportamentais.',
  },
  {
    id: 10,
    slug: 'editor-de-fractais',
    title: 'Explorador de Arte Procedural',
    summary: 'Galeria editorial que vende prints de fractais e oferece presets.',
    description:
      'Apresenta coleção de artes fractais com loja de presets, variações de paleta, área sobre o artista e tutorial de uso. Inclui seção de enquadramentos e preços simulados.',
    technologies: ['Canvas', 'JavaScript', 'Math'],
    highlights: [
      'Galeria com zoom progressivo ao hover',
      'Seleção de molduras e tamanhos',
      'Pacote de presets para download',
    ],
    demo: 'Grid de artes com zoom e troca de paleta em tempo real.',
    palette: ['#030712', '#a3e635', '#38bdf8', '#ef4444'],
    impact:
      'Mostra como transformar código criativo em produto vendável, alinhando estética e UX de e-commerce.',
    usage:
      'Ótimo para lojas de pôster, packs digitais ou vitrines de artistas generativos.',
  },
  {
    id: 11,
    slug: 'laboratorio-de-grid',
    title: 'Guia de Layout para Design Systems',
    summary: 'Documentação visual de grids e spacing pronta para times de produto.',
    description:
      'Página com exemplos de colunas, baseline, tokens de espaçamento e boas práticas. Inclui códigos de uso, comparativo antes/depois e CTA para baixar kit Figma.',
    technologies: ['CSS Grid', 'JavaScript', 'HTML'],
    highlights: [
      'Overlays de grid com controles',
      'Tabela de tokens de spacing',
      'Casos antes/depois aplicados a cards reais',
    ],
    demo: 'Quadros demonstrando diferentes sistemas de grid com toggle.',
    palette: ['#0ea5e9', '#22c55e', '#f97316', '#0f172a'],
    impact:
      'Entrega documentação pronta que pode ser publicada em portais de design system, mostrando senioridade em layout.',
    usage:
      'Serve para equipes que precisam educar sobre grids, aulas de UI ou handoff para devs.',
  },
  {
    id: 12,
    slug: 'gerador-de-nevoa',
    title: 'Backdrops Atmosféricos para Landing Pages',
    summary: 'Coleção de fundos animados com névoa, prontos para uso em heros.',
    description:
      'Página oferece fundos em múltiplas cores, demonstra aplicação sobre texto e CTA para baixar pacotes. Inclui seção de performance e instruções de embed em sites estáticos.',
    technologies: ['Canvas', 'JavaScript', 'CSS'],
    highlights: [
      'Previews com texto e botões sobrepostos',
      'Controle de densidade e velocidade',
      'Pacotes prontos em MP4 e webm simulados',
    ],
    demo: 'Hero com fundo atmosférico animado e CTA evidente.',
    palette: ['#94a3b8', '#e2e8f0', '#0f172a', '#38bdf8'],
    impact:
      'Transforma um efeito em produto pronto para designers e squads de marketing, reforçando entrega completa.',
    usage:
      'Útil para heros de SaaS, landing de games e apresentações premium.',
  },
  {
    id: 13,
    slug: 'diagramador-de-sprints',
    title: 'Quadro de Sprints para consultoria',
    summary: 'Página que explica o método de sprints e mostra cronograma pronto.',
    description:
      'Inclui visão geral do método, agenda de cinco dias, entregáveis por fase, cards de clientes e CTA para agendar workshop. Traz exemplos reais de artefatos.',
    technologies: ['HTML', 'CSS Grid', 'JavaScript'],
    highlights: [
      'Cronograma visualizado em swimlanes',
      'Blocos de entregáveis com imagens dummy',
      'Seção de depoimentos e FAQ',
    ],
    demo: 'Quadro de sprint colorido com badges de status e lista de entregas.',
    palette: ['#0f172a', '#67e8f9', '#a5b4fc', '#fef9c3'],
    impact:
      'Mostra capacidade de vender um serviço de facilitação com narrativa completa e estrutura comercial.',
    usage:
      'Ideal para consultorias de produto, estúdios de UX e páginas de serviço B2B.',
  },
  {
    id: 14,
    slug: 'cinematica-de-cards',
    title: 'Vitrine de Produtos com Física Suave',
    summary: 'Grid de produtos premium com parallax e microinterações.',
    description:
      'Landing de e-commerce boutique: hero com destaque, cards que reagem ao mouse, tabela de benefícios, selos de garantia e seção de kit completo. Inclui botão de compra e prova social.',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    highlights: [
      'Parallax multi-camadas aplicado a cards de produto',
      'Bloco de benefícios e garantia',
      'Depoimentos curtos com avatars',
    ],
    demo: 'Cartões inclinando conforme o cursor e CTA fixo de compra.',
    palette: ['#1e293b', '#22d3ee', '#a855f7', '#f8fafc'],
    impact:
      'Entrega estética premium típica de DTC, conectando motion a conversão e confiança.',
    usage:
      'Serve como template de coleções cápsula, lançamentos limitados ou vitrines de assinatura.',
  },
  {
    id: 15,
    slug: 'teia-generativa',
    title: 'Mapa de Comunidade e Networking',
    summary: 'Visualização que mostra conexões entre membros e oportunidades.',
    description:
      'Página apresenta rede interativa com nós por perfil, cards de destaque de membros, CTA para entrar na comunidade e calendário de próximos encontros. Inclui legendas por categoria.',
    technologies: ['Canvas', 'JavaScript', 'HTML'],
    highlights: [
      'Rede generativa com filtros por interesse',
      'Cards laterais de membros em destaque',
      'Calendário visual de eventos',
    ],
    demo: 'Rede animada com pontos pulsando e conexões por proximidade.',
    palette: ['#0b1220', '#38bdf8', '#f472b6', '#22d3ee'],
    impact:
      'Transforma grafos em história de comunidade, útil para hubs, associações e plataformas de networking.',
    usage:
      'Aplicável a plataformas de membros, seções “nossa rede” e relatórios de impacto.',
  },
  {
    id: 16,
    slug: 'estudio-de-botoes',
    title: 'Biblioteca de Botões para Design System',
    summary: 'Documentação com estados, guidelines e tokens de botões.',
    description:
      'Página reúne variações de botões (primário, fantasma, ícone), tokens de espaçamento, estados hover/focus, guidelines de acesso e exemplos em cards. Inclui link para repositório e kit Figma.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Tabela de tokens e estados',
      'Mostruário com contraste validado',
      'Blocos de código para implementação',
    ],
    demo: 'Botões alinhados com estados animados por CSS e toggles.',
    palette: ['#0f172a', '#a5b4fc', '#22c55e', '#fb7185'],
    impact:
      'Posiciona como criador de design systems entregáveis, pronto para integrar em repositórios reais.',
    usage:
      'Perfeito para times de produto documentarem padrões e para apresentações de UI kits.',
  },
  {
    id: 17,
    slug: 'scanner-de-posterizacao',
    title: 'Filtro Editorial para Loja de Prints',
    summary: 'Página que aplica filtro posterizado a fotos de clientes.',
    description:
      'Landing convida usuário a enviar foto (simulada), mostra exemplos de transformação, tabela de planos e seção de envios recentes. Inclui instruções de impressão e mockups de quadros.',
    technologies: ['Canvas', 'JavaScript', 'CSS'],
    highlights: [
      'Comparação antes/depois',
      'Mockups em pôster e camiseta',
      'Pacotes de preço com benefícios',
    ],
    demo: 'Imagem estilizada com textura impressa e slider de comparação.',
    palette: ['#1f2937', '#fbbf24', '#ef4444', '#e2e8f0'],
    impact:
      'Mostra um serviço real de personalização visual, reforçando capacidade de vender assets digitais.',
    usage:
      'Aplicável a estúdios de impressão, lojas de poster e campanhas de customização.',
  },
  {
    id: 18,
    slug: 'jardim-low-poly',
    title: 'Vitrine de Terrenos Virtuais Low-Poly',
    summary: 'Microsite que exibe ilhas low-poly como produtos colecionáveis.',
    description:
      'Inclui hero com cena 3D estilizada, catálogo de lotes, ficha técnica de cada ilha, mapa de raridade e CTA para reservar. Há seção de storytelling sobre universo fictício.',
    technologies: ['Canvas', 'JavaScript', 'CSS'],
    highlights: [
      'Galeria de lotes com raridade',
      'Ficha técnica com atributos',
      'Storytelling e FAQ de compra',
    ],
    demo: 'Pequena ilha geométrica vista de cima com luz dinâmica.',
    palette: ['#10b981', '#34d399', '#d9f99d', '#0f172a'],
    impact:
      'Transforma arte low-poly em catálogo com copy e confiança, pronto para colecionáveis digitais.',
    usage:
      'Serve para drops de NFTs, bundles de assets 3D ou vitrines de jogos isométricos.',
  },
  {
    id: 19,
    slug: 'painel-de-energia',
    title: 'Painel ESG para Energia Sustentável',
    summary: 'Dashboard institucional com métricas de geração e impacto.',
    description:
      'Apresenta indicadores de solar e eólica, gráfico de emissões evitadas, cards de plantas ativas, certificações e CTA para baixar relatório. Inclui mapa simplificado das usinas.',
    technologies: ['SVG', 'CSS Grid', 'JavaScript'],
    highlights: [
      'Indicadores de produção e economia de CO₂',
      'Mapa simplificado de plantas',
      'Bloco de certificações e selos',
    ],
    demo: 'Cartões com barras e ícones de energia em layout executivo.',
    palette: ['#0f172a', '#22c55e', '#fbbf24', '#c084fc'],
    impact:
      'Entrega peça corporativa pronta para relatórios ESG, mostrando clareza de dados e narrativa de impacto.',
    usage:
      'Perfeito para sites de energia limpa, relatórios anuais e hubs de sustentabilidade.',
  },
  {
    id: 20,
    slug: 'scanner-de-texturas',
    title: 'Biblioteca de Texturas Seamless',
    summary: 'Catálogo com pré-visualização, download e instruções de uso.',
    description:
      'Página apresenta packs de texturas tileable, comparativo de aplicação em mockups, tabela de licenças e CTA para baixar. Inclui tutorial de como usar em Figma e Web.',
    technologies: ['Canvas', 'JavaScript', 'HTML'],
    highlights: [
      'Teste de repetição ao vivo',
      'Mockups em cartões e backgrounds',
      'Tabela de licenças e formatos',
    ],
    demo: 'Padrões em grid com variações de cor e preview em loop.',
    palette: ['#0f172a', '#38bdf8', '#f8fafc', '#f59e0b'],
    impact:
      'Posiciona como fornecedor de assets prontos, com atenção a licenças e documentação.',
    usage:
      'Útil para estúdios de marca, motion designers e equipes de produto que precisam de texturas leves.',
  },
  {
    id: 21,
    slug: 'mosaico-de-vidro',
    title: 'Dashboard Glassmorphism para SaaS',
    summary: 'Vitrine de UI com painéis de vidro, pricing e prova social.',
    description:
      'Página estilo SaaS com hero em glassmorphism, cards de métricas, tabela de preços, depoimentos e sessão de integrações. CTA fixo acompanha o scroll.',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    highlights: [
      'Glassmorphism aplicado a KPIs e pricing',
      'Comparação de planos com CTA',
      'Bloco de integrações e logos',
    ],
    demo: 'Painéis translúcidos com feixe de luz animado e cards legíveis.',
    palette: ['#0ea5e9', '#f8fafc', '#a5b4fc', '#0f172a'],
    impact:
      'Mostra uma landing SaaS contemporânea, equilibrando estética e clareza de produto.',
    usage:
      'Serve para lançamentos de SaaS, rebrands de painéis e páginas de pricing.',
  },
  {
    id: 22,
    slug: 'carrossel-3d',
    title: 'Galeria 3D para Portfólios Premium',
    summary: 'Carrossel em perspectiva para cases, fotos ou depoimentos.',
    description:
      'Página destaca um carrossel 3D com cards clicáveis, seção de case em foco, biografia do autor e CTA para agendar reunião. Inclui navegação por setas e autoplay suave.',
    technologies: ['CSS 3D', 'JavaScript', 'HTML'],
    highlights: [
      'Carrossel circular com perspective real',
      'Sessão de case detalhado abaixo do carrossel',
      'CTA de contato ou booking externo',
    ],
    demo: 'Cartões flutuando em círculo com rotação automática e foco em destaque.',
    palette: ['#0f172a', '#22d3ee', '#f472b6', '#94a3b8'],
    impact:
      'Entrega experiência premium de portfólio, perfeita para quem quer exibir poucos cases com impacto.',
    usage:
      'Aplicável a fotógrafos, consultores, arquitetos e agências boutique.',
  },
  {
    id: 23,
    slug: 'painel-de-metaverso',
    title: 'HUD Futurista para Plataformas Imersivas',
    summary: 'Painel conceitual com métricas, mundos e estados de sessão.',
    description:
      'Exibe cards neon de mundos ativos, barra de energia, indicadores de sessão e feed de missões. Há CTA para baixar whitepaper e bloco de parceiros.',
    technologies: ['CSS Grid', 'SVG', 'JavaScript'],
    highlights: [
      'Glows calibrados para legibilidade',
      'Indicadores de sessão e status online',
      'Feed de missões com chips de dificuldade',
    ],
    demo: 'HUD com barras de energia, cartões de mundo virtual e mini mapa.',
    palette: ['#0b1220', '#7aa2f7', '#7c3aed', '#f472b6'],
    impact:
      'Mostra expertise em UI futurista que poderia ser usada em plataformas de VR/AR ou dashboards gamer.',
    usage:
      'Útil para pitches de metaverso, telas de onboarding imersivo e dashboards temáticos.',
  },
  {
    id: 24,
    slug: 'laboratorio-de-ruido',
    title: 'Coleção de Backgrounds Cinemáticos',
    summary: 'Landing que oferece loops de ruído e gradientes para vídeos e sites.',
    description:
      'Apresenta biblioteca de backgrounds animados em diferentes tons, com preview, especificações técnicas, tabela de licenças e CTA de download. Inclui seção de performance e compressão.',
    technologies: ['Canvas', 'JavaScript', 'Noise'],
    highlights: [
      'Loops perfeitos com variação de cor',
      'Download simulado em múltiplos formatos',
      'Guia de uso em editores e web',
    ],
    demo: 'Mar de ruído animado com camadas que mudam suavemente.',
    palette: ['#0f172a', '#38bdf8', '#22d3ee', '#f472b6'],
    impact:
      'Transforma estudo de ruído em kit cinematográfico pronto para motion e web, reforçando valor prático.',
    usage:
      'Serve para hero videos, interlúdios de apresentação e fundos premium.',
  },
  {
    id: 25,
    slug: 'editor-de-tipografia',
    title: 'Playground de Tipografia Editorial',
    summary: 'Página que ensina e vende estilos tipográficos com controles ao vivo.',
    description:
      'Inclui bloco de demonstração com sliders de peso e largura, exemplos de uso em cards e artigos, guia de alinhamento e CTA para baixar o kit de estilos. Seção de acessibilidade valida contraste.',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    highlights: [
      'Variable fonts com controles ao vivo',
      'Blocos de aplicação editorial e interface',
      'Checagem de contraste simulada',
    ],
    demo: 'Texto dinâmico reagindo aos controles e cards de exemplo.',
    palette: ['#0f172a', '#f8fafc', '#38bdf8', '#a5b4fc'],
    impact:
      'Mostra maturidade em tipografia aplicada, pronto para ser publicado como guideline de marca.',
    usage:
      'Aplicável a guias de estilo, aulas de tipografia e bibliotecas de UI.',
  },
  {
    id: 26,
    slug: 'estacao-climatica',
    title: 'Central Climática para Resorts',
    summary: 'Painel que mostra clima atual, atrações e disponibilidade.',
    description:
      'Apresenta clima em tempo real simulado, cards de atrações recomendadas conforme o clima, mapa do resort e CTA para reservar atividades. Inclui modo dia/noite e alertas.',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    highlights: [
      'Ícones animados e gradientes contextuais',
      'Sugestões de atividades por clima',
      'Mapa simplificado e cards de horário',
    ],
    demo: 'Cartões de clima mudando cor e iconografia com recomendações.',
    palette: ['#0ea5e9', '#f8fafc', '#f59e0b', '#0f172a'],
    impact:
      'Conecta dados climáticos a operação de resort, mostrando atenção a UX contextual.',
    usage:
      'Serve para hotéis, parques temáticos e apps de turismo que precisam de dashboards leves.',
  },
  {
    id: 27,
    slug: 'galeria-de-posters',
    title: 'Galeria Curada para Campanha Cultural',
    summary: 'Microsite com pôsteres temáticos, curadoria e CTA de ingresso.',
    description:
      'Organiza pôsteres em coleções, traz texto curatorial, destaques de artistas, programação e botão para comprar ingressos. Inclui filtro por data e bloco de parceiros.',
    technologies: ['Canvas', 'JavaScript', 'CSS'],
    highlights: [
      'Filtros por coleção e tema',
      'Texto curatorial e ficha de artista',
      'CTA de ingressos e programação',
    ],
    demo: 'Pôsteres surgindo em grade responsiva com tags.',
    palette: ['#0f172a', '#f472b6', '#38bdf8', '#fbbf24'],
    impact:
      'Posiciona como landing completa de festival, com curadoria e conversão.',
    usage:
      'Aplicável a exposições, mostras de cinema e campanhas culturais.',
  },
  {
    id: 28,
    slug: 'paisagem-minimalista',
    title: 'Coleção de Paisagens para Wallpapers',
    summary: 'Página que oferece wallpapers minimalistas em vários formatos.',
    description:
      'Mostra galeria de paisagens com download em tamanhos desktop/mobile, seção sobre o processo criativo, mockups em dispositivos e feedback de usuários.',
    technologies: ['Canvas', 'JavaScript', 'HTML'],
    highlights: [
      'Download por resolução',
      'Mockup em devices',
      'Slider de variação de cores',
    ],
    demo: 'Cenários mudando lentamente com cores pastel e opção de salvar.',
    palette: ['#0f172a', '#22d3ee', '#fbbf24', '#e0f2fe'],
    impact:
      'Transforma ilustrações em produto distribuível, mostrando cuidado com formatos e experiência.',
    usage:
      'Ótimo para packs de wallpaper, fundos de apresentações e bundles de produtividade.',
  },
  {
    id: 29,
    slug: 'sintetizador-de-gradientes',
    title: 'Mixer de Gradientes para Branding',
    summary: 'Ferramenta que cria fundos, exporta códigos e sugere aplicações.',
    description:
      'Inclui controles de ângulo e saturação, presets curados, área de pré-visualização em cards de app e CTA para copiar CSS ou baixar PNG. Traz exemplos de aplicação em hero e botões.',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    highlights: [
      'Exportação de CSS e imagem',
      'Presets curados para marcas',
      'Mockups aplicados em cards e heros',
    ],
    demo: 'Gradientes oscilando e mudando tonalidade com export em um clique.',
    palette: ['#7c3aed', '#22d3ee', '#f8fafc', '#f97316'],
    impact:
      'Posiciona como ferramenta útil para designers e marketers, pronta para ser embutida em sites.',
    usage:
      'Aplicável a sistemas de identidade, kits de marketing e geradores de hero.',
  },
  {
    id: 30,
    slug: 'estudio-de-reticula',
    title: 'Retículas para Conteúdo Editorial',
    summary: 'Página que demonstra retículas aplicadas a capas, posts e revistas.',
    description:
      'Traz exemplos de retículas em fotos, comparativo com e sem efeito, pacotes de intensidade e CTA para baixar presets. Inclui instruções de uso em web e impressão.',
    technologies: ['Canvas', 'JavaScript', 'HTML'],
    highlights: [
      'Retícula variável por intensidade',
      'Mockups em capas e posts',
      'Guia rápido para web e print',
    ],
    demo: 'Imagem convertida em pontos com alto contraste, pronta para mockup.',
    palette: ['#0f172a', '#f8fafc', '#facc15', '#f472b6'],
    impact:
      'Evidencia domínio de efeitos editoriais e entrega pacotes de uso imediato.',
    usage:
      'Serve para revistas digitais, campanhas de moda e filtros de redes sociais.',
  },
];
