/*
- Pensar requerimients (PEDAC, userStories)
- Dissenyar UI mockup

  https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Jump2Digital2022Final/Reto_Final_J2D.pdf
  Conglomerado de supermercados, TYPE_A: Bon Digital Talent, TYPE_B: MWC Supermercados, TYPE_C: MercaBDT)
  y disponemos de los datos históricos de nuestros centros en las siguientes variables
*/

type Store = {
  center_id: number | string, // ID del centro
  city_code: number | string, // Código para una ciudad en particular 
  region_code: number | string, // Código para una región en particular
  center_type: string // Tipo de supermercado
  op_area: number, // Area de operaciones + tamaño supermercado
}

type Product = {
  meal_id: number, // ID del centro
  category: string, // Tipo de producto
  cuisine: string // Tipo de cocina del producto
  demmand: ProductDemand, // ProductDemand type
}

type ProductDemand = { 
  id: number, // ID único de la instancia
  week: number, // Número de la semana
  center_id: number, // ID del centro
  meal_id: number, // ID del producto
  checkout_price: number, // Precio venta final
  base_price: number, // Precio base del producto 
  emailer_for_promotion: number, // Campaña promocion 1 true 0 false
  homepage_featured:  boolean, // Producto promocionado ?
  num_orders: number, // Número ordenes producto
}

/* 
Requirements

    2) Diseñar una plataforma para nuestros clientes para que puedan comprar los productos por Internet y
    les lleven la compra a casa 
    (teniendo en cuenta el stock y las limitaciones operativas 
    (Los clientes sólo pueden pedir comida desde los centros que están en su ciudad de manera gratuita si superan un
    mínimo de u.m., sinó se cobran gastos por envío. También tienen que poder comprar a un
    supermercado de otra ciudad que esté en la misma región, pero se les cobra sí o sí por envío). 
    En la plataforma se tiene que poder comprar de los tres tipos de centros.

    Usuario puede comprar producto si existe en stock
      - Si existe en el Store se renderiza con button disabled false
      - Si no existe se renderiza con button disabled true
    Usuario puede comprar en stores en misma region
      - Usuario paga costes de envió fijos
    Usuario puede comprar en stores misma ciudad
      - Si usuario compra super mínimos productos costes envio gratis (misma ciudad && num. unidades minimo)
      - Si usuario no supera super mínimos productos costes de envío fijos

    3) Diseñar vista para equipo de estrategia-marketing para:
    --> los productos más exitoso
    --> los centros de dónde sacan más rendimiento 
    --> mejores estrategias para conseguir maximizar pedidos.

    Usuario puede comprar en stores de su misma region
      - No se aplica descuento
    Usuario puede comprar en stores de su misma ciudad
      - Si supera compra de productos mínimos se aplica descuento
      - Sino supera compra de productos mínimos no se aplica descuento
*/



