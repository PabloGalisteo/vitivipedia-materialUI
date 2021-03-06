import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import bodega from '../blog-fotos/espumosoElaboracion/bodega-champagne.jpg';
import botellasCava from '../blog-fotos/espumosoElaboracion/botellas-cava.jpg';
import dibujoChampagne from '../blog-fotos/espumosoElaboracion/champagne-botella-dibujo.jpg';
import taittinger from '../blog-fotos/espumosoElaboracion/champagne-taittinger.jpg';
import champagne from '../blog-fotos/espumosoElaboracion/champagne.jpg';
import levaduraCongelada from '../blog-fotos/espumosoElaboracion/congelacion-levadura.jpg';
import gyropalette from '../blog-fotos/espumosoElaboracion/gyropalette.jpg';
import levadura from '../blog-fotos/espumosoElaboracion/levadura-vino-espumoso.jpg';
import levaduraSalta from '../blog-fotos/espumosoElaboracion/levadura.jpg';
import pupitre from '../blog-fotos/espumosoElaboracion/pupitre-remuage.jpg';
import tapon from '../blog-fotos/espumosoElaboracion/tapon-jaula.jpg';
import uvas from '../blog-fotos/espumosoElaboracion/uvas.jpg';
import vinoBlanco from '../blog-fotos/elaboracionBlanco/vino-blanco.jpg';
import embotelladora from '../blog-fotos/elaboracionBlanco/embotelladora-vino.jpg';

import SocialMediaIcons from '../components/ui/SocialMediaIcons';

