/* ==========================================================
   DATOS DE LAS NOTICIAS
   Para editar o agregar una nota, modifica este arreglo.
   - borrador: true muestra un aviso de "texto provisional".
   - etiquetas: palabras que el asistente usa para encontrar la nota.
   ========================================================== */
const NOTICIAS = [
    {
        id: 'n1', categoria: 'Tecnología', titulo: 'MIT: las tecnologías que marcan 2026',
        resumen: 'Cada año, MIT Technology Review elige las tecnologías con más potencial de cambiar la economía y la vida cotidiana. Repasamos por qué conviene seguir esa lista.',
        cuerpo: [
            'MIT Technology Review publica cada año una selección de tecnologías emergentes que, a juicio de su redacción, tienen más posibilidades de cambiar la economía, la salud o la forma en que nos relacionamos con el mundo. No es un ranking de productos: es un mapa de ideas que están pasando del laboratorio a la práctica.',
            'Algunos de los temas que recorremos en este catálogo, como las baterías de sodio y la edición genética, forman parte de esa conversación tecnológica y tienen su propia nota.',
            'Seguir este tipo de listas ayuda a distinguir entre una promesa pasajera y una tecnología que ya empieza a usarse, y a anticipar qué cambios pueden llegar a nuestra vida diaria.'
        ],
        etiquetas: ['MIT', 'Technology Review', 'tecnologías', '2026', 'innovación', 'emergentes']
    },
    {
        id: 'n2', categoria: 'Tecnología', titulo: 'Baterías de sodio: una alternativa al litio',
        resumen: 'Usan sodio, un elemento abundante y barato, en lugar de litio. Almacenan menos energía por kilo, pero pueden ser clave para la red eléctrica y los autos accesibles.',
        cuerpo: [
            'Las baterías de iones de sodio funcionan con el mismo principio que las de litio, pero reemplazan el litio por sodio, un elemento presente en la sal común y mucho más abundante. Eso reduce la dependencia de materiales escasos y de cadenas de suministro concentradas en pocos países.',
            'La contrapartida es que, por ahora, almacenan menos energía por kilo. Por eso resultan especialmente atractivas para guardar energía renovable en la red eléctrica y para vehículos urbanos de bajo costo, donde el peso importa menos que el precio.',
            'Para países con una matriz energética renovable, como Uruguay, el almacenamiento es una pieza clave para aprovechar mejor la energía eólica y solar.'
        ],
        etiquetas: ['baterías', 'sodio', 'litio', 'energía', 'almacenamiento', 'renovables', 'autos eléctricos']
    },
    {
        id: 'n3', categoria: 'Tecnología', titulo: 'Edición genética: de la promesa a la clínica',
        resumen: 'Herramientas como CRISPR permiten modificar el ADN con precisión. Ya hay terapias aprobadas y, a la vez, un debate ético que sigue abierto.',
        cuerpo: [
            'La edición genética permite cortar y modificar secuencias concretas del ADN. La técnica más conocida, CRISPR-Cas9, nació del estudio de un sistema de defensa de las bacterias y valió el Premio Nobel de Química 2020 a Emmanuelle Charpentier y Jennifer Doudna.',
            'En 2023 se aprobaron las primeras terapias basadas en CRISPR para enfermedades de la sangre, como la anemia falciforme. Fue el paso del laboratorio a la clínica.',
            'El avance abre preguntas: quién puede acceder a tratamientos de alto costo, cómo se regulan las modificaciones heredables y qué límites debe tener la técnica.'
        ],
        etiquetas: ['edición genética', 'CRISPR', 'ADN', 'genes', 'genética', 'terapia', 'salud', 'ciencia']
    },
    {
        id: 'n4', categoria: 'Tecnología', titulo: 'IA en el desarrollo de software',
        resumen: 'Los asistentes de IA ya escriben, revisan y explican código. Cambian el trabajo de quienes programan, pero la revisión humana sigue siendo clave.',
        cuerpo: [
            'Los asistentes basados en inteligencia artificial pueden sugerir código, explicar errores, escribir pruebas y documentar proyectos. Para quienes están aprendiendo funcionan como un tutor disponible a toda hora; para los equipos profesionales, como una forma de acelerar tareas repetitivas.',
            'También traen riesgos: el código generado puede tener errores o fallas de seguridad, y entender lo que se publica sigue siendo responsabilidad de quien programa. La revisión y las pruebas no se reemplazan.',
            'El perfil que más valor gana combina criterio técnico, capacidad para definir bien un problema y el hábito de verificar los resultados.'
        ],
        etiquetas: ['IA', 'inteligencia artificial', 'software', 'programación', 'código', 'desarrollo', 'asistentes']
    },
    {
        id: 'n5', categoria: 'Tecnología', titulo: 'Estaciones espaciales: la próxima generación',
        resumen: 'La Estación Espacial Internacional se acerca al final de su vida útil y varias empresas y agencias preparan estaciones comerciales para tomar su lugar.',
        cuerpo: [
            'La Estación Espacial Internacional lleva más de dos décadas habitada de forma continua y está previsto retirarla de servicio alrededor de 2030. Para que la órbita baja no se quede sin presencia humana, la NASA impulsa un programa de estaciones comerciales en el que participan varias empresas privadas.',
            'Estas estaciones apuntan a usos como la investigación en microgravedad, la manufactura y el turismo espacial. Entre los desafíos están el costo, la seguridad de las tripulaciones y la coordinación internacional.'
        ],
        etiquetas: ['espacio', 'estación espacial', 'ISS', 'NASA', 'órbita', 'comerciales', 'astronautas']
    },
    {
        id: 'n6', categoria: 'Cultura', titulo: 'Día del Patrimonio 2025',
        resumen: 'Cada año, durante un fin de semana, Uruguay abre al público edificios, museos y espacios históricos. Repasamos de qué se trata y cómo aprovecharlo.',
        cuerpo: [
            'El Día del Patrimonio es una jornada anual en la que se abren las puertas de edificios, museos, casas históricas y otros espacios de valor cultural en todo el país, muchos de ellos con acceso libre. Se celebra a comienzos de octubre.',
            'Cada edición suele proponer un tema que organiza las actividades: visitas guiadas, recorridos, música y propuestas para familias. Es una buena excusa para conocer lugares de nuestra propia ciudad que solemos mirar sin entrar.',
            'Para aprovecharlo conviene revisar con anticipación la agenda oficial, planificar los recorridos por zona y llegar temprano a los sitios más concurridos.'
        ],
        etiquetas: ['patrimonio', 'día del patrimonio', 'museos', 'edificios', 'historia', 'Uruguay', '2025']
    },
    {
        id: 'n7', categoria: 'Cultura', titulo: 'Libro de Sanguinetti', borrador: true,
        resumen: 'Julio María Sanguinetti, dos veces presidente de Uruguay, es también autor de libros de historia y ensayo. Una nota para acercar su obra a lectores jóvenes.',
        cuerpo: [
            'Julio María Sanguinetti fue presidente de Uruguay en dos períodos y es autor de varios libros de historia, ensayo y memoria política. Su obra es una puerta de entrada para entender procesos políticos y culturales del país.',
            'Esta nota reúne los datos principales del libro: de qué trata, a quién puede interesar y qué lugar ocupa dentro de su trayectoria como autor.'
        ],
        etiquetas: ['Sanguinetti', 'libro', 'literatura', 'historia', 'política', 'ensayo', 'autor']
    },
    {
        id: 'n8', categoria: 'Cultura', titulo: 'Imputación en Bellas Artes', borrador: true,
        resumen: 'Una noticia vinculada a Bellas Artes llegó a la Justicia. Aquí se resume qué ocurrió, quiénes intervienen y en qué etapa está el proceso.',
        cuerpo: [
            'Esta nota resume el caso de la imputación vinculada a Bellas Artes: qué ocurrió, quiénes intervienen y en qué etapa se encuentra el proceso judicial.',
            'También repasa por qué el tema tiene impacto en el ámbito cultural y qué dicen las instituciones involucradas.'
        ],
        etiquetas: ['Bellas Artes', 'imputación', 'justicia', 'arte', 'museo', 'cultura']
    },
    {
        id: 'n9', categoria: 'Cultura', titulo: 'Movida joven', borrador: true,
        resumen: 'Música, artes visuales, teatro y proyectos independientes: la escena joven busca sus propios espacios para mostrarse.',
        cuerpo: [
            'La movida joven reúne bandas, artistas visuales, colectivos teatrales y productoras independientes que crean y difunden su trabajo fuera de los circuitos tradicionales.',
            'Las redes sociales, las ferias y los festivales barriales funcionan como escaparate. El desafío es sostener los proyectos en el tiempo: conseguir espacios, financiamiento y público.'
        ],
        etiquetas: ['movida joven', 'jóvenes', 'música', 'arte', 'teatro', 'bandas', 'festivales', 'independiente']
    },
    {
        id: 'n10', categoria: 'Cultura', titulo: 'Homenaje a Rubén Rada', borrador: true,
        resumen: 'Rubén Rada, figura central de la música popular uruguaya, recibe un homenaje. Repasamos su aporte al candombe-beat y a la cultura del país.',
        cuerpo: [
            'Rubén Rada es cantante, percusionista y compositor, y una de las voces más reconocidas de la música popular uruguaya. Su trabajo fusionó el candombe con el rock y el jazz, en lo que se conoció como candombe-beat.',
            'Un homenaje es también una oportunidad para volver a escuchar su obra y presentarla a públicos más jóvenes.'
        ],
        etiquetas: ['Rubén Rada', 'Rada', 'homenaje', 'música', 'candombe', 'candombe-beat', 'cantante']
    }
];

