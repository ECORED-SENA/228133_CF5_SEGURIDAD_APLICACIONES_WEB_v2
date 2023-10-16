export default {
  global: {
    componenteFormativo:
      'Artefactos de seguridad para el monitoreo de seguridad orientada a aplicaciones Web',
    descripcionCurso:
      'En esta última década el avance tecnológico impulsó a las empresas a trasladar buena parte de sus actividades y servicios hacia el mundo digital por medio de la sistematización de sus procesos a través de la creación de aplicaciones web. Sin embargo, pese a las ventajas adquiridas, también se contraen sus principales desventajas ligadas a los ataques cibernéticos, virus y demás afectaciones posibles del mundo <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguridad en Aplicaciones Web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Fases para la adopción de un Plan Estratégico de Seguridad en Aplicaciones Web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Identificación del estado actual de la Seguridad en Aplicaciones Web',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Definición de los objetivos de la Seguridad en Aplicaciones Web',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Determinación del estado deseado de la Seguridad en Aplicaciones Web',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Definición de los Indicadores en Aplicaciones Web',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Definición de Métricas de Seguridad en Aplicaciones Web',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Ejecución del Plan Estratégico de la Seguridad en Aplicaciones Web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Herramientas de Monitoreo de Seguridad en Aplicaciones Web',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Medición de tráfico de red',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228133_CF05_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Definición de Métricas de Seguridad en Aplicaciones Web',
      referencia:
        '<em>OWASP Security Qualitative Metrics</em>. (s/f). Owasp.Org.',
      tipo: 'Página web',
      link: 'https://owasp.org/www-project-security-culture/v10/8-Metrics/',
    },
    {
      tema:
        'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
      referencia:
        ' WSTG: <em>The Web Security Testing Guide is a comprehensive Open Source guide to testing the security of web applications and web services</em>. (s/f).',
      tipo: 'Web',
      link: 'https://github.com/OWASP/wstg',
    },
    {
      tema:
        'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
      referencia:
        'Pereira, C. P. T.-D. [DavidPereira]. (2021, marzo 4). Curso de <em>Pentesting</em> a Aplicaciones WEB (Video 1) OWASP <em>Juice Shop</em>. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6eAJ1dinee0&t=690s',
    },
    {
      tema:
        'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
      referencia:
        'Tech, T. [TaggartTech]. (2021, septiembre 8). #AttackOnTuesday | OWASP ZAP/<em>Juice Shop</em>. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4CNWTkAbT4o&t=801s',
    },
    {
      tema:
        'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
      referencia:
        'UskoKruM [UskoKruM2010]. (2021, agosto 19). Cómo Descargar e Instalar Node.js en Windows 10 | Explicación Sencilla. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ipmhBYqIP44&t=4s',
    },
    {
      tema:
        'El marco de conocimiento de seguridad (<em>Security Knowledge Framework</em>)',
      referencia:
        'Eber, D. [donEber]. (2021, junio 17). Instalación de Git en Windows paso a paso | [2021| 2022]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cYLapo1FFmA&t=2s',
    },
  ],
  glosario: [
    {
      termino: 'API <em>Endpoints</em>',
      significado:
        'Son las URLs de un API o un <em>backend</em> que responden a una petición.',
    },
    {
      termino: 'API <em>REST</em>',
      significado:
        'Es una arquitectura que permite la interacción con los servicios web de RESTful.',
    },
    {
      termino: 'Aplicaciones POS',
      significado:
        'Son un tipo de programas destinados a sistematizar el control de ventas e inventarios del punto físico de un negocio.',
    },
    {
      termino: 'Ataques Oportunistas',
      significado:
        'Es un tipo de ataque a un sistema <em>software</em> que aprovecha algún punto vulnerable que no ha sido identificado previamente.',
    },
    {
      termino: '<em>Bearer Token</em>',
      significado:
        'Es un <em>token</em> de acceso seguro que contiene las credenciales de seguridad para la gestión de la sesión e identificación del usuario.',
    },
    {
      termino: 'Bombas lógicas de tiempo',
      significado:
        'Es un ataque malicioso programado a una fecha precisa a los sistemas.',
    },
    {
      termino: 'Cámara de Compensación Automatizada (ACH)',
      significado:
        'Es un tipo de tecnología que permite procesar transacciones entre bancos y otras instituciones financieras.',
    },
    {
      termino: 'Indicadores Claves de Rendimiento (KPI)',
      significado:
        'Es una medida del nivel de rendimiento o desempeño de un proceso.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'Es una práctica ilegal que consiste en obtener información privada o confidencial a través de la manipulación de las personas y sus cuentas de usuario.',
    },
    {
      termino: 'WYSIWYG',
      significado:
        '<b>Lo que ves es lo que tienes <em>(What You See Is What You Get )</b></em>, esto se aplica a los procesadores de texto y otros editores de texto con formato que permiten escribir un documento mostrando directamente el resultado final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Eber, D. [donEber]. (2021, junio 17). Instalación de Git en Windows paso a paso | [2021| 2022]. Youtube.',
      link: 'https://www.youtube.com/watch?v=cYLapo1FFmA',
    },
    {
      referencia:
        'G. V. Ríos, John A. Bohada e I. A. Delgado, “Gestión de seguridad de la información en las organizaciones”, en Investigación e Innovación en Ingeniería del <em>Software</em>. Medellín: Tecnológico de Antioquia, vol. 2, 2018, pp. 111-121.',
      link: '',
    },
    {
      referencia: 'Git. Git--fast-version-control (2022).',
      link: 'https://git-scm.com/download/win',
    },
    {
      referencia:
        'M. Seyyar, F. Çatak and E. Gül, “Detection of attack-targeted scans from the Apache HTTP Server access logs”,  Appl. Comput. Inf., vol. 14, N.º 1, pp. 28-36, 2018.',
      link: '',
    },
    {
      referencia:
        'NodeJs. [En línea] 17 de mayo de 2022. [Citado el: 17 de mayo de 2022.]',
      link: 'https://nodejs.org/es/download/',
    },
    {
      referencia:
        'Pereira, C. P. T.-D. [DavidPereira]. (2021, marzo 4). Curso de Pentesting a Aplicaciones WEB (Video 1) OWASP <em>Juice Shop</em>. Youtube.',
      link: 'https://www.youtube.com/watch?v=6eAJ1dinee0',
    },
    {
      referencia:
        'R. Rodriguez, H. Alberto. “The Concept of Corporate Strategy. Innovar: Revista de Ciencias Administrativas y Sociales”. 19, 2009.',
      link: '',
    },
    {
      referencia:
        'S. A. Pineda, John A. Bohada y M. L. Pineda, “Ingeniería Social en Instituciones de Educación Superior”, Revista Colombiana de Tecnologías de Avanzada, vol. 2, N.º 32, pp. 52-61, 2018.',
      link: '',
    },
    {
      referencia:
        'Security Knowledge Framework. [En línea] 15 de mayo de 2022. [Citado el: 15 de mayo de 2022.]',
      link: 'https://www.securityknowledgeframework.org',
    },
    {
      referencia:
        'OWASP. 2021. [En línea] 11 de mayo de 2022. [Citado el: 11 de mayo de 2022.]',
      link: 'https://owasp.org/',
    },
    {
      referencia:
        'OWASP. Top Ten. [En línea] 10 de mayo de 2022. [Citado el: 10 de mayo de 2022.]',
      link: 'https://owasp.org/www-project-top-ten/',
    },
    {
      referencia:
        'OWASP <em>Zed Attack Proxy</em> (ZAP). [En línea] 15 de mayo de 2022. [Citado el: 15 de mayo de 2022.]',
      link: 'https://www.zaproxy.org',
    },
    {
      referencia:
        'OWASP <em>Juice Shop</em>. [En línea] 15 de mayo de 2022. [Citado el: 15 de mayo de 2022.]',
      link: 'https://owasp.org/www-project-juice-shop/',
    },
    {
      referencia:
        'UskoKruM [UskoKruM2010]. (2021, agosto 19). Cómo Descargar e Instalar Node.js en Windows 10 | Explicación Sencilla . Youtube.',
      link: 'https://www.youtube.com/watch?v=ipmhBYqIP44',
    },
    {
      referencia:
        'V. Mouli and K. P. Jevitha, “Web Services Attacks and Security- ASystematic Literature Review”,  Procedia Comp. Sci., vol. 93, pp. 870-877, 2016.',
      link: '',
    },
    {
      referencia:
        'wstg: The Web Security Testing Guide is a comprehensive Open Source guide to testing the security of web applications and web services. (s/f).',
      link: '',
    },
    {
      referencia:
        'Pries, R., et al. Traffic Measurement and Analysis of a Broadband Wireless Internet Access. In Vehicular Technology Conference, 2009. VTC Spring 2009. IEEE 69th. 2009.',
      link: '',
    },
    {
      referencia:
        'Xinyu, X. and S. Mishra. Where is the tight link in a home wireless broadband environment? in Modeling, Analysis & Simulation of Computer and Telecommunication Systems, 2009. MASCOTS 09. IEEE International Symposium on. 2009.',
      link: '',
    },
    {
      referencia:
        'Dabir, A. and A. Matrawy. Bottleneck Analysis of Traffic Monitoring using Wireshark. in Innovations in Information Technology, 2007. IIT 07. 4th International Conference on. 2007.',
      link: '',
    },
    {
      referencia:
        'Shaoqiang, W., X. DongSheng, and Y. ShiLiang. Analysis and application of Wireshark in TCP/IP protocol teaching. in E-Health Networking, Digital Ecosystems and Technologies (EDT), 2010 International Conference on. 2010.',
      link: '',
    },
    {
      referencia:
        'Francesco Fusco, L.D., Joseph Gasparakis. Towards Monitoring Programmability in the Future Internet: challenges and solutions. 2010.',
      link: '',
    },
    {
      referencia:
        'Microsoft. Microsoft Message Analyzer Operating Guide. [En línea] 21 de junio de 2022. [Citado el: 21 de junio de 2022.]',
      link: 'https://technet.microsoft.com/enus/library/jj649776.aspx',
    },
    {
      referencia:
        'PRTG Network Monitor. [En línea] 21 de junio de 2022. [Citado el: 21 de junio de 2022.]:',
      link: 'https://www.paessler.com/manuals/prtg',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Danny Alejandro Solano',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
