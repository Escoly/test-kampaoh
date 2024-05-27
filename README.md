# Kampaho Tech Test

Esta prueba técnica ha sido realizada por Albert Escolar Cano

[Repositorio del Proyecto](https://github.com/Escoly/test-kampaoh)

[Linkedin](https://www.linkedin.com/in/albert-escolar-cano/)


## Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Instrucciones

### Instalar las dependencias

Para intalar las dependencias necesarias para arrancar el proyecto puedes usar los siguientes comandos:

 `npm`, `yarn`, `pnpm`, `bun`, 

```bash
pnpm install
```

### Arrancar el proyecto
Usa el siguiente comando para arrancar el proyecto:
```bash
pnpm run dev
```

### Setup pnpm (optional)

Si usas `pnpm`, es posible que tengas que añadir la siguiente linea de código a tu archivo `.npmrc`:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

Después de modificar el archivo `.npmrc`, tienes que usar el comando `pnpm install` para asegurarte que las dependencias se han instalado correctamente.

## Observaciones y Comentarios

Me habría gustado haber podido incorporar un CRUD completo con la API propuesta para la prueba y haber creado una página de detalle desde la que editar la información de los usuarios pero me ha sido imposible por falta de tiempo.

A pesar de esto, ha sido una muy buena oportunidad para aprender y practicar en la creación y uso de los context y providers de react. Anteriormente sólo había usado Redux y es gratificante poder disfrutar de las misma funcionalidades sin depender que depender en otro módulo de terceros.