/* ==========================================================
   UTILIDADES
   ========================================================== */
const $ = (selector, raiz = document) => raiz.querySelector(selector);

/* Crea un elemento. Usa textContent, así el texto nunca se interpreta como HTML. */
function el(etiqueta, atributos = {}, ...hijos) {
    const nodo = document.createElement(etiqueta);
    for (const [clave, valor] of Object.entries(atributos)) {
        if (clave === 'text') nodo.textContent = valor;
        else nodo.setAttribute(clave, valor);
    }
    nodo.append(...hijos);
    return nodo;
}

/* Minúsculas, sin tildes ni signos, para comparar textos. */
function normalizar(texto) {
    return texto.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ');
}

const claseCategoria = (n) => (n.categoria === 'Cultura' ? 'cul' : 'tec');

function minutosLectura(n) {
    const palabras = `${n.resumen} ${n.cuerpo.join(' ')}`.split(/\s+/).length;
    return Math.max(1, Math.round(palabras / 180));
}

/* ==========================================================
   INICIO: listas por categoría
   ========================================================== */
function iniciarInicio() {
    document.querySelectorAll('[data-lista]').forEach((ul) => {
        NOTICIAS.filter((n) => n.categoria === ul.dataset.lista).forEach((n) => {
            ul.append(
                el('li', {},
                    el('a', { href: `noticias.html#${n.id}` },
                        el('span', { class: 'item-titulo', text: n.titulo }),
                        el('span', { class: 'item-resumen', text: n.resumen })
                    )
                )
            );
        });
    });
}

