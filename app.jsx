import React, { useState, useEffect, useRef, useMemo } from 'react';
import './styles.css';

/* ==========================================================
   BASE DE DATOS DE NOTICIAS (mismo array que app.js)
   ========================================================== */
const NOTICIAS_BASE = [
  {
    id:'n1', cat:'Tecnología', titulo:'MIT: Tecnologías 2026',
    corto:'La lista del MIT anticipa infraestructuras, energía y medicina de precisión.',
    resumen:'El MIT Technology Review presentó en el festival SXSW de Austin su selección de las diez tecnologías más disruptivas de 2026...',
    claves:['mit','technology review','sxsw','austin','tecnologias disruptivas','2026'],
    imagen:'image ia/noticia-1.jpg',
    cuerpo:'El MIT Technology Review presentó su esperada selección de las diez tecnologías más disruptivas de 2026...\nLa lista de este año marca un cambio significativo...\nEntre los avances destacados aparecen las baterías de sodio...\nSegún los editores, la lista no busca simplemente anticipar tendencias...'
  },
  {
    id:'n2', cat:'Tecnología', titulo:'Baterías de Sodio',
    corto:'Más abundante y barato que el litio, el sodio puede abaratar el almacenamiento.',
    resumen:'Las baterías de sodio podrían reducir la dependencia mundial del litio...',
    claves:['baterias de sodio','sodio','litio','energia','almacenamiento','renovables'],
    imagen:'image ia/noticia-2.jpg',
    cuerpo:'Las baterías de sodio se convirtieron en una de las principales novedades...\nEl sodio presenta una ventaja fundamental...\nAunque todavía enfrenta desafíos...\nEl informe también destaca las baterías de estado sólido...'
  },
  {
    id:'n3', cat:'Tecnología', titulo:'Edición Genética',
    corto:'El base editing corrige mutaciones puntuales, pero abre debates bioéticos.',
    resumen:'La medicina de precisión y el base editing permiten corregir mutaciones puntuales del ADN...',
    claves:['edicion genetica','base editing','adn','gen','medicina de precision','bioetica'],
    imagen:'image ia/noticia-3.jpg',
    cuerpo:'La medicina de precisión ocupa un lugar destacado...\nEl objetivo es tratar enfermedades hereditarias poco frecuentes...\nSin embargo, el progreso científico también plantea interrogantes...\nEl desafío será combinar innovación médica...'
  },
  {
    id:'n4', cat:'Tecnología', titulo:'IA en Software',
    corto:'Los asistentes de IA ya escriben, prueban y documentan código.',
    resumen:'La inteligencia artificial se instaló en el centro del desarrollo de software...',
    claves:['inteligencia artificial','ia','software','programacion','codigo','centros de datos'],
    imagen:'image ia/noticia-4.jpg',
    cuerpo:'La inteligencia artificial dejó de ser una herramienta auxiliar...\nEl cambio también se percibe en la infraestructura...\nEl debate, sin embargo, no es solo técnico...'
  },
  {
    id:'n5', cat:'Tecnología', titulo:'Estaciones Espaciales',
    corto:'Plataformas orbitales privadas y sistemas de captura de carbono.',
    resumen:'Con el retiro de la Estación Espacial Internacional en el horizonte...',
    claves:['estaciones espaciales','espacio','orbita','captura de carbono','clima'],
    imagen:'image ia/noticia-5.jpg',
    cuerpo:'Las estaciones espaciales comerciales aparecen en la lista...\nEl informe también menciona los sistemas de captura de carbono...\nEl cruce entre ambas líneas abre preguntas regulatorias...'
  },
  {
    id:'n6', cat:'Cultura', titulo:'Día del Patrimonio 2025',
    corto:'Museos abiertos y recorridos barriales con el bicentenario como eje.',
    resumen:'El Día del Patrimonio convocó a miles de personas...',
    claves:['dia del patrimonio','patrimonio','bicentenario','museos','uruguay'],
    imagen:'image ia/noticia-6.jpg',
    cuerpo:'El Día del Patrimonio volvió a convocar a miles de personas...\nLa jornada incluyó aperturas especiales de museos...\nPara los organizadores, el objetivo es que el patrimonio deje de percibirse...'
  },
  {
    id:'n7', cat:'Cultura', titulo:'Libro Sanguinetti',
    corto:'“Memorias de una pasión”, un recorrido personal por el arte uruguayo.',
    resumen:'La presentación del libro “Memorias de una pasión” reunió a artistas...',
    claves:['sanguinetti','libro','arte','artes visuales','uruguay'],
    imagen:'image ia/noticia-7.jpg',
    cuerpo:'La presentación del libro “Memorias de una pasión” reunió a un público diverso...\nEl volumen propone un recorrido personal por la historia del arte uruguayo...\nLos organizadores anunciaron que el libro estará disponible en bibliotecas públicas...'
  },
  {
    id:'n8', cat:'Cultura', titulo:'Imputación Bellas Artes',
    corto:'Un caso judicial reabre el debate sobre los límites de la expresión en la educación.',
    resumen:'La imputación de un docente por expresiones realizadas en un espacio de formación artística...',
    claves:['bellas artes','imputacion','libertad de expresion','docente','educacion'],
    imagen:'image ia/noticia-8.jpg',
    cuerpo:'La imputación de un docente por expresiones realizadas en un espacio de formación artística...\nEl caso reavivó una discusión recurrente...\nDesde el portal seguimos el desarrollo del caso...'
  },
  {
    id:'n9', cat:'Cultura', titulo:'Movida Joven',
    corto:'Convocatoria para artistas y colectivos jóvenes en varias disciplinas.',
    resumen:'Movida Joven abrió una nueva convocatoria para artistas y colectivos...',
    claves:['movida joven','jovenes','artistas','convocatoria','danza'],
    imagen:'image ia/noticia-9.jpg',
    cuerpo:'Movida Joven abrió una nueva edición de su convocatoria...\nLas inscripciones se organizan por categorías...\nDesde la organización señalaron que la prioridad es ampliar la participación...'
  },
  {
    id:'n10', cat:'Cultura', titulo:'Homenaje a Rubén Rada',
    corto:'El legado del Negro en la música uruguaya, repasado por varias generaciones.',
    resumen:'Un homenaje a Rubén Rada reunió a músicos, investigadores y público...',
    claves:['ruben rada','el negro','musica','candombe','uruguay','homenaje'],
    imagen:'image ia/noticia-10.jpg',
    cuerpo:'Un homenaje a Rubén Rada reunió a músicos, investigadores y público...\nLos participantes coincidieron en señalar su capacidad para cruzar géneros...\nLa actividad incluyó interpretaciones en vivo...'
  }
];

