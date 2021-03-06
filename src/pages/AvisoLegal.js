import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const AvisoLegal = () => {
  const classes = useStyles();
  const [pageName] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [pageName]);
  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Aviso Legal</h1>
        <h2> Identificaci??n y Titularidad</h2>
        <p className={classes.paragraphStyle}>
          En cumplimiento del art??culo 10 de la Ley 34 / 2002, de 11 de julio,
          de Servicios de la Sociedad de la Informaci??n y Comercio Electr??nico,
          el Titular expone sus datos identificativos.
        </p>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>Titular: Pablo Galisteo Hern??ndez</li>
            <li>Registro mercantil: Ninguno</li>
            <li>NIF: L45828484H</li>
            <li>Domicilio: Bastuhagsv??gen, 3, Stockholm.</li>
            <li>Correo electr??nico: vitivipedia@gmail.com</li>
            <li>Sitio Web: https://www.vitivipedia.com</li>
          </ul>
        </div>
        <h3>Finalidad</h3>
        <p className={classes.paragraphStyle}>
          La finalidad del sitio web es escribir sobre la cultura del vino en
          general. Adem??s de informar y recomendar sobre los mejores vinos de
          Espa??a ordenados de una forma accesible para todos, ordenados por sus
          diferentes CC.AA.
        </p>
        <h3>Condiciones de Uso</h3>
        <p className={classes.paragraphStyle}>
          La utilizaci??n del sitio Web le otorga la condici??n de Usuario, e
          implica la aceptaci??n completa de todas las cl??usulas y condiciones de
          uso incluidas en las p??ginas:
        </p>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>Aviso Legal</li>
            <li>Pol??tica de Privacidad</li>
            <li>Pol??tica de Cookies</li>
          </ul>
        </div>
        <p className={classes.paragraphStyle}>
          Si no estuviera conforme con todas y cada una de estas cl??usulas y
          condiciones abst??ngase de utilizar este sitio Web.<br></br>
          <br></br> El acceso a este sitio Web no supone, en modo alguno, el
          inicio de una relaci??n comercial con el Titular.<br></br>
          <br></br> A trav??s de este sitio Web, el Titular le facilita el acceso
          y la utilizaci??n de diversos contenidos que el Titular o sus
          colaboradores han publicadon por medio de Internet.<br></br> <br></br>
          A tal efecto, usted est?? obligado y comprometido a NO utilizar
          cualquiera de los contenidos del sitio Web con fines o efectos
          il??citos, prohibidos en este Aviso Legal o por la legislaci??n vigente,
          lesivos de los derechos e intereses de terceros, o que de cualquier
          forma puedan da??ar, inutilizar, sobrecargar, deteriorar o impedir la
          normal utilizaci??n de los contenidos, los equipos inform??ticos o los
          documentos, archivos y toda clase de contenidos almacenados en
          cualquier equipo inform??tico propios o contratados por el Titular, de
          otros usuarios o de cualquier usuario de Internet.
        </p>
        <h3>Medidas de seguridad</h3>
        <p className={classes.paragraphStyle}>
          Los datos personales que facilite al Titular pueden ser almacenados en
          bases de datos automatizadas o no, cuya titularidad corresponde en
          exclusiva a el Titular, que asume todas las medidas de ??ndole t??cnica,
          organizativa y de seguridad que garantizan la confidencialidad,
          integridad y calidad de la informaci??n contenida en las mismas de
          acuerdo con lo establecido en la normativa vigente en protecci??n de
          datos.<br></br> <br></br>
          No obstante, debe ser consciente de que las medidas de seguridad de
          los sistemas inform??ticos en Internet no son enteramente fiables y
          que, por tanto el Titular no puede garantizar la inexistencia de virus
          u otros elementos que puedan producir alteraciones en los sistemas
          inform??ticos (software y hardware) del Usuario o en sus documentos
          electr??nicos y ficheros contenidos en los mismos aunque el Titular
          pone todos los medios necesarios y toma las medidas de seguridad
          oportunas para evitar la presencia de estos elementos da??inos.
        </p>
        <h3>Datos personales</h3>
        <p className={classes.paragraphStyle}>
          Usted puede consultar toda la informaci??n relativa al tratamiento de
          datos personales que recoge el Titular en la p??gina de la Pol??tica de
          Privacidad.
        </p>
        <h3>Contenidos</h3>
        <p className={classes.paragraphStyle}>
          El Titular ha obtenido la informaci??n, el contenido multimedia y los
          materiales incluidos en el sitio Web de fuentes que considera fiables,
          pero, si bien ha tomado todas las medidas razonables para asegurar que
          la informaci??n contenida es correcta, el Titular no garantiza que sea
          exacta, completa o actualizada. El Titular declina expresamente
          cualquier responsabilidad por error u omisi??n en la informaci??n
          contenida en las p??ginas de este sitio Web.<br></br> <br></br>
          Queda prohibido transmitir o enviar a trav??s del sitio Web cualquier
          contenido ilegal o il??cito, virus inform??ticos, o mensajes que, en
          general, afecten o violen derechos de el Titular o de terceros.
          <br></br> <br></br>
          Los contenidos del Sitio Web tienen ??nicamente una finalidad
          informativa y bajo ninguna circunstancia deben usarse ni considerarse
          como oferta de venta, solicitud de una oferta de compra ni
          recomendaci??n para realizar cualquier otra operaci??n, salvo que as?? se
          indique expresamente.
          <br></br> <br></br>
          El Titular se reserva el derecho a modificar, suspender, cancelar o
          restringir el contenido del Sitio Web, los v??nculos o la informaci??n
          obtenida a trav??s del sitio Web, sin necesidad de previo aviso.
          <br></br> <br></br>
          El Titular no es responsable de los da??os y perjuicios que pudieran
          derivarse de la utilizaci??n de la informaci??n del sitio Web o de la
          contenida en las redes sociales del Titular.
        </p>
      </div>
    </div>
  );
};

export default AvisoLegal;
