import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    fontFamily: 'Lora',
    paddingBottom: '11em'
  },
  marginPage: {
    width: '640px',
    [theme.breakpoints.up('md')]: {
      margin: '0px 64px'
    },
    [theme.breakpoints.down('md')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px 24px'
    }
  },
  titleStyle: {
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: '2.8em'
  },
  subtitle: {
    fontWeight: 300,
    color: '#888'
  },
  articleInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorContainer: {
    display: 'flex'
  },
  authorStyle: {
    marginLeft: '10px',
    fontSize: '0.9em',
    color: '#888'
  },

  mainImgStyle: {
    width: '100%',
    height: 'auto'
  },
  imgContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3em'
  },
  paragraphStyleContainer: {
    [theme.breakpoints.up('md')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    }
  },
  paragraphStyle: {
    [theme.breakpoints.up('md')]: {
      lineHeight: '32px'
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '28px'
    }
  },
  responsiveImgs: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      topMargin: '1em'
    }
  },
  responsiveImgBottle: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '35%',
      topMargin: '1em'
    }
  },
  responsiveImglong: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const PoliticaPrivacidad = () => {
  const [pageName] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [pageName]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Pol??tica de privacidad</h1>
        <p className={classes.paragraphStyle}>
          Vitivipedia te informa sobre su Pol??tica de Privacidad respecto del
          tratamiento y protecci??n de los datos de car??cter personal de los
          usuarios y clientes que puedan ser recabados por la navegaci??n o
          contrataci??n de servicios a trav??s del sitio Web Vitivipedia.<br></br>
          <br></br>
          En este sentido, el Titular garantiza el cumplimiento de la normativa
          vigente en materia de protecci??n de datos personales, reflejada en la
          Ley Org??nica 15???1999, de 13 de diciembre, de Protecci??n de Datos de
          Car??cter Personal (LOPD), y al Real Decreto 1720???2007, de 21 de
          diciembre, conocido como el Reglamento de desarrollo de la LOPD.
          Cumple tambi??n con el Reglamento (UE) 2016???679 del Parlamento Europeo
          y del Consejo de 27 de abril de 2016 relativo a la protecci??n de las
          personas f??sicas (RGPD).
          <br></br>
          <br></br>
          El uso de sitio Web implica la aceptaci??n de esta Pol??tica de
          Privacidad as?? como las condiciones incluidas en el Aviso Legal.
        </p>
        <h2>Identidad del responsable</h2>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>Titular y nombre comercial: Vitivipedia</li>
            <li>Domicilio:: Bastuhagsvagen 3</li>
            <li>Correo electr??nico: vitivipedia@gmail.com</li>
            <li>Sitio Web: https://www.vitivipedia.com</li>
          </ul>
        </div>
        <h3>Principios aplicados en el tratamiento de datos</h3>
        <p className={classes.paragraphStyle}>
          En el tratamiento de tus datos personales, el Titular aplicar?? los
          siguientes principios que se ajustan a las exigencias del nuevo
          reglamento europeo de protecci??n de datos:
        </p>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>
              <b>Principio de licitud, lealtad y transparencia: </b>El Titular
              siempre requerir?? el consentimiento para el tratamiento de tus
              datos personales que puede ser para uno o varios fines espec??ficos
              sobre los que te informar?? previamente con absoluta transparencia.
            </li>
            <br></br>
            <li>
              <b>Principio de minimizaci??n de datos: </b>El Titular te
              solicitar?? solo los datos estrictamente necesarios para el fin o
              los fines que los solicita.
            </li>
            <br></br>
            <li>
              <b>Principio de limitaci??n del plazo de conservaci??n: </b>Los
              datos se mantendr??n durante el tiempo estrictamente necesario para
              el fin o los fines del tratamiento.<br></br>
              El Titular te informar?? del plazo de conservaci??n correspondiente
              seg??n la finalidad. En el caso de suscripciones, el Titular
              revisar?? peri??dicamente las listas y eliminar?? aquellos registros
              inactivos durante un tiempo considerable.
            </li>
            <br></br>
            <li>
              <b>Principio de integridad y confidencialidad: </b>Tus datos ser??n
              tratados de tal manera que su seguridad, confidencialidad e
              integridad est?? garantizada.<br></br> Debes saber que el Titular
              toma las precauciones necesarias para evitar el acceso no
              autorizado o uso indebido de los datos de sus usuarios por parte
              de terceros.
            </li>
            <br></br>
          </ul>
        </div>

        <h3>Obtenci??n de datos personales</h3>
        <p className={classes.paragraphStyle}>
          Para navegar por vitivipedia.com no es necesario que facilites ning??n
          dato personal. Los casos en los que s?? proporcionas tus datos
          personales son los siguientes:<br></br> <br></br>
          <ul className={classes.paragraphStyle}>
            <li>
              Al contactar a trav??s de los formularios de contacto o enviar un
              correo electr??nico.
            </li>
            <li>Al realizar un comentario en un art??culo o p??gina.</li>
          </ul>
        </p>
        <h3>Tus derechos</h3>
        <p className={classes.paragraphStyle}>
          El Titular te informa que sobre tus datos personales tienes derecho a:
        </p>
        <ul className={classes.paragraphStyle}>
          <li>Solicitar el acceso a los datos almacenados.</li>
          <li>Solicitar una rectificaci??n o la cancelaci??n.</li>
          <li>Solicitar la limitaci??n de su tratamiento.</li>
          <li>Oponerte al tratamiento.</li>
          <li>Solicitar la portabilidad de tus datos.</li>
        </ul>
        <br></br>
        <p className={classes.paragraphStyle}>
          El ejercicio de estos derechos es personal y por tanto debe ser
          ejercido directamente por el interesado, solicit??ndolo directamente al
          Titular, lo que significa que cualquier cliente, suscriptor o
          colaborador que haya facilitado sus datos en alg??n momento puede
          dirigirse al Titular y pedir informaci??n sobre los datos que tiene
          almacenados y c??mo los ha obtenido, solicitar la rectificaci??n de los
          mismos, solicitar la portabilidad de sus datos personales, oponerse al
          tratamiento, limitar su uso o solicitar la cancelaci??n de esos datos
          en los ficheros del Titular.
        </p>
        <br></br>
        <br></br>
        <p className={classes.paragraphStyle}>
          Para ejercitar tus derechos de acceso, rectificaci??n, cancelaci??n,
          portabilidad y oposici??n tienes que enviar un correo electr??nico a
          vitivipedia@gmail.com junto con la prueba v??lida en derecho como una
          fotocopia del D.N.I. o equivalente.
        </p>
        <br></br>
        <br></br>
        <p className={classes.paragraphStyle}>
          Tienes derecho a la tutela judicial efectiva y a presentar una
          reclamaci??n ante la autoridad de control, en este caso, la Agencia
          Espa??ola de Protecci??n de Datos, si consideras que el tratamiento de
          datos personales que te conciernen infringe el Reglamento.
        </p>
        <h3>Finalidad del tratamiento de datos personales</h3>
        <p className={classes.paragraphStyle}>
          Cuando te conectas al sitio Web para mandar un correo al Titular, te
          suscribes a su bolet??n o realizas una contrataci??n, est??s facilitando
          informaci??n de car??cter personal de la que el responsable es el
          Titular. Esta informaci??n puede incluir datos de car??cter personal
          como pueden ser tu direcci??n IP, nombre y apellidos, direcci??n f??sica,
          direcci??n de correo electr??nico, n??mero de tel??fono, y otra
          informaci??n. Al facilitar esta informaci??n, das tu consentimiento para
          que tu informaci??n sea recopilada, utilizada, gestionada y almacenada
          por vitivipedia.com , s??lo como en la presente Pol??tica de Privacidad.
        </p>
        <br></br>
        <br></br>
        <p className={classes.paragraphStyle}>
          Los datos personales y la finalidad del tratamiento por parte del
          Titular es diferente seg??n el sistema de captura de informaci??n:
        </p>
        <ul className={classes.paragraphStyle}>
          <li>
            <b>Formularios de contacto:</b> El Titular solicita datos personales
            entre los que pueden estar: Nombre y apellidos, direcci??n de correo
            electr??nico y direcci??n de tu sitio Web con la finalidad de
            responder a tus consultas. Por ejemplo, el Titular utiliza esos
            datos para dar respuesta a tus mensajes, dudas, quejas, comentarios
            o inquietudes que puedas tener relativas a la informaci??n incluida
            en el sitio Web, los servicios que se prestan a trav??s del sitio
            Web, el tratamiento de tus datos personales, cuestiones referentes a
            los textos legales incluidos en el sitio Web, as?? como cualquier
            otra consulta que puedas tener y que no est?? sujeta a las
            condiciones del sitio Web o de la contrataci??n.
          </li>
          <p>
            Existen otras finalidades por las que el Titular trata tus datos
            personales:
          </p>
          <li>
            Para garantizar el cumplimiento de las condiciones recogidas en el
            la ley aplicable. Esto puede incluir el desarrollo de herramientas y
            algoritmos que ayuden a este sitio Web a garantizar la
            confidencialidad de los datos personales que recoge.
          </li>
          <li>
            Para apoyar y mejorar los servicios que ofrece este sitio Web.
          </li>
          <li>
            Para analizar la navegaci??n. El Titular recoge otros datos no
            identificativos que se obtienen mediante el uso de cookies que se
            descargan en tu ordenador cuando navegas por el sitio Web cuyas
            caracter??sticas y finalidad est??n detalladas en la Pol??tica de
            Cookies.
          </li>
          <li>
            Para gestionar las redes sociales. El Titular tiene presencia en
            redes sociales. Si te haces seguidor en las redes sociales del
            Titular el tratamiento de los datos personales se regir?? por este
            apartado, as?? como por aquellas condiciones de uso, pol??ticas de
            privacidad y normativas de acceso que pertenezcan a la red social
            que proceda en cada caso y que has aceptado previamente.
          </li>
        </ul>
        <p className={classes.paragraphStyle}>
          El Titular tratar?? tus datos personales con la finalidad de
          administrar correctamente su presencia en la red social, informarte de
          sus actividades, productos o servicios, as?? como para cualquier otra
          finalidad que las normativas de las redes sociales permitan.<br></br>
          <br></br> En ning??n caso el Titular utilizar?? los perfiles de
          seguidores en redes sociales para enviar publicidad de manera
          individual.
        </p>
        <h3>Seguridad de los datos personales</h3>
        <p className={classes.paragraphStyle}>
          Para proteger tus datos personales, el Titular toma todas las
          precauciones razonables y sigue las mejores pr??cticas de la industria
          para evitar su p??rdida, mal uso, acceso indebido, divulgaci??n,
          alteraci??n o destrucci??n de los mismos.
        </p>
        <h3>Contenido de otros sitios web</h3>
        <p className={classes.paragraphStyle}>
          Las p??ginas de este sitio Web pueden incluir contenido incrustado (por
          ejemplo, v??deos, im??genes, art??culos, etc.). El contenido incrustado
          de otras web se comporta exactamente de la misma manera que si
          hubieras visitado la otra web.<br></br>
          <br></br> Estos sitios Web pueden recopilar datos sobre ti, utilizar
          cookies, incrustar un c??digo de seguimiento adicional de terceros, y
          supervisar tu interacci??n usando este c??digo.
        </p>
        <h3>Pol??tica de Cookies</h3>
        <p className={classes.paragraphStyle}>
          Para que este sitio Web funcione correctamente necesita utilizar
          cookies, que es una informaci??n que se almacena en tu navegador web.
          El objetivo de la cookie es adaptar el contenido de la web a tu perfil
          y necesidades, sin cookies los servicios ofrecidos por cualquier
          p??gina se ver??an mermados notablemente.
          <br></br>
          <br></br>
          <b>Cookies utilizadas en este sitio web</b>
          <br></br>
          <br></br>
          Este sitio web utiliza las siguientes <b>cookies propias:</b>
        </p>
        <ul className={classes.paragraphStyle}>
          <li>
            Cookies de sesi??n, para garantizar que los usuarios que escriban
            comentarios en el blog sean humanos y no aplicaciones automatizadas.
            De esta forma se combate el spam.
          </li>
        </ul>
        <br></br>
        <p className={classes.paragraphStyle}>
          Este sitio web utiliza las siguientes <b>cookies de terceros:</b>
        </p>
        <br></br>
        <ul className={classes.paragraphStyle}>
          <li>
            Google Analytics: Almacena cookies para poder elaborar estad??sticas
            sobre el tr??fico y volumen de visitas de esta web. Al utilizar este
            sitio web est??s consintiendo el tratamiento de tu informaci??n por
            Google.
          </li>
          <li>
            Redes sociales: Cada red social utiliza sus propias cookies para que
            puedas pinchar en botones del tipo Me gusta o Compartir.
          </li>
        </ul>
        <p className={classes.paragraphStyle}>
          <b>Desactivaci??n o eliminaci??n de cookies</b>
          <br></br>
          En cualquier momento podr??s ejercer tu derecho de desactivaci??n o
          eliminaci??n de cookies de este sitio web. Estas acciones se realizan
          de forma diferente en funci??n del navegador que est??s usando. A
          continuaci??n encontrar??s las gu??as para los navegadores m??s populares:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://support.google.com/chrome/answer/95647?hl=es-419"
          >
            Google Chrome
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es"
          >
            Mozilla Firefox
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
          >
            Microsoft Edge
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
          >
            Safari
          </a>
          .{' '}
        </p>
        <h3>Legitimaci??n para el tratamiento de datos</h3>
        <p className={classes.paragraphStyle}>
          La base legal para el tratamiento de tus datos es: el consentimiento.
          <br></br>
          Para contactar con el Titular, suscribirte a un bolet??n o realizar
          comentarios en este sitio Web tienes que aceptar la presente Pol??tica
          de Privacidad.
        </p>
        <h3>Categor??as de datos personales</h3>
        <p className={classes.paragraphStyle}>
          Las categor??as de datos personales que trata el Titular son:
          <br></br> -Datos identificativos.
        </p>
        <h3>Conservaci??n de datos personales</h3>
        <p className={classes.paragraphStyle}>
          Los datos personales que proporciones al Titular se conservar??n hasta
          que solicites su supresi??n.
        </p>
        <h3>Destinatarios de datos personales</h3>
        <p className={classes.paragraphStyle}>
          Google Analytics es un servicio de anal??tica web prestado por Google,
          Inc., una compa????a de Delaware cuya oficina principal est?? en 1600
          Amphitheatre Parkway, Mountain View (California), CA 94043, Estados
          Unidos (???Google???). Encontrar??s m??s informaci??n en:
          https://analytics.google.com Google Analytics utiliza ???cookies???, que
          son archivos de texto ubicados en tu ordenador, para ayudar al Titular
          a analizar el uso que hacen los usuarios del sitio Web. La informaci??n
          que genera la cookie acerca del uso del sitio Web (incluyendo tu
          direcci??n IP) ser?? directamente transmitida y archivada por Google en
          los servidores de Estados Unidos.
        </p>
        <h3>Navegaci??n web</h3>
        <p className={classes.paragraphStyle}>
          Al navegar por vitivipedia.com se pueden recoger datos no
          identificativos, que pueden incluir, la direcci??n IP, geolocalizaci??n,
          un registro de c??mo se utilizan los servicios y sitios, h??bitos de
          navegaci??n y otros datos que no pueden ser utilizados para
          identificarte.<br></br>
          <br></br> El sitio Web utiliza los siguientes servicios de an??lisis de
          terceros: -Google Analytics<br></br>
          <br></br>
          El Titular utiliza la informaci??n obtenida para obtener datos
          estad??sticos, analizar tendencias, administrar el sitio, estudiar
          patrones de navegaci??n y para recopilar informaci??n demogr??fica.
        </p>
        <h3>Exactitud y veracidad de los datos personales</h3>
        <p className={classes.paragraphStyle}>
          Te comprometes a que los datos facilitados al Titular sean correctos,
          completos, exactos y vigentes, as?? como a mantenerlos debidamente
          actualizados.
          <br></br>
          Como Usuario del sitio Web eres el ??nico responsable de la veracidad y
          correcci??n de los datos que remitas al sitio exonerando a el Titular
          de cualquier responsabilidad al respecto.
        </p>
        <h3>Aceptaci??n y consentimiento</h3>
        <p className={classes.paragraphStyle}>
          Como Usuario del sitio Web declaras haber sido informado de las
          condiciones sobre protecci??n de datos de car??cter personal, aceptas y
          consientes el tratamiento de los mismos por parte de el Titular en la
          forma y para las finalidades indicadas en esta Pol??tica de Privacidad.
        </p>
        <h3>Revocabilidad</h3>
        <p className={classes.paragraphStyle}>
          Para ejercitar tus derechos de acceso, rectificaci??n, cancelaci??n,
          portabilidad y oposici??n tienes que enviar un correo electr??nico a
          vitivipedia@gmail.com junto con la prueba v??lida en derecho como una
          fotocopia del D.N.I. o equivalente.
          <br></br>
          <br></br>
          El ejercicio de tus derechos no incluye ning??n dato que el Titular
          est?? obligado a conservar con fines administrativos, legales o de
          seguridad.
        </p>
        <h3>Cambios en la Pol??tica de Privacidad</h3>
        <p className={classes.paragraphStyle}>
          El Titular se reserva el derecho a modificar la presente Pol??tica de
          Privacidad para adaptarla a novedades legislativas o
          jurisprudenciales, as?? como a pr??cticas de la industria.<br></br>
          <br></br> Estas pol??ticas estar??n vigentes hasta que sean modificadas
          por otras debidamente publicadas.
        </p>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
