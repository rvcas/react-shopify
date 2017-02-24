import Shopify from 'shopify-buy';

const createShop = () =>
  Shopify.buildClient({
    apiKey: '857a6a8c43239a782c5feff55c504033',
    domain: 'theback.myshopify.com',
    appId: '6',
  });

const getAll = client => type => client.fetchAll(type);

const createCart = client => client.createCart()

const shop = () => {
  const client = createShop();

  return {
    all: getAll(client),
    createCart: createCart(client),
  };
};

export default shop;