import Pablo from '../blog-fotos/pablo.png';

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
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const ElaboracionEspumoso = props => {
  const classes = useStyles();

  const [getTitle] = useState('??Qu?? es el vino espumoso y c??mo se elabora?');

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>{getTitle}</h1>
        <h2 className={classes.subtitle}>El proceso paso a paso.</h2>
        <div className={classes.articleInfo}>
          <div className={classes.authorContainer}>
            <div className={classes.avatarStyle}>
              <Avatar img src={Pablo} alt="Pablo" />
            </div>

            <div className={classes.authorStyle}>
              <p>Pablo Galisteo</p>
            </div>
          </div>
          <SocialMediaIcons title={getTitle} />
        </div>
        <div className={classes.imgContainerStyle}>
          <img
            className={classes.mainImgStyle}
            src={dibujoChampagne}
            alt="champagne"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso es un vino de calidad que suele elaborarse con el
            m??todo cl??sico o m??todo tradicional o tambi??n denominado como
            ''m??todo champenoise''. <br></br>
            <br></br>Se trata de un vino que como su propio nombre indica,
            contiene gas carb??nico (Co2), el cual se produce de forma natural en
            la segunda fermentaci??n en botella. <br></br>
            <br></br>Aqu?? te explico su elaboraci??n de forma gr??fica.<br></br>
            <br></br> La base para la elaboraci??n de un vino espumoso seg??n el
            m??todo tradicional es un vino tranquilo.<br></br>
            <br></br> Los vinos espumosos son normalmente mezclas de diferentes
            vinos y variedades. Esto se conoce como cuv??, que pueden ser de
            diferente a??adas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgBottle}
            src={vinoBlanco}
            alt="vino blanco"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El siguiente paso es a??adir el licor de tiraje al vino. Consiste en
            a??adir un vino muy azucarado y levaduras.<br></br>
            <br></br> A continuaci??n sellaremos las botellas con una chapa. Las
            levaduras crear??n una segunda fermentaci??n gracias al az??car. Pero
            como el gas carb??nico no puede escapar, se integrar?? en el vino.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={embotelladora}
            alt="licor de tiraje"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Despu??s de a??adir el licor de tiraje, el futuro vino espumoso
            permanecer?? en bodegas dise??adas para su crianza. Aqu?? el vino
            descansa sobre sus propias lias (levaduras).<br></br>
            <br></br> En este proceso sucede la magia: el vino se llena de
            burbujas y obtiene aromas caracter??sticos.{' '}
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={bodega}
            alt="bodega cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            A continuaci??n las botellas de vino espumoso son llevadas hasta los
            pupitres. Las botellas rotan (manualmente) y se inclinan poco a poco
            para conducir las levaduras hasta el cuello de la botella. Este
            proceso es minucioso, repetitivo y caro y en franc??s se conoce como
            remuage.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={pupitre}
            alt="pupitre vino espumoso"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Aunque todav??a hay bodegas que trabajan manualmente, muchas han
            introducido el gyropalette. Esta m??quina lleva las levaduras al
            cuello de la botella como en el proceso anterior.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={gyropalette}
            alt="gyropalette"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Despu??s del largo proceso de crianza y de remuage en pupitres o
            gyropalettes, la parte solida habr?? llegado al cuello de la botella.
            Estas levaduras han hecho su trabajo y queremos deshacernos de ellas
            para obtener un vino espumoso limpio.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={levadura}
            alt="levadura botella champagne"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez tenemos todas las levaduras en el cuello de la botella, esta
            se congela.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={levaduraCongelada}
            alt="levadura congelada"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez tenemos las levaduras congeladas procedemos al deg??elle, el
            tap??n de la botella se retira y a causa de la presi??n interna de la
            botella, la parte solida sale disparada. <br></br>
            <br></br>Este proceso, como el remuage, sucede cada vez m??s de forma
            mec??nica.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={levaduraSalta}
            alt="levadura saltando"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso ha perdido algo de liquido por lo que es necesario
            rellenar. El licor de expedici??n es lo que a??adimos en este momento.
            <br></br>
            <br></br>
            En este proceso se decidir?? tambi??n como de dulce ser?? el futuro
            producto, a??adiendo si es necesario un vino azucarado.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={embotelladora}
            alt="embotelladora"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso seg??n el m??todo tradicional est?? listo. Tan solo
            tenemos que encorcharlo y poner su caracter??stica jaula que lo
            sujeta.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={tapon}
            alt="tapon jaula cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso, antes de salir al mercado, debe reposar durante un
            tiempo. <br></br>
            <br></br>El tiempo depender?? de las exigencias de cada zona
            productora o del propio productor.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={bodega}
            alt="bodega champagne"
          ></img>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={dibujoChampagne}
            alt="Champagne en dibujo"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Despu??s de este largo proceso, costoso y laborioso, podr??s disfrutar
            de tu vino espumoso. ??Salud!
          </p>
          <h3>El proceso de elaboraci??n del vino espumoso</h3>
          <p className={classes.paragraphStyle}>
            Es largo, costoso y pasa por unos procesos muy concretos, muchas
            veces casi artesanales. Es de entender que el vino espumoso sea m??s
            caro que un vino tranquilo. Si encuentras un vino espumoso que se
            elabora seg??n el m??todo tradicional barato, deber??as desconfiar de
            la calidad.
          </p>
          <h3>??Qu?? vinos espumosos usan el m??todo tradicional?</h3>
          <p className={classes.paragraphStyle}>
            Hay varios vinos espumosos con diferentes denominaciones de origen
            que siempre usan este m??todo: Champagne, Cr??mant, Cava, Franciacorta
            y Trento. Los dos primeros vienen de Francia,el tercero de Espa??a y
            los dos ??ltimos de Italia.<br></br>
            <br></br> Hay muchos otros vinos alrededor del mundo que usan este
            mismo m??todo, pr??cticamente todos los pa??ses productores de vino
            tienen vinos espumosos que siguen el m??todo tradicional.
          </p>
          <h3>??Qu?? diferencias existen entre el Champagne y el Cava?</h3>
          <p className={classes.paragraphStyle}>
            ??Si el m??todo de elaboraci??n es el mismo, cual es la diferencia
            entonces?
          </p>
          <h4>El lugar</h4>
          <p className={classes.paragraphStyle}>
            La principal diferencia y la m??s obvia es el lugar de elaboraci??n.
            Si en la etiqueta reza Champagne, entonces estamos hablando
            exclusivamente de un vino espumoso elaborado en la zona de
            Champagne, Francia, y claro est??, con uvas del mismo lugar.
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={champagne}
            alt="sirviendo champagne"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Si hablamos de <b>cava,</b> bueno, aqu?? la cosa se complica m??s ya
            que cuando esta denominaci??n de origen se puso en marcha, eran
            varias las zonas productoras de vino espumoso en Espa??a y podemos
            encontrar en diferentes zonas.<br></br>
            <br></br> Eso si, mayoritariamente (m??s de un 90%) todos los cavas
            est??n producidos en el Pened??s, Catalu??a. En particular en el pueblo
            llamado Sant Sadurn?? d'Anoia. En todo caso, todo vino espumoso en el
            que ponga Cava, ser?? exclusivamente producido en Espa??a.
          </p>
          <h4>Las variedades</h4>
          <p className={classes.paragraphStyle}>
            La segunda diferencia m??s importante es las variedades de uvas
            usadas. Para producir Champagne est??n permitidas tres variedades
            (dos tintas y una blanca), estas son:{' '}
            <b> Pinot noir, Pinot meunier y Chardonnay.</b>
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={uvas}
            alt="uvas"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Para la producci??n de cava son m??s de tres las variedades permitidas
            pero las cl??sicas, las aut??ctonas y las que muchas bodegas les dan
            todo el peso son tres variedades blancas, estas son:{' '}
            <b> parellada, xarel??lo y macabeo.</b>
          </p>
          <h4>La climatolog??a y el terroir</h4>
          <p className={classes.paragraphStyle}>
            Champagne esta situada en una de las zonas m??s al norte donde se
            puede cultivar la vid (esto gracias al cambio clim??tico esta
            cambiando). Esto hace que las uvas no maduren como lo hacen en otros
            lugares m??s al sur. El resultado son uvas con una acidez alta. El
            clima es fr??o, lluvioso y en general poco estable. Por esta raz??n
            muchos Champagnes son ensamblajes de diferentes a??adas, algo que les
            permite homogeneizar la calidad de sus vinos.<br></br>
            <br></br> Cuando las condiciones son optimas y la casa decide crear
            un Champagne usando el vino de una mismo a??o, en la etiqueta
            podremos ver la a??ada y leer Mill??sim??.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={taittinger}
            alt="champagne taittinger"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            En Catalu??a y en general en la zona del Pened??s las condiciones
            climatol??gicas son distintas, permitiendo a las uvas madurar m??s.
            Esto evita que se use la chaptalizaci??n del vino para aumentar el
            nivel de alcohol en el vino base.<br></br>
            <br></br> El famoso terroir de Champagne es ??nico. Sus tierras
            calc??reas, blancas debido a sedimentos marinos que datan de millones
            de a??os. Esta particular tierra tiene influencia directa en la vi??a.
            Se dice que gran parte del ??xito del Champagne es debido a esas
            tierras tan especiales.
          </p>
          <h4>La Crianza</h4>
          <p className={classes.paragraphStyle}>
            Los cavas y los champagnes tienen diferencias en la crianza.
            <br></br>
            <br></br> Para los cavas ser??n necesarios 9 meses de crianza, para
            los cavas reserva 15 y para los gran reserva un m??nimo de 30. Hay
            casas que optan por dejarlos mucho m??s tiempo.<br></br>
            <br></br> Para los champagnes sin embargo el tiempo m??nimo es de 15
            meses (de los cuales 12 deber??n ser en sus l??as). Para los
            champagnes Mill??sim??, el m??nimo es de 3 a??os. Pr??cticamente todas
            las casas de Champagne dejan mucho m??s tiempo sus vinos en crianza.{' '}
          </p>
          <h4>Estilos de Champagne</h4>
          <p className={classes.paragraphStyle}>
            Champagne Non-vintage: un concepto anglosaj??n para designar el
            Champagne que no tiene a??ada, mezcla de de diferentes vinos, un
            factor diferencial que marca una calidad estable a??o tras a??o. Esto
            corresponde a la mayor??a de Champagnes.
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={botellasCava}
            alt="botellas cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            <b>Mill??sime/Vintage:</b> Los champagnes son esta denominaci??n son
            producidos tan solo con vinos de un a??ada en concreto. Son m??s caros
            y muchos productores optan por largas crianzas (de 6 a 10 a??os).
            <br></br>
            <br></br>
            <b>Blanc de blancs:</b>Champagne elaborado exclusivamente con
            variedades blancas. Como en Champagne la ??nica uva blanca permitida
            es la Chardonnay, este{' '}
            <b>Champagne est?? elaborado tan solo 100% Chardonnay.</b>
            <br></br>
            <br></br>
            <b>Blanc de Noir:</b> Al contrario que el anterior, tan solo uvas
            tintas se habr??n usado para la elaboraci??n de este Champagne. La
            carne de la uva no tiene color y si no maceramos el mosto y tan solo
            prensamos la uva, obtendremos un vino blanco de uvas tintas. Las
            variedades de estos Champagnes ser??n{' '}
            <b>Pinot Noir y Pinot Meunier.</b>
            <br></br>
            <br></br>
            <b>Ros??:</b> Champagne rosado. Una peculiaridad del Champagne rosado
            es que se puede mezclar vino blanco y tinto para obtener un vino
            rosado (antes de la segunda fermentaci??n en botella). Una excepci??n
            en toda regla.
          </p>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default ElaboracionEspumoso;
