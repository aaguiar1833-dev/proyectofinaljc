(function(){
  'use strict';

  /* ==========================================================
     UTILIDADES
     ========================================================== */
  function normalizar(texto){
    return String(texto)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .replace(/\s+/g,' ')
      .trim();
  }

  function escapar(texto){
    return String(texto).replace(/[&<>"']/g, function(c){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];
    });
  }

  /* ==========================================================
     BASE DE DATOS DE NOTICIAS
     ----------------------------------------------------------
     📷 MAPEO DE IMÁGENES (guardar en  image ia/ )
       noticia-1.jpg  → Tecnología · MIT 2026        → edificio de cristal
       noticia-2.jpg  → Tecnología · Baterías Sodio  → chip / hardware
       noticia-3.jpg  → Tecnología · Edición Genética→ interfaz táctil
       noticia-4.jpg  → Tecnología · IA en Software  → programador
       noticia-5.jpg  → Tecnología · Estaciones Esp. → 5G / redes
       noticia-6.jpg  → Cultura    · Día Patrimonio  → Teatro Solís
       noticia-7.jpg  → Cultura    · Libro Sanguinetti→ interior teatro
       noticia-8.jpg  → Cultura    · Bellas Artes    → público teatro
       noticia-9.jpg  → Cultura    · Movida Joven    → danza grupal
       noticia-10.jpg → Cultura    · Homenaje Rada   → candombe
     ========================================================== */
  var NOTICIAS = [
    {
      id:'n1', cat:'Tecnología', titulo:'MIT: Tecnologías 2026',
      corto:'La lista del MIT anticipa infraestructuras, energía y medicina de precisión.',
      resumen:'El MIT Technology Review presentó en el festival SXSW de Austin su selección de las diez tecnologías más disruptivas de 2026. La lista pone el foco en infraestructuras de gran escala, nuevas fuentes de energía, medicina de precisión y debates éticos. Entre los avances aparecen las baterías de sodio, los reactores nucleares modulares, la edición genética, los centros de datos para IA, las estaciones espaciales comerciales y la captura de carbono.',
      claves:['mit','technology review','sxsw','austin','tecnologias disruptivas','2026','lista','infraestructura','reactores modulares','diez tecnologias'],
      imagen:'image ia/noticia-1.jpg',
      cuerpo:'El MIT Technology Review presentó su esperada selección de las diez tecnologías más disruptivas de 2026. El anuncio se realizó el martes 10 de marzo durante el festival SXSW, en Austin, Estados Unidos, uno de los principales encuentros internacionales dedicados a la tecnología, la innovación, el cine, la música y la cultura.\nLa lista de este año marca un cambio significativo respecto de ediciones anteriores. Aunque la inteligencia artificial continúa ocupando un lugar central, el análisis pone especial énfasis en infraestructuras de gran escala, nuevas fuentes de energía, medicina de precisión y tecnologías que plantean importantes debates éticos.\nEntre los avances destacados aparecen las baterías de sodio, los reactores nucleares modulares, la edición genética de precisión, los centros de datos diseñados para inteligencia artificial y las estaciones espaciales comerciales. También se incluyen los sistemas de captura de carbono y los llamados compañeros de inteligencia artificial, capaces de mantener conversaciones y ofrecer apoyo emocional.\nSegún los editores de MIT Technology Review, la lista no busca simplemente anticipar tendencias, sino identificar desarrollos que ya alcanzaron la madurez suficiente para producir efectos concretos en la economía, la ciencia y la vida cotidiana.'
    },
    {
      id:'n2', cat:'Tecnología', titulo:'Baterías de Sodio',
      corto:'Más abundante y barato que el litio, el sodio puede abaratar el almacenamiento.',
      resumen:'Las baterías de sodio podrían reducir la dependencia mundial del litio. El sodio es más abundante y económico, y resulta adecuado para almacenar electricidad a gran escala en parques solares y eólicos. El informe también destaca las baterías de estado sólido, que reemplazan electrolitos líquidos por materiales sólidos y prometen mayor seguridad y cargas más rápidas.',
      claves:['baterias de sodio','sodio','litio','bateria','energia','almacenamiento','renovables','estado solido','vehiculos electricos','electrolito','densidad energetica','parques solares','eolicos'],
      imagen:'image ia/noticia-2.jpg',
      cuerpo:'Las baterías de sodio se convirtieron en una de las principales novedades de la lista de tecnologías disruptivas elaborada por el MIT Technology Review para 2026. El desarrollo es observado con especial interés porque podría reducir la dependencia mundial del litio, un recurso estratégico cuya demanda aumentó debido a la expansión de los vehículos eléctricos y las energías renovables.\nEl sodio presenta una ventaja fundamental: es mucho más abundante y, en general, menos costoso que el litio. Esta característica podría facilitar la fabricación de baterías destinadas al almacenamiento de electricidad a gran escala, especialmente en sistemas vinculados con parques solares y eólicos. Además, este tipo de baterías ofrece un desempeño potencialmente más estable en temperaturas extremas y puede presentar mejores condiciones de seguridad en determinadas aplicaciones.\nAunque todavía enfrenta desafíos relacionados con la densidad energética y la eficiencia, los avances recientes acercan la tecnología a una utilización comercial más amplia.\nEl informe también destaca las baterías de estado sólido, que reemplazan los electrolitos líquidos por materiales sólidos. Esta innovación promete reducir riesgos de incendio, aumentar la autonomía y permitir cargas más rápidas. La combinación de ambas tecnologías podría modificar la estructura del mercado energético y acelerar la transición hacia sistemas de transporte y almacenamiento menos dependientes de combustibles fósiles.'
    },
    {
      id:'n3', cat:'Tecnología', titulo:'Edición Genética',
      corto:'El base editing corrige mutaciones puntuales, pero abre debates bioéticos.',
      resumen:'La medicina de precisión y el base editing permiten corregir mutaciones puntuales del ADN sin alterar grandes segmentos del material genético. El avance plantea interrogantes sobre la puntuación de embriones, la discriminación, la desigualdad en el acceso y el riesgo de selección reproductiva por criterios sociales o comerciales.',
      claves:['edicion genetica','base editing','adn','gen','genes','mutacion','medicina de precision','bioetica','embriones','terapia genetica','salud','enfermedades hereditarias','puntuacion de embriones'],
      imagen:'image ia/noticia-3.jpg',
      cuerpo:'La medicina de precisión ocupa un lugar destacado entre las tecnologías que podrían generar mayores cambios durante los próximos años. El MIT Technology Review señaló especialmente los tratamientos genéticos hiperpersonalizados basados en técnicas como el “base editing”, una herramienta capaz de modificar una letra específica del ADN. A diferencia de métodos anteriores, esta tecnología busca corregir mutaciones puntuales sin alterar grandes segmentos del material genético.\nEl objetivo es tratar enfermedades hereditarias poco frecuentes que, hasta hace pocos años, contaban con escasas alternativas terapéuticas. El avance abre la posibilidad de desarrollar tratamientos adaptados al perfil genético y molecular de cada paciente. En lugar de utilizar medicamentos diseñados para grandes grupos de población, la medicina podría avanzar hacia terapias específicas para determinadas mutaciones y características biológicas.\nSin embargo, el progreso científico también plantea interrogantes de gran importancia. El informe menciona la puntuación de embriones, una técnica que utiliza información genética para estimar riesgos de enfermedades y ciertos rasgos complejos. Sus posibles aplicaciones generan preocupación por la discriminación, la desigualdad en el acceso y el riesgo de convertir la reproducción en un proceso de selección basado en criterios sociales o comerciales.\nEl desafío será combinar innovación médica, regulación pública y principios bioéticos que protejan la dignidad y los derechos de las personas.'
    },
    {
      id:'n4', cat:'Tecnología', titulo:'IA en Software',
      corto:'Los asistentes de IA ya escriben, prueban y documentan código.',
      resumen:'La inteligencia artificial se instaló en el centro del desarrollo de software: los asistentes proponen arquitecturas, escriben pruebas automatizadas, detectan errores y generan documentación técnica. El cambio también transforma los centros de datos, que crecen en escala y consumo energético, y abre debates sobre la revisión humana y la responsabilidad.',
      claves:['inteligencia artificial','ia','software','programacion','codigo','desarrollo','centros de datos','hiperescala','testing','pruebas','asistentes','refrigeracion','revision humana'],
      imagen:'image ia/noticia-4.jpg',
      cuerpo:'La inteligencia artificial dejó de ser una herramienta auxiliar para convertirse en una parte estructural del desarrollo de software. Los asistentes actuales no solo completan líneas de código: proponen arquitecturas, escriben pruebas automatizadas, detectan errores y generan documentación técnica en segundos.\nEl cambio también se percibe en la infraestructura. Los centros de datos diseñados específicamente para entrenar y ejecutar modelos de inteligencia artificial crecieron en escala y en consumo energético, lo que obligó a repensar sistemas de refrigeración, redes eléctricas y ubicación geográfica de estas instalaciones.\nEl debate, sin embargo, no es solo técnico. La comunidad de desarrolladores discute cómo cambia el aprendizaje del oficio, qué lugar ocupan la revisión humana y la calidad del código generado, y de qué manera las empresas deberían rendir cuentas cuando un sistema automático produce fallas.'
    },
    {
      id:'n5', cat:'Tecnología', titulo:'Estaciones Espaciales',
      corto:'Plataformas orbitales privadas y sistemas de captura de carbono.',
      resumen:'Con el retiro de la Estación Espacial Internacional en el horizonte, empresas privadas preparan estaciones orbitales comerciales para investigación, producción y turismo. El informe también destaca los sistemas de captura de carbono, considerados clave para complementar la reducción de emisiones. Ambas líneas abren preguntas regulatorias.',
      claves:['estaciones espaciales','espacio','orbita','estacion espacial internacional','captura de carbono','co2','clima','turismo espacial','satelite','regulacion','plataformas orbitales'],
      imagen:'image ia/noticia-5.jpg',
      cuerpo:'Las estaciones espaciales comerciales aparecen en la lista de tecnologías disruptivas de 2026 como una de las apuestas más ambiciosas. Con el horizonte del retiro de la Estación Espacial Internacional, distintas empresas trabajan en plataformas orbitales privadas destinadas a la investigación científica, la producción de materiales y el turismo espacial.\nEl informe también menciona los sistemas de captura de carbono, pensados para retirar dióxido de carbono de la atmósfera y almacenarlo de forma segura. Se trata de una familia de tecnologías con costos todavía elevados, pero considerada clave para complementar la reducción de emisiones.\nEl cruce entre ambas líneas de desarrollo abre preguntas regulatorias: quién autoriza, quién fiscaliza y bajo qué criterios ambientales se evalúan las actividades que ocurren fuera de las fronteras de cualquier país.'
    },
    {
      id:'n6', cat:'Cultura', titulo:'Día del Patrimonio 2025',
      corto:'Museos abiertos y recorridos barriales con el bicentenario como eje.',
      resumen:'El Día del Patrimonio convocó a miles de personas con una programación que combinó edificios históricos, recorridos urbanos y propuestas barriales, con el bicentenario como hilo conductor. La jornada incluyó aperturas de museos, visitas guiadas por vecinos y actividades descentralizadas en barrios y localidades.',
      claves:['dia del patrimonio','patrimonio','bicentenario','2025','museos','historia','uruguay','identidad','recorridos','arquitectura','visitas guiadas','barrios'],
      imagen:'image ia/noticia-6.jpg',
      cuerpo:'El Día del Patrimonio volvió a convocar a miles de personas en todo el país con una programación que combinó edificios históricos, recorridos urbanos y propuestas barriales. En esta edición, el bicentenario funcionó como hilo conductor para revisar cómo se construyó la identidad uruguaya y qué huellas quedaron en la arquitectura, la música y las prácticas sociales.\nLa jornada incluyó aperturas especiales de museos, visitas guiadas a cargo de vecinos y colectivos culturales, y actividades pensadas para públicos diversos. Muchas de las propuestas se organizaron de forma descentralizada, con énfasis en barrios y localidades que no siempre aparecen en los circuitos turísticos tradicionales.\nPara los organizadores, el objetivo es que el patrimonio deje de percibirse como algo reservado a especialistas y pase a entenderse como una construcción colectiva, viva y en permanente discusión.'
    },
    {
      id:'n7', cat:'Cultura', titulo:'Libro Sanguinetti',
      corto:'“Memorias de una pasión”, un recorrido personal por el arte uruguayo.',
      resumen:'La presentación del libro “Memorias de una pasión” reunió a artistas, docentes y gestores culturales. El volumen propone un recorrido personal por la historia del arte uruguayo, con atención a obras, talleres y vínculos entre generaciones. Se destacó la importancia de conservar material documental que permanece en archivos privados.',
      claves:['sanguinetti','memorias de una pasion','libro','arte','artes visuales','plastica','uruguay','presentacion','archivos','talleres','gestores culturales'],
      imagen:'image ia/noticia-7.jpg',
      cuerpo:'La presentación del libro “Memorias de una pasión” reunió a un público diverso en una sala colmada, con la presencia de artistas, docentes y gestores culturales. La actividad se desarrolló en un clima distendido y combinó lecturas, comentarios y anécdotas sobre el proceso de escritura.\nEl volumen propone un recorrido personal por la historia del arte uruguayo, con especial atención a las obras, los talleres y los vínculos que marcaron distintas generaciones de artistas. Durante la presentación se destacó la importancia de conservar y difundir material documental que muchas veces permanece en archivos privados.\nLos organizadores anunciaron que el libro estará disponible en bibliotecas públicas y que se prevén nuevas instancias de presentación en el interior del país.'
    },
    {
      id:'n8', cat:'Cultura', titulo:'Imputación Bellas Artes',
      corto:'Un caso judicial reabre el debate sobre los límites de la expresión en la educación.',
      resumen:'La imputación de un docente por expresiones realizadas en un espacio de formación artística generó un intenso debate público. Organizaciones gremiales, estudiantes y especialistas discutieron los alcances de la libertad de expresión en el ámbito educativo y la articulación entre libertad de cátedra, dignidad y responsabilidad legal.',
      claves:['bellas artes','imputacion','justicia','libertad de expresion','libertad de catedra','docente','educacion','derecho','gremios','estudiantes','caso judicial'],
      imagen:'image ia/noticia-8.jpg',
      cuerpo:'La imputación de un docente por expresiones realizadas en un espacio de formación artística generó un intenso debate público. Organizaciones gremiales, estudiantes y especialistas en derecho expresaron posiciones encontradas sobre los alcances de la libertad de expresión en el ámbito educativo.\nEl caso reavivó una discusión recurrente: cómo se articulan la libertad de cátedra, el respeto a la dignidad de las personas y la responsabilidad legal de quienes enseñan. Distintas voces reclamaron que el conflicto se resuelva en el ámbito pedagógico y no exclusivamente en sede judicial.\nDesde el portal seguimos el desarrollo del caso con la premisa de informar sin exponer datos personales y dando espacio a las distintas perspectivas involucradas.'
    },
    {
      id:'n9', cat:'Cultura', titulo:'Movida Joven',
      corto:'Convocatoria para artistas y colectivos jóvenes en varias disciplinas.',
      resumen:'Movida Joven abrió una nueva convocatoria para artistas y colectivos de todo el país. Las inscripciones se organizan por categorías que abarcan música, teatro, danza, artes visuales, letras y proyectos interdisciplinarios. La prioridad es ampliar la participación de jóvenes de barrios periféricos y del interior.',
      claves:['movida joven','jovenes','artistas','convocatoria','inscripciones','musica','teatro','danza','artes visuales','letras','intendencia','interior','barrios'],
      imagen:'image ia/noticia-9.jpg',
      cuerpo:'Movida Joven abrió una nueva edición de su convocatoria dirigida a artistas y colectivos de todo el país. El programa busca dar visibilidad a propuestas creadas por jóvenes, con espacios de formación, circulación y encuentro entre pares.\nLas inscripciones se organizan por categorías que abarcan música, teatro, danza, artes visuales, letras y proyectos interdisciplinarios. Además de los espectáculos y muestras, la convocatoria incluye instancias de acompañamiento técnico y tutorías a cargo de referentes de cada disciplina.\nDesde la organización señalaron que la prioridad es ampliar la participación de jóvenes de barrios periféricos y de localidades del interior, facilitando apoyos para traslados y materiales.'
    },
    {
      id:'n10', cat:'Cultura', titulo:'Homenaje a Rubén Rada',
      corto:'El legado del Negro en la música uruguaya, repasado por varias generaciones.',
      resumen:'Un homenaje a Rubén Rada reunió a músicos, investigadores y público para repasar su trayectoria, desde el candombe y el jazz hasta su carrera solista. Se destacó su capacidad para cruzar géneros sin perder identidad y su influencia en la combinación de la raíz afrouruguaya con lenguajes contemporáneos. La jornada incluyó interpretaciones en vivo y proyecciones de archivo.',
      claves:['ruben rada','el negro','rada','musica','candombe','rock','cancion popular','uruguay','homenaje','el kinto','totem','opa','afrouruguaya','legado','archivo sonoro'],
      imagen:'image ia/noticia-10.jpg',
      cuerpo:'Un homenaje a Rubén Rada reunió a músicos, investigadores y público en una jornada dedicada a repasar su trayectoria. El encuentro recorrió distintas etapas: desde sus primeras incursiones en el candombe y el jazz hasta su paso por bandas emblemáticas y su extensa carrera solista.\nLos participantes coincidieron en señalar su capacidad para cruzar géneros sin perder identidad, y su influencia en varias generaciones de artistas que encontraron en su obra una forma de combinar la raíz afrouruguaya con lenguajes contemporáneos.\nLa actividad incluyó interpretaciones en vivo, proyecciones de archivo y una mesa de conversación sobre la importancia de preservar los registros sonoros y audiovisuales de la música popular uruguaya.'
    }
  ];

  /* Notas publicadas desde el panel */
  var CLAVE_ALMACEN = 'jc_noticias_admin';
  function cargarNotasAdmin(){
    try{
      var guardadas = JSON.parse(localStorage.getItem(CLAVE_ALMACEN) || '[]');
      return Array.isArray(guardadas) ? guardadas : [];
    }catch(e){ return []; }
  }
  function obtenerTodas(){ return NOTICIAS.concat(cargarNotasAdmin()); }

  /* ==========================================================
     RENDERIZADO DEL CATÁLOGO (lista + artículos)
     ========================================================== */
  function renderCatalogo(){
    var lista = document.getElementById('lista-noticias');
    var visor = document.getElementById('contenido-noticia');
    if(!lista || !visor) return;

    // Limpiar manteniendo la bienvenida
    lista.innerHTML = '';
    Array.from(visor.querySelectorAll('.nota')).forEach(function(n){ n.remove(); });

    obtenerTodas().forEach(function(n, i){
      // item de lista
      var li = document.createElement('li');
      li.setAttribute('data-cat', n.cat);
      li.setAttribute('data-tags', (n.claves || []).join(' '));
      li.innerHTML = '<a data-id="' + n.id + '">' +
        '<span class="punto' + (n.cat === 'Cultura' ? ' cul' : '') + '" aria-hidden="true"></span>' +
        '<span class="nombre">' + escapar(n.titulo) + '</span>' +
        '<span class="meta">' + escapar(n.cat) + '</span>' +
        '</a>';
      lista.appendChild(li);

      // articulo
      var art = document.createElement('article');
      art.className = 'nota' + (n.cat === 'Cultura' ? ' chip-cul' : '');
      art.id = n.id;
      art.setAttribute('tabindex','-1');

      var imgHtml = '';
      if(n.imagen){
        imgHtml = '<figure class="foto">' +
          '<img src="' + escapar(n.imagen) + '" alt="Imagen de la noticia: ' + escapar(n.titulo) + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\';this.parentElement.classList.add(\'sin-imagen\')">' +
          '<figcaption class="foto-placeholder">' +
            '<span class="ph-icono">🖼</span>' +
            '<strong>Espacio reservado para la imagen</strong>' +
            '<span>' + escapar(n.imagen) + '</span>' +
          '</figcaption>' +
        '</figure>';
      }

      var parrafos = (n.cuerpo || n.resumen || '').split(/\n+/).filter(function(p){ return p.trim(); });
      var cuerpoHtml = parrafos.map(function(p){ return '<p>' + escapar(p) + '</p>'; }).join('');

      // Navegación anterior/siguiente
      var prev = i > 0 ? obtenerTodas()[i-1] : null;
      var next = i < obtenerTodas().length - 1 ? obtenerTodas()[i+1] : null;
      var navHtml = '<nav class="pasar" aria-label="Otras noticias">';
      if(prev){
        navHtml += '<a class="ant" data-id="' + prev.id + '"><small>Anterior</small><strong>' + escapar(prev.titulo) + '</strong></a>';
      }
      if(next){
        navHtml += '<a class="sig" data-id="' + next.id + '"><small>Siguiente</small><strong>' + escapar(next.titulo) + '</strong></a>';
      }
      navHtml += '</nav>';

      art.innerHTML =
        '<span class="chip' + (n.cat === 'Cultura' ? ' chip-cul' : '') + '">' + escapar(n.cat) + '</span>' +
        '<h1>' + escapar(n.titulo) + '</h1>' +
        '<p class="meta-nota">' + (n.autor ? escapar(n.autor) + ' · ' : '') + 'Publicado en el portal</p>' +
        '<p class="lead">' + escapar(n.corto) + '</p>' +
        imgHtml +
        '<div class="cuerpo">' + cuerpoHtml + '</div>' +
        navHtml;

      visor.appendChild(art);
    });

    // Sugerencias de la bienvenida
    var sug = document.getElementById('sugerencias-inicio');
    if(sug){
      sug.innerHTML = NOTICIAS.slice(0,4).map(function(n){
        return '<li><a data-id="' + n.id + '">' + escapar(n.titulo) + '</a></li>';
      }).join('');
    }
  }

  /* ==========================================================
     NAVEGACIÓN ENTRE PÁGINAS (SPA)
     ========================================================== */
  var PAGINAS_VALIDAS = ['inicio','noticias','asistente','contacto','admin','apendice'];

  function mostrarPagina(id, hacerScroll){
    if(PAGINAS_VALIDAS.indexOf(id) === -1) id = 'inicio';

    document.querySelectorAll('.pagina').forEach(function(p){
      p.classList.toggle('activa', p.id === 'pagina-' + id);
    });

    document.querySelectorAll('.menu-principal a[data-nav]').forEach(function(a){
      var activo = a.getAttribute('data-nav') === id;
      if(activo){ a.setAttribute('aria-current','page'); }
      else{ a.removeAttribute('aria-current'); }
    });

    if(hacerScroll !== false){
      window.scrollTo({top:0, behavior:'smooth'});
    }
    if(location.hash !== '#' + id){
      history.replaceState(null,'', '#' + id);
    }
  }

  document.addEventListener('click', function(e){
    var objetivo = e.target.closest('[data-pagina]');
    if(!objetivo) return;
    e.preventDefault();
    mostrarPagina(objetivo.getAttribute('data-pagina'), true);
  });

  window.addEventListener('hashchange', function(){
    var id = location.hash.replace('#','') || 'inicio';
    if(PAGINAS_VALIDAS.indexOf(id) !== -1) mostrarPagina(id, false);
  });

  /* ==========================================================
     LISTAS DE INICIO
     ========================================================== */
  function pintarListasInicio(){
    document.querySelectorAll('.lista-notas').forEach(function(ul){
      var cat = ul.getAttribute('data-lista');
      var filtradas = obtenerTodas().filter(function(n){ return n.cat === cat; });
      ul.innerHTML = filtradas.map(function(n){
        return '<li>' +
          '<a data-pagina="noticias" data-abrir="' + n.id + '">' +
            '<strong>' + escapar(n.titulo) + '</strong>' +
            '<span>' + escapar(n.corto) + '</span>' +
          '</a>' +
        '</li>';
      }).join('');
    });
  }

  /* ==========================================================
     VISOR DE NOTICIAS
     ========================================================== */
  var visorBienvenida = document.getElementById('bienvenida-visor');

  function abrirNota(id){
    var nota = document.getElementById(id);
    if(!nota) return false;

    document.querySelectorAll('.nota').forEach(function(n){ n.classList.remove('activa'); });
    nota.classList.add('activa');

    if(visorBienvenida) visorBienvenida.classList.add('oculta');

    document.querySelectorAll('#lista-noticias a').forEach(function(a){
      a.classList.toggle('activo', a.getAttribute('data-id') === id);
    });

    var pagNoticias = document.getElementById('pagina-noticias');
    if(pagNoticias && !pagNoticias.classList.contains('activa')){
      mostrarPagina('noticias', false);
    }

    setTimeout(function(){
      nota.focus();
      var visor = document.getElementById('contenido-noticia');
      if(visor){
        var y = visor.getBoundingClientRect().top + window.pageYOffset - 110;
        window.scrollTo({top: y, behavior:'smooth'});
      }
    }, 60);
    return true;
  }

  document.addEventListener('click', function(e){
    var linkNota = e.target.closest('[data-id]');
    if(!linkNota) return;
    var id = linkNota.getAttribute('data-id');
    if(id && document.getElementById(id)){
      e.preventDefault();
      abrirNota(id);
    }
  });

  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-abrir]');
    if(!el) return;
    e.preventDefault();
    abrirNota(el.getAttribute('data-abrir'));
  });

  /* ==========================================================
     BUSCADOR Y FILTROS
     ========================================================== */
  var inputBuscador = document.getElementById('buscador');
  var botonesFiltro = document.querySelectorAll('.filtro');
  var sinResultados = document.getElementById('sin-resultados');
  var filtroActual = 'todas';

  function aplicarFiltros(){
    var q = inputBuscador ? normalizar(inputBuscador.value) : '';
    var items = document.querySelectorAll('#lista-noticias > li');
    var visibles = 0;

    items.forEach(function(li){
      var cat = li.getAttribute('data-cat');
      var tags = normalizar(li.getAttribute('data-tags') || '');
      var nombre = normalizar(li.querySelector('.nombre').textContent);
      var coincideCat = (filtroActual === 'todas') || (cat === filtroActual);
      var coincideTexto = !q || tags.indexOf(q) !== -1 || nombre.indexOf(q) !== -1;
      var ok = coincideCat && coincideTexto;
      li.style.display = ok ? '' : 'none';
      if(ok) visibles++;
    });

    if(sinResultados) sinResultados.hidden = visibles !== 0;
  }

  if(inputBuscador) inputBuscador.addEventListener('input', aplicarFiltros);

  botonesFiltro.forEach(function(btn){
    btn.addEventListener('click', function(){
      botonesFiltro.forEach(function(b){ b.setAttribute('aria-pressed','false'); });
      btn.setAttribute('aria-pressed','true');
      filtroActual = btn.getAttribute('data-filtro');
      aplicarFiltros();
    });
  });

  var limpiar = document.getElementById('limpiar-filtros');
  if(limpiar){
    limpiar.addEventListener('click', function(){
      if(inputBuscador) inputBuscador.value = '';
      filtroActual = 'todas';
      botonesFiltro.forEach(function(b){
        b.setAttribute('aria-pressed', b.getAttribute('data-filtro') === 'todas' ? 'true' : 'false');
      });
      aplicarFiltros();
    });
  }

  /* ==========================================================
     ASISTENTE VIRTUAL
     ========================================================== */
  var inputIA = document.getElementById('pregunta-ia');
  var btnIA = document.getElementById('btn-consultar');
  var respuestaIA = document.getElementById('respuesta-ia');

  var STOPWORDS = ['que','cual','cuales','como','donde','cuando','por','para','con','los','las','del','una','uno','unos','unas','sobre','hay','noticias','noticia','dice','dime','busca','buscar','muestra','mostrar','quiero','saber','es','son','el','la','en','de','y','o'];

  function extraerTerminos(texto){
    return normalizar(texto)
      .replace(/[¿?¡!.,;:()"'«»]/g,' ')
      .split(' ')
      .map(function(t){ return t.trim(); })
      .filter(function(t){ return t.length > 2 && STOPWORDS.indexOf(t) === -1; });
  }

  function buscarNoticias(consulta){
    var terminos = extraerTerminos(consulta);
    var q = normalizar(consulta);
    var todas = obtenerTodas();
    if(!terminos.length && !q) return [];

    var resultados = [];
    todas.forEach(function(n){
      var puntaje = 0;
      var textoCompleto = normalizar(
        n.titulo + ' ' + n.corto + ' ' + n.resumen + ' ' + n.claves.join(' ') + ' ' + n.cat
      );
      if(q && textoCompleto.indexOf(q) !== -1) puntaje += 8;
      terminos.forEach(function(t){
        if(normalizar(n.titulo).indexOf(t) !== -1) puntaje += 5;
        if(normalizar(n.claves.join(' ')).indexOf(t) !== -1) puntaje += 3;
        if(normalizar(n.resumen).indexOf(t) !== -1) puntaje += 2;
        if(normalizar(n.corto).indexOf(t) !== -1) puntaje += 2;
      });
      if(terminos.indexOf('tecnologia') !== -1 && n.cat === 'Tecnología') puntaje += 4;
      if(terminos.indexOf('cultura') !== -1 && n.cat === 'Cultura') puntaje += 4;
      if(puntaje > 0) resultados.push({nota:n, puntaje:puntaje});
    });
    resultados.sort(function(a,b){ return b.puntaje - a.puntaje; });
    return resultados.map(function(r){ return r.nota; });
  }

  function renderizarRespuesta(consulta, resultados){
    if(!resultados.length){
      return '<p class="aviso">No encontré noticias que coincidan con «' +
        escapar(consulta) + '». Probá con otra palabra clave, por ejemplo: ' +
        '<em>baterías</em>, <em>Rada</em>, <em>patrimonio</em>, <em>inteligencia artificial</em> ' +
        'o una categoría completa como <em>tecnología</em> o <em>cultura</em>.</p>';
    }
    var html = '';
    html += '<div class="respuesta' + (resultados[0].cat === 'Cultura' ? ' cultural' : '') + '">';
    html += '<h4>Encontré ' + resultados.length + ' noticia' + (resultados.length === 1 ? '' : 's') + '</h4>';
    html += '<p>Estos son los artículos del portal relacionados con «' + escapar(consulta) + '»:</p>';
    html += '<ul class="lista-resultados">';
    resultados.forEach(function(n){
      html += '<li><a data-abrir="' + n.id + '">' +
        '<span class="cat-tag">' + escapar(n.cat) + '</span>' +
        '<strong>' + escapar(n.titulo) + '</strong>' +
        '<span>' + escapar(n.corto) + '</span>' +
        '</a></li>';
    });
    html += '</ul></div>';
    return html;
  }

  function consultarIA(){
    var consulta = (inputIA && inputIA.value) ? inputIA.value.trim() : '';
    if(!consulta){
      if(respuestaIA){
        respuestaIA.innerHTML = '<p class="aviso">Escribí una palabra o pregunta para que pueda buscar noticias relacionadas.</p>';
      }
      return;
    }
    var resultados = buscarNoticias(consulta);
    if(respuestaIA) respuestaIA.innerHTML = renderizarRespuesta(consulta, resultados);
  }

  if(btnIA) btnIA.addEventListener('click', consultarIA);
  if(inputIA){
    inputIA.addEventListener('keydown', function(e){
      if(e.key === 'Enter'){ e.preventDefault(); consultarIA(); }
    });
  }

  document.querySelectorAll('.chip-sugerida').forEach(function(chip){
    chip.addEventListener('click', function(){
      var pregunta = chip.getAttribute('data-pregunta') || '';
      if(inputIA) inputIA.value = pregunta;
      consultarIA();
    });
  });

  /* ==========================================================
     FORMULARIO DE CONTACTO
     ========================================================== */
  var formContacto = document.getElementById('form-contacto');
  var respuestaContacto = document.getElementById('respuesta-contacto');

  if(formContacto){
    formContacto.addEventListener('submit', function(e){
      e.preventDefault();
      var nombre = document.getElementById('c-nombre').value.trim();
      var email = document.getElementById('c-email').value.trim();
      var mensaje = document.getElementById('c-mensaje').value.trim();
      var acepto = document.getElementById('c-acepto').checked;

      if(!nombre || !email || !mensaje || !acepto){
        if(respuestaContacto){
          respuestaContacto.innerHTML = '<div class="mensaje-error">Completá todos los campos y aceptá el uso de datos para enviar la consulta.</div>';
        }
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        if(respuestaContacto){
          respuestaContacto.innerHTML = '<div class="mensaje-error">El correo electrónico no parece válido.</div>';
        }
        return;
      }

      try{
        var msg = parseInt(localStorage.getItem('jc_mensajes') || '0', 10) + 1;
        localStorage.setItem('jc_mensajes', String(msg));
        var stat = document.getElementById('stat-msg');
        if(stat) stat.textContent = msg;
      }catch(err){}

      if(respuestaContacto){
        respuestaContacto.innerHTML = '<div class="mensaje-ok">¡Gracias, ' + escapar(nombre) +
          '! Recibimos tu mensaje y te vamos a responder a <strong>' + escapar(email) + '</strong> a la brevedad.</div>';
      }
      formContacto.reset();
    });
  }

  /* ==========================================================
     ADMINISTRACIÓN
     ========================================================== */
  var formAdmin = document.getElementById('form-admin');
  var respuestaAdmin = document.getElementById('respuesta-admin');
  var tbodyAdmin = document.getElementById('cuerpo-tabla-admin');

  function actualizarEstadisticas(){
    var todas = obtenerTodas();
    var tec = todas.filter(function(n){ return n.cat === 'Tecnología'; }).length;
    var cul = todas.filter(function(n){ return n.cat === 'Cultura'; }).length;

    var elTotal = document.getElementById('stat-total');
    var elTec = document.getElementById('stat-tec');
    var elCul = document.getElementById('stat-cul');
    if(elTotal) elTotal.textContent = todas.length;
    if(elTec) elTec.textContent = tec;
    if(elCul) elCul.textContent = cul;
  }

  function pintarTablaAdmin(){
    if(!tbodyAdmin) return;
    var admin = cargarNotasAdmin();
    if(!admin.length){
      tbodyAdmin.innerHTML = '<tr><td class="vacio" colspan="3">Todavía no publicaste noticias desde este panel.</td></tr>';
      return;
    }
    tbodyAdmin.innerHTML = admin.map(function(n){
      return '<tr>' +
        '<td>' + escapar(n.titulo) + '</td>' +
        '<td>' + escapar(n.cat) + '</td>' +
        '<td><button type="button" class="borrar" data-borrar="' + n.id + '">Borrar</button></td>' +
      '</tr>';
    }).join('');
  }

  if(formAdmin){
    formAdmin.addEventListener('submit', function(e){
      e.preventDefault();
      var titulo = document.getElementById('a-titulo').value.trim();
      var cat = document.getElementById('a-categoria').value;
      var imagen = document.getElementById('a-imagen').value.trim();
      var etiquetas = document.getElementById('a-etiquetas').value.trim();
      var resumen = document.getElementById('a-resumen').value.trim();
      var cuerpo = document.getElementById('a-cuerpo').value.trim();

      if(!titulo || !resumen || !cuerpo){
        if(respuestaAdmin){
          respuestaAdmin.innerHTML = '<div class="mensaje-error">Completá al menos el título, el resumen y el cuerpo de la noticia.</div>';
        }
        return;
      }

      var id = 'admin-' + Date.now();
      var claves = etiquetas ? etiquetas.split(',').map(function(t){ return t.trim(); }).filter(Boolean) : [];

      var nueva = {
        id:id, cat:cat, titulo:titulo, corto:resumen, resumen:resumen,
        cuerpo:cuerpo, imagen:imagen,
        claves: claves.concat([titulo.toLowerCase(), cat.toLowerCase()])
      };

      var admin = cargarNotasAdmin();
      admin.push(nueva);
      try{
        localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(admin));
      }catch(err){
        if(respuestaAdmin){
          respuestaAdmin.innerHTML = '<div class="mensaje-error">No se pudo guardar la noticia en el almacenamiento local.</div>';
        }
        return;
      }

      renderCatalogo();
      pintarListasInicio();
      pintarTablaAdmin();
      actualizarEstadisticas();

      if(respuestaAdmin){
        respuestaAdmin.innerHTML = '<div class="mensaje-ok">Noticia publicada correctamente. Ya aparece en el catálogo.</div>';
      }
      formAdmin.reset();
    });
  }

  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-borrar]');
    if(!btn) return;
    var id = btn.getAttribute('data-borrar');
    if(!id) return;
    var admin = cargarNotasAdmin().filter(function(n){ return n.id !== id; });
    try{ localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(admin)); }catch(err){ return; }
    renderCatalogo();
    pintarListasInicio();
    pintarTablaAdmin();
    actualizarEstadisticas();
  });

  /* ==========================================================
     INICIALIZACIÓN
     ========================================================== */
  function init(){
    renderCatalogo();

    var hashInicial = location.hash.replace('#','');
    if(PAGINAS_VALIDAS.indexOf(hashInicial) !== -1){
      mostrarPagina(hashInicial, false);
    }else{
      mostrarPagina('inicio', false);
    }

    pintarListasInicio();
    pintarTablaAdmin();
    actualizarEstadisticas();

    try{
      var msg = localStorage.getItem('jc_mensajes');
      var stat = document.getElementById('stat-msg');
      if(stat && msg) stat.textContent = msg;
    }catch(err){}
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }

})();