const PAGINAS_VALIDAS = ['inicio','noticias','asistente','contacto','admin','apendice'];
const CLAVE_ALMACEN = 'jc_noticias_admin';
const STOPWORDS = ['que','cual','cuales','como','donde','cuando','por','para','con','los','las','del','una','uno','unos','unas','sobre','hay','noticias','noticia','dice','dime','busca','buscar','muestra','mostrar','quiero','saber','es','son','el','la','en','de','y','o'];

/* ==========================================================
   UTILIDADES
   ========================================================== */
const normalizar = (t) => String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
const escapar = (t) => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function cargarNotasAdmin(){
  try{
    const g = JSON.parse(localStorage.getItem(CLAVE_ALMACEN) || '[]');
    return Array.isArray(g) ? g : [];
  }catch{ return []; }
}

/* ==========================================================
   COMPONENTE PRINCIPAL
   ========================================================== */
export default function App(){
  const [pagina, setPagina] = useState('inicio');
  const [notasAdmin, setNotasAdmin] = useState(() => cargarNotasAdmin());
  const [notaActiva, setNotaActiva] = useState(null);
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const [preguntaIA, setPreguntaIA] = useState('');
  const [respuestaIA, setRespuestaIA] = useState('');
  const [mensajes, setMensajes] = useState(() => parseInt(localStorage.getItem('jc_mensajes') || '0',10));
  const visorRef = useRef(null);

  const todas = useMemo(() => [...NOTICIAS_BASE, ...notasAdmin], [notasAdmin]);
  const tec = todas.filter(n => n.cat === 'Tecnología').length;
  const cul = todas.filter(n => n.cat === 'Cultura').length;

  /* Navegación */
  useEffect(() => {
    const hash = window.location.hash.replace('#','');
    if(PAGINAS_VALIDAS.includes(hash)) setPagina(hash);
  }, []);

  useEffect(() => {
    window.location.hash = pagina;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pagina]);

  /* Abrir nota */
  const abrirNota = (id) => {
    setNotaActiva(id);
    if(pagina !== 'noticias') setPagina('noticias');
    setTimeout(() => {
      const el = document.getElementById(id);
      if(el){
        el.focus();
        const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
        window.scrollTo({ top: y, behavior: