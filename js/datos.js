// Array con propiedades de ejemplo
const properties = [
  {
    id: "1asw123ghv",
    imagen: "images/apartamento-1.jpg",
    titulo: "Apartamento en venta",
    tipo: "apartamento",
    operacion: "comprar",
    precio: 250000,
    caracteristicas: ["3 habitaciones ", "3 baños ", "66 m2 "],
  },

  {
    id: "1aqw09rfhv",
    imagen: "images/apartamento-2.jpg",
    titulo: "Apartamento para rentar",
    tipo: "apartamento",
    operacion: "rentar",
    precio: 2600,
    caracteristicas: ["2 habitaciones ", "1 baño ", "54m2 "],
  },

  {
    id: "kjhgfwe34",
    imagen: "images/terreno-1.jpg",
    titulo: "Terreno en venta",
    tipo: "terreno",
    operacion: "comprar",
    precio: 21300000,
    caracteristicas: ["1900 m2"],
  },

  {
    id: "qw245asdv5",
    imagen: "images/apartamento-3.jpg",
    titulo: "Apartamento para rentar",
    tipo: "apartamento",
    operacion: "rentar",
    precio: 5000,
    caracteristicas: ["3 habitaciones ", "3 baños ", "82m2 "],
  },

  {
    id: "gf342asqe",
    imagen: "images/casa-2.jpg",
    titulo: "Casa para rentar",
    tipo: "casa",
    operacion: "rentar",
    precio: 4200,
    caracteristicas: ["3 habitaciones ", "2 baños ", "180m2 "],
  },

  {
    id: "1234dfgzx",
    imagen: "images/apartamento-4.jpg",
    titulo: "Apartamento en venta",
    tipo: "apartamento",
    operacion: "comprar",
    precio: 500000,
    caracteristicas: ["3 habitaciones ", "3 baños ", "82m2 "],
  },

  {
    id: "gf342asqe",
    imagen: "images/casa-6.jpg",
    titulo: "Casa para rentar",
    tipo: "casa",
    operacion: "rentar",
    precio: 8600,
    caracteristicas: ["3 habitaciones ", "2 baños ", "180m2 "],
  },

  {
    id: "gf342asqe",
    imagen: "images/casa-1.jpg",
    titulo: "Casa en venta",
    tipo: "casa",
    operacion: "comprar",
    precio: 6250000,
    caracteristicas: ["5 habitaciones ", "4 baños ", "3200m2 "],
  },

  {
    id: "9856dfwqr",
    imagen: "images/apartamento-5.jpg",
    titulo: "Apartamento para rentar",
    tipo: "apartamento",
    operacion: "rentar",
    precio: 3500,
    caracteristicas: ["1 habitaciones ", "1 baño ", "54m2 "],
  },

  {
    id: "bfeq123kn90",
    imagen: "images/apartamento-6.jpg",
    titulo: "Apartamento en venta",
    tipo: "apartamento",
    operacion: "comprar",
    precio: 1500000,
    caracteristicas: ["3 habitaciones ", "3 baños ", "94m2 "],
  },

  {
    id: "kjh5432qa",
    imagen: "images/edificio-1.jpg",
    titulo: "Edificio en venta",
    tipo: "edificio",
    operacion: "comprar",
    precio: 5000000,
    caracteristicas: [],
  },

  {
    id: "lkj543se23",
    imagen: "images/apartamento-7.jpg",
    titulo: "Apartamento para rentar",
    tipo: "apartamento",
    operacion: "rentar",
    precio: 2500,
    caracteristicas: ["3 habitaciones ", "2 baños ", "80m2 "],
  },

  {
    id: "bvcxza234",
    imagen: "images/casa-3.jpg",
    titulo: "Casa en venta",
    tipo: "casa",
    operacion: "comprar",
    precio: 45000,
    caracteristicas: ["3 habitaciones ", "2 baños ", "94m2 "],
  },

  {
    id: "kjh5432qa",
    imagen: "images/edificio-3.jpg",
    titulo: "Edificio en venta",
    tipo: "edificio",
    operacion: "comprar",
    precio: 6000000,
    caracteristicas: [],
  },

  {
    id: "bvcxza234",
    imagen: "images/casa-4.jpg",
    titulo: "Casa para rentar",
    tipo: "casa",
    operacion: "rentar",
    precio: 6300,
    caracteristicas: ["3 habitaciones ", "3 baños ", "120m2 "],
  },

  {
    id: "kjh5432qa",
    imagen: "images/casa-5.jpg",
    titulo: "Casa en venta",
    tipo: "casa",
    operacion: "comprar",
    precio: 600000,
    caracteristicas: ["3 habitaciones ", "3 baños ", "420m2 "],
  },

  {
    id: "bgugx23400",
    imagen: "images/edificio-2.jpg",
    titulo: "Edificio en venta",
    tipo: "edificio",
    operacion: "comprar",
    precio: 12000000,
    caracteristicas: [],
  },

  {
    id: "bgugx23400",
    imagen: "images/local-negocio-oficina-1.jpg",
    titulo: "Local comercial en venta",
    tipo: "local",
    operacion: "comprar",
    precio: 125000,
    caracteristicas: ["180 m2"],
  },

  {
    id: "fd234saq",
    imagen: "images/local-negocio-oficina-2.jpg",
    titulo: "Local comercial para rentar",
    tipo: "local",
    operacion: "rentar",
    precio: 15000,
    caracteristicas: ["66 m2"],
  },

  {
    id: "jhgf34wp",
    imagen: "images/local-negocio-oficina-3.jpg",
    titulo: "Oficina en venta",
    tipo: "local",
    operacion: "comprar",
    precio: 95000,
    caracteristicas: ["120 m2"],
  },

  {
    id: "bgugx23400",
    imagen: "images/local-negocio-oficina-6.jpg",
    titulo: "Local comercial en venta",
    tipo: "local",
    operacion: "comprar",
    precio: 12500,
    caracteristicas: ["180 m2"],
  },

  {
    id: "jhgf34wp",
    imagen: "images/local-negocio-oficina-4.jpg",
    titulo: "Local comercial en venta",
    tipo: "local",
    operacion: "comprar",
    precio: 45000,
    caracteristicas: ["90 m2"],
  },

  {
    id: "kjhgfwe34",
    imagen: "images/local-negocio-oficina-5.jpg",
    titulo: "Oficina en venta",
    tipo: "local",
    operacion: "comprar",
    precio: 90000,
    caracteristicas: ["200 m2"],
  },

  {
    id: "hgfd23490",
    imagen: "images/terreno-2.jpg",
    titulo: "Terreno en venta",
    tipo: "terreno",
    operacion: "comprar",
    precio: 41200000,
    caracteristicas: ["2900 m2"],
  },

  {
    id: "hgfd23490",
    imagen: "images/terreno-3.jpg",
    titulo: "Terreno en venta",
    tipo: "terreno",
    operacion: "comprar",
    precio: 41200000,
    caracteristicas: ["2900 m2"],
  },
];

export default properties;
