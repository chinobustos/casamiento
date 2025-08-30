import { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, Gift } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [titleText, setTitleText] = useState('h1');
  const fullTitle = '¡Nos Casamos!';

  // Fecha del casamiento - 22 de Noviembre 2025, 21:00
  const weddingDate = new Date('2025-11-22T21:00:00').getTime();

  // Efecto máquina de escribir para el título
  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const typeWriter = setInterval(() => {
        if (index < fullTitle.length) {
          setTitleText(fullTitle.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeWriter);
        }
      }, 100);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  // Cuenta regresiva
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Animación fade-up al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  

  return (
    <div className="min-h-screen bg-cream">
      {/* Portada */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="couple-names">Daniela y Gustavo</h2>
          <h1 className="main-title">
            {titleText}
            <span className={`cursor ${titleText === fullTitle ? 'hide-cursor' : ''} `}></span>
          </h1>
        </div>
      </section>

      {/* Cuenta Regresiva */}
      <section className="countdown-section fade-up">
        <div className="countdown-container">
          <div className="countdown-decoration">
            <img src="./multimedia/fondo.jpg" alt="Decoración floral"  className="decoration-img" />
          </div>
          <h2 className="countdown-title">Cuenta Regresiva</h2>
          <div className="countdown-grid">
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="time-label">Días</span>
            </div>
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">Horas</span>
            </div>
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">Minutos</span>
            </div>
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">Segundos</span>
            </div>
          </div>
          <div className="countdown-decoration">
            <img 
              src="./multimedia/fondo.jpg" 
              alt="Decoración floral" 
              className="decoration-img"
            />
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="story-section fade-up">
        <div className="story-container">
          <div className="heart-decoration">♥</div>
          <h2 className="story-title">Nuestra Historia</h2>
          <div className="story-text">
            <p>
              Nos conocimos en un momento inesperado, pero desde entonces nuestras vidas se han entrelazado de una manera mágica.
            </p>
            <p>
              Desde ese primer encuentro, hemos compartido risas, aventuras y momentos que nos han acercado cada vez más.
            </p>
            <p>
              Hoy, después de años de amor y complicidad, hemos decidido dar el siguiente paso y unirnos en matrimonio.
            </p>
            <p>
              Queremos compartir con ustedes este hermoso viaje que hemos recorrido juntos y celebrar el amor que nos une.
            </p>
            <p>
              Gracias por ser parte de nuestra historia y por acompañarnos en este día tan especial.
            </p>
          </div>
          <div className="heart-decoration">♥</div>
        </div>
      </section>

      {/* Invitación */}
      <section className="invitation-section fade-up">
        <div className="invitation-overlay"></div>
        <div className="invitation-container">
          <div className="valid-for">
            <Heart className="heart-icon" />
            <h3>Válido para 2 personas</h3>
            <Heart className="heart-icon" />
          </div>
          
          <div className="invitation-cards">
            <div className="invitation-card">
              <Calendar className="card-icon" />
              <h3>Fecha</h3>
              <p>22 de Noviembre 2025 | 21 hs</p>
              <button className="card-button" >
                <a href="https://forms.gle/ExnLj4C8o64sbKPt6">CONFIRMAR ASITENCIA</a>
              </button>
            </div>
            
            <div className="invitation-card">
              <MapPin className="card-icon" />
              <h3>Lugar</h3>
              <p>Salón de eventos "LAS ROCAS"</p>
              <button className="card-button">
                <a href="https://maps.app.goo.gl/xSzXhJdwagrz1VnG8" target="_blank" rel="noopener noreferrer">
                  CÓMO LLEGAR
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regalo */}
      <section className="gift-section fade-up">
        <div className="gift-container">
          <img 
            src="../multimedia/regalo.jpg" 
            alt="Regalo de boda" 
            className="gift-image"
          />
          <div className="gift-text">
            <Gift className="gift-icon" />
            <h3>El mejor detalle es tu presencia, pero si querés, podés hacernos un regalo a la siguiente cuenta:</h3>
            <div className="bank-details">
              <p><strong>CBU:</strong> 1234567890123456789012</p>
              <p><strong>Alias:</strong> DANIELA.GUSTAVO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Decoración */}
      <section className="decoration-section fade-up">
        <div className="hearts-decoration">
          <span>♥</span><span>♥</span><span>♥</span><span>♥</span><span>♥</span>
          <span>♥</span><span>♥</span><span>♥</span><span>♥</span><span>♥</span>
        </div>
      </section>

      {/* Descripción */}
      <section className="description-section fade-up">
        <div className="description-container">
          <img 
            src="../multimedia/flores2.jpg" 
            alt="Flores decorativas" 
            className="description-image"
          />
          <div className="description-text">
            <p>« Amamos a los niños pero este es un evento exclusivo para mayores »</p>
            <p>« Queremos que disfrutes de nuestra fiesta al máximo »</p>
          </div>
          <img 
            src="../multimedia/flores.jpg" 
            alt="Flores decorativas" 
            className="description-image"
          />
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="final-message fade-up">
        <div className="final-container">
          <p>Esperamos contar con su presencia para hacer de este día algo aún más especial.</p>
          <div className="final-hearts">♥ ♥ ♥</div>
        </div>
      </section>
    </div>
  );
}

export default App;