/* ==========================================================
   ASISTENTE VIRTUAL (simulado)
   Busca coincidencias entre la pregunta y las notas del portal.
   ========================================================== */
const PALABRAS_VACIAS = new Set([
    'que', 'qué', 'dice', 'sobre', 'como', 'cual', 'cuales', 'del', 'las', 'los', 'una', 'uno',
    'por', 'para', 'con', 'hay', 'son', 'esta', 'este', 'esto', 'sus', 'mas', 'ser', 'fue',
    'les', 'nos', 'tema', 'temas', 'noticia', 'noticias', 'nota', 'notas', 'portal', 'quiero',
    'saber', 'cuentame', 'dime', 'habla', 'hablan', 'esta'
]);

function buscarNoticias(pregunta) {
    const palabras = normalizar(pregunta).split(' ')
        .filter((p) => p.length > 2 && !PALABRAS_VACIAS.has(p));

    return NOTICIAS
        .map((n) => {
            const titulo = normalizar(n.titulo);
            const etiquetas = normalizar(n.etiquetas.join(' '));
            const resumen = normalizar(n.resumen);
            let puntos = 0;
            palabras.forEach((p) => {
                if (etiquetas.includes(p)) puntos += 3;
                if (titulo.includes(p)) puntos += 2;
                if (resumen.includes(p)) puntos += 1;
            });
            return { noticia: n, puntos };
        })
        .filter((r) => r.puntos > 0)
        .sort((a, b) => b.puntos - a.puntos)
        .slice(0, 2)
        .map((r) => r.noticia);
}

