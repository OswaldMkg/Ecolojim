# Ecolojim Control de Plagas — Sitio Web

Sitio web corporativo de **Ecolojim Control de Plagas**, empresa queretana especializada en manejo integrado de plagas.

## 🗂 Estructura del proyecto

```
ecolojim/
├── public/
│   ├── index.html          ← Página principal (Inicio)
│   ├── nosotros.html       ← Quiénes somos
│   ├── servicios.html      ← Servicios detallados
│   ├── contacto.html       ← Contacto + formulario
│   ├── css/
│   │   └── main.css        ← Estilos globales
│   ├── js/
│   │   └── main.js         ← JavaScript (nav, animaciones, form)
│   └── images/
│       ├── logo-color.png  ← Logo principal (fondo transparente)
│       ├── logo-bn.png     ← Logo blanco y negro
│       └── logo-color.jpg  ← Logo versión JPG
├── vercel.json             ← Configuración de Vercel
└── README.md
```

## 🚀 Despliegue en Vercel + GitHub

### Paso 1 — Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Crea un nuevo repositorio: `ecolojim-website` (público o privado)
3. En la terminal de tu computadora:

```bash
cd ruta/a/ecolojim
git init
git add .
git commit -m "Initial commit — Ecolojim website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ecolojim-website.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión (puedes usar tu cuenta de GitHub)
2. Clic en **"Add New Project"**
3. Importa el repositorio `ecolojim-website`
4. En la configuración:
   - **Framework Preset:** `Other`
   - **Root Directory:** `.` (dejar en blanco)
   - **Build Command:** dejar en blanco
   - **Output Directory:** `public`
5. Clic en **Deploy**

¡Listo! Vercel te dará una URL pública. Cada vez que hagas `git push`, el sitio se actualizará automáticamente.

### Paso 3 — Dominio personalizado (opcional)

1. En tu proyecto de Vercel, ve a **Settings → Domains**
2. Agrega `ecolojimcontrol.com` (o el dominio que tengas)
3. Sigue las instrucciones para apuntar los DNS a Vercel

---

## ✏️ Cómo modificar el sitio

### Cambiar textos
Abre el archivo `.html` correspondiente en cualquier editor de texto (VS Code recomendado) y edita el contenido directamente. Guarda, haz commit y push para que Vercel lo actualice.

### Cambiar colores
Todos los colores están en `css/main.css` en la sección `:root { }` al inicio del archivo.

```css
:root {
  --green-brand:   #4a7c3f;   /* Verde principal */
  --gold:          #c8842a;   /* Dorado/ámbar */
  --cream:         #f5f0e8;   /* Fondo crema */
  /* ... */
}
```

### Cambiar número de teléfono
Busca y reemplaza `4443718817` en todos los archivos `.html` y `main.js`.

### Agregar imágenes propias
1. Coloca las imágenes en `public/images/`
2. Referencia desde los HTML como `src="images/tu-imagen.jpg"`

---

## 📱 Funcionalidades incluidas

- ✅ Navegación fija con efecto scroll
- ✅ Menú hamburguesa para móviles
- ✅ Animaciones reveal al hacer scroll
- ✅ Contador animado de estadísticas
- ✅ Botón flotante de WhatsApp
- ✅ Formulario que abre WhatsApp con la info pre-llenada
- ✅ FAQ accordion en página de contacto
- ✅ 4 páginas completas: Inicio, Nosotros, Servicios, Contacto
- ✅ SEO básico (meta descriptions, OG tags)
- ✅ Diseño 100% responsive (móvil, tablet, desktop)
- ✅ Headers de seguridad en Vercel

---

## 📞 Contacto de la empresa

- **Teléfono:** 444-371-8817
- **WhatsApp:** https://wa.me/524443718817
- **Instagram:** https://www.instagram.com/ecolojimcontrol
- **Sitio actual:** https://ecolojimcontrol.com
