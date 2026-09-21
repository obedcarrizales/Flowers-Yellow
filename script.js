// Aumentamos a 30 flores para que el ramo se vea frondoso
const numFlowers = 30;

for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    
    // Configuración para dar forma de ramo (bouquet)
    // El ángulo de inclinación varía entre -35 y +35 grados
    const angle = (Math.random() - 0.5) * 70; 
    
    // Una ligera separación en la base para que no nazcan de un solo punto exacto
    const xBase = (Math.random() - 0.5) * 15; // separación en unidades 'vw'
    
    // CREACIÓN DE PROFUNDIDAD
    const depth = Math.random(); 
    let scale, blur, zIndex, brightness;

    if (depth < 0.3) {
        // FLORES DEL FONDO (Atrás del ramo)
        scale = 0.5 + Math.random() * 0.2;
        blur = '2px';
        zIndex = 1;
        brightness = 0.5;
    } else if (depth < 0.7) {
        // FLORES DEL MEDIO
        scale = 0.8 + Math.random() * 0.3;
        blur = '0.5px';
        zIndex = 2;
        brightness = 0.8;
    } else {
        // FLORES DEL FRENTE
        scale = 1.1 + Math.random() * 0.3;
        blur = '0px';
        zIndex = 3;
        brightness = 1.1;
    }

    // Tiempos aleatorios
    const delay = Math.random() * 2.5; // Crecen en los primeros 2.5 segundos
    const swayDuration = 3 + Math.random() * 3;

    // Aplicamos estilos visuales
    flower.style.zIndex = zIndex;
    flower.style.filter = `blur(${blur}) brightness(${brightness}) scale(${scale})`;
    
    // Pasamos el ángulo y la posición al CSS para que se balanceen desde su posición en el ramo
    flower.style.setProperty('--angle', `${angle}deg`);
    flower.style.setProperty('--x-base', `${xBase}vw`);
    flower.style.setProperty('--delay', `${delay}s`);
    flower.style.setProperty('--sway-dur', `${swayDuration}s`);

    // Crear partes de la flor
    const stem = document.createElement('div');
    stem.className = 'stem';
    
    const leafLeft = document.createElement('div');
    leafLeft.className = 'leaf left';
    
    const leafRight = document.createElement('div');
    leafRight.className = 'leaf right';

    const head = document.createElement('div');
    head.className = 'flower-head';
    
    const center = document.createElement('div');
    center.className = 'center';
    head.appendChild(center);

    for (let p = 0; p < 12; p++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const petalAngle = p * 30;
        petal.style.transform = `rotate(${petalAngle}deg)`;
        head.appendChild(petal);
    }

    flower.appendChild(stem);
    flower.appendChild(leafLeft);
    flower.appendChild(leafRight);
    flower.appendChild(head);
    
    document.body.appendChild(flower);
}