function consultarIA() {
    const campo = $('#pregunta-ia');
    const salida = $('#respuesta-ia');
    if (!campo || !salida) return;

    salida.replaceChildren();

    if (!campo.value.trim()) {
        salida.append(el('p', { class: 'resp-intro', text: 'Escribe una pregunta o elige uno de los temas sugeridos.' }));
        campo.focus();
        return;
    }

    const resultados = buscarNoticias(campo.value);

    if (resultados.length === 0) {
        salida.append(
            el('p', { class: 'resp-intro', text: 'No encontré una nota sobre eso en el portal. Prueba con un tema como baterías de sodio, edición genética, inteligencia artificial, patrimonio o Rubén Rada.' }),
            el('a', { href: 'noticias.html', text: 'Ver todas las noticias' })
        );
        return;
    }

    salida.append(el('p', { class: 'resp-intro', text: resultados.length > 1 ? 'Esto encontré en el portal:' : 'Esto dice el portal:' }));
    resultados.forEach((n) => {
        salida.append(
            el('article', { class: `resp-item ${claseCategoria(n)}` },
                el('h3', { text: n.titulo }),
                el('p', { text: n.resumen }),
                el('a', { href: `noticias.html#${n.id}`, text: 'Leer la noticia completa' })
            )
        );
    });
}

function iniciarAsistente() {
    const campo = $('#pregunta-ia');
    if (!campo) return;

    campo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') consultarIA();
    });

    document.querySelectorAll('.chip-sugerida').forEach((chip) => {
        chip.addEventListener('click', () => {
            campo.value = chip.dataset.pregunta;
            consultarIA();
        });
    });
}

/* ==========================================================
   NOTICIAS: listado lateral + visor
   La noticia abierta se guarda en la URL (noticias.html#n2),
   así se puede compartir el enlace y funciona el botón "Atrás".
   ========================================================== */
function mostrarNoticia(id) {
    location.hash = id;
}

function iniciarNoticias() {
    const lista = $('#lista-noticias');
    const visor = $('#contenido-noticia');
    if (!lista || !visor) return;

    const buscador = $('#buscador');
    const botonesFiltro = document.querySelectorAll('[data-filtro]');
    const mensajeVacio = $('#sin-resultados');
    let categoria = 'todas';

    function pintarLista() {
        const q = normalizar(buscador.value).trim();
        const visibles = NOTICIAS.filter((n) =>
            (categoria === 'todas' || n.categoria === categoria) &&
            (!q || normalizar(`${n.titulo} ${n.etiquetas.join(' ')}`).includes(q))
        );

        lista.replaceChildren(...visibles.map((n) =>
            el('li', {},
                el('a', { href: `#${n.id}`, 'data-id': n.id },
                    el('span', { class: `punto ${claseCategoria(n)}`, 'aria-hidden': 'true' }),
                    el('span', { class: 'nombre', text: n.titulo }),
                    el('span', { class: 'meta', text: `${n.categoria}, ${minutosLectura(n)} min de lectura` })
                )
            )
        ));

        mensajeVacio.hidden = visibles.length > 0;
        marcarActiva();
    }

    function marcarActiva() {
        const id = location.hash.slice(1);
        lista.querySelectorAll('a').forEach((a) => {
            if (a.dataset.id === id) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
        });
    }

    function pintarBienvenida() {
        document.title = 'Catálogo de Noticias - Portal Digital';
        visor.replaceChildren(
            el('div', { class: 'bienvenida-visor' },
                el('h1', { text: 'Portal de Noticias' }),
                el('p', { text: 'Selecciona una noticia del menú lateral para leer el artículo completo. Si no sabes por dónde empezar, prueba con una de estas:' }),
                el('ul', {}, ...NOTICIAS.filter((n) => ['n1', 'n2', 'n6'].includes(n.id)).map((n) =>
                    el('li', {}, el('a', { href: `#${n.id}`, text: n.titulo }))
                ))
            )
        );
    }

    function pintarNoticia(n) {
        const i = NOTICIAS.indexOf(n);
        const anterior = NOTICIAS[i - 1];
        const siguiente = NOTICIAS[i + 1];
        document.title = `${n.titulo} - Portal Digital`;

        const pasar = el('nav', { class: 'pasar', 'aria-label': 'Otras noticias' });
        if (anterior) pasar.append(el('a', { href: `#${anterior.id}`, class: 'ant' }, el('small', { text: 'Anterior' }), el('strong', { text: anterior.titulo })));
        if (siguiente) pasar.append(el('a', { href: `#${siguiente.id}`, class: 'sig' }, el('small', { text: 'Siguiente' }), el('strong', { text: siguiente.titulo })));

        visor.replaceChildren(
            el('span', { class: `chip ${claseCategoria(n)}`, text: n.categoria }),
            el('h1', { text: n.titulo }),
            el('p', { class: 'meta-nota', text: `${minutosLectura(n)} min de lectura` }),
            el('p', { class: 'lead', text: n.resumen }),
            el('div', { class: 'cuerpo' }, ...n.cuerpo.map((p) => el('p', { text: p }))),
            ...(n.borrador ? [el('p', { class: 'aviso', text: 'Texto provisional: esta nota se completará con la información final.' })] : []),
            el('ul', { class: 'etiquetas', 'aria-label': 'Temas' }, ...n.etiquetas.map((t) => el('li', { text: t }))),
            pasar
        );
    }

    function mostrar(desplazar) {
        const n = NOTICIAS.find((x) => x.id === location.hash.slice(1));
        if (n) pintarNoticia(n); else pintarBienvenida();
        marcarActiva();

        if (desplazar) {
            visor.focus({ preventScroll: true });
            // En pantallas chicas el visor queda debajo del listado: lo traemos a la vista.
            if (window.matchMedia('(max-width: 56rem)').matches) {
                visor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    botonesFiltro.forEach((b) => b.addEventListener('click', () => {
        categoria = b.dataset.filtro;
        botonesFiltro.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        pintarLista();
    }));

    buscador.addEventListener('input', pintarLista);

    $('#limpiar-filtros').addEventListener('click', () => {
        buscador.value = '';
        categoria = 'todas';
        botonesFiltro.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.filtro === 'todas')));
        pintarLista();
    });

    window.addEventListener('hashchange', () => mostrar(true));

    pintarLista();
    mostrar(false);
}

/* ==========================================================
   ARRANQUE
   ========================================================== */
iniciarInicio();
iniciarAsistente();
iniciarNoticias();
}